const form = document.querySelector("#contato");

function checkValidity(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add("erro-input");
    target.nextElementSibling.classList.add("erro-span");
    target.parentElement.classList.add("erro-container");
  } else {
    target.classList.remove("erro-input");
    target.nextElementSibling.classList.remove("erro-span");
    target.parentElement.classList.remove("erro-container");
  }
}

form.addEventListener("change", checkValidity);
