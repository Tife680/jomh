const products = [
    { name: "Womb and fertility massage", price: "₦25,000", category: "Massage & Services" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfA2vkpNavbsDH5jx2e4EhjASd77aBllRPQ&s"},
    { name: "Walking store", price: "₦10,000 per session", category: "Massage & Services", img:"https://images.fresha.com/lead-images/placeholders/massage-92.jpg?class=venue-gallery-mobile" },
    { name: "Vitex seed", price: "₦4,000", category: "Seeds & Powders",img:"https://emstahherbals.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-23-at-00.28.27.jpeg" },
    { name: "Pumpkin", price: "₦2,000", category: "Seeds & Powders",img:"https://mindeescookingobsession.com/wp-content/uploads/2022/09/Roasted-Pumpkin-Seeds-HeroNew.jpg" },
    { name: "Sunflower", price: "₦1,500", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSw417B2_2yW6W191iOsAkZnT_8dCCLaGr3OGYaikltTqKu9dOjLA7Km5tvSAccc0dZQ&usqp=CAU" },
    { name: "Seasam seed", price: "₦2,000", category: "Seeds & Powders",img:"https://static.toiimg.com/thumb/msid-113778376,width-1280,height-720,resizemode-4/113778376.jpg" },
    { name: "Chia seed", price: "₦2,000", category: "Seeds & Powders",img:"https://bobs-redmill.transforms.svdcdn.com/production/blog/uploads/2018/04/shutterstock_158808470.jpg?w=1280&h=633&auto=compress%2Cformat&fit=max&dm=1719308642&s=7883e1fed15fff6326d9a70d636c67fc" },
    { name: "Chamomile", price: "₦3,000", category: "Seeds & Powders",img:"https://www.marketresearchintellect.com/images/blogs/chamomile-seeds-market-blossoms-exploring-growth-opportunities-in-herbal-agriculture.webp" },
    { name: "maco root", price: "₦4,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJWwyToOrN-Y4IY-dH8T-4W9E9UqPcs3kmQ&s" },
    { name: "Ashwangadah ", price: "₦4,000", category: "Seeds & Powders",img:"https://m.media-amazon.com/images/I/41U1Uz5Q9HL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Shatavari ", price: "₦3,000", category: "Seeds & Powders",img:"https://m.media-amazon.com/images/I/71Cn8MkzpwL.jpg" },
    { name: "black cohosh", price: "₦3,000", category: "Others",img:"https://www.seedscape.net.au/wp-content/uploads/2023/04/ACTAEA-RACEMOSA-VAR-CORDIFOLIA.jpg" },
    { name: "Green tea", price: "₦4,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV74UkBFtfny-0R_RgPQPYJeTyjW8qN358YakyywDoRcrT48i1Ek_L1MT61yqdc1NkaH8&usqp=CAU" },
    { name: "Zimu ", price: "₦3,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVPhVozGorvWMZuO0hx4_Z2R8mo9IbcsPLw&s" },
    { name: "Sea salt", price: "₦1500", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvzowwixXCHJNvkrOiFC6cfvtF3vlQH4Dug&s" },
    { name: "Miracle  seed", price: "₦1000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5TmDTY3NyihM49eIjchZY4-t0G1V-UvGAQ&s" },
    { name: "Ginger powder ", price: "₦3,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOO1HL-lTUAZhQw7dHpVfKq8_wcfGqwfM2g&s" },
    { name: "Tumeric powder ", price: "₦2,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJB4Yeymoz-eQMaz2PQuutGUeKxc_Pnzynw&s" },
    { name: "Galic powder ", price: "₦1,500", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-xf9lIUQkqxXGiux0XJXSJStGjiurgUndQ&s" },
    { name: "Persly leaf ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7sRWs8sGmigtfrx71RNd1fbJ-tBMaOGQGQ&s" },
    { name: "Mint leaf ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoUI4TQHubwnGH4TvDINebGDYq6Pa4ZWmSg&s" },
    { name: "Monriga powder ", price: "₦1,500", category: "Seeds & Powders",img:"https://www.hindustantimes.com/ht-img/img/2024/11/23/550x309/moringa_1730632100412_1732361956311.jpeg" },
    { name: "Black seed", price: "₦1,500", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddQ3uEwz_EcKS7Iqbyv6sKZ4uBI5gBl3YRg&s" },
    { name: "Fenugreek ", price: "₦2,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAaRfXN18D5CwpENHLwtSWTtm9UVK_mm-6w&s" },
    { name: "Flex seed ", price: "₦2,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7IrHXtAWSs3vsWvVKdBFzleWeCTXNJkyzQ&s" },
    { name: "Aguaje powder ", price: "₦3,000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg6iVHI4QTJ7hCjA-QmozM1uUd9yBrstYJQ&s" },
    { name: "Nettle powder ", price: "₦3,000", category: "Seeds & Powders",img:"https://www.medikonda.com/cdn/shop/articles/Medikonda-Nettle-Leaf-Powder_c3012a30-d852-4874-9d39-ea863b347c3f_600x.webp?v=1744030798" },
    { name: "Dandelion leaf ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTxn921NfqBLJV3me7h7xrXu4ciYYIoEi-A&s" },
    { name: "Licorice ", price: "₦3,000", category: "Others",img:"https://www.edenbrothers.com/cdn/shop/files/licorice-shk-1.jpg?v=1700598701&width=1445" },
    { name: "Burduck ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTO5f1NxRFqY9Dl_vyi0fFvQxYt6Ciev1Jw&s" },
    { name: "Lemon balm ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8mBfkVHimGjWvqNpNOX63g9uqbgQ7_SfqQ&s" },
    { name: "Red clover ", price: "₦3,000", category: "Others",img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/red-clover-1296x728-header.jpg?w=1155&h=1528" },
    { name: "Rapsberry ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWPuQA-aaHdlRrC6z6wGMKXJvKGxoGTH8Yw&s" },
    { name: "Ceylon cinnamon ", price: "₦2000", category: "Seeds & Powders",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCr_mA4nxNIxdGKJv0MpupigaQaUFulXnCng&s" },
    { name: "Horsetail ", price: "₦3,000", category: "Others",img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/horsetail-1296x728-header.jpg?w=1155&h=1528" },
    { name: "Passion flower ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9GZ95CmqKq8jak0sVw9rkzp4SxPfdDDuPg&s" },
    { name: "Pokeroot ", price: "₦5,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfacNSFVGbc6pQ630t1EPNshJop-zCb4FRQ&s" },
    { name: "Castor oil ", price: "₦4,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukJE0MktOOevfoMW0M0_H37IhGhLrxl8hAw&s" },
    { name: "Damiana ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdHLhwoghHfazoJHyYUdhUJFM3vXzufmb8w&s" },
    { name: "Oregano ", price: "₦3,000", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKa81iqEF1fgtyA5b8SWAQ4Wv7iihPY1yXQ&s" },
    { name: "Coriander ", price: "₦3,000", category: "Herbs",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBeuO-149fQRX0qvLkw2skPdzqPuBHCpLcg&s" },
    { name: "Original honey ", price: "₦?", category: "Others",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vVOD2VPcyGwdNic7ruVrcZBTmakhi9F3Zg&s" },
    { name: "Womb setting herbs  ", price: "₦30,000", category: "Women’s Health",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJwPAZk2l1D462XB-kG5fak8mH8MvrE2fq9fCwXarZH4-YXG5XEXdPIJRXG0O9ejKtQ8&usqp=CAU" },
    { name: "Infection herbs ", price: "₦20,000", category: "Herbs",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKPWXjwfHE8lx2APaBbJXibqSUyUtbEXFmBbq-9aubc8n3Si1c2_anQueE-Eat5r12KE&usqp=CAU" },
    { name: "Ovulation herbs ", price: "₦30,000", category: "Herbs",img:"https://m.media-amazon.com/images/I/71cwggXUXmL.jpg" },
    { name: "Irregular menses herbs ", price: "₦25,000", category: "Herbs",img:"https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16925893285694100.webp" },
    { name: "Fertility herbs ", price: "₦35,000", category: "Herbs",img:"https://cdn.shopify.com/s/files/1/0058/0252/4783/products/Gaia-Herbs-Fertility-Support_LAA87060_101-0519_PDP_x280.png?v=1609883041" },
    { name: "Weak erection for men ", price: "₦25,000", category: "Men’s Health",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpbJpIvZNNTgciuCM9H5r5a87iuXtQ9A3Yw&s" },


    

    // Add more products as needed
  ];

  const productList = document.getElementById("product-list");
  function renderProducts(filter) {
    productList.innerHTML = "";
    const filtered = filter === "All" ? products : products.filter(p => p.category === filter);
    filtered.forEach(product => {
        const card = `
        <div class="col-md-4">
          <div class="product-card bg-white shadow-sm">
            <img src="${product.img}" alt="${product.name}" class="img-fluid mb-2 rounded"/>
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-1">${product.name}</h5>
              <button class="btn btn-outline-danger btn-sm like-btn">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p class="text-muted">${product.price}</p>
            <span class="badge bg-secondary mb-2">${product.category}</span>
            <button class="btn btn-success w-100"><a href="https://wa.me/+23407068444891 " class="btn btn-success btn-lg" style="border: none;">Buy Now</a>
          </button>
          </div>
        </div>`;
      productList.insertAdjacentHTML("beforeend", card);
    });
  }

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.getAttribute("data-category"));
    });
  });

    // Load all products on start
    renderProducts("All");
    document.addEventListener("click", function (e) {
        if (e.target.closest(".like-btn")) {
          e.target.closest(".like-btn").classList.toggle("btn-danger");
          e.target.closest(".like-btn").classList.toggle("btn-outline-danger");
        }
      });