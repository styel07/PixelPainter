function PixelPainter (width, height, totalW, totalH) {

}

function Canvas () {

//target the canvas on the html page
  var mainCanvas = document.createElement('canvas');
  mainCanvas.id = 'mainCanvas';

  var grabTheCanvas = document.getElementById('mainCanvas');

//declare the necessary elements for drawing a honeycomb(hexagon) shape
  var combHeight,
      combRadius,
      combRectHeight,
      combRectWidth,
      combAngle = 0.523598776,
      sideLength = 36,
      boardWidth = 10,
      boardHeight = 10;

  combHeight = Math.sin(combAngle) * sideLength;
  combRadius = Math.cos(combAngle) * sideLength;
  combRectHeight = sideLength + 2 * combHeight;
  combRectWidth = 2 * combRadius;

  if (mainCanvas.getContext) {
    var context = mainCanvas.getContext('2d');

    context.fillStyle = '#000000';
    context.strokeStyle = '#CCCCCC';
    context.lineWidth = 1;

    drawCanvas(context, boardWidth, boardHeight);

//add event listener that looks for a user click. function paints comb
//holding down mouse and dragging continues to paint across multiple combs
    //mainCanvas.addEventListener('click', function (evt) {
    //})
  } //end of the if statement

//draw out the canvas of honeycombs
  function drawCanvas (canvasContext, width, height) {
    var i,
        j;

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        drawComb(
          context,
          i * combRectWidth + ((j % 2) * combRadius),
          j * (sideLength + combHeight),
          false
        );
      }
    }
  }

//draw out each individual honeycomb
  function drawComb (canvasContext, x, y, fill) {
    var fill = fill || false;
  }

}
