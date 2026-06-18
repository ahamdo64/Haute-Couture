// ===== S.O | سارة عمران - Fashion Portfolio App =====
// Cloudinary + Firebase Integration

// ===================== CONFIGURATION =====================
// ⚠️ استبدلي هذه القيم بقيم حسابك الخاص
const CONFIG = {
    // Cloudinary Config - احصلي عليها من: https://cloudinary.com
    cloudinary: {
        cloudName: 'dogocjhft',        // ← Cloud Name
        uploadPreset: 'Fashion so',   // ← Upload Preset
        apiKey: '311581188912479'                // ← API Key (للرفع الموقّع)
    },

    // Firebase Config - مشروع Haute-Couture
    firebase: {
        apiKey: "AIzaSyDw1zdiz1uS1FJHXn4MtO-FoaM1nweCPTs",
        authDomain: "haute-couture-aa3b3.firebaseapp.com",
        projectId: "haute-couture-aa3b3",
        storageBucket: "haute-couture-aa3b3.firebasestorage.app",
        messagingSenderId: "228011822025",
        appId: "1:228011822025:web:b26d7356d42273d4077618",
        measurementId: "G-670TMS8JBM"
    },

};

// ===================== SAMPLE DESIGNS DATA =====================
const sampleDesigns = [
    {
        id: 1,
        name: 'فستان حرير أحمر سهرة',
        category: 'evening',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop',
        description: 'فستان سهرة فاخر من الحرير الطبيعي بتصميم عصري يناسب الحفلات والمناسبات الخاصة.',
        forSale: true,
        date: '2026-01-15'
    },
    {
        id: 2,
        name: 'بدلة رياضية أنيقة',
        category: 'sport',
        price: 950,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
        description: 'بدلة رياضية مريحة وأنيقة للتمرين والخروج اليومي.',
        forSale: true,
        date: '2026-01-20'
    },
    {
        id: 3,
        name: 'فستان شيك مكتبي',
        category: 'chic',
        price: 1650,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
        description: 'تصميم أنيق للعمل واللقاءات الرسمية بقصة عصرية.',
        forSale: true,
        date: '2026-02-01'
    },
    {
        id: 4,
        name: 'جينز كاجوال مريح',
        category: 'casual',
        price: 680,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
        description: 'جينز عالي الجودة بتصميم كاجوال مريح للاستخدام اليومي.',
        forSale: true,
        date: '2026-02-10'
    },
    {
        id: 5,
        name: 'قفطان مغربي تقليدي',
        category: 'traditional',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
        description: 'قفطان مغربي أصيل بتطريز يدوي فاخر وقماش حريري.',
        forSale: true,
        date: '2026-02-15'
    },
    {
        id: 6,
        name: 'فستان عروس أبيض',
        category: 'bridal',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop',
        description: 'فستان عروس فاخر من الدانتيل والحرير بتصميم ملكي.',
        forSale: true,
        date: '2026-03-01'
    },
    {
        id: 7,
        name: 'فستان سهرة أسود',
        category: 'evening',
        price: 2400,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop',
        description: 'فستان سهرة أسود أنيق بقصة مثالية للمناسبات المسائية.',
        forSale: true,
        date: '2026-03-05'
    },
    {
        id: 8,
        name: 'طقم رياضي يوغا',
        category: 'sport',
        price: 750,
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop',
        description: 'طقم يوغا مرن ومريح بألوان هادئة.',
        forSale: true,
        date: '2026-03-10'
    },
    {
        id: 9,
        name: 'بلوزة شيك بيضاء',
        category: 'chic',
        price: 890,
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop',
        description: 'بلوزة بيضاء أنيقة تصلح للعمل والخروج.',
        forSale: true,
        date: '2026-03-12'
    },
    {
        id: 10,
        name: 'تنورة كاجوال صيفية',
        category: 'casual',
        price: 550,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj1?w=600&h=800&fit=crop',
        description: 'تنورة صيفية خفيفة ومريحة بألوان زاهية.',
        forSale: true,
        date: '2026-03-15'
    },
    {
        id: 11,
        name: 'جلابية إماراتية',
        category: 'traditional',
        price: 2100,
        image: 'https://images.unsplash.com/photo-1617122838600-4e5fc4f507e7?w=600&h=800&fit=crop',
        description: 'جلابية إماراتية فاخرة بتطريز ذهبي.',
        forSale: true,
        date: '2026-03-18'
    },
    {
        id: 12,
        name: 'فستان حنة ذهبي',
        category: 'bridal',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop',
        description: 'فستان حنة فاخر باللون الذهبي والتطريز اليدوي.',
        forSale: true,
        date: '2026-03-20'
    }
];

