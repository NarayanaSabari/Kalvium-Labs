var cart = [];
var total = 0;
var quantity = 0;
var url = `https://wa.me/919012345678?text=Order details This was our `;

function render(cart) {
  var cart = document.getElementById("cart-value");
  cart.innerText = quantity;
}
function addToCart(target) {
  // getting the grand parent element
  var closest = target.closest("div[id]");
  var id = closest.id;
  var element = document.getElementById(id);
  var Name_html = document.querySelector(`#${element.id} div h3`);
  var price_html = document.querySelector(`#${element.id} .buy p`);
  var Name = Name_html.innerText;
  var price_$ = price_html.innerText;
  var price = parseFloat(price_$.replace("$", ""));
  quantity += 1;
  //   checking whether the name of the product is already in the cart
  var index = cart.findIndex(function (cartItem) {
    return cartItem.name.indexOf(Name) > -1;
  });
  if (index === -1) {
    // If not adding new items
    var tempcart = { name: Name, price: price, quantity: 1 };
    cart.push(tempcart);
  } else {
    // if it is already just add the quantity to the cart
    cart[index].quantity++;
  }
  render(cart);
}

function printCart(cart) {
  cart.forEach(function (item) {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    total += item.price * item.quantity;
    url += `${item.name} ${item.quantity} `;
  });

  printTotal(total);
}

function printTotal(total) {
  var doller = Math.floor(total);
  var cent = Math.floor((total - doller) * 100);
  console.log(`the total amount is ${doller}$ and ${cent} cents`);
}
function new_tab() {
  window.open(url, "_blank");
}
