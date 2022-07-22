Hamburger.submitOrder = function(){
  const h3Elem = document.querySelector(".order-form-container > h3");
  const orderForm = document.querySelector(".order-form");
  const submitOrderBtn = document.getElementById("submitorder");
  submitOrderBtn.addEventListener("click", (ev) => {
    h3Elem.innerText = "THANK YOU! YOUR ORDER WAS CONFIRMED";
    orderForm.remove();
  });

}
