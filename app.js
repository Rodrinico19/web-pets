//*||  seleccionamos los dos elementos que serán clickables */

const toggleButton = document.getElementById("_toggle");
const navWrapper = document.getElementById("menu_item");


//*||cada ves que se haga click en el botón 
//*||  agrega y quita las clases necesarias 
//*||  para que el menú se muestre. 


toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
  });
  


//*|| Cuándo se haga click fuera del contenedor de enlaces */
//*||  el menú debe esconderse. */

navWrapper.addEventListener("click", e => {
    if (e.target.id === "menu_item") {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
    }
  });