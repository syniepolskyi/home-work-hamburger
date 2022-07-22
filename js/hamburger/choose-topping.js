Hamburger.chooseTopping = function(){
  const inputTopp = document.getElementById("topping");
  const topppAcList = inputTopp.nextElementSibling.nextElementSibling.firstElementChild;
  const elemLinks = topppAcList.querySelectorAll("a");
  const addToppingBtn = document.getElementById("addtopping");
  
  const choose = (stuffKey) => {
    inputTopp.value = Hamburger.stuffing[stuffKey].type;
    inputTopp.setAttribute('data-value', stuffKey)
    addToppingBtn.removeAttribute("disabled");
    topppAcList.parentNode.classList.toggle("hidden", true);
  };
  
  Array.from(elemLinks).forEach((el) => 
    el.addEventListener("click", ev => {
        choose( ev.target.parentNode.getAttribute("data-stuffing") );
        ev.preventDefault();
    })
  );
  
}