// ===================== STATE =====================
let designs = [...sampleDesigns];
let cart = [];
let currentFilter = 'all';
let uploadedFiles = [];
let cloudinaryWidget = null;
let db = null;

// ===================== CATEGORY NAMES =====================
const categoryNames = {
    'evening': 'أزياء السهرة',
    'sport': 'أزياء رياضية',
    'chic': 'ستايل شيك',
    'casual': 'كاجوال مريح',
    'traditional': 'تراثي أصيل',
    'bridal': 'أعراس وأفراح'
};

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initCloudinary();
    initFirebase();
    initScrollEffects();
    updateCartCount();
});

// ===================== GALLERY =====================
function initGallery() {
    renderGallery(designs);
}

function renderGallery(items) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1" style="margin-bottom: 20px;">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                </svg>
                <h3 style="font-family: var(--font-ar); color: var(--primary); margin-bottom: 12px;">لا توجد تصاميم</h3>
                <p style="color: var(--gray);">سيتم إضافة تصاميم قريباً</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(design => {
        const favClass = isFavorite(design.id) ? 'favorite active' : 'favorite';
        return `
        <div class="design-card" onclick="openDesignModal(${design.id})">
            <div style="overflow: hidden; border-radius: 20px 20px 0 0; position: relative;">
                <img src="${design.image}" alt="${design.name}" class="design-image" loading="lazy">
                <button class="fav-btn ${favClass}" onclick="event.stopPropagation(); toggleFavorite(${design.id})" title="المفضلة">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFavorite(design.id) ? '#e74c3c' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                </button>
            </div>
            <div class="design-info">
                <span class="design-category">${categoryNames[design.category] || design.category}</span>
                <h3 class="design-name">${design.name}</h3>
                <p class="design-price">¥${design.price.toLocaleString()}</p>
                <div class="design-actions">
                    <button class="btn-order" onclick="event.stopPropagation(); quickOrder(${design.id})">اطلب الآن</button>
                    <button class="btn-download" onclick="event.stopPropagation(); downloadImage('${design.image}', '${design.name}')">تحميل</button>
                </div>
            </div>
        </div>
    `}).join('');
}

