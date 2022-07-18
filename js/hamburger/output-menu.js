Hamburger.outputMenu = function(){
  const tableToppingsBody = document.querySelector(".table-toppings tbody");
  const htmlStuffing = Object.keys(this.stuffing).map((k) => {
    return `<tr><td>${this.stuffing[k].type}</td>`
      +`<td>${this.stuffing[k].price}</td>`
      +`<td>${this.stuffing[k].ccal}</td></tr>`;
  }).join('');
  tableToppingsBody.innerHTML = '';
  tableToppingsBody.insertAdjacentHTML("beforeend",htmlStuffing);
  //
  //
  const tableSizesBody = document.querySelector(".table-sizes tbody");
  const htmlSizes = Object.keys(this.sizes).map((k) => {
    return `<tr><td>${this.sizes[k].name}</td>`
      +`<td>${this.sizes[k].price}</td>`
      +`<td>${this.sizes[k].ccal}</td></tr>`;
  }).join('');
  tableSizesBody.innerHTML = '';
  tableSizesBody.insertAdjacentHTML("beforeend",htmlSizes);
}
