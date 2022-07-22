Hamburger.changeAmount = function(){
  const amountInput = document.getElementById("amount");
  const orderTableBody = document.querySelector(".order-table tbody");
  amountInput.addEventListener("change", (ev) => {
    const tdAmount = orderTableBody.children[0].querySelector("td.data-amount");
    tdAmount.innerText = ev.target.value;
    Hamburger.calculateTotal();
  });
  
}
