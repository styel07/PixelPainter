function PixelPainter () {

var sidebar = document.createElement('div');
sidebar.id = 'sidePiece';
document.body.appendChild(sidebar);


}
PixelPainter();


var clickArray = [];

function Canvas () {
  var canvas = document.getElementById('canvas');

//declare the necessary elements for drawing a honeycomb(hexagon) shape
  var combHeight,
    combRadius,
    combRectHeight,
    combRectWidth,
    combAngle = 0.523598776,
    sideLength = 20,
    boardWidth = 50,
    boardHeight = 50,

  combHeight = Math.sin(combAngle) * sideLength;
  combRadius = Math.cos(combAngle) * sideLength;
  combRectHeight = sideLength + 2 * combHeight;
  combRectWidth = 2 * combRadius;

  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.strokeStyle = '#CCCCCC';
    context.lineWidth = 4;

    drawCanvas(context, boardWidth, boardHeight);

//on click function that 'paints' the clicked honeycomb
    canvas.addEventListener('mousemove', function (evt) {
      var x,
          y,
          combX,
          combY,
          screenX,
          screenY;

      x = evt.offsetX || evt.layerX;
      y = evt.offsetY || evt.layerY;

      //determine the coordinates of the hexagon
      combY = Math.floor(y / (combHeight + sideLength));
      combX = Math.floor((x - (combY % 2) * combRadius) / combRectWidth);

      //determine the coordinates of the mouse
      screenX = combX * combRectWidth + ((combY % 2) * combRadius);
      screenY = combY * (combHeight + sideLength);

      //draw a selector rectangle around the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      //draw the canvas
      drawCanvas(context, boardWidth, boardHeight);

      // Check if the mouse's coords are on the board
      if (combX >= 0 && combX < boardWidth) {
        if (combY >= 0 && combY < boardHeight) {
          context.fillStyle = '#000000'; //set to selected palette color
          drawComb(context, screenX, screenY, true);
          clickArray.push({ x : combX, y : combY });
        }
      }
    });
  } //end of the if statement

//draw out the canvas of honeycombs
  function drawCanvas (canvasContext, width, height) {
    var i,
        j;

    for (i = 0; i < width; i++) {
      for (j = 0; j < height; j++) {
        drawComb(
          context,
          i * combRectWidth + ((j % 2) * combRadius),
          j * (sideLength + combHeight),
          false,
          i,
          j
        );
      }
    }
  }

//draw out each individual honeycomb
  function drawComb (canvasContext, x, y, fill, i, j) {
    var fill = fill || false;

    canvasContext.beginPath();
    canvasContext.moveTo(x + combRadius, y);
    canvasContext.lineTo(x + combRectWidth, y + combHeight);
    canvasContext.lineTo(x + combRectWidth, y + combHeight + sideLength);
    canvasContext.lineTo(x + combRadius, y + combRectHeight);
    canvasContext.lineTo(x, y + sideLength + combHeight);
    canvasContext.lineTo(x, y + combHeight);
    canvasContext.closePath();

    for (var a = 0; a < clickArray.length; a++) {
      var obj = clickArray[a];
      if (obj.x === i && obj.y === j) {
        fill = true;
      }
    }
    if (fill) {
      canvasContext.fill();  //checks to see if this particular element was clicked
    } else {
      canvasContext.stroke();
    }
  }
} //end of the Canvas constructor

Canvas();




// Swatch

function Swatch() {

}

Swatch.prototype.createSwatch = function() {
  var arr = [];
  var num = 0;
  var col = 6;
  var preselectedColors = [
  ['#FDEE51  ','#F3D057  ','#FDF175  ','#ECCE7F  ','#3D6018  ','#43691B  '],
  ['#C2E44D  ','#90E23A  ','#ADE740  ','#73AD3A  ','#8FE677  ','#AAD988  '],
  ['#65965F  ','#8BE18D  ','#6D6523  ','#4A6D47  ','#C63E36  ','#CA5038  '],
  ['#D57F3E  ','#DF9642  ','#B74141  ','#561A17  ','#752F2C  ','#A55C35  '],
  ['#D57957  ','#A73841  ','#C78A73  ','#C94C85  ','#80302C  ','#CF72A5  '],
  ['#A05854  ','#C67B77  ','#E3AFB7  ','#DB9576  ','#C563F4  ','#913C71  '],
  ['#AC77C5  ','#AF6B82  ','#CF7B6E  ','#D39562  ','#091E64  ','#2C2367  '],
  ['#0F1F54  ','#1548EC  ','#542968  ','#5B4DCC  ','#608BDB  ','#8DF3F6  '],
  ['#427072  ','#32396E  ','#60B2F0  ','#448AED  ','#ADCDDA  ','#5D9893  '],
  ['#90C0EE  ','#A7B7D0  ','#595271  ','#5C6BDA  ','#3C67CB  ','#4E59B4  '],
  ['#626D79  ','#4A709B  ','#3C6768  ','#7FCBBF  ','#979797  ','#C7C7C7  ']];
  var rows = preselectedColors.length;

  // creates a swatch that stores all the colors
  for (var i = 0; i < rows; i++) {
    for (var index = 0; index < col; index++) {

      // paints colors into swatch container
      var colorDiv = document.createElement('div');
      var leftContainer = document.querySelector('#sidePiece');
     
      colorDiv.id = 'sidePiece';
      colorDiv.style.display = 'inline-block';
      colorDiv.style.background = preselectedColors[i][index];
      colorDiv.style = preselectedColors[i][index];
      colorDiv.href = '#';
      colorDiv.style.height = '20px';
      colorDiv.style.width = '30px';
      colorDiv.style.border = '1px solid black';
      colorDiv.style.padding = '10px';


      colorDiv.addEventListener('click', this.returnColor);

      leftContainer.appendChild(colorDiv);

    }
   // leftContainer.appendChild(document.createElement('br'));
  }
};

Swatch.prototype.returnColor = function() {
  var selectedColor = this.style.background;
  console.log(selectedColor);
};


var colorSwatch = new Swatch();
colorSwatch.createSwatch();

