window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 25000;
  document.getElementById("loan-years").value = 6;
  document.getElementById("loan-rate").value = 2.99;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(values);
  document.getElementById("monthly-payment").innerText = monthly
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values['amount'];
  console.log(P);
  let i = (values['rate']/12);
  console.log(i);
  let n = (values['years']*12);
  console.log(n);
  let monthly = (P*i)/(1-(1+i)^(n));
  let payment = Math.floor(monthly*100)/100

  return ` Your Monthly Payment would be $${payment}`
};
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment").innerText;
  monthlyPayment = `Your Monthly Payment would be $${monthly}`
}
