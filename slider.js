var img = new Array(6);
img[0] = "images/1.jpg";
img[1] = "images/2.png";
img[2] = "images/3.jpeg";
img[3] = "images/4.png";
img[4] = "images/5.jpg";
img[5] = "images/6.jpg";
var num = 6;
var counter = 1;
function nextImg() {
    var im = document.getElementById("image");
    if (counter < num - 1) {
        im.src = img[counter + 1];
        counter += 1;
    }
    else {
        alert("This is the last image");
    }
}
function preImg() {
    var im = document.getElementById("image");
    if (counter > 0) {
        im.src = img[counter - 1];
        counter -= 1;
    }
    else {
        alert("This is the first image");
    }

}
var index = 0;
var m;
function showImg() {
    m = setInterval(function () {
        image.setAttribute("src", img[index]);
        index++;
        if (index >= img.length) {
            index = 0;
        }

    }, 500);
}

function stopImg() {

    clearInterval(m);
}
