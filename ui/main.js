console.log('Loaded!');

var img=document.getElementById('madi');
varmarginLeft=0;
function moveRight () {
    marginLeft = marginLeft+ 10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick =function(){
img.style.marginLeft= '100px';
};
