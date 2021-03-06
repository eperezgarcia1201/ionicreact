const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resultArea = document.getElementById('result');


const resetInput = () => {
    heightInput.value = '';
    weightInput.value = '';
};

const calculateBmi = () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight /  (enteredHeight * enteredHeight);

    if(isNaN(bmi)){
        alert('its not a number, Please Check Input');
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
    <ion-card-content>
        <h2>${bmi}</h2>
    </ion-card-content>
    `;
    resultArea.innerHTML = '';
    resultArea.appendChild(result)
};
calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInput);

