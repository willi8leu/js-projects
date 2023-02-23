import { aleaPRNG } from "./aleaPRNG-1.1.js";
const inputs = document.querySelectorAll('.seed'),
    button = document.querySelector('input[type="button"]');
inputs.forEach(e => e.value=null);
const length = 16;
let prng;

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

function cycle(str) {
    for (let i=str.split(/[a-z]/g).length-1; i<3; i++) {
        str=subCycle(str,str.search(/[a-z]/g));
    }
}

function subCycle(str,minIdx) {
    let count = str.split(/\d/g).length-1;
    let maxIdx = str.search(/\d/g);
    if (str.split(/[a-z]/g).length-1 > count) {
        count = str.split(/[a-z]/g).length-1;
        maxIdx = str.search(/[a-z]/g);
    }
    if (str.split(/[A-Z]/g).length-1 > count) {
        count = str.split(/[A-Z]/g).length-1;
        maxIdx = str.search(/[A-Z]/g);
    }
    if (str.split(/[^\w\d\s]/g).length-1 > count) {
        count = str.split(/[^\w\d\s]/g).length-1;
        maxIdx = str.search(/[^\w\d\s]/g);
    }
    return str.split('').splice(maxIdx,1,prng.range())
}

function update() {
    prng = aleaPRNG(inputs[0].value,inputs[1].value,inputs[2].value)
    let text = [];
    for (let i=0; i<length; i++) {
        text.push(prng.range(33,126))
    }
    text = String.fromCharCode(...text);
    button.value = text;
}

update();
inputs[0].oninput = () => update();
inputs[1].oninput = () => update();
inputs[2].oninput = () => update();
button.onclick = () => {update(); copyToClipboard(text)}
