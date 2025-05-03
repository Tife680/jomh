const products = [
    { name: "Womb and fertility massage", price: "₦25,000", category: "Massage & Services" , img:"https://cdn.pixabay.com/photo/2024/07/01/04/16/ai-generated-8864310_960_720.png"},
    { name: "Walking store", price: "₦10,000 per session", category: "Massage & Services", img:"" },
    { name: "Vitex seed", price: "₦4,000", category: "Seeds & Powders",img:"" },
    { name: "Pumpkin", price: "₦2,000", category: "Seeds & Powders",img:"" },
    { name: "Sunflower", price: "₦1,500", category: "Seeds & Powders",img:"" },
    { name: "Womb setting herbs", price: "₦30,000", category: "Herbs",img:"" },
    { name: "Infection herbs", price: "₦20,000", category: "Herbs",img:"" },
    { name: "Weak erection for men", price: "₦25,000", category: "Men’s Health",img:"" },
    { name: "Fertility herbs", price: "₦35,000", category: "Women’s Health",img:"" },
    { name: "Original honey", price: "₦?", category: "Others",img:"" },
    { name: "bolu", price: "₦?", category: "All",img:"" },

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
