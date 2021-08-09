var lanister;
function isLanisterSoldier (color,lion) {
    if ( ( color === 'red' && lion === null ) || lion === 'lion' ) {
            lanister = true;
    }    else {
        lanister = false;
    }
    return lanister;
};
isLanisterSoldier ('red',null); //true 
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('yellow','lion'); //true
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('green','star'); //false
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('red','lion'); //true
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('red','cross'); //false
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('green','lion');//true
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('red',null); //true
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('blue',null); //false
alert(`Это  Ланистер - ${lanister}`);
isLanisterSoldier ('yellow',null); //false
alert(`Это  Ланистер - ${lanister}`);