const images = document.getElementById('images');
const imagesChildren = images.getElementsByTagName('img');
const numPics = images.children.length;
let i = 1;

document.getElementById('back').addEventListener('click', function ()  {
    i--;
    if (i <= 0) {
        i = numPics;
    }
    setImages();
    if (i == numPics) {
        imagesChildren[0].classList.remove('active');
    } else {
        imagesChildren[i].classList.remove('active');
    }
    imagesChildren[i-1].classList.add('active');
});
document.getElementById('forward').addEventListener('click', function ()  {
    i++;
    if (i > numPics) {
        i = 1;
    }
    setImages();
    if (i == 1) {
        imagesChildren[numPics-1].classList.remove('active');
    } else {
        imagesChildren[i-2].classList.remove('active');
    }
    imagesChildren[i-1].classList.add('active');
});

function setImages() {
    document.getElementById('productImages')
    .getElementsByTagName('img')[0]
    .src='images/img'+i+'.png';
}