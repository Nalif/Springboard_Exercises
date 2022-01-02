window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loan_amount = document.getElementById("loan-amount");
  const loan_years = document.getElementById("loan-years");
  const loan_rate = document.getElementById("loan-rate");

  loan_amount.value = 2000;
  loan_years.value = 4;
  loan_rate.value = 6;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const periodic_interest = (values.rate * 0.01) / 12;
  const total_num_of_payments = values.years * 12;

  return (
    (principal * periodic_interest) /
    (1 - (1 + periodic_interest) ** -total_num_of_payments)
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthly_payment = document.getElementById("monthly-payment");

  monthly_payment.innerText = `$${monthly}`;
}
