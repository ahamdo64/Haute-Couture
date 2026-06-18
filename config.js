// ===== S.O | سارة عمران - Configuration File =====
// ⚠️ استبدلي قيم Cloudinary بقيم حسابك الخاص

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

    // Contact Info
    contact: {
        email: 'Sarah.omran93@hotmail.com',
        phone: '+86 123 4567 8900',
        location: 'فوجيان، الصين',
        website: 'www.saraomran.com'
    },

    // Brand Info
    brand: {
        name: 'S.O',
        fullName: 'سارة عمران',
        tagline: 'أزياء فاخرة بتصاميم عربية أصيلة',
        year: 2026
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}