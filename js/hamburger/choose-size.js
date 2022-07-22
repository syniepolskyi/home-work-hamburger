Hamburger.chooseSize = function(){
  const inputSize = document.getElementById("size");
  const sizeAcList = inputSize.nextElementSibling.firstElementChild;
  const elemLinks = sizeAcList.querySelectorAll("a");
  const addToppingBtn = document.getElementById("addtopping");
  const submitOrderBtn = document.getElementById("submitorder");
  const orderTableBody = document.querySelector(".order-table tbody");
  
  const choose = (sizeKey) => {
    const trTemplate = document.querySelector("tr.order-template");
    inputSize.value = Hamburger.sizes[sizeKey].name;
    submitOrderBtn.removeAttribute("disabled");
    const newTr = document.createElement("TR");
    newTr.classList.add("active-data");
    newTr.innerHTML = trTemplate.innerHTML;
    newTr.firstElementChild.innerHTML = '';
    orderTableBody.appendChild(newTr);
    Hamburger.calculateTotal();
    sizeAcList.classList.toggle("hidden", true);
  };
  
  Array.from(elemLinks).forEach((el) => 
    el.addEventListener("click", ev => {
      if(ev.target.nodeName === "A"){
        ev.preventDefault();
        choose( ev.target.getAttribute("data-size") );
      }
    })
  );
  
}
