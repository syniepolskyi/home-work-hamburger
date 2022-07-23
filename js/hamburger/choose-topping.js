Hamburger.chooseTopping = function(){
  const inputTopp = document.getElementById("topping");
  const topppAcList = inputTopp.nextElementSibling.nextElementSibling.firstElementChild;
  const elemLinks = topppAcList.querySelectorAll("a");
  const addToppingBtn = document.getElementById("addtopping");
  
  const choose = (stuffKey) => {
    const trDataList = document.querySelectorAll("tr.active-data");
    inputTopp.value = Hamburger.stuffing[stuffKey].type;
    inputTopp.setAttribute('data-value', stuffKey);
    if(trDataList.length){
      addToppingBtn.removeAttribute("disabled");
    }
    topppAcList.parentNode.classList.toggle("hidden", true);
  };
  
  Array.from(elemLinks).forEach((el) => 
    el.addEventListener("mousedown", ev => {
        choose( ev.target.parentNode.getAttribute("data-stuffing") );
        ev.preventDefault();
    })
  );
  
}

