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
    { name: "Ashwangadah ", price: "₦4,000", category: "Others",img:"https://m.media-amazon.com/images/I/41U1Uz5Q9HL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Shatavari ", price: "₦3,000", category: "Seeds & Powders",img:"https://m.media-amazon.com/images/I/71Cn8MkzpwL.jpg" },
    { name: "black cohosh", price: "₦3,000", category: "Others",img:"https://www.seedscape.net.au/wp-content/uploads/2023/04/ACTAEA-RACEMOSA-VAR-CORDIFOLIA.jpg" },
    { name: "Green tea", price: "₦4,000", category: "All",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV74UkBFtfny-0R_RgPQPYJeTyjW8qN358YakyywDoRcrT48i1Ek_L1MT61yqdc1NkaH8&usqp=CAU" },
    { name: "Zimu ", price: "₦3,000", category: "All",img:"" },
    { name: "Sea salt", price: "₦1500", category: "All",img:"" },
    { name: "Miracle  seed", price: "₦1000", category: "All",img:"" },
    { name: "Ginger powder ", price: "₦3,000", category: "All",img:"" },
    { name: "Tumeric powder ", price: "₦2,000", category: "All",img:"" },
    { name: "Galic powder ", price: "₦1,500", category: "All",img:"" },
    { name: "Persly leaf ", price: "₦3,000", category: "All",img:"" },
    { name: "Mint leaf ", price: "₦3,000", category: "All",img:"" },
    { name: "Monriga powder ", price: "₦1,500", category: "All",img:"" },
    { name: "Black seed", price: "₦1,500", category: "All",img:"" },
    { name: "Fenugreek ", price: "₦2,000", category: "All",img:"" },
    { name: "Flex seed ", price: "₦2,000", category: "All",img:"" },
    { name: "Aguaje powder ", price: "₦3,000", category: "All",img:"" },
    { name: "Nettle powder ", price: "₦3,000", category: "All",img:"" },
    { name: "Dandelion leaf ", price: "₦3,000", category: "All",img:"" },
    { name: "Licorice ", price: "₦3,000", category: "All",img:"" },
    { name: "Burduck ", price: "₦3,000", category: "All",img:"" },
    { name: "Lemon balm ", price: "₦3,000", category: "All",img:"" },
    { name: "Red clover ", price: "₦3,000", category: "All",img:"" },
    { name: "Rapsberry ", price: "₦3,000", category: "All",img:"" },
    { name: "Ceylon cinnamon ", price: "₦2000", category: "All",img:"" },
    { name: "Horsetail ", price: "₦3,000", category: "All",img:"" },
    { name: "Passion flower ", price: "₦3,000", category: "All",img:"" },
    { name: "Pokerooot ", price: "₦5,000", category: "All",img:"" },
    { name: "Castor oil ", price: "₦4,000", category: "All",img:"" },
    { name: "Damiana ", price: "₦3,000", category: "All",img:"" },
    { name: "Oregano ", price: "₦3,000", category: "All",img:"" },
    { name: "Coriander ", price: "₦3,000", category: "Herbs",img:"" },
    { name: "Original honey ", price: "₦?", category: "Men’s Health",img:"" },
    { name: "Womb setting herbs  ", price: "₦30,000", category: "Women’s Health",img:"" },
    { name: "Infection herbs ", price: "₦20,000", category: "All",img:"" },
    { name: "Ovulation herbs ", price: "₦30,000", category: "All",img:"" },
    { name: "Irregular menses herbs ", price: "₦25,000", category: "All",img:"" },
    { name: "Fertility herbs ", price: "₦35,000", category: "All",img:"" },
    { name: "Weak erection for men ", price: "₦25,000", category: "All",img:"" },


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
            <img src="${product.img}" alt="${product.name}" class="img-fluid mb-2 rounded" />
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-1">${product.name}</h5>
              <button class="btn btn-outline-danger btn-sm like-btn">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p class="text-muted">${product.price}</p>
            <span class="badge bg-secondary mb-2">${product.category}</span>
            <button class="btn btn-success w-100">Buy Now</button>
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