const images = document.getElementById('images');
const imagesChildren = images.getElementsByTagName('img');
const numPics = images.children.length;
let i = 1;

function backButton()  {
    i--;
    if (i <= 0) {
        i = numPics;
    }
    if (i == numPics) {
        imagesChildren[0].classList.remove('active');
    } else {
        imagesChildren[i].classList.remove('active');
    }
    setImages();
};
function forwardButton()  {
    i++;
    if (i > numPics) {
        i = 1;
    }
    if (i == 1) {
        imagesChildren[numPics-1].classList.remove('active');
    } else {
        imagesChildren[i-2].classList.remove('active');
    }
    setImages();
};

function setImages() {
    document.getElementById('productImages')
    .getElementsByTagName('img')[0]
    .src='images/img'+i+'.png';
    imagesChildren[i-1].classList.add('active');
}