// Translations for each language
const translations = {
    zh: {
        nav: {
            about: "關於我們",
            routes: "巴士路綫",
            notice: "乘客須知",
            contact: "聯絡我們"
        },
        welcome: "歡迎來到絲通運輸網站！",
        wheels: "巴士一定要有車輪。",
        founder: "創辦人及行政總裁",
        name: "LeePresident",
        copyright: "© 2025 洛聖加絲通運輸有限公司",
        about_title: "關於我們",
        about_desc_line1: "洛聖加絲通運輸有限公司（絲巴）於2020年7月17日成立，其後於2021年4月8日成為洛聖加巴士公司聯會成員，正式開展專營巴士業務。",
        about_desc_line2: "絲巴致力提供安全、可靠的巴士服務，為洛聖加注入動力。絲巴目前在洛聖加經營22條路綫，來往市中心、沙花、二十二以及其他地區。未來會隨着城市發展而擴展網絡，方便更多乘客。",
        our_services: "我們的服務",
        fran_bus: "專營巴士服務",
        non_fran_bus: "非專營巴士服務"
    },
    en: {
        nav: {
            about: "About Us",
            routes: "Bus Routes",
            notice: "Passenger Notice",
            contact: "Contact Us"
        },
        welcome: "Welcome to StarTone Transport!",
        wheels: "Buses must have wheels.",
        founder: "Founder and CEO",
        name: "LeePresident",
        copyright: "© 2025 Los Sengas StarTone Transportation Corporations.",
        about_title: "About Us",
        about_desc_line1: "Los Sengas StarTone Transportation Corporations (STT) was established on 17 July 2020 and officially launched the franchised bus services after joining the United Council of Bus Companies in Los Sengas (LSUCBC) on 8 April 2021.",
        about_desc_line2: "STT is committed to providing safe and reliable bus services, energizing Los Sengas. STT currently operates 22 routes across the city, connecting Downtown, Sava, Twenty-second, and other districts. As the city grows, STT will continue to expand the network to better serve more passengers.",
        our_services: "Our Services",
        fran_bus: "Franchised Bus Services",
        non_fran_bus: "Non-franchised Bus Services"
    }
};

// Function to switch language
function switchLanguage(language) {
    // Update content dynamically based on the language
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = translations[language][key] || translations[language].nav[key];
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
const savedLanguage = localStorage.getItem('language') || 'zh'; // Default to 'zh' if no language is saved
switchLanguage(savedLanguage); // Apply the saved language
});

// Event listeners for language buttons
document.getElementById('zh').addEventListener('click', () => {
switchLanguage('zh');
localStorage.setItem('language', 'zh'); // Save the selected language
});

document.getElementById('en').addEventListener('click', () => {
switchLanguage('en');
localStorage.setItem('language', 'en'); // Save the selected language
});