function filterGallery(category) {
    currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === 'الكل' && category === 'all') btn.classList.add('active');
        if (category !== 'all' && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // Filter designs
    const filtered = category === 'all' 
        ? designs 
        : designs.filter(d => d.category === category);

    renderGallery(filtered);

    // Scroll to gallery
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// ===================== DESIGN MODAL =====================
let currentDesign = null;

function openDesignModal(id) {
    const design = designs.find(d => d.id === id);
    if (!design) return;

    currentDesign = design;

    document.getElementById('modalImg').src = design.image;
    document.getElementById('modalTitle').textContent = design.name;
    document.getElementById('modalCategory').textContent = categoryNames[design.category] || design.category;
    document.getElementById('modalPrice').textContent = `¥${design.price.toLocaleString()}`;
    document.getElementById('modalDesc').textContent = design.description;

    document.getElementById('designModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('designModal').classList.remove('active');
    document.body.style.overflow = '';
    currentDesign = null;
}

function orderDesign() {
    if (!currentDesign) return;
    closeModal();
    openOrderModal(currentDesign);
}

function downloadDesign() {
    if (!currentDesign) return;
    downloadImage(currentDesign.image, currentDesign.name);
}

// ===================== ORDER MODAL =====================
function openOrderModal(design) {
    currentDesign = design;
    document.getElementById('orderImg').src = design.image;
    document.getElementById('orderDesignName').textContent = design.name;
    document.getElementById('orderDesignPrice').textContent = `¥${design.price.toLocaleString()}`;
    document.getElementById('orderModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('active');
    document.body.style.overflow = '';
}

function quickOrder(id) {
    const design = designs.find(d => d.id === id);
    if (design) openOrderModal(design);
}

function submitOrder(e) {
    e.preventDefault();

    if (!currentDesign) return;

    const orderData = {
        designId: currentDesign.id,
        designName: currentDesign.name,
        price: currentDesign.price,
        customerName: document.getElementById('orderName').value,
        phone: document.getElementById('orderPhone').value,
        email: document.getElementById('orderEmail').value,
        size: document.getElementById('orderSize').value,
        notes: document.getElementById('orderNotes').value,
        date: new Date().toISOString(),
        status: 'pending'
    };

    // Save to LocalStorage (and Firebase if available)
    saveOrderToFirebase(orderData);

    // Add to cart
    addToCart(currentDesign);

    showToast('تم إرسال طلبك بنجاح! سنتواصل معك قريباً', 'success');
    closeOrderModal();

    // Reset form
    e.target.reset();
}

// ===================== CART =====================
function addToCart(design) {
    const existing = cart.find(item => item.id === design.id);
    if (existing) {
        showToast('هذا التصميم موجود بالفعل في السلة', 'error');
        return;
    }

    cart.push(design);
    updateCartCount();
    renderCart();
    showToast('تمت إضافة التصميم إلى السلة', 'success');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = document.querySelector('.cart-count');
    if (count) count.textContent = cart.length;
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray);">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 16px; opacity: 0.5;">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <p>السلة فارغة</p>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>¥${item.price.toLocaleString()}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = total.toLocaleString();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
    document.body.style.overflow = document.getElementById('cartSidebar').classList.contains('active') ? 'hidden' : '';
}

function checkout() {
    if (cart.length === 0) {
        showToast('السلة فارغة', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    showToast(`إجمالي الطلب: ¥${total.toLocaleString()} - جاري إرسال الطلب...`, 'success');

    // Save order to Firebase
    const orderData = {
        items: cart,
        total: total,
        date: new Date().toISOString(),
        status: 'pending'
    };
    saveOrderToFirebase(orderData);

    cart = [];
    updateCartCount();
    renderCart();
    toggleCart();
}

// ===================== CLOUDINARY UPLOAD =====================
function initCloudinary() {
    // Load Cloudinary script dynamically
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/latest/global/all.js';
    script.type = 'text/javascript';
    script.onload = () => {
        console.log('Cloudinary widget loaded');
    };
    document.head.appendChild(script);
}

function openCloudinaryWidget() {
    if (typeof cloudinary === 'undefined') {
        showToast('جاري تحميل Cloudinary... يرجى المحاولة مرة أخرى', 'error');
        return;
    }

    cloudinary.openUploadWidget({
        cloudName: CONFIG.cloudinary.cloudName,
        uploadPreset: CONFIG.cloudinary.uploadPreset,
        sources: ['local', 'url', 'camera'],
        multiple: true,
        maxFiles: 5,
        maxFileSize: 10000000, // 10MB
        cropping: false,
        showAdvancedOptions: true,
        styles: {
            palette: {
                window: '#1a1a2e',
                sourceBg: '#16213e',
                windowBorder: '#d4af37',
                tabIcon: '#d4af37',
                inactiveTabIcon: '#6b6b6b',
                menuIcons: '#d4af37',
                link: '#d4af37',
                action: '#d4af37',
                inProgress: '#d4af37',
                complete: '#27ae60',
                error: '#e74c3c',
                textDark: '#1a1a2e',
                textLight: '#ffffff'
            }
        }
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Upload success:', result.info);
            uploadedFiles.push({
                url: result.info.secure_url,
                publicId: result.info.public_id,
                name: result.info.original_filename
            });
            showToast(`تم رفع الصورة: ${result.info.original_filename}`, 'success');
            updatePreviewArea();
        }
        if (error) {
            console.error('Upload error:', error);
            showToast('حدث خطأ أثناء الرفع', 'error');
        }
    });
}

// ===================== DRAG & DROP UPLOAD =====================
function dragOverHandler(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function dragLeaveHandler(e) {
    e.currentTarget.classList.remove('dragover');
}

function dropHandler(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) {
            showToast('يرجى اختيار ملف صورة فقط', 'error');
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            showToast('حجم الملف كبير جداً (الحد الأقصى 10MB)', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedFiles.push({
                url: e.target.result,
                name: file.name,
                file: file,
                isLocal: true
            });
            updatePreviewArea();
            showUploadForm();
        };
        reader.readAsDataURL(file);
    });
}

function updatePreviewArea() {
    const previewArea = document.getElementById('previewArea');
    if (!previewArea) return;

    previewArea.innerHTML = uploadedFiles.map((file, index) => `
        <div class="preview-item">
            <img src="${file.url}" alt="${file.name}">
            <button class="remove-btn" onclick="removeUploadedFile(${index})">×</button>
        </div>
    `).join('');
}

function removeUploadedFile(index) {
    uploadedFiles.splice(index, 1);
    updatePreviewArea();
    if (uploadedFiles.length === 0) {
        document.getElementById('uploadForm').style.display = 'none';
    }
}

function showUploadForm() {
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('uploadForm').style.display = 'block';
}

function cancelUpload() {
    uploadedFiles = [];
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('uploadForm').style.display = 'none';
    document.getElementById('fileInput').value = '';
    updatePreviewArea();
}

// ===================== UPLOAD DESIGN TO FIREBASE =====================
async function uploadDesign() {
    if (uploadedFiles.length === 0) {
        showToast('يرجى اختيار صورة أولاً', 'error');
        return;
    }

    const name = document.getElementById('designName').value;
    const category = document.getElementById('designCategory').value;
    const price = parseFloat(document.getElementById('designPrice').value) || 0;
    const description = document.getElementById('designDesc').value;
    const forSale = document.getElementById('forSale').checked;

    if (!name) {
        showToast('يرجى إدخال اسم التصميم', 'error');
        return;
    }

    showToast('جاري رفع التصميم...', 'success');

    try {
        // Upload images to Cloudinary first
        const uploadedUrls = [];
        for (const file of uploadedFiles) {
            if (file.isLocal) {
                const url = await uploadToCloudinary(file.file);
                uploadedUrls.push(url);
            } else {
                uploadedUrls.push(file.url);
            }
        }

        // Create design object
        const newDesign = {
            id: Date.now(),
            name: name,
            category: category,
            price: price,
            image: uploadedUrls[0] || uploadedFiles[0].url,
            images: uploadedUrls,
            description: description,
            forSale: forSale,
            date: new Date().toISOString()
        };

        // Save to Firebase
        await saveDesignToFirebase(newDesign);

        // Add to local array
        designs.unshift(newDesign);

        // Refresh gallery
        renderGallery(currentFilter === 'all' ? designs : designs.filter(d => d.category === currentFilter));

        showToast('تم رفع التصميم وحفظه بنجاح!', 'success');

        // Reset form
        cancelUpload();
        document.getElementById('designName').value = '';
        document.getElementById('designPrice').value = '';
        document.getElementById('designDesc').value = '';

    } catch (error) {
        console.error('Upload error:', error);
        showToast('حدث خطأ أثناء الرفع: ' + error.message, 'error');
    }
}

async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CONFIG.cloudinary.uploadPreset);
    formData.append('cloud_name', CONFIG.cloudinary.cloudName);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CONFIG.cloudinary.cloudName}/image/upload`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) throw new Error('Cloudinary upload failed');

    const data = await response.json();
    return data.secure_url;
}

// ===================== LOCALSTORAGE DATABASE (Free Alternative) =====================
// Since Firebase requires billing, we use LocalStorage as a free alternative
// Data persists in the browser and can be exported/imported

const DB = {
    // Save designs to localStorage
    saveDesign: function(design) {
        let designs = this.getDesigns();
        designs.unshift(design);
        localStorage.setItem('sara_designs', JSON.stringify(designs));
        console.log('Design saved to LocalStorage');
    },

    // Get all designs from localStorage
    getDesigns: function() {
        const stored = localStorage.getItem('sara_designs');
        return stored ? JSON.parse(stored) : [];
    },

    // Save order to localStorage
    saveOrder: function(order) {
        let orders = this.getOrders();
        orders.push(order);
        localStorage.setItem('sara_orders', JSON.stringify(orders));
        console.log('Order saved to LocalStorage');
    },

    // Get all orders
    getOrders: function() {
        const stored = localStorage.getItem('sara_orders');
        return stored ? JSON.parse(stored) : [];
    },

    // Save subscriber
    saveSubscriber: function(subscriber) {
        let subscribers = this.getSubscribers();
        subscribers.push(subscriber);
        localStorage.setItem('sara_subscribers', JSON.stringify(subscribers));
        console.log('Subscriber saved to LocalStorage');
    },

    // Get subscribers
    getSubscribers: function() {
        const stored = localStorage.getItem('sara_subscribers');
        return stored ? JSON.parse(stored) : [];
    },

    // Save message from contact form
    saveMessage: function(message) {
        let messages = this.getMessages();
        messages.push(message);
        localStorage.setItem('sara_messages', JSON.stringify(messages));
        console.log('Message saved to LocalStorage');
    },

    // Get messages
    getMessages: function() {
        const stored = localStorage.getItem('sara_messages');
        return stored ? JSON.parse(stored) : [];
    },

    // Export all data as JSON
    exportData: function() {
        const data = {
            designs: this.getDesigns(),
            orders: this.getOrders(),
            subscribers: this.getSubscribers(),
            messages: this.getMessages(),
            exportDate: new Date().toISOString()
        };
        return JSON.stringify(data, null, 2);
    },

    // Import data from JSON
    importData: function(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.designs) localStorage.setItem('sara_designs', JSON.stringify(data.designs));
            if (data.orders) localStorage.setItem('sara_orders', JSON.stringify(data.orders));
            if (data.subscribers) localStorage.setItem('sara_subscribers', JSON.stringify(data.subscribers));
            if (data.messages) localStorage.setItem('sara_messages', JSON.stringify(data.messages));
            console.log('Data imported successfully');
            return true;
        } catch (error) {
            console.error('Import error:', error);
            return false;
        }
    },

    // Clear all data
    clearAll: function() {
        localStorage.removeItem('sara_designs');
        localStorage.removeItem('sara_orders');
        localStorage.removeItem('sara_subscribers');
        localStorage.removeItem('sara_messages');
        localStorage.removeItem('sara_favorites');
        localStorage.removeItem('sara_dark_mode');
        console.log('All data cleared');
    }
};

// ===================== FIREBASE FALLBACK =====================
// If Firebase is available (billing enabled), use it. Otherwise use LocalStorage.
function initFirebase() {
    console.log('Using LocalStorage as database (Firebase billing not enabled)');

    // Try to load Firebase scripts anyway, but fallback to LocalStorage
    const scripts = [
        'https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js'
    ];

    let loaded = 0;
    let failed = false;

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            loaded++;
            if (loaded === scripts.length && !failed) {
                try {
                    firebase.initializeApp(CONFIG.firebase);
                    db = firebase.firestore();
                    console.log('Firebase initialized successfully');
                    loadDesignsFromFirebase();
                } catch (error) {
                    console.log('Firebase init failed, using LocalStorage');
                    loadDesignsFromLocalStorage();
                }
            }
        };
        script.onerror = () => {
            failed = true;
            console.log('Firebase scripts failed to load, using LocalStorage');
            loadDesignsFromLocalStorage();
        };
        document.head.appendChild(script);
    });

    // Fallback: load from LocalStorage after 3 seconds if Firebase doesn't load
    setTimeout(() => {
        if (!db) {
            console.log('Loading from LocalStorage...');
            loadDesignsFromLocalStorage();
        }
    }, 3000);
}

function initializeFirebaseApp() {
    try {
        firebase.initializeApp(CONFIG.firebase);
        db = firebase.firestore();
        console.log('Firebase initialized');
        loadDesignsFromFirebase();
    } catch (error) {
        console.log('Firebase not available, using LocalStorage');
        loadDesignsFromLocalStorage();
    }
}

async function saveDesignToFirebase(design) {
    // Always save to LocalStorage first
    DB.saveDesign(design);

    // Try Firebase if available
    if (db) {
        try {
            await db.collection('designs').doc(design.id.toString()).set(design);
            console.log('Design saved to Firebase');
        } catch (error) {
            console.log('Firebase save failed, saved to LocalStorage only');
        }
    }
}

async function saveOrderToFirebase(order) {
    // Always save to LocalStorage
    DB.saveOrder(order);

    // Try Firebase if available
    if (db) {
        try {
            await db.collection('orders').add(order);
            console.log('Order saved to Firebase');
        } catch (error) {
            console.log('Firebase order save failed, saved to LocalStorage only');
        }
    }
}

async function loadDesignsFromFirebase() {
    if (!db) {
        loadDesignsFromLocalStorage();
        return;
    }

    try {
        const snapshot = await db.collection('designs').orderBy('date', 'desc').get();
        const firebaseDesigns = snapshot.docs.map(doc => doc.data());

        if (firebaseDesigns.length > 0) {
            const existingIds = new Set(designs.map(d => d.id));
            const newDesigns = firebaseDesigns.filter(d => !existingIds.has(d.id));
            designs = [...newDesigns, ...designs];
            renderGallery(currentFilter === 'all' ? designs : designs.filter(d => d.category === currentFilter));
        }
    } catch (error) {
        console.log('Firebase load failed, loading from LocalStorage');
        loadDesignsFromLocalStorage();
    }
}

function loadDesignsFromLocalStorage() {
    const localDesigns = DB.getDesigns();
    if (localDesigns.length > 0) {
        const existingIds = new Set(designs.map(d => d.id));
        const newDesigns = localDesigns.filter(d => !existingIds.has(d.id));
        designs = [...newDesigns, ...designs];
        renderGallery(currentFilter === 'all' ? designs : designs.filter(d => d.category === currentFilter));
        console.log('Loaded', localDesigns.length, 'designs from LocalStorage');
    }
}

// ===================== DOWNLOAD IMAGE =====================
function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${filename || 'design'}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            showToast('تم تحميل الصورة بنجاح', 'success');
        })
        .catch(error => {
            console.error('Download error:', error);
            showToast('حدث خطأ أثناء التحميل', 'error');
        });
}

// ===================== CONTACT FORM =====================
function sendMessage(e) {
    e.preventDefault();

    const formData = {
        name: e.target.querySelector('input[type="text"]').value,
        email: e.target.querySelector('input[type="email"]').value,
        subject: e.target.querySelector('select').value,
        message: e.target.querySelector('textarea').value,
        date: new Date().toISOString()
    };

    // Save to LocalStorage (and Firebase if available)
    DB.saveMessage(formData);
    if (db) {
        db.collection('messages').add(formData)
            .then(() => showToast('تم إرسال رسالتك بنجاح!', 'success'))
            .catch(err => {
                console.error(err);
                showToast('تم إرسال رسالتك بنجاح!', 'success');
            });
    } else {
        showToast('تم إرسال رسالتك بنجاح!', 'success');
    }

    e.target.reset();
}

// ===================== UI HELPERS =====================
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} active`;

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ===================== SCROLL EFFECTS =====================
function initScrollEffects() {
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .design-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu
                document.getElementById('mobileMenu').classList.remove('active');
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================== KEYBOARD SHORTCUTS =====================
document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeModal();
        closeOrderModal();
        if (document.getElementById('cartSidebar').classList.contains('active')) {
            toggleCart();
        }
    }
});

