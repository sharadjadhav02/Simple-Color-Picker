function mycolor(){
    var color = document.getElementById('color-picker').value;
    document.getElementById('hex-code').value = color;
    document.getElementById('box').style.backgroundColor = color;
}

document.getElementById('color-picker').addEventListener('input', mycolor);