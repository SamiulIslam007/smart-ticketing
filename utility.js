// A function which will return the element.
function getAElementById(id) {
  const element = document.getElementById(id);
  return element;
}

// A function that returns the number of the element using id

function getTheNumberById(id) {
  const number = parseInt(document.getElementById(id).innerText);
  return number;
}

// A function that will add the selected seats to the listed seats

function addSeatToTheList(seatName) {
  // single row
  const tableSingleRow = document.createElement("div");
  tableSingleRow.classList.add("flex", "justify-between");

  //   Seat name
  const nameOfSeat = document.createElement("h4");
  nameOfSeat.innerText = seatName;
  nameOfSeat.classList.add("text-[#03071299]");
  tableSingleRow.appendChild(nameOfSeat);

  //   seat type
  const seatType = document.createElement("h4");
  seatType.innerText = "Economy";
  seatType.classList.add("text-[#03071299]");
  tableSingleRow.appendChild(seatType);

  //   seat price
  const seatPrice = document.createElement("h4");
  seatPrice.innerText = "550";
  seatPrice.classList.add("text-[#03071299]");
  tableSingleRow.appendChild(seatPrice);

  //   Adding the selected and created seat to the container of seat rows.
  const listContainer = getAElementById("seat-list-container");
  listContainer.appendChild(tableSingleRow);
}

// This function will decrease the seat number
let seatLeft = getTheNumberById("seat-left-count");
function decreaseSeatCount() {
  seatLeft = seatLeft - 1;
  getAElementById("seat-left-count").innerText = seatLeft;
}

// This function will increase the selected items number
let selectedSeatCount = 0;
function increaseSelectedSeatNumber() {
  selectedSeatCount = selectedSeatCount + 1;
  getAElementById("selected-seat-count").innerText = selectedSeatCount;
}

// This function will calculate the total price and add to the website
// Total price
let totalPrice = 0;
function totalPriceCalculate() {
  //   Calculating total price and adding it to the price list
  totalPrice = totalPrice + 550;

  //   The element has some text BTD. SO, I have make that inner text to an array and add the total price to the 1st index of the array.
  const totalPriceArr =
    getAElementById("total-price-amount").innerText.split(" ");
  totalPriceArr[1] = totalPrice;

  return totalPriceArr;
}

//This function will return the grand total of the price with discount or without discount
let grandTotalPrice = 0;
function granTotalCalculate() {
  grandTotalPrice = grandTotalPrice + 550;

  getAElementById("grand-total-price").innerText = grandTotalPrice;
}

// This function will calculate the discount
function applyCoupon() {
  // Getting the coupon code form the input field
  const coupon = getAElementById("coupon-input-field").value;

  //   discount element
  const discountDetails = getAElementById("discount-details");

  if (coupon === "NEW15") {
    // Calculating 15% discount
    const discount = grandTotalPrice * 0.15;

    // showing the discount price
    discountDetails.classList.remove("hidden");
    getAElementById("discount-amount").innerText = discount;

    // updating the grand total
    getAElementById("grand-total-price").innerText = grandTotalPrice - discount;

    // Deleting the coupon area: input field and button
    getAElementById("coupon-area").classList.add("hidden");
  } else if (coupon === "Couple 20") {
    // Calculating 20% discount
    const discount = grandTotalPrice * 0.2;

    // Showing the discount price
    discountDetails.classList.remove("hidden");
    getAElementById("discount-amount").innerText = discount;

    // updating the grand total
    getAElementById("grand-total-price").innerText = grandTotalPrice - discount;

    // Deleting the coupon area: input field and button
    getAElementById("coupon-area").classList.add("hidden");
  } else {
    alert("Your coupon is not valid !!");
  }
}
