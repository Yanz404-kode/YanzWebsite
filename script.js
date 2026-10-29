
const $ = (selector) => document.querySelector(selector);

// 1. MENU NAVIGASI HP
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// 2. DARK MODE DAN LIGHT MODE
const themeBtn = $("#themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");

    themeBtn.textContent = isLight ? "🌙" : "☀️";
    themeBtn.setAttribute(
      "aria-label",
      isLight ? "Aktifkan mode gelap" : "Aktifkan mode terang"
    );
  });
}

// 3. TERJEMAHAN BAHASA
const translations = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang",
    navProjects: "Proyek",
    navVision: "Visi",
    eyebrow: "✦ WEBSITE PRIBADI & PROYEK DIGITAL",
    heroDesc: "Selamat datang di YanzWeb. Tempat gw memperkenalkan diri, mengeksplorasi teknologi, dan mengembangkan proyek digital.",
    exploreBtn: "Jelajahi Proyek ↗",
    aboutBtn: "Kenal Gw",
    aboutSmall: "Tentang Gw",
    aboutTitle: "Kenalan dengan Yanz.",
    aboutIntro: "Seorang pelajar yang tertarik pada teknologi, pemrograman, sains, dan ide kreatif.",
    aboutCardTitle: "Bukan Sekadar Pengguna Teknologi",
    aboutCardDesc: "Gw ingin belajar bagaimana teknologi bekerja dan menggunakannya untuk membangun sesuatu yang bermanfaat. YanzWeb menjadi pusat informasi perjalanan belajar dan proyek gw.",
    statOne: "Terus Belajar",
    statTwo: "Berani Mencoba",
    statThree: "Berpikir Kreatif",
    statFour: "Ide Tanpa Batas",
    projectsSmall: "Karya Digital",
    projectsTitle: "Proyek yang Gw Bangun.",
    projectsIntro: "Beberapa ide yang ingin gw kembangkan menjadi proyek nyata.",
    kosmoDesc: "Eksplorasi antariksa dengan ensiklopedia kosmik, planet 3D, galaksi, dan simulasi tata surya.",
    ilmoraDesc: "Ruang belajar digital untuk IPA, IPS, Matematika, dan ilmu pengetahuan lainnya.",
    labDesc: "Eksperimen HTML, CSS, dan JavaScript untuk menciptakan website dan aplikasi.",
    futureDesc: "Ruang untuk ide-ide baru yang belum diumumkan.",
    projectLink: "Segera Hadir ↗",
    visionLink: "Lihat Visi ↗",
    visionTitle: "Ide Kecil. Dampak Besar.",
    visionDesc: "YanzWeb adalah titik awal untuk belajar, membangun, bereksperimen, dan mewujudkan ide digital.",
    backTop: "Kembali ke Atas ↑",
    contactTitle: "Hubungi & Temukan Gw",
    contactDesc: "Temukan proyek dan pembaruan YanzWeb melalui tautan yang tersedia.",
    footerText: "Dibangun dengan ide dan rasa ingin tahu. ✦"
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navVision: "Vision",
    eyebrow: "✦ PERSONAL WEBSITE & DIGITAL PROJECTS",
    heroDesc: "Welcome to YanzWeb. A place to introduce myself, explore technology, and develop digital projects.",
    exploreBtn: "Explore Projects ↗",
    aboutBtn: "About Me",
    aboutSmall: "About Me",
    aboutTitle: "Meet Yanz.",
    aboutIntro: "A student interested in technology, programming, science, and creative ideas.",
    aboutCardTitle: "More Than a Technology User",
    aboutCardDesc: "I want to understand technology and use it to build useful things. YanzWeb documents my learning journey and projects.",
    statOne: "Keep Learning",
    statTwo: "Keep Trying",
    statThree: "Think Creatively",
    statFour: "Endless Ideas",
    projectsSmall: "Digital Works",
    projectsTitle: "Projects I'm Building.",
    projectsIntro: "Ideas I hope to turn into real projects.",
    kosmoDesc: "Explore space through a cosmic encyclopedia, 3D planets, galaxies, and a solar system simulation.",
    ilmoraDesc: "A digital learning space for science, social studies, mathematics, and more.",
    labDesc: "HTML, CSS, and JavaScript experiments for websites and applications.",
    futureDesc: "A home for new ideas yet to be announced.",
    projectLink: "Coming Soon ↗",
    visionLink: "Our Vision ↗",
    visionTitle: "Small Ideas. Big Impact.",
    visionDesc: "YanzWeb is the starting point for learning, building, experimenting, and bringing digital ideas to life.",
    backTop: "Back to Top ↑",
    contactTitle: "Connect With Me",
    contactDesc: "Find projects and YanzWeb updates through available links.",
    footerText: "Built with ideas and curiosity. ✦"
  },

  jv: {
    navHome: "Ngarep",
    navAbout: "Babagan",
    navProjects: "Proyek",
    navVision: "Visi",
    eyebrow: "✦ SITUS PRIBADI LAN PROYEK DIGITAL",
    heroDesc: "Sugeng rawuh ing YanzWeb. Papan kanggo ngenalake awak, nyinaoni teknologi, lan ngembangake proyek digital.",
    exploreBtn: "Jelajahi Proyek ↗",
    aboutBtn: "Kenalan",
    aboutSmall: "Babagan Aku",
    aboutTitle: "Ayo Kenalan karo Yanz.",
    aboutIntro: "Siswa sing seneng teknologi, pemrograman, ilmu pengetahuan, lan gagasan kreatif.",
    aboutCardTitle: "Ora Mung Nggunakake Teknologi",
    aboutCardDesc: "Aku kepengin sinau teknologi lan nggunakake kanggo nggawe karya sing migunani. YanzWeb dadi papan kanggo nyathet proses sinau lan proyekku.",
    statOne: "Terus Sinau",
    statTwo: "Wani Nyoba",
    statThree: "Pikiran Kreatif",
    statFour: "Gagasan Tanpa Wates",
    projectsSmall: "Karya Digital",
    projectsTitle: "Proyek sing Dakbangun.",
    projectsIntro: "Sawetara gagasan sing arep dakwujudake dadi proyek nyata.",
    kosmoDesc: "Jelajahi antariksa liwat ensiklopedia kosmik, planet 3D, galaksi, lan simulasi tata surya.",
    ilmoraDesc: "Papan sinau digital kanggo IPA, IPS, Matematika, lan kawruh liyane.",
    labDesc: "Eksperimen HTML, CSS, lan JavaScript kanggo nggawe situs web lan aplikasi.",
    futureDesc: "Papan kanggo gagasan anyar sing durung diumumake.",
    projectLink: "Enggal Teka ↗",
    visionLink: "Deleng Visi ↗",
    visionTitle: "Gagasan Cilik. Dampak Gedhe.",
    visionDesc: "YanzWeb dadi wiwitan kanggo sinau, mbangun, nyoba, lan mujudake gagasan digital.",
    backTop: "Menyang Ndhuwur ↑",
    contactTitle: "Golek Aku",
    contactDesc: "Delengen proyek lan kabar YanzWeb liwat pranala sing kasedhiya.",
    footerText: "Dibangun nganggo gagasan lan rasa kepengin weruh. ✦"
  }
};

const languageSelect = $("#language");

function setLanguage(lang) {
  const dictionary = translations[lang];

  if (!dictionary) return;

  document.documentElement.lang = lang === "jv" ? "jv" : lang;

  document.querySelectorAll("[data-id]").forEach(element => {
    const key = element.dataset.id;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", event => {
    setLanguage(event.target.value);
  });
}

// 4. ANIMASI SAAT SCROLL
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

// 5. TAHUN COPYRIGHT OTOMATIS
const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 6. TAHUN BERJALAN, WEBSITE SIAP!
console.log("YanzWeb berhasil dimuat! 🚀");
