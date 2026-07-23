import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 2. مفاتيح مشروعك "Horas" الحقيقية اللي أنت جبتها
const firebaseConfig = {
    apiKey: "AIzaSyA-EgWhVWCCyPXYL06NwIwi55bjS6OQ7gA",
    authDomain: "horas-3d603.firebaseapp.com",
    projectId: "horas-3d603",
    storageBucket: "horas-3d603.firebasestorage.app",
    messagingSenderId: "363373667825",
    appId: "1:363373667825:web:a094b63f54a4dca1f99050",
    measurementId: "G-6B0T663X4T"
};

// 3. تهيئة الفايربيس وتشغيل نظام الـ Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. ربط الأزرار بعد ما عناصر الـ HTML تتحمل بالكامل
document.addEventListener("DOMContentLoaded", () => {

    // ---- [أ] كود إنشاء حساب جديد (Sign-Up) ----
    const signUpBtn = document.getElementById('signUpBtn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('signUpEmail').value.trim();
            const password = document.getElementById('signUpPassword').value;

            if (!email || !password) {
                alert("من فضلك اكتب البريد الإلكتروني وكلمة المرور أولاً!");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("🎉 تم إنشاء حسابك بنجاح في مشروع Horas!");
                })
                .catch((error) => {
                    alert("خطأ في التسجيل: " + error.message);
                });
        });
    }

    // ---- [ب] كود تسجيل الدخول بالإيميل (Sign-In) ----
    const signInBtn = document.getElementById('signInBtn');
    if (signInBtn) {
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('signInEmail').value.trim();
            const password = document.getElementById('signInPassword').value;

            if (!email || !password) {
                alert("من فضلك أدخل الإيميل والباسورد لدخول حسابك!");
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("🔓 تم تسجيل الدخول بنجاح! أهلاً بك.");
                })
                .catch((error) => {
                    alert("خطأ في الدخول: " + error.message);
                });
        });
    }

    // ---- [ج] كود تسجيل الدخول بـ Google ----
    const googleBtn = document.getElementById('googleBtn');
    if (googleBtn) {
        const provider = new GoogleAuthProvider();
        googleBtn.addEventListener('click', () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                })
                .catch((error) => {
                    alert("فشل دخول جوجل: " + error.message);
                });
        });
    }

    // ---- [د] كود تسجيل الدخول كـ زائر (Anonymous) ----
    const anonymousBtn = document.getElementById('anonymousBtn');
    if (anonymousBtn) {
        anonymousBtn.addEventListener('click', () => {
            signInAnonymously(auth)
                .then(() => {
                    alert("👤 دخلت كزائر سريع بنجاح!");
                })
                .catch((error) => {
                    alert("خطأ كزائر: " + error.message);
                });
        });
    }
});
