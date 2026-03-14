// Translations
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_details: "بيانات الشركة",
        nav_services: "الأنشطة المعتمدة",
        nav_contact: "اتصل بنا",
        hero_title: "شركة مراعي الربيع",
        hero_subtitle: "لاستيراد المواد الغذائية والمواشي واللحوم والخضروات والفواكه",
        hero_desc: "شريككم الموثوق في توفير أجود السلع الغذائية والمواشي الحية المعتمدة وفق أعلى معايير الجودة الليبية والعالمية.",
        btn_explore: "استكشف أنشطتنا",
        btn_contact: "تواصل معنا",
        about_title: "من نحن",
        about_company_name_label: "الاسم القانوني",
        about_company_name: "شركة مراعي الربيع لاستيراد المواد الغذائية والمواشي واللحوم والخضروات والفواكه ذات المسؤولية المحدودة",
        about_founded_label: "سنة التأسيس",
        about_vision_label: "رؤيتنا ورسالتنا",
        about_vision_text: "نسعى لأن نكون الشركة الرائدة في ليبيا في مجال استيراد السلع التموينية والمواشي وفقاً لأرفع مواصفات الجودة لضمان أمن غذائي مستدام وتقديم قيمة استثنائية لشركائنا والمجتمع.",
        about_legal_label: "الوضع القانوني",
        about_legal_text: "شركة ذات مسؤولية محدودة مسجلة رسمياً تحت مظلة المصارف التجارية ومصرف ليبيا المركزي (CBL)، تمارس نشاطها وفقاً للقانون رقم (23) لسنة 2010 بشأن النشاط التجاري.",
        details_title: "البيانات القانونية للشركة",
        detail_cr: "رقم السجل التجاري",
        detail_tax: "الرقم الضريبي (رقم الملف المصلحي)",
        detail_license: "رقم رخصة المزاولة",
        detail_chamber: "رقم القيد بغرفة التجارة",
        detail_manager: "اسم الممثل القانوني",
        manager_name: "رضاء إبراهيم رمضان الربيعي",
        detail_address: "العنوان الرسمي",
        address_text: "ليبيا، طرابلس، تاجوراء - بجانب كبري المصانع",
        detail_phone: "رقم الهاتف",
        detail_email: "البريد الإلكتروني",
        services_title: "الأنشطة التجارية والمصرح بها",
        services_subtitle: "الأنشطة المتطابقة تماماً مع غرض التأسيس والسجل التجاري.",
        contact_title: "تواصل معنا",
        contact_address_label: "مقر الشركة",
        contact_phone_label: "الهاتف الرسمي",
        contact_email_label: "البريد الإلكتروني",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_message: "الرسالة",
        form_submit: "إرسال",
        footer_registration: "سجل تجاري رقم: 05010202541436 | دولة ليبيا",
        footer_copyright: "جميع الحقوق محفوظة © 2025 شركة مراعي الربيع.",
        link_privacy: "سياسة الخصوصية",
        link_terms: "الشروط والأحكام"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_details: "Company Details",
        nav_services: "Approved Activities",
        nav_contact: "Contact Us",
        hero_title: "Marai Al-Rabea Company",
        hero_subtitle: "For Importing Foodstuff, Livestock, Meat, Vegetables & Fruits",
        hero_desc: "Your trusted partner in providing the finest food commodities and live livestock meeting the highest Libyan and international quality standards.",
        btn_explore: "Explore Activities",
        btn_contact: "Contact Us",
        about_title: "About Us",
        about_company_name_label: "Legal Name",
        about_company_name: "Marai Al-Rabea Co. for Importing Foodstuff, Livestock, Meat, Vegetables & Fruits LLC",
        about_founded_label: "Founded Year",
        about_vision_label: "Our Vision & Mission",
        about_vision_text: "We aim to be the leading company in Libya in importing foodstuff and livestock adhering to the highest quality specifications, ensuring sustainable food security and delivering exceptional value.",
        about_legal_label: "Legal Status",
        about_legal_text: "A Limited Liability Company officially registered under commercial banks and the Central Bank of Libya (CBL), operating per Law No. (23) of 2010 on Commercial Activity.",
        details_title: "Legal Company Data",
        detail_cr: "Commercial Register No.",
        detail_tax: "Tax Id (File No.)",
        detail_license: "License No.",
        detail_chamber: "Chamber of Commerce No.",
        detail_manager: "Legal Representative",
        manager_name: "Reda Ibrahim Ramadan Al-Rubaie",
        detail_address: "Official Address",
        address_text: "Tajoura - Next to the Factories Bridge, Tripoli, Libya",
        detail_phone: "Phone Number",
        detail_email: "Email Address",
        services_title: "Commercial & Authorized Activities",
        services_subtitle: "Activities matching perfectly with the incorporation purpose and commercial register.",
        contact_title: "Contact Us",
        contact_address_label: "Headquarters",
        contact_phone_label: "Official Phone",
        contact_email_label: "Email Address",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Submit",
        footer_registration: "CR No.: 05010202541436 | State of Libya",
        footer_copyright: "All Rights Reserved © 2025 Marai Al-Rabea Co.",
        link_privacy: "Privacy Policy",
        link_terms: "Terms & Conditions"
    }
};

