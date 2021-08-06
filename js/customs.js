var lanister = 0;
function isLanisterSoldier (color,lion) {
    if ( color === 'red' ) {
        if ( lion === null || lion === 'lion' ) {
            lanister = lanister + 1;
        }
    } else if ( lion === 'lion' ) {
        lanister = lanister + 1;
    }
    return lanister;
};
isLanisterSoldier ('red',null);
isLanisterSoldier ('yellow','lion');
isLanisterSoldier ('red','lion');
isLanisterSoldier ('green','lion');
isLanisterSoldier ('red',null);
isLanisterSoldier ('blue',null);
isLanisterSoldier ('yellow',null);
isLanisterSoldier ('red','cross');
isLanisterSoldier ('green','star');
alert(`Количечство Ланистеров после подсчета - ${lanister}`);