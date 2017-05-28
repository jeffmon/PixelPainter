var createToolBox = document.createElement("div");
createToolBox.id = "toolBox";
pixelPainter.appendChild(createToolBox);

var createPPCanvas = document.createElement("div");
createPPCanvas.id = "pp-canvas";
pixelPainter.appendChild(createPPCanvas);

var createColorPalette = document.createElement("div");
createColorPalette.id = "colorPalette";
toolBox.appendChild(createColorPalette);

var createOptions = document.createElement("div");
createOptions.id = "options";
toolBox.appendChild(createOptions);

var lastColorPicked = null;

function randoColor(){
  rr = Math.floor(Math.random() *255);
  gg = Math.floor(Math.random() *255);
  bb = Math.floor(Math.random() *255);
  return "rgb("+rr+","+gg+","+bb+")";
}

var colorArray = [randoColor(), randoColor(), randoColor()];



function addColor(){
  lastColorPicked = this.style.backgroundColor;
  createCurrentColor.style.backgroundColor = lastColorPicked;
}



(function(){
  for (var i = 1; i < 26; i++){
    var createColorChoice = document.createElement("div");
    createColorChoice.className = "colorChoice";
    var colorHelper = colorArray[i];
    createColorChoice.style.backgroundColor = randoColor();
    createColorChoice.addEventListener("click", addColor);
    colorPalette.appendChild(createColorChoice);
    if (i % 5 === 0){
      colorPalette.appendChild(document.createElement("br"));
    }
  }
})();

var createCurrentColor = document.createElement("div");
createCurrentColor.id = "currentColor";
createCurrentColor.style.backgroundColor = lastColorPicked;
colorPalette.appendChild(createCurrentColor);

var targetPPCanvas = document.getElementById("pp-canvas");

function changeColor(){
  if(event.buttons === 1){
    if(event.shiftKey) {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = lastColorPicked;
    }
  }
}

function changeColor2(){
  this.style.backgroundColor = lastColorPicked;
}

function changeColor3(){
  this.style.backgroundColor = "white";
}

function createCellBlocks(width, height){//create cell blocks
  for(var i = 1; i <= (width * height); i++){
    var createCell = document.createElement("div");
    createCell.className = "cell";
    createCell.addEventListener("mouseover", changeColor);
    createCell.addEventListener("click", changeColor2);
    createCell.addEventListener("click", changeColor3);
    var dynamicW = 100 / width-2 + "%";
    createCell.style.width = dynamicW;
    createCell.style.height = dynamicW;
    targetPPCanvas.appendChild(createCell);
    if(i % width === 0){
      targetPPCanvas.appendChild(document.createElement("br"));
    }
  }
}

createCellBlocks(15, 15);

var targetCell = document.getElementsByClassName("cell");

function eraserAction(){
  lastColorPicked = "white";
  createCurrentColor.style.backgroundColor = "white";
}

function clearAction(){
  for(var i = 0; i < targetCell.length; i++){
    targetCell[i].style.backgroundColor = "white";
    createCurrentColor.style.backgroundColor = "white";
  }
}



var createErase = document.createElement("button");
createErase.className = "buttons";
createErase.innerHTML = "Eraser";
createErase.addEventListener("click", eraserAction);
options.appendChild(createErase);

var createClear = document.createElement("button");
createClear.className = "buttons";
createClear.innerHTML = "Clear";
createClear.addEventListener("click", clearAction);
options.appendChild(createClear);


