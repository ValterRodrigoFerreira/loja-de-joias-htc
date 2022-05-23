function constructInformativesTop(json) {
  const $wrapper = document.querySelector(".header__informatives-wrapper");

  for (completeText of json) {
    $wrapper.innerHTML += `<span class="header__informatives-top--text${
      completeText.firstBold ? "-strong" : ""
    }">
    ${completeText.text}   
    <span class="header__informatives-top--text${
      completeText.firstBold === false ? "-strong" : "-margin"
    }">
      ${completeText.bold}
      </span>
  </span>`;
  }
}

function informativesTop() {
  fetch("./mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInformativesTop(json);
    });
  /*JSON = JAVASCRIPT OBJECT NOTATION*/
}

function requestMenuDesktop() {
  fetch("./mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructMenuDesktop(json.menu);
    });
}

function constructMenuDesktop(json) {
  console.log(json);
  let strucureMenu = "";
  const $containerMenu = document.querySelector(".header__menu");

  for (const menu of json) {
    strucureMenu += `<div class="header__menu-wrapper">
    <a href=${menu.url} class="header__menu-department ">${menu.name}</a>
    </div>`;
  }

  $containerMenu.innerHTML = strucureMenu;
}

informativesTop();
/* requestMenuDesktop(); */
