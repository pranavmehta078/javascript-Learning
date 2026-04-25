let price1 = 500;
let price2= 300;

//Show total price
Total = price1 + price2;

//include GST 18%
let GSTprice = Total * 0.18;
console.log("Price with GST is :" + GSTprice );

//Apply Coupon Save10
let couponcode = "SAVE10";
let discount = 0;

if (couponcode === "SAVE10") {
  discount = GSTprice * 0.10; // 10% discount
} else if (couponcode === "SAVE20") {
  discount = GSTprice * 0.20; // 20% discount
} else {
  discount = 0;
}

console.log("Discount:", discount);

// Final Price
let finalPrice = GSTprice - discount;

console.log("Final Price to Pay:", finalPrice);