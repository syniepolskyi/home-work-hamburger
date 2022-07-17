class Hamburger {
  static sizes = {
    S: {
      price: 200,
      ccal: 500
    },
    M: {
      price: 300,
      ccal: 700
    },
    L: {
      price: 400,
      ccal: 1000
    }
  }
  static stuffing = {
    STUFFING_SALAD: {
      type: "STUFFING SALAD",
      price: 300,
      ccal: 200
    },
    STUFFING_POTATO: {
      type: "STUFFING POTATO",
      price: 400,
      ccal: 100
    },
    TOPPING_MAYO: {
      type: "TOPPING MAYO",
      price: 300,
      ccal: 400
    },
    TOPPING_SPICE: {
      type: "TOPPING SPICE",
      price: 500,
      ccal: 700
    },
  }
  
  
}

function renderMenu(){
  const tableToppingsBody = document.querySelector(".table-toppings tbody");
  const tableSizesBody = document.querySelector(".table-sizes tbody");
  const htmlStuffing = Object.keys(Hamburger.stuffing).map((k) => {
    return `<tr><td>${Hamburger.stuffing[k].type}</td>`
      +`<td>${Hamburger.stuffing[k].price}</td>`
      +`<td>${Hamburger.stuffing[k].ccal}</td></tr>`;
  }).join('');
  const htmlSizes = Object.keys(Hamburger.sizes).map((k) => {
    return `<tr><td>${k}</td>`
      +`<td>${Hamburger.sizes[k].price}</td>`
      +`<td>${Hamburger.sizes[k].ccal}</td></tr>`;
  }).join('');
  tableSizesBody.insertAdjacentHTML("beforeend",htmlSizes);
  tableToppingsBody.insertAdjacentHTML("beforeend",htmlStuffing);
}

//

renderMenu();
