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

var colorArray = ['red', 'blue', 'black'];

function addColor(){
  lastColorPicked = this.style.backgroundColor;
  console.log(lastColorPicked);
}

(function(){
  for (var i = 0; i < colorArray.length; i++){
    var createColorChoice = document.createElement("div");
    createColorChoice.className = "colorChoice";
    var colorHelper = colorArray[i];
    console.log(colorHelper);
    createColorChoice.style.backgroundColor = colorArray[i];
    createColorChoice.addEventListener("click", addColor);
    colorPalette.appendChild(createColorChoice);
  }
})();

var targetPPCanvas = document.getElementById("pp-canvas");

function changeColor(){
  this.style.backgroundColor = lastColorPicked;
  console.log("hi");
}

(function(){
  for(var i = 1; i <= 25; i++){
    var createCell = document.createElement("div");
    createCell.className = "cell";
    console.log(changeColor);
    createCell.addEventListener("click", changeColor);
    createCell.style.backgroundColor = "purple";
    console.log(createCell);
    targetPPCanvas.appendChild(createCell);
    if(i % 5 === 0){
      //targetPPCanvas.innerHTML+= "<br>";
      targetPPCanvas.appendChild(document.createElement("br"));
    }
  }
})();

var targetCell = document.querySelectorAll(".cell")[0];