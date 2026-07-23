document.addEventListener('DOMContentLoaded', () => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const profileBtn = document.getElementById('profileBtn');

    // 1. فتح وإغلاق القائمة عند الضغط على زر الحساب
    profileBtn.addEventListener('click', (event) => {
        // نمنع انتشار الحدث (Propagation) لكي لا يعمل كود الإغلاق التلقائي فوراً
        event.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // 2. إغلاق القائمة تلقائياً عند الضغط في أي مكان آخر بالصفحة
    document.addEventListener('click', (event) => {
        // إذا لم يكن النقر على زر الحساب أو داخل القائمة المنسدلة نفسها، نقوم بإغلاقها
        if (!profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('active');
        }
    });
});
// 1. قاموس الترجمات (أضف هنا أي كلمات جديدة لكل صفحات موقعك)
const translations = {
    ar: {
        site_title: "موقعي المتكامل",
        welcome_title: "مرحباً بك في موقعي المتكامل!",
        welcome_desc: "هنا تم دمج خاصية تغيير اللغة والوضع الداكن معاً برمجياً وبشكل متناسق تماماً.",
        theme_light: "الوضع الفاتح",
        theme_dark: "الوضع الداكن",
        next_lang: "English",
        theme: "زيم الموقع",
        language: "اللغة",
        welcometitle: "مرحباً",
        hwelcome: "اهلا بك في موقعنا",
        butunc: "إكمال ⬅️",
        em: "الإيميل",
        pass: "كلمة المرور",
        sub: "تأكيد",
        signup: "صنع حساب",
        pas: "اكتب كلمة المرور",
        e: "اكتب الايميل",
        dn: "اسم العرض",
        un: "اسم الحساب",
        si: "تسجيل الدخول",
        s: "الإعدادات",
        og: "العابنا",
        gtitle: "حورس",
        wetitle: "تحذير !!",
        wedesc: " يمنع منعاً باتاً نسخ ملفات الالعاب والتطبيقات وانسابها لمجهودك الشخصي فهي تخضع الى حقوق النشر والطبع لعام 2026 وقد عمل على صنع تلك الالعاب والتطبيقات فرقة من اهم مختصين البرمجة والتصميم في مصر والشرق الأوسط",
        copy: "7oras © ",
        webtitle: "نبذة عن 7oras Co",
        wwtitle: "شركة 7oras Co هي شركة محترفة في صناعة التطبيقات والالعاب المستقلة وقريباً سوف يكون لها سمعة تمتد من بداية الوطن العربي حتى نهايته ",
        apps: "التطبيقات",
        games: "الألعاب",
        settings_title: "الإعدادات",
        role_user: "حساب شخصي",
        nav_profile: "الحساب الشخصي",
        nav_security: "الأمان والخصوصية",
        nav_notifications: "الإشعارات",
        nav_preferences: "التفضيلات والعرض",

        section_profile: "تعديل الملف الشخصي",
        label_name: "الاسم كامل",
        label_email: "البريد الإلكتروني",
        btn_save: "حفظ التغييرات",

        section_preferences: "مظهر الموقع واللغة",
        row_theme_title: "مظهر الواجهة",
        row_theme_desc: "التبديل بين الوضع الداكن والوضع الفاتح المريح للعين.",
        row_lang_title: "لغة الموقع",
        row_lang_desc: "اختر اللغة المفضلة لتصفح المنصة.",
        theme_light: "الوضع الفاتح",
        theme_dark: "الوضع الداكن",
        next_lang: "English",

        section_security: "الأمان وحماية الحساب",
        label_old_pass: "كلمة المرور الحالية",
        label_new_pass: "كلمة المرور الجديدة",
        row_2fa_title: "التحقق بخطوتين (2FA)",
        row_2fa_desc: "إضافة طبقة أمان إضافية لحسابك عبر رمز يصل لهاتفك.",
        btn_update_pass: "تحديث الأمان",

        section_notifications: "إعدادات التنبيهات",
        row_notif_email: "إشعارات البريد الإلكتروني",
        row_notif_email_desc: "استقبال تقارير أسبوعية وتحديثات المنصة عبر البريد.",
        row_notif_offers: "العروض والخصومات",
        row_notif_offers_desc: "تنبيهي عند وجود خصومات أو ميزات جديدة متاحة.",

        section_danger: "منطقة الخطر",
        row_delete_title: "حذف الحساب نهائياً",
        row_delete_desc: "بمجرد حذف الحساب، سيتم إزالة جميع بياناتك ولا يمكن استعادتها.",
        btn_delete: "حذف الحساب",

        alert_save: "تم حفظ التغييرات بنجاح!",
        alert_delete: "تحذير: هل أنت متأكد من حذف الحساب؟",
        av: "؟",
        arrow: "➡️",
        ga: "الألعاب",
        ap: "التطبيقات",
        welcome70: "نسعى دائماً لننال رضاكم الكامل",
        sc: "رعب",
        im: "إمبوستر",
        mp: "لعب جماعي",
        sh: "شوتر",
        st: "قصة",
        so: "سولز",
        ag: "كل الألعاب",
        welcome7: "مرحباً بك في موقع حورس",
        kog: "نوع الألعاب",
        app:"تطبيق الخيارات",
    },
    en: {
        site_title: "My Integrated Site",
        welcome_title: "Welcome to my integrated website!",
        welcome_desc: "Here, language switching and dark mode are fully integrated together programmatically.",
        theme_light: "Light Mode",
        theme_dark: "Dark Mode",
        next_lang: "العربية",
        theme: "website theme",
        language: "language",
        welcometitle: "welcome",
        hwelcome: "welcom to our website",
        butunc: "Contnue ➡️",
        em: "E-Mail",
        pass: "Password",
        sub: "Submit",
        signup: "Sign up",
        pas: "Enter Your Password",
        e: "Enter Your E-mail",
        dn: "Display Name",
        un: "User Name",
        si: "Sign in",
        s: "settings",
        og: "our games",
        gtitle: "7ORAS",
        wetitle: "warning!!",
        wedesc: "",
        copy: " © 7oras",
        webtitle: "nabza 3an 7oras Co",
        wwtitle: "",
        apps: "The Apps",
        games: "The Games",
        settings_title: "Settings",
        role_user: "Personal Account",
        nav_profile: "Personal Profile",
        nav_security: "Security & Privacy",
        nav_notifications: "Notifications",
        nav_preferences: "Preferences & Display",

        section_profile: "Edit Profile",
        label_name: "Full Name",
        label_email: "Email Address",
        btn_save: "Save Changes",

        section_preferences: "Site Appearance & Language",
        row_theme_title: "Interface Theme",
        row_theme_desc: "Switch between dark and light mode comfortable for the eyes.",
        row_lang_title: "Site Language",
        row_lang_desc: "Choose your preferred language to browse the platform.",
        theme_light: "Light Mode",
        theme_dark: "Dark Mode",
        next_lang: "العربية",

        section_security: "Security & Account Protection",
        label_old_pass: "Current Password",
        label_new_pass: "New Password",
        row_2fa_title: "Two-Factor Authentication (2FA)",
        row_2fa_desc: "Add an extra layer of security using a code sent to your phone.",
        btn_update_pass: "Update Security",

        section_notifications: "Notification Settings",
        row_notif_email: "Email Notifications",
        row_notif_email_desc: "Receive weekly reports and platform updates via email.",
        row_notif_offers: "Offers & Discounts",
        row_notif_offers_desc: "Notify me when discounts or new features are available.",

        section_danger: "Danger Zone",
        row_delete_title: "Permanent Account Deletion",
        row_delete_desc: "Once deleted, all your data will be removed and cannot be recovered.",
        btn_delete: "Delete Account",

        alert_save: "Changes saved successfully!",
        alert_delete: "Warning: Are you sure you want to delete your account?",
        av: "?",
        arrow: "⬅️",
        ga: "Games",
        ap: "Applications",
        welcome70:"We Always Want To Have Your Sattisfaying",
        sc:"Scary",
        im:"Imposter",
        mp:"Multiplayer",
        sh:"Shoter",
        st:"Story",
        so:"Souls",
        ag:"All Games",
        welcome7: "Welcome to 7oras website",
        kog: "Kind Of Games",
        app:"Apply",
    }
};
const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.settings-section');

// عناصر الـ Switches (الأزرار الانزلاقية)
const switch2FA = document.getElementById('switch-2fa');
const switchEmail = document.getElementById('switch-email');
const switchOffers = document.getElementById('switch-offers');

// أزرار الحفظ الإضافية للتفاعل
const saveProfileBtn = document.getElementById('save-profile-btn');
const updateSecurityBtn = document.getElementById('update-security-btn');
const deleteAccountBtn = document.getElementById('delete-account-btn');

// =================================================================
// 3. محرك تشغيل اللغة والترجمة الشاملة
// =================================================================
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('user-lang', lang);

    // ترجمة كافة العناصر التي تحتوي على خاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // تحديث أزرار اللغات والثيمات بناءً على اللغة الحالية
    if (langToggleBtn) langToggleBtn.textContent = translations[lang]['next_lang'];
    updateThemeButtonText();
}

