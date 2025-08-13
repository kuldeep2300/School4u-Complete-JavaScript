let randomBtn = document.querySelector('.randomBtn');
let applyBtn = document.querySelector('.applyBtn');
let container = document.querySelector('.container');
let colorInput = document.querySelector('#colorInput');
let currentColorValue = document.querySelector('.currentColorValue');

const randomColorGenerator = () => {
    let characterSet = "0123456789ABCDEF";
    let charSetLength = characterSet.length;
    let outputColor = ``;

    for(let i = 0; i < 6; i++) {
        outputColor += characterSet.charAt((Math.floor(Math.random() * charSetLength)));
    }
    
    return `#${outputColor}`;
}

const changeColor = (color) => {
    container.style.backgroundColor = color;
    currentColorValue.textContent = color;
}

const handleRandomBtnClick = () => {
   let color = randomColorGenerator();
   changeColor(color);
}

const handleApplyBtnClick = () => {
    let color = colorInput.value;
    changeColor(color);
}

randomBtn.addEventListener('click', handleRandomBtnClick);
applyBtn.addEventListener('click', handleApplyBtnClick);

