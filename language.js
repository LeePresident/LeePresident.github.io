// Translations for each language
const translations = {
    zh: {
        nav: {
            index: "首頁",
            about: "關於我們",
            routes: "巴士路綫",
            news: "最新消息",
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
        non_fran_bus: "非專營巴士服務",
        contact_us: "聯絡我們",
        contact_desc: "如有任何查詢，請聯絡我們：<br>電話：19190810<br>網站：leepresident.github.io<br>地址：洛聖加市中心華環街5號絲逸商業大廈3-7樓",
        news_title: "最新消息",
        news_content: "目前沒有最新消息。"
    },
    en: {
        nav: {
            index: "Home",
            about: "About Us",
            routes: "Bus Routes",
            news: "Latest News",
            notice: "Passenger Notice",
            contact: "Contact Us"
        },
        welcome: "Welcome to StarTone Transport!",
        wheels: "Buses must have wheels.",
        founder: "Founder and CEO",
        name: "LeePresident",
        copyright: "© 2025 Los Sengas StarTone Transportation Corporations",
        about_title: "About Us",
        about_desc_line1: "Los Sengas StarTone Transportation Corporations (STT) was established on 17 July 2020 and officially launched the franchised bus services after joining the United Council of Bus Companies in Los Sengas (LSUCBC) on 8 April 2021.",
        about_desc_line2: "STT is committed to providing safe and reliable bus services, energizing Los Sengas. STT currently operates 22 routes across the city, connecting Downtown, Sava, Twenty-second, and other districts. As the city grows, STT will continue to expand the network to better serve more passengers.",
        our_services: "Our Services",
        fran_bus: "Franchised Bus Services",
        non_fran_bus: "Non-franchised Bus Services",
        contact_us: "Contact Us",
        contact_desc: "For any inquiries, please contact us:<br>Phone: 19190810<br>Website: leepresident.github.io<br>Address: 3-7/F, StarOne Commercial Building, 5 Wildring Street, Downtown, Los Sengas",
        news_title: "Latest News",
        news_content: "No news at this time."
    }
};

// language.js
const passengerNotice = {
    zh:{
        title: "乘客須知",
        description: "為閣下及其他乘客的安全及舒適着想，請乘客遵守下列規則：",
        rules: [
          "請依指示排隊登車，並禮讓輪椅乘客優先上車。",
          "請於指定閘門上落車及照顧同行的小孩及長者。",
          "請自備現金或以電子支付方式繳付車費，不設找續。乘客不可在車廂內向其他乘車者收集巴士車費。",
          "登車後，請盡量行入車廂內部。",
          "當巴士已滿座時，車長有權拒絕候車人士繼續登車。",
          "車長有權拒絕任何引致騷擾或構成危險性的人士登上或乘搭巴士，例如神智不清、骯髒或衣衫不整的人士。",
          "不可攜帶活禽鳥、寵物或其他動物上車（陪同失明人士乘車的領行狗隻除外）。",
          "只准攜帶總體積不超過十份一立方米及總重量不超逾五公斤、不含危險性或厭惡性之物件上車。該物件不得佔用座位及不得放置在巴士的通道上或樓梯上。",
          {
            subRule: "如需攜帶自用醫療壓縮氧氣瓶(「氧氣瓶」)乘坐巴士，乘客應：",
            details: [
              "使用連接氧氣瓶的鼻喉或氧氣罩吸入氧氣，向車長顯示有關氧氣瓶乃供其個人醫療之用；",
              "在登車前，向車長申報其所攜帶的氧氣瓶數量，並在得到車長同意後方繳付車費；及",
              "在下車前告知車長。"
            ]
          },
          "如攜帶氧氣瓶的乘客拒絕遵從相關規定，或該乘客登車後車上的氧氣瓶數目會超過兩個，車長有權拒絕該乘客登車。",
          "如需落車請預早按鐘示意，使車長有充足的時間作出準備。",
          {
            subRule: "請勿阻塞樓梯及閘門通道。車長為保障車內乘客及行車安全，有權向乘客發出其認為為公眾安全著想的指示，包括要求：",
            details: [
              "攜帶嬰兒車的乘客，須抱起嬰兒及把摺妥的嬰兒車放於合適位置（兒童輪椅除外）；",
              "攜帶單車的乘客須在登車前預先將單車摺合及包裝妥當等。"
            ]
          },
          "巴士行駛時，不可站於車內黃線以外，以免阻礙車長視線。",
          "巴士行駛時，不得在雙層巴士上層及梯級站立。",
          "在車廂內走動、上落樓梯或站立時請緊握扶手。如座位設有安全帶，請將安全帶扣上。",
          "請讓座予有需要人士，例如長者、殘疾人士、孕婦或帶同嬰幼兒的乘客。",
          "除因安全理由外，不得於行車時與車長談話。不得恐嚇、謾罵或以侮辱性的言語或動作，或以任何其他方式騷擾車長或車廂內之乘客。",
          "不得塗污或毀壞巴士任何部份。",
          "法例嚴禁在車廂內吸煙。請勿於車廂內飲食，吐涎或丟棄垃圾，以保持車廂清潔。",
          "在車廂內拾獲其他乘客遺留之物件須立即交予車長或站長處理。",
          "為其他乘客設想，請勿在車內作出令其他乘客感到煩擾的行為（例如高聲談話、剪指甲、用腳頂著前面椅背或將腳踏在座椅上等）。",
          "有呼吸道感染症狀或發燒者，請佩戴外科口罩乘車。",
          "六十五歲或以上長者、三至十一歲兒童及十二至二十五歲學生，收費為成人單程車費的一半（不足一角作一角計算）。",
          "每位成人乘客可免費帶同最多兩名三歲以下而且不佔座位的兒童乘車。",
          "不要使用總額超過二元的一角、二角或五角輔幣繳付車費。",
          "行車班次或會因應道路交通情況調整，並不會先行通告。"
        ]
    },
    en: {
        title: "Notes to Passengers",
        description: "For your comfort and safety and that of other passengers, please observe the following rules:",
        rules: [
          "Please queue up for and board the bus as directed; give passengers in wheelchairs priority in boarding the bus.",
          "Please board and alight by means of specified doors; take care of accompanying children and elderly passengers.",
          "Please tender the exact fare or pay by e-payment method. No change will be provided. Passengers may not collect bus fares from other passengers on the bus.",
          "Please move into the bus compartment after boarding.",
          "The bus captain has the right to refuse further boarding when the bus has reached the authorised carrying capacity.",
          "The bus captain may refuse to permit any person who is believed to be intoxicated, in a dirty condition or indecently dressed to enter or travel on the bus to avoid causing disturbance or danger to other passengers.",
          "Do not bring live poultry, birds, pets or any other animals onto the bus (except guide dogs accompanying the blind).",
          "Each passenger is only allowed to carry parcel(s) of a total volume not exceeding 0.1m3 and a total weight not exceeding 5 kg and not containing goods of a dangerous or offensive nature. The parcel(s) shall not occupy any seat and shall not be placed in the gangway or stairway of the bus.",
          {
            subRule: "To carry compressed oxygen cylinder(s) for self-medical use ('oxygen cylinder(s)') onto a bus, a passenger should:",
            details: [
              "show that the cylinder(s) is/are for self-medical use by inhaling the oxygen through a nasal cannula or oxygen mask connecting to the oxygen cylinder(s);",
              "declare to the bus captain the number of oxygen cylinders brought before boarding and obtain the bus captain's consent before paying the fare; and",
              "inform the bus captain before alighting."
            ]
          },
          "The bus captain has the right to refuse the boarding of the passenger with oxygen cylinder(s) if he/she refuses to comply with the relevant requirements or if the boarding of the passenger will lead to the total number of oxygen cylinders on board exceeding two.",
          "When wishing to alight, press the stop button in advance to allow sufficient time for the bus captain to stop.",
          {
            subRule: "Please do not obstruct the staircase or doorways. The bus captain may give directions in the interests of public safety to any passenger, including requesting:",
            details: [
              "passengers travelling with a baby stroller to fold and place the stroller properly in the bus (except for pediatric wheelchairs);",
              "passengers carrying a bicycle to fold and pack the bicycle properly before boarding the bus."
            ]
          },
          "Do not stand beyond the yellow line marked inside the bus compartment when the bus is in motion to keep the bus captain's sightline clear.",
          "Do not stand on the upper deck or staircase of a double-deck bus when the bus is in motion.",
          "Hold the handrails tightly when standing or moving about inside the bus compartment and on the staircase. Sit down when seats are available and fasten the seat belt if one is installed.",
          "Please offer your seat to those in need, such as the elderly, the disabled, pregnant women or those travelling with young children.",
          "Do not speak to the bus captain when the bus is in motion unless it is necessary to do so on the grounds of safety. Do not use any intimidating, insulting or abusive language or act in a manner likely to disturb the bus captain or other passengers on board.",
          "Do not write graffiti on or vandalise any part of the bus.",
          "Smoking on buses is strictly prohibited by law. Please do not eat, drink, spit or litter on board in order to keep the bus compartment clean.",
          "A passenger who finds any property that has been left on the bus should immediately hand it in the state in which he/she finds it to the bus captain or the terminus supervisor.",
          "Please be considerate to fellow passengers, and refrain from causing a nuisance to others by talking too loudly, clipping nails, pushing against the seat in front with your knees, putting your feet on the seats, etc.",
          "Passengers with temperature or respiratory problems should wear a face mask.",
          "Senior citizens aged 65 and over, children under the age of 12 and students aged under 26 are charged one-half of the adult single fare rounded up to the nearest ten cents.",
          "Children under the age of 3, if accompanied by an adult and not occupying a seat, will be carried free of charge. No more than two children will be carried free of charge per adult.",
          "Do not use coins of denominations of less than $1 for payment of an amount exceeding $2.",
          "The scheduled bus frequency may be adjusted subject to traffic conditions without prior notice to passengers."
        ]
    }
};

// `routesData` holds route table data loaded from `routes.json` at runtime.
// Keep minimal defaults so the UI doesn't break if the JSON isn't available.
let routesData = {
    zh: {
        tableTitle: "巴士路綫",
        routeNumber: "編號",
        startPoint: "起點",
        endPoint: "終點",
        remarks: "備註",
        rows: []
    },
    en: {
        tableTitle: "Bus Routes",
        routeNumber: "Number",
        startPoint: "Start Point",
        endPoint: "End Point",
        remarks: "Remarks",
        rows: []
    }
};

// Load admin-managed news from external JSON (optional).
function loadNewsFromJSON() {
    // Use a cache-busted URL so updates to `news.json` appear promptly.
    // Prefer server-provided `lastUpdated` if previously loaded, otherwise use current timestamp.
    const ts = translations.lastUpdated ? encodeURIComponent(translations.lastUpdated) : Date.now();
    const url = `news.json?t=${ts}`;
    return fetch(url, { cache: 'no-store' })
        .then(resp => {
            if (!resp.ok) throw new Error('news.json not found');
            return resp.json();
        })
        .then(data => {
            if (!data) return;
            if (data.zh && Array.isArray(data.zh)) translations.zh.news_items = data.zh;
            if (data.en && Array.isArray(data.en)) translations.en.news_items = data.en;
            if (data.lastUpdated) translations.lastUpdated = data.lastUpdated;
        })
        .catch(() => {
            // silent fallback to embedded news_content; fetch failure is non-fatal
        });
}

// Load admin-managed routes from external JSON (optional).
function loadRoutesFromJSON() {
    const ts = translations.routesLastUpdated ? encodeURIComponent(translations.routesLastUpdated) : Date.now();
    const url = `routes.json?t=${ts}`;
    return fetch(url, { cache: 'no-store' })
        .then(resp => {
            if (!resp.ok) throw new Error('routes.json not found');
            return resp.json();
        })
        .then(data => {
            if (!data) return;
            if (data.zh) {
                if (data.zh.rows && Array.isArray(data.zh.rows)) routesData.zh.rows = data.zh.rows;
                if (data.zh.tableTitle) routesData.zh.tableTitle = data.zh.tableTitle;
                if (data.zh.routeNumber) routesData.zh.routeNumber = data.zh.routeNumber;
                if (data.zh.startPoint) routesData.zh.startPoint = data.zh.startPoint;
                if (data.zh.endPoint) routesData.zh.endPoint = data.zh.endPoint;
                if (data.zh.remarks) routesData.zh.remarks = data.zh.remarks;
            }
            if (data.en) {
                if (data.en.rows && Array.isArray(data.en.rows)) routesData.en.rows = data.en.rows;
                if (data.en.tableTitle) routesData.en.tableTitle = data.en.tableTitle;
                if (data.en.routeNumber) routesData.en.routeNumber = data.en.routeNumber;
                if (data.en.startPoint) routesData.en.startPoint = data.en.startPoint;
                if (data.en.endPoint) routesData.en.endPoint = data.en.endPoint;
                if (data.en.remarks) routesData.en.remarks = data.en.remarks;
            }
            if (data.lastUpdated) translations.routesLastUpdated = data.lastUpdated;
        })
        .catch(() => {
            // silent fallback to embedded routeTable
        });
}

// Function to switch language
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[language][key] || translations[language].nav[key];
        if (translation) {
            element.innerHTML = translation; // Use innerHTML to render HTML tags like <br>
        }
    });

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (key === 'passengerNotice') {
            const rules = passengerNotice[language].rules;
            let content = `<h3>${passengerNotice[language].title}</h3><p>${passengerNotice[language].description}</p><ol>`;
            rules.forEach(rule => {
                if (typeof rule === 'string') {
                    content += `<li>${rule}</li>`;
                } 
                else {
                    content += `<li>${rule.subRule}</li><ol type="i">`;
                    rule.details.forEach(detail => {
                        content += `<li>${detail}</li>`;
                    });
                    content += `</ol>`;
                }
            });
            content += `</ol>`;
            element.innerHTML = content; // Use innerHTML to render HTML tags like <ol> and <li>
        }
    });

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (key === 'routeTable') {
            const table = routesData[language] || { tableTitle: '', routeNumber: '', startPoint: '', endPoint: '', remarks: '', rows: [] };
            let content = `<h3>${table.tableTitle}</h3><table><thead><tr><th>${table.routeNumber}</th><th>${table.startPoint}</th><th>${table.endPoint}</th><th>${table.remarks}</th></tr></thead><tbody>`;
            table.rows.forEach(row => {
                content += `<tr>
                <td>${row.routeNumber ? `<a href="${row.link}" target="_blank">${row.routeNumber}</a>` : ''}</td>
                    <td>${row.start}</td>
                    <td>${row.end}</td>
                    <td>${row.remarks || ''}</td>
                </tr>`;
            });
            content += `</tbody></table>`;
            element.innerHTML = content; // Use innerHTML to render the table
        }
    });

    // Render news list when present
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (key === 'news_content') {
            const items = translations[language].news_items;
            if (items && items.length) {
                let content = '<div class="news-list">';
                items.forEach(item => {
                    content += `<article class="news-item"><h4>${item.title} <small class="news-date">${item.date}</small></h4><p>${item.content}</p></article>`;
                });
                content += '</div>';
                element.innerHTML = content;
            } else {
                element.innerHTML = translations[language].news_content || '';
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(language).classList.add('active');
}

// Initialize language on page load with expiration support
const LANGUAGE_KEY = 'language';
const LANGUAGE_TS_KEY = 'language_ts';

function saveLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
    localStorage.setItem(LANGUAGE_TS_KEY, Date.now().toString());
}

