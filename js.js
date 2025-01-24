// button counters 
const allBtn = document.getElementsByClassName("btn");
let count = 0;
let counts = 12;
let total = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;
    counts = counts - 1;
    total += 550;
    // document.getElementById('ticket-count').innerText = count;
    // console.log(count);
    setInnerText("ticket-count", count);
    setInnerText("ticket-counts", count);
    setInnerText("seat-left", counts);

    //confirm seat price section
    const seatName = e.target.innerText;
    const selectSeat = document.getElementById("confirm-seat");
    const div = document.createElement("div");
    // const p =document.createElement('p');
    const economy = document.createElement("p");
    economy.innerText = "Economy";
    const price = document.createElement("p");
    price.innerText = "550";
    const p2 = document.createElement("p");
    p2.innerText = seatName;

    //append child
    div.appendChild(p2);
    div.appendChild(economy);
    div.appendChild(price);

    selectSeat.appendChild(div);

    if (count >= 4) {
      alert("you don't select more than 4 tickets at a time");
      allBtn.disabled = true;
    } else {
      allBtn.disabled = false;
    }
    const totalT = (document.getElementById("cast").innerText = total);
    grandTotal = document.getElementById("grand-cast").innerText = total;
  });
}
// set innerText
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

//   coupon code validation

function couponButton() {
  // Get the value of the coupon code input field
  var couponCode = document.getElementById("Coupon-code").value;
  inputField.remove();

  // Define discount values for different coupon codes
  var discounts = {
    NEW15: 15, // 15% discount for CODE1
    "Couple 20": 20, // 20% discount for CODE2
    // Add more coupon codes and corresponding discounts as needed
  };

  // Check if the entered coupon code is valid
  if (couponCode in discounts) {
    var discountValue = discounts[couponCode];

    const discount = discountValue * 0.01 * total;
    grandTotal = document.getElementById("grand-cast").innerText =
      total - discount;
      
    // discount appendChild
    var container = document.getElementById("dis-count");
    const li = document.createElement("li");
    const economyy = document.createElement("p");
    economyy.innerText = discount;
    li.appendChild(economyy);
    container.appendChild(li);

  } else {
    alert("Invalid coupon code. Please try again.");
  }
}

var inputField = document.getElementById("myInput");
var submitButton = document.getElementById("myButton");
var inputFields = document.getElementById("numbers");

inputFields.addEventListener("input", function () {
  //    if (inputField.value.trim() !== "") {

  //        submitButton.disabled = false;
  //    }
  if (!isNaN(inputFields.value.trim())) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
const CouponCode = document.getElementById("Couponcode");
CouponCode.addEventListener("input", function () {
  if (CouponCode.value.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function scrollToSection() {
  // Get a reference to the target section
  var targetSection = document.getElementById("targetSection");

  // Scroll to the target section
  targetSection.scrollIntoView({ behavior: "smooth" });
}


  dis-count.addEventListener("click", function (e) {
  
  } );