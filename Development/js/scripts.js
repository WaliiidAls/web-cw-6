//
let teachers = ["rahaf", "monawer", "moudhi", "nancy", "hussain"];
teachers.forEach(logger);

function logger(value) {
  console.log(value);
}
//

// assume we will use filter
let todaysTemp = [25, 10, 45, 80, 60, 90, 100];
console.log(todaysTemp.filter(hottestDays));
function hottestDays(alltemp) {
  return 45 < alltemp;
}
//
// assume we will use forEach
let liberay = [
  {
    bookId: 3,
    books: "d a r k",
  },
  {
    bookId: 7,
    books: "l u c i",
  },
  {
    bookId: 5,
    books: "h a r r y",
  },
];
getBookById(7, liberay);

function getBookById(bookId, books) {
  for (b of books) {
    if (b.bookId == bookId) {
      console.log(b);
    }
  }
}
//
//
let stillBuying = true;
let cart = [];
while (stillBuying) {
  let name = prompt("السلعه: اضغط انتهيت عندما تنتهي");
  if (name != "انتهيت") {
    let quantity = prompt("الكميه");
    let price = prompt("السعر");

    let item = {
      name: name,
      quantity: quantity,
      price: price,
    };
    cart.push(item);
  } else {
    stillBuying = false;
    printBill(cart);
  }
}
function printBill(items) {
  let totalPrice = 0;
  console.log("الفاتوره");
  console.log("------------");
  for (let i = 0; i < cart.length; i++) {
    console.log(
      items[i]["quantity"] +
        " " +
        items[i]["name"] +
        " " +
        items[i]["price"] +
        " KD"
    );
    totalPrice += parseFloat(items[i]["price"]);
  }
  console.log("السعر الكلي:" + totalPrice);
  console.log("------------");
}
//
