var lanister = 0;
var soldier = [
    ['red',null],
    ['yellow','lion'],
    ['red','lion'],
    ['green','lion'],
    ['red',null],
    ['blue',null],
    ['yellow',null],
    ['red','cross'],
    ['green','star']
]
var soldierLength = soldier.length;

alert(`общее количечтво солдат - ${soldierLength}`);
alert(`Количечство Ланистеров до подсчета - ${lanister}`);
var red = 0;
var lion = 0;
function  isLanisterSoldier () {
    
    if ( soldier[i][0] === 'red' ) {
        if ( soldier[i][1] === null || soldier[i][1] === 'lion' ) {
            red = red +1;
            lanister = lanister + 1;
            console.log('red-->',red)
        }
    } else if ( soldier[i][1] === 'lion' ) {
        lion = lion +1;
        lanister = lanister + 1;
        console.log('lion-->',lion)
    }
    return lanister
}
for ( var i = 0; i < soldierLength; ++i ) {
    console.log(i)
    isLanisterSoldier ();
}
console.log(`Количечство Ланистеров после подсчета - ${lanister}`);
alert(`Количечство Ланистеров после подсчета - ${lanister}`);