// Close modal on overlay click
document.getElementById('designModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.getElementById('orderModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeOrderModal();
});

console.log('🌟 S.O | سارة عمران - Fashion Portfolio Loaded');
console.log('📍 Location: Fujian, China');


// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    const subscriber = {
        email: email,
        date: new Date().toISOString(),
        source: 'website'
    };

    // Save to Firebase
    if (db) {
        db.collection('subscribers').add(subscriber)
            .then(() => showToast('تم الاشتراك بنجاح! 🎉', 'success'))
            .catch(err => {
                console.error(err);
                showToast('تم الاشتراك!', 'success');
            });
    } else {
        showToast('تم الاشتراك بنجاح!', 'success');
    }

    e.target.reset();
}

// ===================== EMAIL CONTACT =====================
function openEmailClient() {
    window.location.href = 'mailto:Sarah.omran93@hotmail.com?subject=استفسار من موقع S.O | سارة عمران';
}



// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    const subscriber = {
        email: email,
        date: new Date().toISOString(),
        source: 'website'
    };

    // Save to Firebase
    if (db) {
        db.collection('subscribers').add(subscriber)
            .then(() => showToast('تم الاشتراك بنجاح! 🎉', 'success'))
            .catch(err => {
                console.error(err);
                showToast('تم الاشتراك!', 'success');
            });
    } else {
        showToast('تم الاشتراك بنجاح!', 'success');
    }

    e.target.reset();
}

