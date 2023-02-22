import { aleaPRNG } from "./aleaPRNG-1.1.js";
const out = document.querySelector('#out'),
    inputs = document.querySelectorAll('.seed'),
    button = document.querySelector('button');
inputs.forEach(e => e.value=null)
const length = 16;
let text,htmlText,num;

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

function update() {
    num = aleaPRNG(inputs[0].value,inputs[1].value,inputs[2].value)
    text = [];
    for (let i=0; i<length; i++) {
        text.push(num.range(33,126))
    }
    text = String.fromCharCode(...text);
    button.value = text;
}

update();
inputs[0].oninput = () => update();
inputs[1].oninput = () => update();
inputs[2].oninput = () => update();
button.onclick = () => {update(); copyToClipboard(text)}
