
savedRgbArray = [];

var createToolBox = document.createElement("div");
createToolBox.id = "toolBox";
pixelPainter.appendChild(createToolBox);

var createPPCanvas = document.createElement("div");
createPPCanvas.id = "pp-canvas";
pixelPainter.appendChild(createPPCanvas);

var createSavedSection = document.createElement("div");
createSavedSection.id = "savedSection";
pixelPainter.appendChild(createSavedSection);

function restoreImage(){
  if (savedBox.innerHTML !== ""){


  targetPPCanvas.innerHTML = "";
  savedRgbArray = [];
  var savedCells = document.getElementsByClassName("savedCell");
  for (var i = 0; i < savedCells.length; i++) {
    savedRgbArray.push(savedCells[i].style.backgroundColor);
  }

  for (var j = 1; j <= savedRgbArray.length; j++){
    var createCell = document.createElement("div");
    createCell.className = "cell";
    createCell.style.backgroundColor = savedRgbArray[j-1];
    createCell.addEventListener("mouseover", changeColor);
    createCell.addEventListener("click", changeColor2);
    targetPPCanvas.appendChild(createCell);
    if(j % 17 === 0){
      targetPPCanvas.appendChild(document.createElement("br"));
    }
  }
}
}

var createSavedBox = document.createElement("div");
createSavedBox.id = "savedBox";
createSavedBox.addEventListener("click", restoreImage);
createSavedSection.appendChild(createSavedBox);

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

function addColor(){
  lastColorPicked = this.style.backgroundColor;
  createCurrentColor.style.backgroundColor = lastColorPicked;
}

(function(){
  for (var i = 1; i < 26; i++){
    var createColorChoice = document.createElement("div");
    createColorChoice.className = "colorChoice";
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
  if(event.shiftKey){
    this.style.backgroundColor = "white";
  }
  else if(this.style.backgroundColor = "white"){
    this.style.backgroundColor = lastColorPicked;
  }
}

function createCellBlocks(width, height){//create cell blocks
  var cellCounter = 0;
  for(var i = 1; i <= (width * height); i++){
    var createCell = document.createElement("div");
    createCell.className = "cell";
    createCell.id = cellCounter;
    cellCounter++;
    createCell.addEventListener("mouseover", changeColor);
    createCell.addEventListener("click", changeColor2);
    createCell.addEventListener("dblclick", fillCell);
    targetPPCanvas.appendChild(createCell);
    if(i % width === 0){
      targetPPCanvas.appendChild(document.createElement("br"));
    }
  }
}

createCellBlocks(17, 17);

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

function saveImage(){
  html2canvas((targetPPCanvas), {
        onrendered: function(targetPPCanvas) {
            var img = canvas.toDataURL();
            window.open(img);

            var blob = new Blob(img, {type: "image/jpeg"});
            var filesaver = saveAs(blob, "my image.png");
      }
    });

}

var createErase = document.createElement("button");
createErase.className = "buttons";
createErase.innerHTML = "Erase";
createErase.id = "eraseButton";
createErase.addEventListener("click", eraserAction);
options.appendChild(createErase);

var createClear = document.createElement("button");
createClear.className = "buttons";
createClear.innerHTML = "Clear";
createClear.id = "clearButton";
createClear.addEventListener("click", clearAction);
options.appendChild(createClear);

var createSave = document.createElement("button");
createSave.className = "buttons";
createSave.innerHTML = "Save";
createSave.id = "saveButton";
createSave.addEventListener("click", saveImage);
options.appendChild(createSave);

var saved = document.getElementsByClassName("cell");
console.log(saved[0].style.backgroundColor);


rgbArray = [];


function saveImage(){
  if (rgbArray.length > 0){
    rgbArray = [];
    savedBox.innerHTML = "";
  }
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < saved.length; i++) {
    console.log(cells[i].style.backgroundColor);
    rgbArray.push(cells[i].style.backgroundColor);
  }
  console.log(rgbArray);
  for (var j = 1; j <= rgbArray.length; j++){
    var createCell = document.createElement("div");
    createCell.className = "savedCell";
    createCell.style.backgroundColor = rgbArray[j-1];
    savedBox.appendChild(createCell);
    if(j % 17 === 0){
      savedBox.appendChild(document.createElement("br"));
    }
  }

}

// var lll = 20;
// console.log(document.querySelector("#pp-canvas").childNodes[0].style.backgroundColor);
// document.querySelector("#pp-canvas").childNodes[lll+1].style.backgroundColor = "red";
// document.querySelector("#pp-canvas").childNodes[lll+18].style.backgroundColor = "red";
// document.querySelector("#pp-canvas").childNodes[lll].style.backgroundColor = "red";
// document.querySelector("#pp-canvas").childNodes[lll-18].style.backgroundColor = "red";
// document.querySelector("#pp-canvas").childNodes[lll-1].style.backgroundColor = "red";



function fillCell(){
  var currectClickColor = this.style.backgroundColor;
  var location = this.id;
  var helperAdder = parseInt(location/17);//hack around counting br's
  console.log("ha =" + helperAdder);
  console.log("loc = " + location);
  var toChange = [];
  //console.log(document.querySelector("pp-canvas").childNodes)
  document.querySelector("#pp-canvas").childNodes[parseInt(location)-1+helperAdder].style.backgroundColor = "red";
  document.querySelector("#pp-canvas").childNodes[parseInt(location)+1+helperAdder].style.backgroundColor = "red";
  document.querySelector("#pp-canvas").childNodes[parseInt(location)+18+helperAdder].style.backgroundColor = "red";

  document.querySelector("#pp-canvas").childNodes[parseInt(location)-18+helperAdder].style.backgroundColor = "red";
  document.querySelector("#pp-canvas").childNodes[parseInt(location)+helperAdder].style.backgroundColor = "red";



}