// ===================== EMAIL CONTACT =====================
function openEmailClient() {
    window.location.href = 'mailto:Sarah.omran93@hotmail.com?subject=استفسار من موقع S.O | سارة عمران&body=مرحباً سارة،%0D%0A%0D%0Aأنا مهتم/ة بتصاميمك وأرغب في الاستفسار عن: %0D%0A%0D%0A---%0D%0Aمع خالص التحية';
}

// ===================== SOCIAL SHARE =====================
function shareDesign(designName, designUrl) {
    if (navigator.share) {
        navigator.share({
            title: designName + ' | S.O | سارة عمران',
            text: 'شاهد هذا التصميم الرائع من سارة عمران!',
            url: designUrl || window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        const text = designName + ' | S.O | سارة عمران - ' + (designUrl || window.location.href);
        navigator.clipboard.writeText(text).then(() => {
            showToast('تم نسخ الرابط للمشاركة!', 'success');
        });
    }
}

// ===================== SEARCH DESIGNS =====================
function searchDesigns(query) {
    if (!query || query.trim() === '') {
        renderGallery(currentFilter === 'all' ? designs : designs.filter(d => d.category === currentFilter));
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = designs.filter(d => 
        d.name.toLowerCase().includes(searchTerm) ||
        d.description.toLowerCase().includes(searchTerm) ||
        (categoryNames[d.category] && categoryNames[d.category].includes(searchTerm))
    );

    renderGallery(filtered);

    if (filtered.length === 0) {
        showToast('لا توجد نتائج للبحث', 'error');
    }
}

// ===================== FAVORITES / WISHLIST =====================
let favorites = JSON.parse(localStorage.getItem('sara_favorites') || '[]');

function toggleFavorite(designId) {
    const index = favorites.indexOf(designId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('تمت الإزالة من المفضلة', 'success');
    } else {
        favorites.push(designId);
        showToast('تمت الإضافة إلى المفضلة ❤️', 'success');
    }
    localStorage.setItem('sara_favorites', JSON.stringify(favorites));
    renderGallery(currentFilter === 'all' ? designs : designs.filter(d => d.category === currentFilter));
}

function isFavorite(designId) {
    return favorites.includes(designId);
}

// ===================== DARK MODE TOGGLE =====================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('sara_dark_mode', isDark);
    showToast(isDark ? 'الوضع الليلي مفعل 🌙' : 'الوضع النهاري مفعل ☀️', 'success');
}

function initDarkMode() {
    const saved = localStorage.getItem('sara_dark_mode');
    if (saved === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// ===================== BACK TO TOP =====================
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

// ===================== LAZY LOADING =====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => observer.observe(img));
}

// ===================== ANIMATION ON SCROLL =====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .design-card, .info-card').forEach(el => {
        observer.observe(el);
    });
}


// ===================== INITIALIZE ALL =====================
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initBackToTop();
    initLazyLoading();
    initScrollAnimations();
});

console.log('👗 Ready to showcase beautiful designs!');
console.log('📧 Contact: Sarah.omran93@hotmail.com');
