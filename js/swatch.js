(function Swatch() {

}());

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

  // selectes the Side piece and assigns it to a variable
  var leftContainer = document.querySelector('#sidePiece');

  // creates a swatch that stores all the colors
  for (var i = 0; i < rows; i++) {
    for (var index = 0; index < col; index++) {

      var colorDiv = document.createElement('div');
      // defines each divs properties
      colorDiv.id = 'color_' + preselectedColors[i][index];
      colorDiv.style.display = 'inline-block';
      colorDiv.style.background = preselectedColors[i][index];
      colorDiv.style.height = '20px';
      colorDiv.style.width = '30px';
      colorDiv.style.border = '1px solid black';
      colorDiv.style.padding = '10px';
      // adds an EventListner click function
      colorDiv.addEventListener('click', this.returnColor);

      leftContainer.appendChild(colorDiv);
    }
   // leftContainer.appendChild(document.createElement('br'));
  }

  // Creates buttons
  // Erase button unfills the last filled comb

  var btnErase = document.createElement('button');
  btnErase.id = 'btnErase';
  btnErase.appendChild(document.createTextNode('Undo'));
  btnErase.addEventListener('click', function () {
    clickArray.pop();
    drawCanvas(context, boardWidth, boardHeight);
  });

  //clear button *clears the canvas*
  var btnClear = document.createElement('button');
  btnClear.id = 'btnClear';
  btnClear.appendChild(document.createTextNode('Clear All'));
  btnClear.addEventListener('click', function () {
    clickArray = [];
    drawCanvas(context, boardWidth, boardHeight);
  });

  leftContainer.appendChild(btnClear);
  leftContainer.appendChild(btnErase);
  //attaches the buttons to sidebar div

};

Swatch.prototype.returnColor = function() {
  selectedColor = this.style.background;
  colors.push(selectedColor);
  counter++;
  console.log(counter);
  console.log(colors);
};

