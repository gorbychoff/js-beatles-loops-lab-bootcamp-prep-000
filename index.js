// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array1 = [];
  var i;
  for (i = 0; i < musicians.length; i++){
      array1.push(`'${musicians[i]} plays ${instruments[i]}'`);
  }
  return array1;
}
