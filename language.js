// Translations for each language
const translations = {
    zh: {
        nav: {
            index: "首頁",
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
        non_fran_bus: "非專營巴士服務",
        contact_us: "聯絡我們",
        contact_desc: "如有任何查詢，請聯絡我們：<br>電話：19190810<br>網站：leepresident.github.io<br>地址：洛聖加市中心華環街5號絲逸商業大廈3-7樓",
    },
    en: {
        nav: {
            index: "Home",
            about: "About Us",
            routes: "Bus Routes",
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

const routeTable = {
    zh: {
        tableTitle: "巴士路綫",
        routeNumber: "編號",
        startPoint: "起點",
        endPoint: "終點",
        remarks: "備註",
        rows: [
            { routeNumber: "7", link: "https://docs.google.com/document/d/1KG0qwKi0rHT-xpDb74aY7WdNRr8Badd6Q0BZMp7IYyg", start: "維拉（小倉圍）", end: "向量灣（中）", remarks: "" },
            { routeNumber: "7A", link: "https://docs.google.com/document/d/1_QZ_p3gF40-zrfVzbKPRrvTWJojNIHhvkxPW_Jjy2JE", start: "卡梅倫", end: "向量灣山頂", remarks: "" },
            { routeNumber: "7P", link: "https://docs.google.com/document/d/1sPi4thJ3l7Zkq0fX1sgl2kPWW2O5oDIiAPChlwJ5fb4", start: "維拉（小倉圍）", end: "十年理工學院", remarks: "上課日服務" },
            { routeNumber: "7X", link: "https://docs.google.com/document/d/1RZMEcVpvqMgFepvCFPj8NpNH9FBDn0i5hRpEY8XuVS4", start: "維拉（小倉圍）", end: "菱峽", remarks: "特快綫，星期一至六繁忙時間服務" },
            { routeNumber: "17", link: "https://docs.google.com/document/d/12oMS6elkT8tnoOJKskc8rMOww1YLziegw2oMyxdmTk0", start: "高地（環高路）", end: "百湖西", remarks: "" },
            { routeNumber: "17A", link: "https://docs.google.com/document/d/17R6s_pYBhk0nxU28wW2iD9gHjCqXBN-yG03FsEr9zV8", start: "新田（北）", end: "百湖西", remarks: "" },
            { routeNumber: "40", link: "https://docs.google.com/document/d/1o3dcv2v9AWhcfX42MdBHBkOJThVTPGmkGPYEZtzo3NA", start: "下聯邑", end: "三凹", remarks: "循環綫" },
            { routeNumber: "110", link: "https://docs.google.com/document/d/1Rqq3f42JsB_3ZvxNwFwcSuPGe0kcsIOtpnWe6kwRtlE", start: "南嶺（駒林邨）", end: "高門（都石道）", remarks: "" },
            { routeNumber: "111", link: "https://docs.google.com/document/d/1Hh50MJLX-X_v6ya6AXfl39LEAA1hbbvFGXoTsMY_66A", start: "南嶺（駒林邨）", end: "連翠花園", remarks: "星期一至五上午繁忙時間往連翠花園班次不經鶴園" },
            { routeNumber: "111P", link: "https://docs.google.com/document/d/1QZOk5a4n3eHPbIim514umjmlluUF7AP45CdpPM6hFgI", start: "佐坑（淵樂邨）", end: "連翠花園", remarks: "星期一至六繁忙時間服務" },
            { routeNumber: "150R", link: "https://docs.google.com/document/d/1XErwWPjZobBKo41u78YK4MautrATOwIZr5IS8h-IgQc", start: "巍松球場", end: "礦採北", remarks: "大型活動特別綫" },
            { routeNumber: "160R", link: "https://docs.google.com/document/d/107qXr4aNpvlLyk3hc2R0fmE6F9MTDJuVPjakcbF7wFk", start: "巍松球場", end: "華沙（三微秒）", remarks: "大型活動特別綫" },
            { routeNumber: "170", link: "https://docs.google.com/document/d/1M3Ez7S6m89nJq9lKYJPQAAumNUsXGWZU-MSxfJQWsO0", start: "巍松碼頭", end: "糸湖北", remarks: "" },
            { routeNumber: "220A", link: "https://docs.google.com/document/d/1la2HuR1Ihoe4W7pGd0Je_X8JnKTzbxCbYy7J0tW0014", start: "彩羽圍", end: "薄河站", remarks: "與羊光巴士聯合營運" },
            { routeNumber: "220B", link: "https://docs.google.com/document/d/1vO2YgBv5pthDx_GfvEhSdP4w5ZXFHhn5RI07D8HImFk", start: "渣華灘", end: "座河", remarks: "" },
            { routeNumber: "220X", link: "https://docs.google.com/document/d/1I-PgkpjPY2gYOzz07JC9l-UZsU73gX_UTJOuZckoAy0", start: "六夜碼頭", end: "近北碼頭", remarks: "" },
            { routeNumber: "240A", link: "https://docs.google.com/document/d/1S-lOpvXRELh7cmwCWD2or9h3j0gXPMoYLDGcea8_Ruk", start: "冚旗灣", end: "卡梅倫", remarks: "" },
            { routeNumber: "240P", link: "https://docs.google.com/document/d/1y8pRDaCGdAPrV6Tjk27IW4zXTZE-2aEWMgIJCJF1rYo", start: "秊蘤", end: "卡梅倫", remarks: "星期一至六下午繁忙時間單向服務" },
            { routeNumber: "240X", link: "https://docs.google.com/document/d/1CwvGJ2Q7evCpL5Dgy6ApqrKWlXiXcjgDWCvVg0vohQo", start: "深灣角", end: "下聯邑", remarks: "" },
            { routeNumber: "273", link: "https://docs.google.com/document/d/1JCK-gEVNrUXAXz1yti_tsCyHjslFGdi-p8JjHw8ZSa8", start: "雲沙", end: "上井沙", remarks: "" },
            { routeNumber: "N7", link: "https://docs.google.com/document/d/1QhRMsjIeixLs_34xzbEUdi7Ew7_RKnnNCzvq428zXs0", start: "維拉（小倉圍）", end: "向量灣（中）", remarks: "通宵綫，經卡城" },
            { routeNumber: "N17", link: "https://docs.google.com/document/d/1ZEBmhf9qUJmR2SuRoYkOZdD4Wju3ks94wBUZFSSGXjk", start: "高地（環高路）", end: "百湖西", remarks: "通宵無限循環綫，去程經都泉，回程經新田" }
        ]
    },
    en: {
        tableTitle: "Bus Routes",
        routeNumber: "Number",
        startPoint: "Start Point",
        endPoint: "End Point",
        remarks: "Remarks",
        rows: [
            { routeNumber: "7", link: "https://docs.google.com/document/d/1KG0qwKi0rHT-xpDb74aY7WdNRr8Badd6Q0BZMp7IYyg", start: "Vayler (Kokura Circuit)", end: "Vector Bay (Central)", remarks: "" },
            { routeNumber: "7A", link: "https://docs.google.com/document/d/1_QZ_p3gF40-zrfVzbKPRrvTWJojNIHhvkxPW_Jjy2JE", start: "Kamalen", end: "Vector Mount", remarks: "" },
            { routeNumber: "7P", link: "https://docs.google.com/document/d/1sPi4thJ3l7Zkq0fX1sgl2kPWW2O5oDIiAPChlwJ5fb4", start: "Vayler (Kokura Circuit)", end: "Decennial College", remarks: "Service on school days" },
            { routeNumber: "7X", link: "https://docs.google.com/document/d/1RZMEcVpvqMgFepvCFPj8NpNH9FBDn0i5hRpEY8XuVS4", start: "Vayler (Kokura Circuit)", end: "Kaling Channel", remarks: "Express route, service during peak hours from Mondays to Saturdays" },
            { routeNumber: "17", link: "https://docs.google.com/document/d/12oMS6elkT8tnoOJKskc8rMOww1YLziegw2oMyxdmTk0", start: "High Mesa (Mesa Ring Road)", end: "Numpool West", remarks: "" },
            { routeNumber: "17A", link: "https://docs.google.com/document/d/17R6s_pYBhk0nxU28wW2iD9gHjCqXBN-yG03FsEr9zV8", start: "Sun Tin (North)", end: "Numpool West", remarks: "" },
            { routeNumber: "40", link: "https://docs.google.com/document/d/1o3dcv2v9AWhcfX42MdBHBkOJThVTPGmkGPYEZtzo3NA", start: "Allied Town Lower", end: "The Three Pass", remarks: "Circular route" },
            { routeNumber: "110", link: "https://docs.google.com/document/d/1Rqq3f42JsB_3ZvxNwFwcSuPGe0kcsIOtpnWe6kwRtlE", start: "Southern Heights (Kui Lam Estate)", end: "High Approach (Metrock Road)", remarks: "" },
            { routeNumber: "111", link: "https://docs.google.com/document/d/1Hh50MJLX-X_v6ya6AXfl39LEAA1hbbvFGXoTsMY_66A", start: "Southern Heights (Kui Lam Estate)", end: "Lin Tsui Fa Yuen", remarks: "Mondays to Fridays morning peak service to Lin Tsui Fa Yuen does not go through Craneplaz" },
            { routeNumber: "111P", link: "https://docs.google.com/document/d/1QZOk5a4n3eHPbIim514umjmlluUF7AP45CdpPM6hFgI", start: "Adju Pit (Enoch Estate)", end: "Lin Tsui Fa Yuen", remarks: "Service during peak hours from Mondays to Saturdays" },
            { routeNumber: "150R", link: "https://docs.google.com/document/d/1XErwWPjZobBKo41u78YK4MautrATOwIZr5IS8h-IgQc", start: "Pinestand Stadium", end: "Miner North", remarks: "Special route for large events" },
            { routeNumber: "160R", link: "https://docs.google.com/document/d/107qXr4aNpvlLyk3hc2R0fmE6F9MTDJuVPjakcbF7wFk", start: "Pinestand Stadium", end: "Prosand (TMS HQ)", remarks: "Special route for large events" },
            { routeNumber: "170", link: "https://docs.google.com/document/d/1M3Ez7S6m89nJq9lKYJPQAAumNUsXGWZU-MSxfJQWsO0", start: "Pinestand Pier", end: "Silk Pond North", remarks: "" },
            { routeNumber: "220A", link: "https://docs.google.com/document/d/1la2HuR1Ihoe4W7pGd0Je_X8JnKTzbxCbYy7J0tW0014", start: "Chromafringe Circuit", end: "Thin River Station", remarks: "Joint-operated with Watame Buses" },
            { routeNumber: "220B", link: "https://docs.google.com/document/d/1vO2YgBv5pthDx_GfvEhSdP4w5ZXFHhn5RI07D8HImFk", start: "Java Beach", end: "Seat River", remarks: "" },
            { routeNumber: "220X", link: "https://docs.google.com/document/d/1I-PgkpjPY2gYOzz07JC9l-UZsU73gX_UTJOuZckoAy0", start: "Sexterade Ferry Pier", end: "Intus Aquilo Pier", remarks: "" },
            { routeNumber: "240A", link: "https://docs.google.com/document/d/1S-lOpvXRELh7cmwCWD2or9h3j0gXPMoYLDGcea8_Ruk", start: "Kum Kei Bay", end: "Kamalen", remarks: "" },
            { routeNumber: "240P", link: "https://docs.google.com/document/d/1y8pRDaCGdAPrV6Tjk27IW4zXTZE-2aEWMgIJCJF1rYo", start: "Blossom Ages", end: "Kamalen", remarks: "One-way service during peak hours from Mondays to Saturdays" },
            { routeNumber: "240X", link: "https://docs.google.com/document/d/1CwvGJ2Q7evCpL5Dgy6ApqrKWlXiXcjgDWCvVg0vohQo", start: "Sham Wan Kok", end: "Allied Town Lower", remarks: "" },
            { routeNumber: "273", link: "https://docs.google.com/document/d/1JCK-gEVNrUXAXz1yti_tsCyHjslFGdi-p8JjHw8ZSa8", start: "Cloudsand", end: "Upwell Sand", remarks: "" },
            { routeNumber: "N7", link: "https://docs.google.com/document/d/1QhRMsjIeixLs_34xzbEUdi7Ew7_RKnnNCzvq428zXs0", start: "Vayler (Kokura Circuit)", end: "Vector Bay (Central)", remarks: "Overnight route, via Katadelphia" },
            { routeNumber: "N17", link: "https://docs.google.com/document/d/1ZEBmhf9qUJmR2SuRoYkOZdD4Wju3ks94wBUZFSSGXjk", start: "High Mesa (Mesa Ring Road)", end: "Numpool West", remarks: "Overnight unlimited circular route, going via Metro Spring, returning via Sun Tin" }
        ]
    }
};

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
            const table = routeTable[language];
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
    switchLanguage(savedLanguage); // Apply the chosen language
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