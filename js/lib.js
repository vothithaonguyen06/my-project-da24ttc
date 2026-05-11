const products = [
    {
        id: "01",
        name: "Album Arirang BTS full",
        price: 1255000,
        desc: "Bộ album BTS Arirang Full Set bao gồm đầy đủ 7 phiên bản thành viên RM, Jin, SUGA, j-hope, Jimin, V và Jungkook. Mỗi album đi kèm photobook chất lượng cao, photocard ngẫu nhiên, postcard độc quyền và poster phiên bản giới hạn dành cho ARMY sưu tầm.",
        image: "../assets/images/AVATAR.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "02",
        name: "Arirang ver Taehyung",
        price: 795000,
        desc: "Phiên bản V (Kim Taehyung) mang concept nghệ thuật cổ điển pha nét hiện đại. Album bao gồm photobook 92 trang, photocard ngẫu nhiên, postcard độc quyền và poster mini với hình ảnh riêng của Taehyung.",
        image: "../assets/images/vertaehyung.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "03",
        name: "Arirang ver Jungkook",
        price: 797000,
        desc: "Phiên bản Jungkook nổi bật với concept trẻ trung và mạnh mẽ. Bao gồm CD album, photobook chất lượng cao, photocard ngẫu nhiên, sticker set và postcard phiên bản giới hạn dành riêng cho ARMY.",
        image: "../assets/images/verjungkook.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "04",
        name: "Arirang ver Namjoon",
        price: 794000,
        desc: "Phiên bản RM (Namjoon) sở hữu concept trưởng nhóm trưởng thành và đầy chiều sâu. Album đi kèm photobook độc quyền, lyric booklet, photocard ngẫu nhiên và poster đặc biệt với hình ảnh RM.",
        image: "../assets/images/vernamjoon.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "05",
        name: "Arirang ver Seokjin",
        price: 792000,
        desc: "Phiên bản Jin mang phong cách thanh lịch và ấm áp. Album bao gồm photobook cao cấp, postcard độc quyền, photocard ngẫu nhiên và mini poster với bộ ảnh concept riêng của Seokjin.",
        image: "../assets/images/verseokjin.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "06",
        name: "Arirang ver Yoongi",
        price: 793000,
        desc: "Phiên bản SUGA (Min Yoongi) thể hiện phong cách tối giản nhưng đầy cá tính. Sản phẩm đi kèm photobook concept đen trắng, photocard ngẫu nhiên, lyric card và poster giới hạn.",
        image: "../assets/images/veryoongi.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "07",
        name: "Arirang ver Jimin",
        price: 795000,
        desc: "Phiên bản Jimin nổi bật với hình ảnh mềm mại và hiện đại. Album bao gồm photobook ấn tượng, postcard nghệ thuật, photocard ngẫu nhiên và sticker độc quyền dành cho fan sưu tầm.",
        image: "../assets/images/verjimin.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "08",
        name: "Arirang ver J-Hope",
        price: 794000,
        desc: "Phiên bản j-Hope mang màu sắc tươi sáng, năng động và trẻ trung. Album đi kèm photobook concept riêng, photocard ngẫu nhiên, postcard độc quyền và mini poster phiên bản giới hạn.",
        image: "../assets/images/verjhope.jpg",
        productLink: "product-detail.html"
    }
];

// Load danh sách sản phẩm
function loadProduct(products)
{
    for(let i = 0; i < products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}


// Hiển thị sản phẩm
function addProduct_v2(product)
{

    const productListDiv =
        document.getElementById("product-list");

    productListDiv.style.marginTop = "40px";


    // CARD
    const productItem =
        document.createElement("div");

    productItem.setAttribute(
        "class",
        "col-md-3 mb-4 text-center"
    );


    // IMAGE
    const img =
        document.createElement("img");

    img.setAttribute("src", product.image);

    img.setAttribute("alt", product.name);

    img.setAttribute(
        "class",
        "img-fluid"
    );

    img.style.width = "100%";

    img.style.height = "300px";

    img.style.objectFit = "cover";

    img.style.borderRadius = "8px";


    // INFO
    const productInfo =
        document.createElement("div");

    productInfo.style.marginTop = "20px";


    // NAME
    const productName =
        document.createElement("p");

    productName.textContent =
        product.name;

    productName.style.fontWeight =
        "bold";

    productName.style.color =
        "red";


    // PRICE
    const productPrice =
        document.createElement("p");

    productPrice.textContent =
        product.price.toLocaleString("vi-VN")
        + " VND";

    productPrice.style.fontWeight =
        "bold";


    // LINK
    const productLink =
        document.createElement("a");

    productLink.setAttribute(
        "href",
        product.productLink + "?id=" + product.id
    );

    productLink.setAttribute(
        "class",
        "btn btn-info btn-sm"
    );

    productLink.textContent =
        "Xem chi tiết";


    // HOVER
    productLink.style.transition = "0.3s";
    productLink.onmouseover = () =>
    {
        productLink.style.backgroundColor =
            "#a1d5ef";

        productLink.style.color =
            "#170606";

        productLink.style.transform =
            "scale(1.1)";
    };

    productLink.onmouseout = () =>
    {
        productLink.style.backgroundColor =
            "";

        productLink.style.color =
            "";

        productLink.style.transform =
            "scale(1)";
    };
    // APPEND
    productInfo.appendChild(productName);

    productInfo.appendChild(productPrice);

    productInfo.appendChild(productLink);

    productItem.appendChild(img);

    productItem.appendChild(productInfo);

    productListDiv.appendChild(productItem);

}