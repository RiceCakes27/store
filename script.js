let pageData;

fetch('data.json').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => pageData = data)  
.catch(error => console.error('Failed to fetch data:', error)); 

let i = 1;
document.getElementById('back').addEventListener('click', function ()  {
    //console.log(pageData[0].numPics);
    i--;
    if (i <= 0) {
        i = pageData[0].numPics;
    }
    setImages();
});
document.getElementById('forward').addEventListener('click', function ()  {
    i++;
    if (i > pageData[0].numPics) {
        i = 1;
    }
    setImages();
});

function setImages() {
    document.getElementById('productImages')
    .getElementsByTagName('img')[0]
    .src='images/img'+i+'.png';
}

console.log(document.getElementById('images').children.length)