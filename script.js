// ===== إعدادات Cloudinary =====
const CLOUDINARY_CONFIG = {
    cloudName: 'dogocjhft',
    uploadPreset: 'Fashion so',
    apiKey: '311581188912479'
};

// ===== إعدادات Firebase =====
const firebaseConfig = {
    apiKey: "AIzaSyDw1zdiz1uS1FJHXn4MtO-FoaM1nweCPTs",
    authDomain: "haute-couture-aa3b3.firebaseapp.com",
    projectId: "haute-couture-aa3b3",
    storageBucket: "haute-couture-aa3b3.firebasestorage.app",
    messagingSenderId: "228011822025",
    appId: "1:228011822025:web:b26d7356d42273d4077618",
    measurementId: "G-670TMS8JBM"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===== المتغيرات العامة =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedFile = null;
let currentFilter = 'all';

// ===== أسماء التصنيفات =====
const categoryNames = {
    evening: '🌙 أزياء السهرة',
    sport: '🏃 أزياء رياضية',
    chic: '💼 ستايل شيك',
    casual: '👟 كاجوال مريح',
    traditional: '🕌 تراثي أصيل',
    wedding: '💍 أعراس وأفراح'
};

// ===== تهيئة الموقع عند التحميل =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDropZone();
    initUploadForm();
    initFilterButtons();
    initContactForm();
    initCartIcon();
    initCategoryCards();
    loadDesigns();
    updateCartCount();
});

// ===== التنقل =====
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            navLinks.classList.remove('active');
            
            // تحديث الرابط النشط
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // تحديث الرابط النشط عند التمرير
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight - 20;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
}

// ===== منطقة السحب والإفلات =====
function initDropZone() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');

    // النقر لاختيار ملف
    dropZone.addEventListener('click', () => fileInput.click());

    // تغيير الملف
    fileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    });

    // السحب والإفلات
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    function handleFile(file) {
        // التحقق من نوع الملف
        if (!file.type.startsWith('image/')) {
            showToast('يرجى اختيار ملف صورة صالح', 'error');
            return;
        }

        // التحقق من حجم الملف (10MB)
        if (file.size > 10 * 1024 * 1024) {
            showToast('حجم الملف يجب أن لا يتجاوز 10MB', 'error');
            return;
        }

        selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            document.querySelector('.drop-zone-content').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

// ===== نموذج الرفع =====
function initUploadForm() {
    const uploadForm = document.getElementById('uploadForm');
    
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            showToast('يرجى اختيار صورة أولاً', 'error');
            return;
        }

        const designName = document.getElementById('designName').value.trim();
        const designCategory = document.getElementById('designCategory').value;
        const designPrice = parseFloat(document.getElementById('designPrice').value) || 0;
        const forSale = document.getElementById('forSale').checked;
        const designDescription = document.getElementById('designDescription').value.trim();

        try {
            // إظهار شريط التقدم
            showProgress(10);

            // رفع الصورة إلى Cloudinary
            showToast('جاري رفع الصورة...', 'info');
            const imageUrl = await uploadToCloudinary(selectedFile);
            showProgress(60);

            // حفظ البيانات في Firebase
            showToast('جاري حفظ البيانات...', 'info');
            await saveDesignToFirebase({
                name: designName,
                category: designCategory,
                price: designPrice,
                forSale: forSale,
                description: designDescription,
                imageUrl: imageUrl,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            showProgress(100);

            showToast('تم رفع التصميم بنجاح! ✨', 'success');
            
            // إعادة تعيين النموذج
            uploadForm.reset();
            selectedFile = null;
            document.getElementById('previewImage').style.display = 'none';
            document.querySelector('.drop-zone-content').style.display = 'block';
            
            // تحديث المعرض
            loadDesigns();
            
            // الانتقال إلى المعرض
            setTimeout(() => scrollToSection('gallery'), 1000);

        } catch (error) {
            console.error('Error:', error);
            showToast('حدث خطأ أثناء رفع التصميم', 'error');
        } finally {
            setTimeout(() => hideProgress(), 500);
        }
    });
}

// ===== رفع إلى Cloudinary =====
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('cloud_name', CLOUDINARY_CONFIG.cloudName);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
        { method: 'POST', body: formData }
    );

    if (!response.ok) {
        throw new Error('فشل رفع الصورة');
    }

    const data = await response.json();
    return data.secure_url;
}

// ===== حفظ في Firebase =====
async function saveDesignToFirebase(designData) {
    await db.collection('designs').add(designData);
}

// ===== تحميل التصاميم =====
async function loadDesigns() {
    try {
        const snapshot = await db.collection('designs')
            .orderBy('createdAt', 'desc')
            .get();

        const designs = [];
        snapshot.forEach(doc => {
            designs.push({ id: doc.id, ...doc.data() });
        });

        renderDesigns(designs);
    } catch (error) {
        console.error('Error loading designs:', error);
        showToast('حدث خطأ في تحميل التصاميم', 'error');
    }
}

