it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ amount: 1000, rate: 5, years: 4 })).toEqual(
    "23.03"
  );
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 1011.73, rate: 99, years: 1 })
  ).toEqual("136.00");
});
