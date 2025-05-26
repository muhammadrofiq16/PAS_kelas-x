document.addEventListener('DOMContentLoaded', function() {
    // Get rental details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const duration = urlParams.get('duration') || 1;
    const transmissionType = urlParams.get('transmission') || 'Manual';
    const totalPrice = calculateTotalPrice(duration);

    // Display rental details
    document.getElementById('rental-duration').textContent = `${duration} Hari`;
    document.getElementById('transmission-type').textContent = transmissionType;
    document.getElementById('total-price').textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;

    // Form submission handler
    const guaranteeForm = document.getElementById('guarantee-form');
    
    // Tambahkan kode ini di dalam event listener form submission, menggantikan alert yang ada
guaranteeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!document.getElementById('agree-terms').checked) {
        alert('Anda harus menyetujui syarat dan ketentuan');
        return;
    }
    
    // Get form values
    const fullName = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const carName = document.getElementById('car-name').textContent;
    const duration = document.getElementById('rental-duration').textContent;
    const transmission = document.getElementById('transmission-type').textContent;
    const totalPrice = document.getElementById('total-price').textContent;
    
    // Create WhatsApp message
    const message = `Halo, saya ingin menyewa mobil dengan detail berikut:\n\n` +
                    `Nama Lengkap: ${fullName}\n` +
                    `Nomor HP: ${phone}\n` +
                    `Alamat: ${address}\n` +
                    `Jenis Mobil: ${carName}\n` + 
                    `Durasi Sewa: ${duration}\n` +
                    `Transmisi: ${transmission}\n` +
                    `Total Harga: ${totalPrice}\n\n` +
                    `Saya sudah mengisi form jaminan dan siap melanjutkan ke pembayaran.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp with the message
    window.location.href = `https://wa.me/6281215235064?text=${encodedMessage}`;
});
});

function calculateTotalPrice(days) {
    const pricePerDay = 500000;
    const discountThreshold = 2;
    const discountAmount = 100000;
    
    days = parseInt(days);
    let totalPrice = days * pricePerDay;
    
    // Apply discount if rental is for 2 or more days
    if (days >= discountThreshold) {
        totalPrice -= discountAmount;
    }
    
    return totalPrice;
}

// If coming from payment.html, you would typically pass the parameters in the URL
// For this example, we'll simulate it if no parameters are present
if (!window.location.search) {
    // Get values from localStorage or default values
    const duration = localStorage.getItem('rentalDuration') || 1;
    const transmission = localStorage.getItem('selectedTransmission') || 'Manual';
    
    // Update the display
    document.getElementById('rental-duration').textContent = `${duration} Hari`;
    document.getElementById('transmission-type').textContent = transmission;
    document.getElementById('total-price').textContent = `Rp ${calculateTotalPrice(duration).toLocaleString('id-ID')}`;
}