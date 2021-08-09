var lanister;
function isLanisterSoldier (color,lion) {
    if ( ( color === 'red' && lion === null ) || lion === 'lion' ) {
            lanister = true;
            alert(`Это  Ланистер - ${lanister}`);
    }    else {
        lanister = false;
        alert(`Это  Ланистер - ${lanister}`);
    }
    return lanister;
};
isLanisterSoldier ('red',null);//true
isLanisterSoldier ('yellow','lion');//true
isLanisterSoldier ('green','star');//false
isLanisterSoldier ('red','lion');//true
isLanisterSoldier ('red','cross');//false
isLanisterSoldier ('green','lion');//true
isLanisterSoldier ('red',null);//true
isLanisterSoldier ('blue',null);//false
isLanisterSoldier ('yellow',null);//false