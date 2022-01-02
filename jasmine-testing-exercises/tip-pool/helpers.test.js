describe("Helpers test", function () {
  it("should sum all values in an object", function () {
    const values = { a: 1, b: 2, c: 3 };
    expect(sumPaymentTotal(values)).toEqual(6);
  });
});

// function sumPaymentTotal(type) {
//   let total = 0;

//   for (let key in allPayments) {
//     let payment = allPayments[key];

//     total += Number(payment[type]);
//   }

//   return total;
// }

// // converts the bill and tip amount into a tip percent
// function calculateTipPercent(billAmt, tipAmt) {
//   return Math.round(100 / (billAmt / tipAmt));
// }

// // expects a table row element, appends a newly created td element from the value
// function appendTd(tr, value) {
//   let newTd = document.createElement("td");
//   newTd.innerText = value;

//   tr.append(newTd);
// }
