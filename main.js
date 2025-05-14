const products = [
  { name: "Womb and fertility massage", price: "₦25,000", category: "Massage & Services", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ihm2TuyfHZy3onpvDmyPZ1djS8vSHZeyTw&s"},
  { name: "Vitex seed", price: "₦4,000", category: "Seeds & Powders", img:"https://emstahherbals.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-23-at-00.28.27.jpeg" },
  { name: "Pumpkin", price: "₦2,000", category: "Seeds & Powders", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjz47SScAhB9bxJx_SPAHt_Ao0ttvEAMyzw&s" },
  { name: "Sunflower", price: "₦1,500", category: "Seeds & Powders", img:"https://www.amritahealthfoods.com/cdn/shop/articles/img-1677260300100.png?v=1677345526" },
  { name: "Womb setting herbs", price: "₦30,000", category: "Herbs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJwPAZk2l1D462XB-kG5fak8mH8MvrE2fq9fCwXarZH4-YXG5XEXdPIJRXG0O9ejKtQ8&usqp=CAU" },
  { name: "Infection herbs", price: "₦20,000", category: "Herbs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKPWXjwfHE8lx2APaBbJXibqSUyUtbEXFmBbq-9aubc8n3Si1c2_anQueE-Eat5r12KE&usqp=CAU" },
  { name: "Weak erection for men", price: "₦25,000", category: "Men’s Health", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpbJpIvZNNTgciuCM9H5r5a87iuXtQ9A3Yw&s" },
  { name: "Fertility herbs", price: "₦35,000", category: "Women’s Health", img:"https://cdn.shopify.com/s/files/1/0058/0252/4783/products/Gaia-Herbs-Fertility-Support_LAA87060_101-0519_PDP_x280.png?v=1609883041" },
  { name: "Original honey", price: "₦5,000", category: "Others", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVFEpuXLq8sIp_0tZVDJuFihIfk3SLBN9pQ&s" }
];


    // Add more products as needed

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
           <button class="btn btn-success w-100"><a href="https://wa.me/+23407068444891 " class="btn btn-success btn-lg" style="border: none;">Buy Now</a>
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

    //   contact


  document.getElementById("general").addEventListener("click", () => {
    selectedOption = "General Inquiry";
    document.getElementById("general").classList.add("btn-primary");
    document.getElementById("general").classList.remove("btn-outline-primary");
    document.getElementById("support").classList.add("btn-outline-secondary");
    document.getElementById("support").classList.remove("btn-secondary");
  });

  document.getElementById("support").addEventListener("click", () => {
    selectedOption = "Product Support";
    document.getElementById("support").classList.add("btn-secondary");
    document.getElementById("support").classList.remove("btn-outline-secondary");
    document.getElementById("general").classList.add("btn-outline-primary");
    document.getElementById("general").classList.remove("btn-primary");
  });

  document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "2349012345678"; // Change to your WhatsApp number (without +)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `*${selectedOption}*\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    
    window.open(url, "_blank");
  });