// Initial Data for Services CMS
const initialServices = [
    {
        id: 1,
        title_ar: "السلع التموينية والمعلبات",
        title_en: "Foodstuff and Canned Goods",
        desc_ar: "استيراد جميع السلع التموينية، البقوليات، المعلبات الغذائية، والمكسرات والتوابل.",
        desc_en: "Importing all food commodities, legumes, canned food, nuts, and spices.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 6L18 6'/%3E%3Cpath d='M8 6L8 22'/%3E%3Cpath d='M16 6L16 22'/%3E%3Crect x='4' y='2' width='16' height='4' rx='1'/%3E%3Crect x='6' y='6' width='12' height='16'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        title_ar: "استيراد المواشي الحية",
        title_en: "Live Livestock Import",
        desc_ar: "استيراد الأبقار، الأغنام، والإبل الحية لغرض الذبح ولغرض التربية.",
        desc_en: "Importing live cattle, sheep, and camels for both slaughter and breeding purposes.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12'/%3E%3Cpath d='M12 22C14.76 22 17 17.52 17 12C17 6.48 14.76 2 12 2C9.24 2 7 6.48 7 12C7 17.52 9.24 22 12 22Z'/%3E%3Cpath d='M2 12H22'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        title_ar: "اللحوم المجمدة والمبردة",
        title_en: "Frozen & Chilled Meat",
        desc_ar: "توريد لحوم الأبقار والأغنام والدواجن والأسماك المجمدة والمبردة بأعلى جودة.",
        desc_en: "Supplying frozen and chilled high-quality beef, lamb, poultry, and fish.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 12H7V22H17V12H22L12 2Z'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        title_ar: "الخضروات والفواكه والمشروبات",
        title_en: "Vegetables, Fruits & Beverages",
        desc_ar: "استيراد وتوزيع أجود أنواع الخضروات والفواكه الطازجة، بالإضافة للعصائر والمشروبات.",
        desc_en: "Importing and distributing the finest fresh vegetables and fruits, alongside juices and beverages.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3Cpath d='M2 12h20'/%3E%3C/svg%3E"
    }
];

// App State
const state = {
    theme: localStorage.getItem('theme') || 'light',
    lang: localStorage.getItem('lang') || 'ar',
    services: JSON.parse(localStorage.getItem('cms_services')) || initialServices
};

// --- DOM & General Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initUI();
    renderServicesGallery();
    initCMS();
});

// UI Event Listeners
function initUI() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.theme);
        initTheme();
    });

    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        state.lang = state.lang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', state.lang);
        initLang();
    });
}

function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const mainLogo = document.getElementById('main-logo');
    const footerLogo = document.getElementById('footer-logo');
    const logoSrc = state.theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';
    if (mainLogo) mainLogo.src = logoSrc;
    if (footerLogo) footerLogo.src = logoSrc;
}

function initLang() {
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('lang-toggle').innerText = state.lang === 'ar' ? 'EN' : 'AR';

    // Update translation texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[state.lang][key]) {
            el.innerText = translations[state.lang][key];
        }
    });

    // Re-render gallery for language specific titles
    renderServicesGallery();
}

