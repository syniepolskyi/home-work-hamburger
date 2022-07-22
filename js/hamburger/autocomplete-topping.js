
Hamburger.autocompleteTopping = function(){
  const inputTopping = document.getElementById("topping");
  const toppAcList = inputTopping.nextElementSibling.nextElementSibling.firstElementChild;
  const htmlTemplate = toppAcList.firstElementChild.outerHTML;
  const addToppingBtn = document.getElementById("addtopping");
  const submitOrderBtn = document.getElementById("submitorder");
  
  const allToppings = Object.keys(Hamburger.stuffing).map((k) => {
    let newEl = Hamburger.stuffing[k];
    newEl.key = k;
    return newEl;
  });
  
  const renderToppings = (filterStr = '') => {
    addToppingBtn.setAttribute("disabled","disabled");
    const filteredToppings = allToppings.filter(el => 
      el.type.toLowerCase()
      .indexOf( filterStr.toLowerCase() ) >= 0
    );
    const htmlContent = filteredToppings
      .map((k) => htmlTemplate )
      .join("\n");
    toppAcList.innerHTML = '';
    inputTopping.classList.toggle("error", false);
    if(filteredToppings.length){
      toppAcList.insertAdjacentHTML("beforeend", htmlContent);
      filteredToppings.forEach((hTopp,idx) => {
        const elemLink = toppAcList.children[idx].firstElementChild;
        elemLink.setAttribute("data-stuffing", hTopp.key);
        elemLink.firstElementChild.innerText = hTopp.type;
      });
      return ;
    }
    inputTopping.classList.toggle("error", true);
    toppAcList.insertAdjacentHTML("beforeend", htmlTemplate);
    submitOrderBtn.setAttribute("disabled","disabled");
    toppAcList.children[0].innerHTML = "<i>нічого не знайдено</i>";
  };
  
  renderToppings();
  inputTopping.addEventListener("keyup", (ev) => {
    toppAcList.parentNode.classList.toggle("hidden", false);
    renderToppings(inputTopping.value);
    Hamburger.chooseTopping();
  });
}
