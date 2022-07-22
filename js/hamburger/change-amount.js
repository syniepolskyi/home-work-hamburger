Hamburger.changeAmount = function(){
  const amountInput = document.getElementById("amount");
  const dataTr = document.querySelector(".order-table tbody tr.active-data");
  amountInput.addEventListener("change", (ev) => {
    const tdAmount = dataTr.querySelector("td.data-amount");
    tdAmount.innerText = ev.target.value;
    Hamburger.calculateTotal();
  });
  
}
