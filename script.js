document.querySelector("#submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
});

// Seat
const seats = document.querySelectorAll(".seat");
let selectedSeats = [];

// Traversing to the seats

for (seat of seats) {
  seat.addEventListener("click", function (event) {
    // The name of the selected seat
    const seatName = event.target.innerText;
    if (selectedSeats.length < 4 && !selectedSeats.includes(event.target)) {
      //   Adding background color and text color to the selected seats
      event.target.classList.remove("bg-[#f7f8f8]");
      event.target.classList.add("bg-[#1dd100]", "text-white");

      //   Pushing all the selected seats to an array
      selectedSeats.push(event.target);

      //   decreasing the left/remaining seat
      decreaseSeatCount();

      // increasing the selected seats amount
      increaseSelectedSeatNumber();

      //   Adding the selected seat to the main seat list using a function
      addSeatToTheList(seatName);

      //   Calculating and showing the total price to price list
      getAElementById("total-price-amount").innerText =
        totalPriceCalculate().join(" ");

      // Calculate and showing the grand total with a function
      granTotalCalculate();
    } else if (selectedSeats.includes(event.target)) {
      alert("you have already selected the seat. ");
    } else {
      alert("You can not buy more than 4 tickets .");
    }

    // Coupon input and button enable when 4 items is selected.
    const couponInput = getAElementById("coupon-input-field");
    const couponApplyBtn = getAElementById("coupon-apply-btn");
    if (selectedSeats.length === 4) {
      couponInput.disabled = false;
      couponApplyBtn.disabled = false;
    }
  });
}
