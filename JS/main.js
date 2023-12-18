const menu = document.querySelector(".ri-menu-line");
const nav = document.querySelector(".header__navbar-list");

menu.onclick = function () {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

const d = [
  {
    id: 1,
    img: "../ACSSET/img/sanpham/S22 128GB.png",
    product_name: "S22 128GB",
    price: "From $299",
  },
  {
    id: 2,
    img: "../ACSSET/img/sanpham/Watch4.png",
    product_name: "Watch4",
    price: "From $399",
  },
  {
    id: 3,
    img: "../ACSSET/img/sanpham/Z Fold 2.png",
    product_name: "Z Fold 2",
    price: "From $499",
  },
  {
    id: 4,
    img: "../ACSSET/img/sanpham/Tab S7 FE.png",
    product_name: "Tab S7 FE",
    price: "From $699",
  },
  {
    id: 5,
    img: "../ACSSET/img/sanpham/The Freestyle.png",
    product_name: "The Freestyle",
    price: "From $899",
  },
  {
    id: 6,
    img: "../ACSSET/img/sanpham/Neo QLED 8K.png",
    product_name: "Neo QLED 8K",
    price: "From $2,999",
  },
  {
    id: 7,
    img: "../ACSSET/img/sanpham/S22+ 256GB.png",
    product_name: "S22+ 256GB",
    price: "From $799",
  },
  {
    id: 8,
    img: "../ACSSET/img/sanpham/Buds Pro.png",
    product_name: "Buds Pro",
    price: "From $149",
  },
  {
    id: 9,
    img: "../ACSSET/img/sanpham/S22 Ultra.png",
    product_name: "S22 Ultra",
    price: " From $999",
  },
];
function testImg() {
  setTimeout(() => {
    listProducts();
  }, 1500);
}

function listProducts() {
  let html = "";
  for (let i = 0; i < d.length; i++) {
    html += `
    <div class="col-12 col-md-6 col-lg-4 mb-3">
    <div class="card h-100 border-0">
      <div class="card-img-top" data-id="${d[i].id}" onclick="redirectToProductDetail(${d[i].id})">
        <img src="${d[i].img}" class="img-fluid mx-auto d-block" alt="Card image cap"/>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title">
          <a href="product.html?id=${d[i].id}" class="font-weight-bold text-dark text-uppercase small">${d[i].product_name}</a>
        </h4>
        <h5 class="card-price small text-warning">
          <span style="color:#7B88A8">${d[i].price}</span>
        </h5>
      </div>
    </div>
  </div>
    `;
  }

  document.querySelector(".card__products").innerHTML = html;
}

function redirectToProductDetail() {
  window.location.href =
    "http://127.0.0.1:5501/HTML/page_shop_single_product.html";
}

testImg();
