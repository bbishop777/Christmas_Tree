

function christmasTreeMaker(rows) {
  var layers= ['0'];

  var divyFirst = document.createElement('div');
  divyFirst.className ='star';
  divyFirst.innerHTML = '*';
  document.body.appendChild(divyFirst);

  for (i=1; i<= rows; i++) {
    var divy = document.createElement('div');
    divy.class= 'rowy';
    document.body.appendChild(divy);
    x = layers.length;

      for(y=1; y<=x; y++) {
      var shape = layers[y-1];
      var spans = document.createElement('span');
      spans.id = 'row' +i + ' cell'+y;
      divy.appendChild(spans);
      spans.innerHTML= spans.innerHTML + shape;

      }

    layers.push('0','0');
  }

  var divyTwo = document.createElement('div');
  divyTwo.className ='stump';
  document.body.appendChild(divyTwo);
  var spansTwo = document.createElement('span');
  spansTwo.id = 'stumps';
  spansTwo.innerHTML= spansTwo.innerHTML + '||';
  divyTwo.appendChild(spansTwo);
}

christmasTreeMaker(2);