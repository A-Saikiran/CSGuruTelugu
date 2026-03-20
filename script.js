// 🎉 FESTIVALS (local object, safe)
const telanganaFestivals = {
  "01-Jan": "New Year’s Day",
  "14-Jan": "Bhogi",
  "15-Jan": "Sankranti / Pongal",
  "26-Jan": "Republic Day",
  "15-Feb": "Maha Shivaratri",
  "03-Mar": "Holi",
  "19-Mar": "Ugadi",
  "21-Mar": "Eid-ul-Fitr (Ramzan)",
  "22-Mar": "Following Day of Ramzan",
  "27-Mar": "Sri Rama Navami",
  "03-Apr": "Good Friday",
  "05-Apr": "Babu Jagjivan Ram’s Birthday",
  "14-Apr": "Dr. B.R. Ambedkar’s Birthday",
  "27-May": "Eid-ul-Adha (Bakrid)",
  "26-Jun": "Shahadat Imam Hussain (10th Moharam)",
  "10-Aug": "Bonalu",
  "15-Aug": "Independence Day",
  "26-Aug": "Eid Milad-un-Nabi",
  "04-Sep": "Sri Krishna Astami",
  "14-Sep": "Vinayaka Chavithi",
  "02-Oct": "Mahatma Gandhi Jayanti",
  "18-Oct": "Saddula Bathukamma",
  "20-Oct": "Vijaya Dasami / Dussehra",
  "21-Oct": "Following Day of Vijaya Dasami",
  "08-Nov": "Deepavali",
  "24-Nov": "Kartika Purnima / Guru Nanak Jayanti",
  "25-Dec": "Christmas Day",
  "26-Dec": "Following Day of Christmas (Boxing Day)"
};

// 🔥 CLOCK + FESTIVAL DISPLAY
function updateClock() {
    const now = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = days[now.getDay()];

    const d = String(now.getDate()).padStart(2,'0');

    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const m = monthNames[now.getMonth()];

    const y = now.getFullYear();
    const time = now.toLocaleTimeString('en-IN',{hour12:true});

    const clockEl = document.getElementById("clock-box");
    const festivalEl = document.getElementById("festival-msg");

    // ⏰ Display Date & Time
    if(clockEl){
        clockEl.innerHTML = `
        <span class="date-part">${dayName}, ${d}-${m}-${y}</span><br>
        <span class="time-part">${time}</span>
        `;
    }

    // 🎉 Festival Logic
    const key = `${d}-${m}`;

    if(festivalEl){
        const fest = telanganaFestivals[key];

        if(fest){
            festivalEl.innerText = `🎉 Happy ${fest}! 🎉`;

            // reset classes
            festivalEl.className = "festival-msg";

            // 🎨 Apply theme
            if(fest.includes("Deepavali")) {
                festivalEl.classList.add("diwali");
            }
            else if(fest.includes("Sankranti")) {
                festivalEl.classList.add("sankranti");
            }
            else if(fest.includes("Ramzan") || fest.includes("Eid")) {
                festivalEl.classList.add("ramzan");
            }
            else if(fest.includes("Christmas")) {
                festivalEl.classList.add("christmas");
            }
            else if(fest.includes("Ugadi")) {
                festivalEl.classList.add("ugadi");
            }
            else {
                festivalEl.classList.add("default-fest");
            }

        } else {
            festivalEl.innerText = "";
            festivalEl.className = "festival-msg";
        }
    }
}

// ⏳ Start Clock
setInterval(updateClock, 1000);
updateClock();


// 🔥 HERO IMAGE SLIDER
const heroBg = document.getElementById("hero-bg");

if(heroBg){
    const images = [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
    ];

    const allImages = [...images, ...images];

    heroBg.innerHTML = "";

    allImages.forEach(src => {
        const div = document.createElement("div");
        div.style.backgroundImage = `url(${src})`;
        div.style.minWidth = "100vw";
        div.style.height = "100%";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
        heroBg.appendChild(div);
    });
}


// 🔥 CLEAN SUBMENU (NO FLICKER)
document.querySelectorAll('.has-submenu > a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const submenu = item.nextElementSibling;

    // Close others
    document.querySelectorAll('.submenu').forEach(s => {
      if (s !== submenu) s.classList.remove('show');
    });

    // Toggle current
    submenu.classList.toggle('show');
  });
});

// Close on outside click
window.addEventListener('click', (e) => {
  if (!e.target.closest('.has-submenu')) {
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('show'));
  }
});
