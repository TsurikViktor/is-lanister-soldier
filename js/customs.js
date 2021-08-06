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
];
var soldierLength = soldier.length;
alert(`общее количечтво солдат - ${soldierLength}`);
alert(`Количечство Ланистеров до подсчета - ${lanister}`);
function  isLanisterSoldier () {   
    if ( soldier[i][0] === 'red' ) {
        if ( soldier[i][1] === null || soldier[i][1] === 'lion' ) {
            lanister = lanister + 1;
        }
    } else if ( soldier[i][1] === 'lion' ) {
        lanister = lanister + 1;
    }
    return lanister;
}
for ( var i = 0; i < soldierLength; ++i ) {
    isLanisterSoldier ();
}
alert(`Количечство Ланистеров после подсчета - ${lanister}`);