// =================================================================
// 4. محرك تشغيل الوضع الداكن والفاتح
// =================================================================
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
    localStorage.setItem('user-theme', theme);
    updateThemeButtonText();
}

function updateThemeButtonText() {
    if (!themeToggleBtn) return;
    const currentLang = document.documentElement.lang;
    const currentTheme = document.body.getAttribute('data-theme');
    themeToggleBtn.textContent = currentTheme === 'dark' ? translations[currentLang]['theme_light'] : translations[currentLang]['theme_dark'];
}

// =================================================================
// 5. نظام التنقل الاحترافي بين الأقسام (Tab Switching)
// =================================================================
if (navItems.length > 0) {
    // تشغيل القسم الأول فقط وإخفاء الباقي عند التحميل
    const activeHash = window.location.hash || '#profile';
    showSection(activeHash);

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            window.location.hash = targetId; // تغيير الهيدر في الرابط
            showSection(targetId);
        });
    });
}

function showSection(targetId) {
    // تحديث شكل الأزرار الجانبية النشطة
    navItems.forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('href') === targetId) nav.classList.add('active');
    });

    // إخفاء كافة الأقسام وإظهار القسم المطلوب فقط
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // إذا تم اختيار الأمان، نعرض معه منطقة الخطر بالأسفل كشكل احترافي
        if (targetId === '#security') {
            const dangerSection = document.getElementById('danger');
            if (dangerSection) dangerSection.style.display = 'block';
        }
    }
}

