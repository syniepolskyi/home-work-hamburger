Hamburger.changeAmount = function(){
  const amountInput = document.getElementById("amount");

  amountInput.addEventListener("change", (ev) => {
    const tdAmount = document.querySelector(".order-table tbody tr.active-data td.data-amount");
    if (tdAmount){
      tdAmount.innerText = ev.target.value;
      Hamburger.calculateTotal();
    }
  });
  
}
