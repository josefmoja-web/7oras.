    // 1. استيراد الفيربيز من روابط مباشرة (CDN) لتعمل في المتصفح بدون تثبيت برامج
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

    // 2. إعدادات مشروعك الحقيقي (horas)
    const firebaseConfig = {
        apiKey: "AIzaSyA-EgWhVWCCyPXYL06NwIwi55bjS6OQ7gA",
        authDomain: "horas-3d603.firebaseapp.com",
        projectId: "horas-3d603",
        storageBucket: "horas-3d603.firebasestorage.app",
        messagingSenderId: "363373667825",
        appId: "1:363373667825:web:a094b63f54a4dca1f99050",
        measurementId: "G-6B0T663X4T",
    };

    // 3. تشغيل الفيربيز ونظام الحسابات
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // ==========================================
    // 4. كود تشغيل زر إنشاء الحساب (Sign Up)
    // ==========================================
    const signUpForm = document.getElementById('signUpForm'); // تأكد من مطابقة الـ ID في الـ HTML الخاص بك
    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('signUpEmail').value; // الـ ID الخاص بحقل الإيميل
            const password = document.getElementById('signUpPassword').value; // الـ ID الخاص بحقل الباسورد

            // دالة فيربيز الحقيقية لإنشاء الحساب
            createUserWithEmailAndPassword(auth, email, password);
                .then((userCredential) => {
                    alert("مبروك! تم إنشاء حسابك بنجاح في قاعدة البيانات الحقيقية.");
                    window.location.href = HTMLPage3.html; // اسم صفحة تسجيل الدخول عندك
                })
                .catch((error) => {
                    // إذا حدث خطأ (مثلاً الإيميل مستخدم سابقاً أو كلمة المرور ضعيفة)
                    alert("خطأ في التسجيل: " + error.message);
                });
        });
    }
}