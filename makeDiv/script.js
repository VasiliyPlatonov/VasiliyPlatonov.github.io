let btnMakeDiv = document.getElementById('makeDiv');
btnMakeDiv.addEventListener('click', makeDiv);

function makeDiv(e) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.style.backgroundColor = getRandomColor();
    newDiv.style.height = getRandomInt(250, 30) + 'px';
    newDiv.style.width = getRandomInt(250, 30) + 'px';
    newDiv.style.top = getRandomInt(document.documentElement.clientHeight, 5) + 'px';
    newDiv.style.left = getRandomInt(document.documentElement.clientWidth, 5) + 'px';
    document.body.appendChild(newDiv);
}

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += getRandomInt(16, 0).toString(16);
    }
    return color;
}

(function drag() {
    let activeEl;
    let zIndex = 0;

    function dragMouseDown(e) {
        if (e.target.classList.contains('newDiv')) {
            zIndex++;
            activeEl = e.target;
            activeEl = e.target;
            activeEl.style.transition = '0.3s';
            activeEl.style.zIndex = '' + zIndex;
            activeEl.style.cursor = '-webkit-grabbing';
            activeEl.style.top = (e.clientY - activeEl.offsetHeight / 2) + 'px';
            activeEl.style.left = (e.clientX - activeEl.offsetWidth / 2) + 'px';
        }
    }

    function dragMouseUp(e) {
        if (activeEl) {
            activeEl.style.cursor = '-webkit-grab';
            activeEl = undefined;
        }
    }

    function dragMouseMove(e) {
        if (activeEl) {
            activeEl.style.transition = '0s';

            activeEl.style.top = (e.clientY - activeEl.offsetHeight / 2) + 'px';
            activeEl.style.left = (e.clientX - activeEl.offsetWidth / 2) + 'px';

        }
    }

    document.body.addEventListener('mousedown', dragMouseDown);
    document.body.addEventListener('mouseup', dragMouseUp);
    document.body.addEventListener('mousemove', dragMouseMove);
})();
