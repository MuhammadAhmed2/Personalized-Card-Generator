var DesignNumber = document.getElementById('DesignNumber');

function addTextToImage() {
    var senderName = document.getElementById('senderName').value;
    var receiverName = document.getElementById('receiverName').value;
    var senderColor = document.getElementById('senderColor').value;

    if (senderName == '') {
        senderName='Sender Name';
    }
    if (receiverName == '') {
        receiverName='Receiver Name';
    }
    

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var fS = document.getElementById('font-size').value
    var img = new Image();
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        ctx.font = `${fS}px Poppins`;
        ctx.fillStyle = senderColor;
        ctx.fillText(senderName, sx, sy);

        ctx.fillText(receiverName, rx, ry);
    };

    var selectedImage = document.getElementById('imgSlider').value;

    // Custom Props
    var imagePath;
    var rx;
    var ry;
    var sx;
    var sy;

    // Change image based on slider value
    switch (selectedImage) {
        case '0':
            imagePath = './temps/eidCard.jpg';
            rx = 495;
            ry = 860;
            sx = 540;
            sy = 960;
            DesignNumber.innerHTML = 'Design Name: Blue Eid-ul-Fitr';
            break;

        case '1':
            imagePath = './temps/eidCard2.jpg';
            rx = 260;
            ry = 900;
            sx = 306;
            sy = 970;
            DesignNumber.innerHTML = 'Design Name: Eid on moon';
            break;

        case '2':
            imagePath = './temps/ramdan.jpg';
            rx = 850;
            ry = 880;
            sx = 850;
            sy = 1090;
            DesignNumber.innerHTML = 'Design Name: Ramdan Greetings';
            break;
        case '3':
            imagePath = './temps/eidAlAdha.jpg';
            rx = 340;
            ry = 168;
            sx = 345;
            sy = 935;
            senderColor = '#1c4920';
            DesignNumber.innerHTML = 'Design Name: Joy of Eid-Al-Adha';
            break;
        case '4':
            imagePath = './temps/birthday.jpg';
            rx = 260;
            ry = 905;
            sx = 260;
            sy = 1115;
            senderColor= '#325f70';
            DesignNumber.innerHTML = 'Design Name: Birthday Wish';
            break;
        case '5':
            imagePath = './temps/Christmas.jpg';
            rx = 1010;
            ry = 820;
            sx = 1010;
            sy = 1007;
            senderColor = '#ffffff';
            DesignNumber.innerHTML = 'Design Name: Merry Christmas';
            break;

    }

    img.src = imagePath;
}

function downloadImage() {
    var canvas = document.getElementById('canvas');
    var link = document.createElement('a');
    link.download = 'image_with_text.png';
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
}

// Add event listener for slider change
document.getElementById('imgSlider').addEventListener('change', addTextToImage);

addTextToImage();