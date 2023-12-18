const data = [
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

function test() {
  setInterval(function () {
    list__products();
  }, 1000);
  imgProducts();
  listImg();
}

function list__products() {
  let htmls = "";
  for (let i = 0; i < Math.min(4, data.length); i++) {
    htmls += `
        <div class="single-card">
          <div class="img-area">
            <img src="${data[i].img}" alt="" />
          </div>
    
          <div class="info">
            <h3>${data[i].product_name}</h3>
            <p class="price">${data[i].price}</p>
          </div>
        </div>
      `;
  }

  document.querySelector(".wrapper").innerHTML = htmls;
}

function imgProducts() {
  const numberProducts = 1;
  let img__products = "";
  for (let i = 0; i < Math.min(numberProducts, data.length); i++) {
    img__products += `
      <div class="img-display">
          <img
            src="${data[i].img}"
            alt="shoe image"
            ${data[i].id}
          />
        </div>
    </div>
      `;
  }
  document.querySelector(".img-display").innerHTML = img__products;
}

function listImg() {
  let imgList = "";
  const numberImg = 3;
  for (let i = 0; i < Math.min(numberImg, data.length); i++) {
    const img = data[i];
    imgList += `
        <div class="img-select">
          <div class="img-item" >
            <a href="#" data-id="${img.id}">
              <img src="${img.img}" alt="image"/>
            </a>
          </div>
        </div>
      `;
  }
  document.querySelector(".img-select").innerHTML = imgList;
}

function log() {
  window.location.href =
    "http://127.0.0.1:5501/HTML/page_shop_single_product.html";
}

test();
