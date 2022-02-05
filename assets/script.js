//plus and minus buttons repond to click events
//access the buttons
// the plus button adds 1 to the product quantity
// the minus button subtracts 1 from the product quantity

//Quantity updates when the +/- buttons are clicked

// quantity cannot drop below 0

let rockQuantity = 1;

//acess the buttons

let addBtn = document.querySelector("#quantity-up");
let minusBtn = document.querySelector("#quantity-down");

//add aa click event to each button

addBtn.addEventListener("click", function (e) {
  rockQuantity++;
  console.log(rockQuantity);
});

minusBtn.addEventListener("click", function (e) {
  rockQuantity--;
  console.log(rockQuantity);
});
