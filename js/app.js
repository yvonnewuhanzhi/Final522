
let bgm1 = document.getElementById('bgm1')
let entryPopup = document.getElementById('entryPopup');
let startButton = document.getElementById('startButton');



// 在页面加载时显示弹窗
window.onload = function() {
    entryPopup.style.display = 'block';
};



window.addEventListener('load', function() {
    var startButton = document.getElementById('startButton');
    var exploreButton = document.getElementById('explore');
    var bgm1 = document.getElementById('bgm1');
    var entryPopup = document.getElementById('entryPopup');

    startButton.addEventListener('click', function() {
        // Play the background music
        bgm1.play();

        // Add the 'visible' class to the explore button to trigger the fade-in effect
        exploreButton.classList.add('visible');

        // Hide the entry popup
        entryPopup.style.display = 'none';
    });

    document.getElementById('explore').addEventListener('click', function() {
        window.location.href = '../html/plant.html';
    });
});