function renderServicesGallery() {
    const container = document.getElementById('cms-gallery');
    if (!container) return;
    container.innerHTML = '';

    state.services.forEach(item => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
      <img src="${item.img}" alt="${state.lang === 'ar' ? item.title_ar : item.title_en}" class="service-img" />
      <div class="service-content">
        <h3>${state.lang === 'ar' ? item.title_ar : item.title_en}</h3>
        <p>${state.lang === 'ar' ? item.desc_ar : item.desc_en}</p>
      </div>
    `;
        container.appendChild(card);
    });
}

// --- HIDDEN CMS SYSTEM ---
function initCMS() {
    // Check if we're technically in dev or not: 
    // We'll trust Vite's import.meta.env, but if not available we check window location.
    // Actually the requirement is "must be fully removed in production", 
    // Vite conditionally removes code in `if (import.meta.env.DEV)` blocks!

    if (import.meta.env.DEV) {
        let clickCount = 0;
        let clickTimeout;

        const trigger = document.getElementById('secret-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            clickCount++;
            clearTimeout(clickTimeout);

            if (clickCount >= 5) {
                clickCount = 0;
                openCMSGateway();
            } else {
                clickTimeout = setTimeout(() => {
                    clickCount = 0;
                }, 1000);
            }
        });

        const closeBtn = document.getElementById('cms-close-btn');
        closeBtn.addEventListener('click', closeCMS);

        const loginBtn = document.getElementById('cms-login-btn');
        loginBtn.addEventListener('click', handleCMSLogin);

        const addBtn = document.getElementById('cms-add-btn');
        addBtn.addEventListener('click', () => {
            state.services.push({
                id: Date.now(),
                title_ar: "عنوان جديد", title_en: "New Title",
                desc_ar: "وصف", desc_en: "Description",
                img: ""
            });
            renderCMSList();
        });

        const exportBtn = document.getElementById('cms-export-btn');
        exportBtn.addEventListener('click', () => {
            const jsonStr = JSON.stringify(state.services, null, 2);
            navigator.clipboard.writeText(`const initialServices = ${jsonStr};`).then(() => {
                alert("Copied Array to Clipboard! Paste in main.js initialServices.");
            });
        });
    } else {
        // In production, wipe out CMS HTML safely
        const overlay = document.getElementById('cms-overlay');
        if (overlay) overlay.remove();
    }
}

function openCMSGateway() {
    const overlay = document.getElementById('cms-overlay');
    overlay.classList.remove('hidden');

    const isAuthenticated = sessionStorage.getItem('cms_auth') === 'true';
    if (isAuthenticated) {
        document.getElementById('cms-auth').classList.add('hidden');
        document.getElementById('cms-dashboard').classList.remove('hidden');
        renderCMSList();
    } else {
        document.getElementById('cms-auth').classList.remove('hidden');
        document.getElementById('cms-dashboard').classList.add('hidden');
    }
}

function closeCMS() {
    document.getElementById('cms-overlay').classList.add('hidden');
    renderServicesGallery();
}

function handleCMSLogin() {
    const pin = document.getElementById('cms-pin').value;
    if (pin === '2025') { // PIN code 2025
        sessionStorage.setItem('cms_auth', 'true');
        document.getElementById('cms-auth').classList.add('hidden');
        document.getElementById('cms-dashboard').classList.remove('hidden');
        renderCMSList();
    } else {
        document.getElementById('cms-error').innerText = 'Invalid PIN!';
    }
}

function renderCMSList() {
    const list = document.getElementById('cms-list');
    list.innerHTML = '';

    state.services.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'cms-item';

        // File reader to base64
        el.innerHTML = `
      <img src="${item.img}" class="cms-item-img" id="img-preview-${item.id}" />
      <div class="cms-item-inputs">
        <input type="text" value="${item.title_ar}" onchange="updateCMSItem(${item.id}, 'title_ar', this.value)" placeholder="Arabic Title" />
        <input type="text" value="${item.title_en}" onchange="updateCMSItem(${item.id}, 'title_en', this.value)" placeholder="English Title" />
        <textarea onchange="updateCMSItem(${item.id}, 'desc_ar', this.value)" placeholder="Arabic Desc">${item.desc_ar}</textarea>
        <textarea onchange="updateCMSItem(${item.id}, 'desc_en', this.value)" placeholder="English Desc">${item.desc_en}</textarea>
        <input type="file" accept="image/*" onchange="handleImageUpload(event, ${item.id})" />
      </div>
      <div class="cms-item-controls">
        <button onclick="moveCMSItem(${index}, -1)" class="btn-outline">▲</button>
        <button onclick="moveCMSItem(${index}, 1)" class="btn-outline">▼</button>
        <button onclick="deleteCMSItem(${item.id})" class="btn-outline" style="color: red; border-color: red;">Delete</button>
      </div>
    `;
        list.appendChild(el);
    });
}

// To stick them in global window for inline handlers in dev only:
if (import.meta.env.DEV) {
    window.updateCMSItem = (id, key, value) => {
        const item = state.services.find(i => i.id === id);
        if (item) {
            item[key] = value;
            localStorage.setItem('cms_services', JSON.stringify(state.services));
        }
    };

    window.handleImageUpload = (event, id) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                updateCMSItem(id, 'img', e.target.result);
                document.getElementById(`img-preview-${id}`).src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    window.deleteCMSItem = (id) => {
        state.services = state.services.filter(i => i.id !== id);
        localStorage.setItem('cms_services', JSON.stringify(state.services));
        renderCMSList();
    };

    window.moveCMSItem = (index, dir) => {
        const newIndex = index + dir;
        if (newIndex >= 0 && newIndex < state.services.length) {
            const temp = state.services[index];
            state.services[index] = state.services[newIndex];
            state.services[newIndex] = temp;
            localStorage.setItem('cms_services', JSON.stringify(state.services));
            renderCMSList();
        }
    };
}
