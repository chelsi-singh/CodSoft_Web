document.addEventListener('DOMContentLoaded', (event) => {
    const bgAnimation = document.getElementById('bganimation');

    const numofbox = 400;

    for (let i = 0; i < numofbox; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        bgAnimation.append(colorBox)
        
    }
});