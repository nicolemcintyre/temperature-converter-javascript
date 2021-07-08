let userInput = document.querySelector('#user-input');
const fahrenheit = document.querySelector('#fahrenheit');
const celsius = document.querySelector('#celsius');
const tempForm = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const clearBtn = document.querySelector('#clear');


const convertToCelsius = (val) => {
   val = parseInt(val)
  let celsius = ((val - 32) * 5/9);
  return celsius.toFixed(1);
}

const convertToFahrenheit = (val) => {
   val = parseInt(val)
  let fahrenheit = ((val * 9/5) + 32);
  return fahrenheit.toFixed(1);
}


  function handleInputs() {
   let result;
   let displayResult = document.createElement('p');
   displayResult.classList.add('response')
  
   
   let degree = parseInt(userInput.value)
      const msg = `The converted temperature of ${degree}°`;

   if(fahrenheit.checked){
     result = convertToCelsius(degree)
     displayResult.innerText = `${msg} Fahrenheit is ${result}° Celsius`;
     celsius.disabled = true;
   } else if(celsius.checked){
     result = convertToFahrenheit(degree)
     displayResult.innerText = `${msg} Celsius is  ${result}° Fahrenheit`;
     fahrenheit.disabled = true;
   }
   document.querySelector('.result h3').insertAdjacentElement('afterend', displayResult)

   submitBtn.disabled = true;
   
 }


tempForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(userInput.value.length === 0){
    userInput.placeholder = 'Please Enter A Valid Value'
    
  }
  handleInputs();
  
})


clearBtn.addEventListener('click', clear)

function clear(){
     userInput.value = '';
     document.querySelector('.response').remove();
     fahrenheit.disabled = false;
     celsius.disabled = false;
     submitBtn.disabled = false;
   }
