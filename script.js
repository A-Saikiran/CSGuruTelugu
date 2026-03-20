// ======================= TELANGANA FESTIVALS =======================
const telanganaFestivals = {
  // January 2026
  "01-Jan":"New Year's Day; Global Family Day",
  "04-Jan":"World Braille Day",
  "09-Jan":"Pravasi Bharatiya Divas (NRI Day)",
  "10-Jan":"World Hindi Day",
  "12-Jan":"National Youth Day (Swami Vivekananda's Birthday)",
  "14-Jan":"Makar Sankranti; Pongal; Bhogi",
  "15-Jan":"Indian Army Day; Sankranti Kanumu",
  "23-Jan":"Parakram Diwas (Netaji Subhas Chandra Bose Jayanti)",
  "24-Jan":"National Girl Child Day; International Day of Education",
  "25-Jan":"National Voters' Day; National Tourism Day",
  "26-Jan":"Republic Day of India; International Customs Day",
  "30-Jan":"Martyrs' Day (Shaheed Diwas); World Leprosy Eradication Day",

  // February 2026
  "01-Feb":"Indian Coast Guard Day; Guru Ravidas Jayanti",
  "02-Feb":"World Wetlands Day",
  "04-Feb":"World Cancer Day",
  "10-Feb":"National De-worming Day; World Pulses Day",
  "13-Feb":"World Radio Day; National Women's Day (India)",
  "14-Feb":"Valentine’s Day",
  "15-Feb":"Maha Shivaratri",
  "20-Feb":"World Day of Social Justice",
  "21-Feb":"International Mother Language Day",
  "28-Feb":"National Science Day (India)",

  // March 2026
  "01-Mar":"Zero Discrimination Day",
  "03-Mar":"World Wildlife Day; Holi",
  "08-Mar":"International Women's Day",
  "15-Mar":"World Consumer Rights Day",
  "20-Mar":"International Day of Happiness",
  "21-Mar":"International Day of Forests; Eid-ul-Fitr (Tentative)",
  "22-Mar":"World Water Day; Bihar Day",
  "24-Mar":"World Tuberculosis (TB) Day",
  "26-Mar":"Ram Navami",
  "31-Mar":"Mahavir Jayanti",

  // April 2026
  "02-Apr":"World Autism Awareness Day",
  "05-Apr":"National Maritime Day; Easter Sunday; Good Friday",
  "07-Apr":"World Health Day",
  "14-Apr":"Dr. B.R. Ambedkar Jayanti; Baisakhi",
  "18-Apr":"World Heritage Day",
  "21-Apr":"National Civil Services Day",
  "22-Apr":"Earth Day",
  "24-Apr":"National Panchayati Raj Day",
  "30-Apr":"Ayushman Bharat Diwas",

  // May 2026
  "01-May":"International Labour Day; Buddha Purnima",
  "03-May":"World Press Freedom Day",
  "08-May":"World Red Cross Day",
  "09-May":"Mother’s Day (2nd Sunday of May)",
  "11-May":"National Technology Day (India)",
  "12-May":"International Nurses Day",
  "21-May":"Anti-Terrorism Day (India)",
  "22-May":"International Day for Biological Diversity",
  "27-May":"Eid-ul-Zuha (Bakrid) (Tentative)",
  "31-May":"World No Tobacco Day",

  // June 2026
  "03-Jun":"World Bicycle Day",
  "05-Jun":"World Environment Day",
  "08-Jun":"World Oceans Day",
  "12-Jun":"World Day Against Child Labour",
  "14-Jun":"World Blood Donor Day",
  "21-Jun":"Father’s Day (3rd Sunday of June); International Day of Yoga",
  "26-Jun":"Muharram (Tentative)",
  "29-Jun":"National Statistics Day (India)",

  // July 2026
  "01-Jul":"National Doctor's Day (India)",
  "11-Jul":"World Population Day",
  "15-Jul":"World Youth Skills Day",
  "18-Jul":"Nelson Mandela International Day",
  "26-Jul":"Kargil Vijay Diwas (Memorial Day)",
  "29-Jul":"International Tiger Day",

  // August 2026
  "07-Aug":"National Handloom Day",
  "08-Aug":"Quit India Movement Day",
  "12-Aug":"International Youth Day",
  "15-Aug":"Independence Day of India",
  "26-Aug":"Id-e-Milad (Tentative); Onam",
  "29-Aug":"National Sports Day (India)",

  // September 2026
  "05-Sep":"Teachers' Day (India)",
  "08-Sep":"International Literacy Day",
  "14-Sep":"Hindi Diwas (India); Vinayaka Chavithi",
  "16-Sep":"World Ozone Day",
  "21-Sep":"International Day of Peace",
  "27-Sep":"World Tourism Day",

  // October 2026
  "02-Oct":"Gandhi Jayanti; Mahatma Gandhi Jayanti",
  "08-Oct":"Indian Air Force Day",
  "16-Oct":"World Food Day",
  "18-Oct":"Saddula Bathukamma",
  "20-Oct":"Dussehra (Vijaya Dashami)",
  "24-Oct":"United Nations (UN) Day",
  "31-Oct":"National Unity Day (Rashtriya Ekta Diwas)",

  // November 2026
  "08-Nov":"Diwali (Deepavali)",
  "11-Nov":"National Education Day (India)",
  "14-Nov":"Children's Day (India)",
  "24-Nov":"Guru Nanak Jayanti",
  "26-Nov":"Constitution Day (Samvidhan Divas)",

  // December 2026
  "01-Dec":"World AIDS Day",
  "04-Dec":"Indian Navy Day",
  "07-Dec":"Armed Forces Flag Day",
  "10-Dec":"Human Rights Day",
  "22-Dec":"National Mathematics Day (India)",
  "23-Dec":"Kisan Diwas (Farmers' Day)",
  "25-Dec":"Christmas Day"
};