// ===== عرض التصاميم =====
function renderDesigns(designs) {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // فلترة حسب التصنيف
    const filteredDesigns = currentFilter === 'all' 
        ? designs 
        : designs.filter(d => d.category === currentFilter);

    if (filteredDesigns.length === 0) {
        galleryGrid.innerHTML = `
            <div class="empty-state">
                <p>لا توجد تصاميم في هذا التصنيف حالياً</p>
            </div>
        `;
        return;
    }

    galleryGrid.innerHTML = filteredDesigns.map(design => `
        <div class="design-card" data-category="${design.category}">
            <img src="${design.imageUrl}" alt="${design.name}" class="design-image" 
                 onclick="window.open('${design.imageUrl}', '_blank')">
            <div class="design-info">
                <h3 class="design-name">${design.name}</h3>
                <p class="design-category">${categoryNames[design.category] || design.category}</p>
                ${design.forSale && design.price > 0 ? `<p class="design-price">${design.price.toFixed(2)} ر.ص</p>` : ''}
                ${design.description ? `<p style="color: var(--gray); font-size: 0.9rem; margin-bottom: 10px;">${design.description}</p>` : ''}
                <div class="design-actions">
                    ${design.forSale ? `<button class="btn-cart" onclick="addToCart('${design.id}', '${design.name}', '${design.imageUrl}', ${design.price})">🛍️ إضافة للسلة</button>` : ''}
                    <button class="btn-download" onclick="downloadImage('${design.imageUrl}', '${design.name}')">⬇️ تحميل</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== أزرار الفلترة =====
function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            loadDesigns();
        });
    });
}

// ===== بطاقات التصنيفات =====
function initCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            currentFilter = category;
            
            // تحديث أزرار الفلترة
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            
            scrollToSection('gallery');
            loadDesigns();
        });
    });
}

// ===== سلة المشتريات =====
function addToCart(id, name, imageUrl, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        showToast('التصميم موجود بالفعل في السلة', 'info');
        return;
    }

    cart.push({ id, name, imageUrl, price });
    saveCart();
    updateCartCount();
    showToast('تمت الإضافة إلى السلة 🛍️', 'success');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    renderCart();
    showToast('تمت إزالة العنصر من السلة', 'info');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function initCartIcon() {
    document.getElementById('cartIconBtn').addEventListener('click', () => {
        const cartSection = document.getElementById('cart');
        if (cartSection.style.display === 'none') {
            cartSection.style.display = 'block';
            renderCart();
            scrollToSection('cart');
        } else {
            cartSection.style.display = 'none';
        }
    });
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-state"><p>السلة فارغة</p></div>';
        document.getElementById('cartTotal').textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)} ر.ص</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">🗑️ حذف</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2) + ' ر.ص';
}

// ===== نموذج إتمام الطلب =====
function showCheckoutForm() {
    if (cart.length === 0) {
        showToast('السلة فارغة', 'error');
        return;
    }
    document.getElementById('checkoutModal').style.display = 'flex';
    
    document.getElementById('checkoutForm').onsubmit = async (e) => {
        e.preventDefault();
        
        const orderData = {
            customer: {
                name: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                phone: document.getElementById('customerPhone').value,
                address: document.getElementById('customerAddress').value
            },
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price, 0),
            notes: document.getElementById('orderNotes').value,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        try {
            await db.collection('orders').add(orderData);
            showToast('تم إرسال طلبك بنجاح! سنتواصل معك قريباً ✨', 'success');
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
            closeModal('checkoutModal');
            document.getElementById('checkoutForm').reset();
            document.getElementById('cart').style.display = 'none';
        } catch (error) {
            console.error('Error:', error);
            showToast('حدث خطأ في إرسال الطلب', 'error');
        }
    };
}

// ===== نموذج التواصل =====
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const messageData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('contactMessage').value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        try {
            await db.collection('messages').add(messageData);
            showToast('تم إرسال رسالتك بنجاح! ✨', 'success');
            document.getElementById('contactForm').reset();
        } catch (error) {
            console.error('Error:', error);
            showToast('حدث خطأ في إرسال الرسالة', 'error');
        }
    });
}

// ===== تحميل الصورة =====
function downloadImage(url, filename) {
    showToast('جاري تحضير التحميل...', 'info');
    
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename + '.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            showToast('تم تحميل الصورة بنجاح ⬇️', 'success');
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('حدث خطأ في التحميل', 'error');
        });
}

// ===== الإشعارات =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== شريط التقدم =====
function showProgress(percent) {
    document.getElementById('progressBar').style.width = percent + '%';
}

function hideProgress() {
    document.getElementById('progressBar').style.width = '0%';
}

// ===== المودال =====
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// إغلاق المودال عند النقر خارجه
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// ===== رسالة ترحيبية =====
console.log('%c✨ S.O Fashion ✨', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%cسارة عمران - تصميم أزياء راقية', 'color: #F4E5B2; font-size: 14px;');
console.log('%cالصين - فوجيان', 'color: #888; font-size: 12px;');