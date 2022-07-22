Hamburger.removeTopping = function(){
  //Your code here
  const removeBtns = document.querySelectorAll(".order-table button.remove");
  const remove = (btn) => {
    const elTr = btn.parentNode.parentNode;
    const amountTd = elTr.querySelector("td.data-amount");
    let amount = parseInt(amountTd.innerText, 10);
    if (amount > 1){
      amount--;
      amountTd.innerText = amount;
      Hamburger.calculateTotal();
      return ;
    }
    elTr.remove();
    Hamburger.calculateTotal();
  };
  
  Array.from(removeBtns)
    .forEach(el => {
      if(el.classList.contains("click-handled") 
         || el.parentNode.parentNode.classList.contains("order-template")){
        return ;
      }
      el.classList.toggle("click-handled", true);
      el.addEventListener("click", (ev) => 
        remove(( ev.target.nodeName !== "BUTTON" ? 
          ev.target.parentNode : ev.target )) 
      )
  });
  
}
