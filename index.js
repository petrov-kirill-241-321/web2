const basket = document.querySelector(".header__basket");
const headerPointer = document.querySelector(".header__pointer");
const body = document.querySelector("body");
const footerList = document.querySelector(".footer__list");

const btnIncrement = document.querySelector(".footer__button-increment");
const btnDiminution = document.querySelector(".footer__button-diminution");
const btnInitiall = document.querySelector(".footer__button-initiall");

const btnsBasket = document.querySelectorAll(".product__button");
const btnsLike = document.querySelectorAll(".product__icon-like");
const btnsDisLike = document.querySelectorAll(".product__icon-dislike");

let basketCount = 0;

function changeLike(btnLike) {
  if (btnLike.classList.toggle("active")) {
    btnLike.src = "./icons/heart-active.svg";
  } else {
    btnLike.src = "./icons/heart.svg";
  }
}

function changeDisLike(btnDisLike) {
  if (btnDisLike.classList.toggle("active")) {
    btnDisLike.src = "./icons/dislike-active.svg";
  } else {
    btnDisLike.src = "./icons/dislike.svg";
  }
}

function setBasketCount() {
  basketCount++;
  basket.insertAdjacentHTML(
    "beforeend",
    `
      <span class="header__basket-count">${basketCount}</span>
    `
  );

  function removeCountBasket() {
    const countBasket = document.querySelector(".header__basket-count");
    countBasket.remove();
  }

  removeCountBasket();
}

function createRandomNumberList() {
  let listRandomNumber = [];
  for (let i = 0; i < 10; i++) {
    listRandomNumber.push(Math.floor(Math.random() * 100));
  }
  listRandomNumber.forEach((num) => {
    const li = document.createElement("li");
    li.classList.add("footer__item");
    li.textContent = num;
    footerList.appendChild(li);
  });

  function getSortIncrement(list) {
    while (footerList.firstChild) {
      footerList.removeChild(footerList.firstChild);
    }
    [...list]
      .sort((a, b) => a - b)
      .forEach((num) => {
        const li = document.createElement("li");
        li.classList.add("footer__item");
        li.textContent = num;
        footerList.appendChild(li);
      });
  }
  function getSortDiminution(list) {
    while (footerList.firstChild) {
      footerList.removeChild(footerList.firstChild);
    }
    [...list]
      .sort((a, b) => b - a)
      .forEach((num) => {
        const li = document.createElement("li");
        li.classList.add("footer__item");
        li.textContent = num;
        footerList.appendChild(li);
      });
  }
  function getSortInitiall(list) {
    while (footerList.firstChild) {
      footerList.removeChild(footerList.firstChild);
    }
    list.forEach((num) => {
      const li = document.createElement("li");
      li.classList.add("footer__item");
      li.textContent = num;
      footerList.appendChild(li);
    });
  }

  btnIncrement.addEventListener("click", () => {
    getSortIncrement(listRandomNumber);
  });
  btnDiminution.addEventListener("click", () => {
    getSortDiminution(listRandomNumber);
  });
  btnInitiall.addEventListener("click", () => {
    getSortInitiall(listRandomNumber);
  });
}

function getPointer(e) {
  headerPointer.textContent = `Тег: ${e.target.tagName.toLowerCase()} X:${
    e.offsetX
  } Y:${e.offsetY}`;
}

[...btnsBasket].forEach((btn) => btn.addEventListener("click", setBasketCount));

[...btnsLike].forEach((btn) =>
  btn.addEventListener("click", () => changeLike(btn))
);

[...btnsDisLike].forEach((btn) =>
  btn.addEventListener("click", () => changeDisLike(btn))
);

body.addEventListener("click", (e) => {
  getPointer(e);
});

createRandomNumberList();