function loadLanguageWithExpiry() {
    const lang = localStorage.getItem(LANGUAGE_KEY);
    const ts = parseInt(localStorage.getItem(LANGUAGE_TS_KEY), 10);
    if (!lang || isNaN(ts)) return 'zh';
    const ageMs = Date.now() - ts;
    const ttlMs = 30 * 60 * 1000;
    if (ageMs > ttlMs) {
        // expired — clear and return default
        localStorage.removeItem(LANGUAGE_KEY);
        localStorage.removeItem(LANGUAGE_TS_KEY);
        return 'zh';
    }
    return lang;
}

document.addEventListener('DOMContentLoaded', () => {
    // If there's a sessionStorage marker, the user is in the same session (refresh or navigation)
    // so we should NOT apply expiration. If no marker exists, this is a new session
    // (tab reopened or browser restarted) and we apply expiry logic.
    const SESSION_FLAG = 'lang_session';
    let savedLanguage;
    if (sessionStorage.getItem(SESSION_FLAG)) {
        // Same session (refresh) — use stored language without expiry check
        savedLanguage = localStorage.getItem(LANGUAGE_KEY) || 'zh';
    } else {
        // New session — apply expiry logic
        savedLanguage = loadLanguageWithExpiry(); // may return 'zh' if expired or missing
        // mark session so subsequent refreshes during this session won't re-check expiry
        sessionStorage.setItem(SESSION_FLAG, Date.now().toString());
    }
    // Try to load admin-managed JSON files first; fall back to embedded items.
    Promise.all([loadNewsFromJSON(), loadRoutesFromJSON()]).finally(() => {
        switchLanguage(savedLanguage); // Apply the chosen language
    });
});

// Event listeners for language buttons
document.getElementById('zh').addEventListener('click', () => {
    switchLanguage('zh');
    saveLanguage('zh'); // Save the selected language with timestamp
});

document.getElementById('en').addEventListener('click', () => {
    switchLanguage('en');
    saveLanguage('en'); // Save the selected language with timestamp
});