document.onclick = function(event) {
    // console.log(event.target.tagName);
    let im = document.querySelector('#icon');
    smallBorder = 5;
    noneBorder = 0;
    // event.target.tagName == 'IMG'
    if (event.target.tagName == 'IMG') {
        im.border = smallBorder;
    } else {
        im.border = noneBorder; 
    };
};