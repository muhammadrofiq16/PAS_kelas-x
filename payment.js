document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image click handler
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Swap the main image with the clicked thumbnail
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            this.src = tempSrc;
            
            // Add animation
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        });
    });
    
    // Transmission type selection
    const transmissionBtns = document.querySelectorAll('.transmission-btn');
    
    transmissionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            transmissionBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Rent button click handler
    // Update rent button link with parameters
const rentBtnLink = document.getElementById('rent-btn-link');
rentBtnLink.addEventListener('click', function(e) {
    const duration = document.querySelector('.duration-value').textContent;
    const transmission = document.querySelector('.transmission-btn.active').textContent;
    
    // Store in localStorage as fallback
    localStorage.setItem('rentalDuration', duration);
    localStorage.setItem('selectedTransmission', transmission);
    
    // Set the href with parameters
    this.href = `jaminan.html?duration=${duration}&transmission=${encodeURIComponent(transmission)}`;
});
    // Navigation smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Duration selector functionality
const minusBtn = document.querySelector('.duration-btn.minus');
const plusBtn = document.querySelector('.duration-btn.plus');
const durationValue = document.querySelector('.duration-value');
const totalPriceElement = document.querySelector('.total-price');
const pricePerDay = 500000; // Harga per hari
const discountThreshold = 2; // Jumlah hari untuk diskon
const discountAmount = 100000; // Jumlah diskon

function updateTotalPrice() {
    const days = parseInt(durationValue.textContent);
    let totalPrice = days * pricePerDay;
    
    // Apply discount if rental is for 2 or more days
    if (days >= discountThreshold) {
        totalPrice -= discountAmount;
    }
    
    // Format the price with thousand separators
    totalPriceElement.textContent = `Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}`;
}

minusBtn.addEventListener('click', function() {
    let days = parseInt(durationValue.textContent);
    if (days > 1) {
        days--;
        durationValue.textContent = days;
        updateTotalPrice();
    }
});

plusBtn.addEventListener('click', function() {
    let days = parseInt(durationValue.textContent);
    days++;
    durationValue.textContent = days;
    updateTotalPrice();
});

// Initialize total price on page load
updateTotalPrice();
