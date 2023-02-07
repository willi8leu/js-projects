const canvas = document.querySelector('#canvas'),
      ctx = canvas.getContext('2d'),
      CANVAS_WIDTH = canvas.width = innerWidth,
      CANVAS_HEIGHT = canvas.height = innerHeight,
      tiles = document.querySelector('#tiles'),
      characters = document.querySelector('#characters'),
      background = document.querySelector('#background'),
      div = document.querySelector('#div');

onload = () => ctx.fillRect(0,0,100,100);