function myFunction(){
    let x = document.getElementById('topNav');
    if (x.className === 'header-right'){
        x.className += " responsive";
    } else {
        x.className = 'header-right';
    }
}