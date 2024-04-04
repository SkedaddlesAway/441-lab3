//active inputs
const bill = document.getElementById('bill').value
const tip = document.getElementById('slider').value

//disabled inputs 
let percent = document.getElementById('percent')
let amount = document.getElementById('amount')
let total = document.getElementById('total')

// percent.value = tipValue + "%";
// amount.value = (bill * tip / 100).toFixed(2);
// total.value =  (bill + parseFloat(amount)).toFixed(2);

//event listeners
function calculate(){
  if (isNaN(bill)) {
    errorMssg.innerHTML =("Please enter a number for Bill Amount.");
  }
  else{
    percent.value = tip + "%" 
    amount.value = (bill * tip / 100).toFixed(2);
    total.value =  (bill + parseFloat(amount)).toFixed(2);
  }
}