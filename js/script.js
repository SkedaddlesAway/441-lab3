calculate = () =>{
  //active inputs
  const bill = document.getElementById('bill').value
  const tip = document.getElementById('slider').value

  //disabled inputs 
  let percent = document.getElementById('percent')
  let amount = document.getElementById('amount')
  let total = document.getElementById('total')

  if (isNaN(parseFloat(bill))) {
    errorMssg.innerHTML =("Please enter a number for Bill Amount.");
  }
  else{
    errorMssg.innerHTML = null;
    percent.value = tip + "%"; 
    tipAmnt = (bill * tip / 100);
    amount.value = "$" + tipAmnt;
    total.value =  "$" + (+bill + +tipAmnt);
  }
}


document.getElementById('calculator').addEventListener("change", calculate);