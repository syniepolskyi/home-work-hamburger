Hamburger.calculateTotal = function(){
  const totalPriceTd = document.getElementById("totalprice");
  const totalCcalTd = document.getElementById("totalccal");
  const priceTds = document.querySelectorAll("td[data-price]");
  const ccalTds = document.querySelectorAll("td[data-ccal]");
  const amountTds = document.querySelectorAll("td[data-amount]");
  let totalPrice = Array.from(priceTds).reduce((acc,enext) => 
                                   acc 
                                   + (enext.parentNode.classList.contains("order-template")? 
                                   0 
                                      : (parseInt(enext.innerText,10)
                                      * parseInt(enext.nextSibling.innerText,10))), 
  0);
  let totalCcal = Array.from(ccalTds).reduce((acc,enext) => 
                                 acc 
                                 + (enext.parentNode.classList.contains("order-template")? 
                                 0 
                                    : (parseInt(enext.innerText,10)
                                    * parseInt(enext.previousSibling.innerText,10))), 
  0);
  totalPriceTd.innerText = totalPrice;
  totalCcalTd.innerText = totalCcal;
}
