console.log('Loaded!');
var  img=document.getElementById('modi');
varmarginLeft-0;
function moveRight(){
    marginLeft = marginLeft+ 5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick =function(){
    var internal =setInterval(moveRight,50);

    
};
