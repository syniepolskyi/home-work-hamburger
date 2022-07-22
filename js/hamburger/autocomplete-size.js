Hamburger.autocompleteSize = function(){
  const inputSize = document.getElementById("size");
  const sizeAcList = inputSize.nextElementSibling.firstElementChild;
  const htmlTemplate = sizeAcList.firstElementChild.outerHTML;
  
  const allSizes = Object.keys(Hamburger.sizes).map((k) => {
    let newEl = Hamburger.sizes[k];
    newEl.key = k;
    return newEl;
  });
  
  const renderSizes = (filterStr = '') => {
    const filteredSizes = allSizes.filter(el => 
      el.name.toLowerCase()
      .indexOf( filterStr.toLowerCase() ) >= 0
    );
    const htmlContent = filteredSizes
      .map((k) => htmlTemplate )
      .join("\n");
    sizeAcList.innerHTML = '';
    if(filteredSizes.length){
      sizeAcList.insertAdjacentHTML("beforeend", htmlContent);
      filteredSizes.forEach((hSize,idx) => {
        const elemLink = sizeAcList.children[idx].firstElementChild;
        elemLink.setAttribute("data-size", hSize.key);
        elemLink.firstElementChild.innerText = hSize.name;
      });
      return ;
    }
    sizeAcList.insertAdjacentHTML("beforeend", htmlTemplate);
    sizeAcList.children[0].innerHTML = "<i>нічого не знайдено</i>";
  };
  
  renderSizes();
  inputSize.addEventListener("keyup", (ev) => {
    renderSizes(inputSize.value);
  });
}
