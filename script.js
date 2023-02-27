const screenDisplay = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
let calculation =[]
let accumulativeCalculation

function calculate(button) {
  const value = button.textContent
  if (value == "CLR" || value == "Del") {
    calculation = []
    screenDisplay.textContent = ''
  }else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation)
  } else {
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = accumulativeCalculation
  }

}

buttons.forEach(button =>  button.addEventListener('click', () => calculate(button)))


let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light' ) {
    document.getElementById('switcher-id').href = './themes/light-theme.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/theme1.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './themes/theme2.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark-theme.css';
  }
  localStorage.setItem('style', theme);
}

function toggle() {
  const t = document.getElementById("toggle");
  if (t.style.display === "none") {
    t.style.display = "flex";
  } else {
    t.style.display = "none";
  }
}