// Fungsi untuk menampilkan produk
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    
    products.forEach(product => {
        container.innerHTML += `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span class="price">${product.price}</span>
                    <button class="rent-button" data-id="${product.id}">Rent Now</button>
                </div>
            </div>
        </div>
        `;
    });
}

// Event listener saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // Render best sellers
    renderProducts(bestSellers, 'best-seller-container');
    
    // Render rental products
    renderProducts(rentalProducts, 'rental-container');
    
    // Event listener untuk tombol rent
    document.querySelectorAll('.rent-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = [...bestSellers, ...rentalProducts].find(p => p.id == productId);
            alert(`You selected: ${product.name}\nPrice: ${product.price}`);
            window.location.href = 'payment.html'; // Redirect to payment page
        });
    });
    
    // Smooth scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});