// ======================= CLOCK + FESTIVAL =======================
function updateClock() {
    const clockBox = document.getElementById('clock-box');
    const now = new Date();

    // Get day name
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[now.getDay()];

    // Format date: DD-MM-YYYY
    const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    // Format time: HH:MM:SS
    const time = now.toLocaleTimeString('en-GB');

    // Set HTML with spans for different colors
    clockBox.innerHTML = `
        <span class="day">${day}</span>
        <span class="date">${date}</span>
        <span class="time">${time}</span>
    `;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // initial call

// Update every second
setInterval(updateClock, 1000);
updateClock(); // initial call

    // Festival display
const festEl = document.getElementById("festival-msg");
if(festEl){
    const key = `${date}-${month}`; // today
    let fest = telanganaFestivals[key];

    // TEST: if today not in object, just pick first festival in object
    if(!fest){
        const firstKey = Object.keys(telanganaFestivals)[0];
        fest = telanganaFestivals[firstKey];
    }

    festEl.innerText = fest ? `🎉 Happy ${fest}! 🎉` : '';
}

setInterval(updateClock, 1000);
updateClock();

// ======================= HERO IMAGE SLIDER =======================
const heroBg = document.getElementById("hero-bg");
if(heroBg){
  const images = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  ];

  const allImages = [...images, ...images];
  heroBg.innerHTML = "";

  allImages.forEach(src=>{
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${src})`;
    div.style.minWidth = "100vw";
    div.style.height = "100%";
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    heroBg.appendChild(div);
  });
}

// ======================= SUBMENU =======================
document.querySelectorAll('.has-submenu > a').forEach(item=>{
  item.addEventListener('click', e=>{
    e.preventDefault();
    const submenu = item.nextElementSibling;
    document.querySelectorAll('.submenu').forEach(s=>{
      if(s !== submenu) s.classList.remove('show');
    });
    submenu.classList.toggle('show');
  });
});

// CLOSE SUBMENU ON OUTSIDE CLICK
window.addEventListener('click', e=>{
  if(!e.target.closest('.has-submenu')){
    document.querySelectorAll('.submenu').forEach(s=>s.classList.remove('show'));
  }
});
