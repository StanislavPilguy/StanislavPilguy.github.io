var btn = document.getElementById('btn');
btn.onclick = function () {
    document.getElementById('menu').classList.toggle('mobMenu');

    if (document.getElementById('menu').classList.contains('mobMenu') === true) {
        document.querySelector('#offH2').style.display = 'none';
        document.querySelector('#offImg').style.display = 'none';
        document.querySelector('#offH4').style.display = 'none';
        document.querySelector('#offBtn').style.display = 'none';
    }

    else {
        document.querySelector('#offH2').style.display = 'block';
        document.querySelector('#offImg').style.display = 'block';
        document.querySelector('#offH4').style.display = 'block';
        document.querySelector('#offBtn').style.display = 'block';
    }
};





