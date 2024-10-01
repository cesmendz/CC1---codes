const decimalInput = document.getElementById('decimal-input');
const convertBtn = document.getElementById('convert-btn');
const binaryOutput = document.getElementById('binary-output');
const historyOutput = document.getElementById('history-output');
let history = '';

convertBtn.addEventListener('click', () => {
  const userInput = decimalInput.value.trim();
  if (userInput.toUpperCase() === 'STOP') {
    binaryOutput.textContent = 'Terminated.';
    historyOutput.textContent = 'Conversion History:';
    history = '';
  } else {
    const decimalNum = parseInt(userInput);
    if (isNaN(decimalNum)) {
      binaryOutput.textContent = 'Invalid input. Please enter a valid decimal number.';
    } else {
      const binaryNum = decimalNum.toString(2);
      binaryOutput.textContent = `The binary representation of ${decimalNum} is ${binaryNum}.`;
      history += `${decimalNum} -> ${binaryNum}\n`;
      historyOutput.textContent = 'Conversion History:\n' + history;
    }
  }
  decimalInput.value = '';
});