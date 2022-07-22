Hamburger.chooseSize = function(){
  const inputSize = document.getElementById("size");
  const sizeAcList = inputSize.nextElementSibling.firstElementChild;
  const elemLinks = sizeAcList.querySelectorAll("a");
  const addToppingBtn = document.getElementById("addtopping");
  const amountInput = document.getElementById("amount");
  const submitOrderBtn = document.getElementById("submitorder");
  const orderTableBody = document.querySelector(".order-table tbody");
  
  const choose = (sizeKey) => {
    const trTemplate = document.querySelector("tr.order-template");
    const trDataList = document.querySelectorAll("tr.active-data");
    if (trDataList.length && !confirm("Перезаписати замовлення? Це видалить всі добавки")){
      return ;
    }
    Array.from(trDataList).forEach((el) => el.remove() );
    inputSize.value = Hamburger.sizes[sizeKey].name;
    submitOrderBtn.removeAttribute("disabled");
    const newTr = document.createElement("TR");
    newTr.classList.add("active-data");
    newTr.innerHTML = trTemplate.innerHTML;
    newTr.firstElementChild.innerHTML = '';
    newTr.children[1].innerText = Hamburger.sizes[sizeKey].name;
    newTr.children[2].innerText = Hamburger.sizes[sizeKey].price;
    newTr.children[3].innerText = '1';
    amountInput.value = 1;
    newTr.children[4].innerText = Hamburger.sizes[sizeKey].ccal;
    orderTableBody.appendChild(newTr);
    Hamburger.calculateTotal();
    sizeAcList.parentNode.classList.toggle("hidden", true);
  };
  
  Array.from(elemLinks).forEach((el) => 
    el.addEventListener("click", ev => {
        choose( ev.target.parentNode.getAttribute("data-size") );
    })
  );
  
}