// =================================================================
// 6. تشغيل وحفظ حالات أزرار التبديل (Switches Persistence)
// =================================================================
function loadSwitchStates() {
    if (switch2FA) switch2FA.checked = localStorage.getItem('switch-2fa') === 'true';
    if (switchEmail) switchEmail.checked = localStorage.getItem('switch-email') === 'true';
    if (switchOffers) switchOffers.checked = localStorage.getItem('switch-offers') === 'true';
}

if (switch2FA) switch2FA.addEventListener('change', () => localStorage.setItem('switch-2fa', switch2FA.checked));
if (switchEmail) switchEmail.addEventListener('change', () => localStorage.setItem('switch-email', switchEmail.checked));
if (switchOffers) switchOffers.addEventListener('change', () => localStorage.setItem('switch-offers', switchOffers.checked));

// =================================================================
// 7. تفعيل الأحداث للأزرار والتشغيل الأولي
// =================================================================
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
    });
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// أزرار الحفظ التفاعلية (تظهر تنبيهات مترجمة)
if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => alert(translations[document.documentElement.lang]['alert_save']));
}
if (updateSecurityBtn) {
    updateSecurityBtn.addEventListener('click', () => alert(translations[document.documentElement.lang]['alert_save']));
}
if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
        if (confirm(translations[document.documentElement.lang]['alert_delete'])) {
            // هنا يوضع كود الحذف الفعلي مستقبلاً
            console.log('Account deleted');
        }
    });
}

// التشغيل الفوري عند تحميل الصفحة
const savedLang = localStorage.getItem('user-lang') || 'ar';
const savedTheme = localStorage.getItem('user-theme') || 'light';

setLanguage(savedLang);
setTheme(savedTheme);
loadSwitchStates();
