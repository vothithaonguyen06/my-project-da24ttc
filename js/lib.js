const productList =[
    {id:"01", name:"Album Arirang BTS full", price: 1255000, image:"../assets/images/AVATAR.jpg", productLink: "product-detail.html"},
    {id:"02", name:"Arirang ver Taehyung", price: 795000, image:"../assets/images/vertaehyung.jpg", productLink: "product-detail.html"},
    {id:"03", name:"Arirang ver Jungkook", price: 797000, image:"../assets/images/verjungkook.jpg", productLink: "product-detail.html"},
    {id:"04", name:"Arirang ver Namjoon", price: 794000, image:"../assets/images/vernamjoon.jpg", productLink: "product-detail.html"},
    {id:"05", name:"Arirang ver Seokjin", price: 792000, image:"../assets/images/verseokjin.jpg", productLink: "product-detail.html"},
    {id:"06", name:"Arirang ver Yoongi", price: 793000, image:"../assets/images/veryoongi.jpg", productLink: "product-detail.html"},
    {id:"07", name:"Arirang ver Jimin", price: 795000, image:"../assets/images/verjimin.jpg", productLink: "product-detail.html"},
    {id:"08", name:"Arirang ver J-Hope", price: 794000, image:"../assets/images/verjhope.jpg", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, link) {

    const productListDiv = document.getElementById("product-list");
    productListDiv.style.marginTop = "40px";
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "col-md-3 mb-4 text-center");

    // ===== IMAGE =====
    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid");

    img.style.width = "100%";
    img.style.height = "1/1";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";

    // ===== INFO =====
    const productInfo = document.createElement("div");
    productInfo.style.marginTop = "20px";

    const productName = document.createElement("p");
    productName.textContent = name;
    productName.style.fontWeight = "bold";
    productName.style.color = "red";

    //gia
    const productPrice = document.createElement("p");
    productPrice.textContent = price.toLocaleString() + "/VND";
    productPrice.style.fontWeight = "bold";

    const productLink = document.createElement("a");
    productLink.setAttribute("href", link + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm");
    productLink.textContent = "Xem chi tiết";

    //hover
    productLink.style.transition = "0.3s";
    productLink.onmouseover = () => {
        productLink.style.backgroundColor = "#a1d5ef";
        productLink.style.color = "#170606";
        productLink.style.transform = "scale(1.1)";
    };
    productLink.onmouseout = () => {
        productLink.style.backgroundColor = "";
    productLink.style.color = "";
        productLink.style.transform = "scale(1)";
    };

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(img);
    productItem.appendChild(productInfo);

    productListDiv.appendChild(productItem);
}
