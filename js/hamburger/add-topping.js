

Hamburger.addTopping = function(){
  const inputTopp = document.getElementById("topping");
  const addToppingBtn = document.getElementById("addtopping");
  const submitOrderBtn = document.getElementById("submitorder");
  const orderTableBody = document.querySelector(".order-table tbody");
  
  const add = (stuffKey) => {
    const trTemplate = document.querySelector("tr.order-template");
    let toppTr = document.querySelector("tr." + stuffKey);
    let amountTopp = 1;
    const trDataList = document.querySelectorAll("tr.active-data");
    if (!trDataList.length){
      return ;
    }
    submitOrderBtn.removeAttribute("disabled");
    if(!toppTr){
      toppTr = document.createElement("TR");
      toppTr.classList.toggle("active-data", true);
      toppTr.classList.toggle(stuffKey, true);
      toppTr.innerHTML = trTemplate.innerHTML;
    } else {
      amountTopp = parseInt(toppTr.children[3].innerText, 10);
      amountTopp++;
    }
    toppTr.children[1].innerText = Hamburger.stuffing[stuffKey].type;
    toppTr.children[2].innerText = Hamburger.stuffing[stuffKey].price;
    toppTr.children[3].innerText = amountTopp;
    toppTr.children[4].innerText = Hamburger.stuffing[stuffKey].ccal;
    if (amountTopp === 1){
      orderTableBody.appendChild(toppTr);
    }
    Hamburger.calculateTotal();
  };
  
  addToppingBtn.addEventListener("click", ev => {
      add( inputTopp.getAttribute("data-value") );
      Hamburger.removeTopping();
  })
  
}
