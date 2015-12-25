

function christmasTreeMaker(rows) {
  var layers= ['0'];

  var divyFirst = document.createElement('div');
  divyFirst.className ='star';
  document.body.appendChild(divyFirst);

  var spansFirst = document.createElement('span');
  spansFirst.id= 'starry';
  spansFirst.innerHTML = "*";
  divyFirst.appendChild(spansFirst);

  for (i=1; i<= rows; i++) {
    var divy = document.createElement('div');
    divy.className= 'rowy';
    document.body.appendChild(divy);
    x = layers.length;

      for(y=1; y<=x; y++) {
      var shape = layers[y-1];
      var spans = document.createElement('span');
      spans.id = 'row' +i + ' cell'+y;
      divy.appendChild(spans);
      spans.innerHTML = shape;

      }

    layers.push('0','0');
  }

  var divyTwo = document.createElement('div');
  divyTwo.className ='stump';
  document.body.appendChild(divyTwo);

  var spansTwo = document.createElement('span');
  spansTwo.id = 'stumps';
  spansTwo.innerHTML = '||';
  divyTwo.appendChild(spansTwo);
}

christmasTreeMaker(6);