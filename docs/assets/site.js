/* PocketVille tanıtım sitesi: çağ görüntüleyici, dil seçimi, son sürüm bağlantıları. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------- Türkçe sözlük (sayfanın taban dili İngilizce) ---------- */
  var TR = {
    "nav.features": "Neler var", "nav.eras": "Çağlar", "nav.shots": "Görseller", "nav.download": "İndir",
    "hero.badge": "Beta 1 · Android ve Mac için ücretsiz",
    "hero.tagline": "Köyünü metropole büyüt.",
    "hero.lead": "Yolları döşe, imar bölgelerini çiz; yerleşimciler evlerini, dükkânlarını ve fabrikalarını kendileri kursun. Suyu akıt, trafiği yürüt; küçük adan bir pazar meydanından gökdelenlerle dolu bir şehre dönüşsün. Reklam yok, acele yok.",
    "hero.cta": "Ücretsiz indir", "hero.more": "Neler var?",
    "hero.hint": "Büyüyen tek bir ada, doğrudan oyundan. Bir çağa dokun.",
    "hud.people": "kişi", "hud.day": "Gün",
    "era.village": "Köy", "era.modern": "Modern", "era.metro": "Metropol", "era.night": "Gece",
    "era.villageAlt": "Küçük bir adada ahşap evler, tarlalar ve pazar meydanından oluşan bir köy",
    "era.modernAlt": "Aynı ada modern çağda: eski köy evlerinin yanında apartmanlar ve fabrikalar",
    "era.metroAlt": "Cam gökdelenlerle kaplı metropol",
    "era.nightAlt": "Gece metropol, pencereler yanıyor",
    "stats.eras": "çağ, köyden metropole", "stats.buildings": "bina tasarımı", "stats.langs": "dil", "stats.ads": "reklam",
    "feat.eyebrow": "Neler var", "feat.title": "Şehri sen planlarsın, halk kurar.",
    "f1.t": "Sen imar et, onlar kursun",
    "f1.d": "Yolların kenarına konut, ticaret ve sanayi bölgeleri çiz. Talep varsa yerleşimciler gelip binalarını kurar. Üç talep çubuğuna bak, şehrin istediğini ver.",
    "f2.t": "Dört çağ",
    "f2.d": "Ahşap evler ve bir kuyuyla başlarsın; sanayi çağından modern şehre, oradan metropole büyürsün. Mahalleler elektrik ulaşınca yeni tarzda yenilenir, bu yüzden eski mahalleler yenilerin yanında durur.",
    "f3.t": "Şebekeler ve hizmetler",
    "f3.d": "Su ve elektrik yollar boyunca akar. Polis, itfaiye, sağlık, okul, park ve çöp hizmetlerinin her biri bir alanı kapsar ve kendi bütçesi vardır. Hizmet ulaşmayan binalar boşalır; arazi değeri sorunun nerede olduğunu gösterir.",
    "f4.t": "Gerçek trafik",
    "f4.d": "Her işe gidiş ve alışveriş gerçek bir yoldan geçer; yollar dolunca tıkanır. Caddeye, bulvara yükselt, tek yönlü ve ağaçlı yollar döşe; tramvay, otobüs ve metro işlet.",
    "f5.t": "Kendi hayatı olan bir şehir",
    "f5.d": "Akşam pencereler yanar, sokaklar araba ve insanla dolar, fabrikalar tüter. İtfaiyenin ulaşmadığı yerde yangın çıkar. Şenlikler, turistler ve ticaret heyetleri gelir; danışmanların neyin ters gittiğini söyler.",
    "f6.t": "Sen yokken de yaşar",
    "f6.d": "Bir oyun günü yaklaşık bir gerçek dakikadır; uygulama kapalıyken şehir 12 saate kadar yaşamaya devam eder. İstersen giriş yap, şehrin telefonların arasında seninle gelsin.",
    "eras.eyebrow": "Çağdan çağa", "eras.title": "Pazar meydanından gökdelenlere",
    "eras.sub": "Her çağ yeni bölgeler, yollar ve binalar açar. Şehrin kalbi de seninle büyür.",
    "e1.t": "Köy", "e1.w": "Başlangıç",
    "e1.d": "Patikalar, kuyular, pazar, şapel ve bekçi kulübesi. Bahçeli evler ve küçük atölyeler.",
    "e2.t": "Sanayi", "e2.w": "800 nüfus",
    "e2.d": "Santraller, su pompaları, TIR avlulu fabrikalar, okullar, tren istasyonu ve tramvay.",
    "e3.t": "Modern", "e3.w": "4.000 nüfus ve bir üniversite",
    "e3.d": "Yüksek yoğunluk, hastaneler, polis ve itfaiye, otobüs, bulvar, otoyol ve havalimanı.",
    "e4.t": "Metropol", "e4.w": "20.000 nüfus ve simge gökdelen",
    "e4.d": "Cam kuleler, metro, rüzgâr ve güneş enerjisi, geri dönüşüm ve turist getiren simge yapılar.",
    "gal.eyebrow": "Görseller", "gal.title": "Her bina Blender'dan çıktı",
    "gal.sub": "Evler, kuleler, istasyonlar ve yol parçaları Blender'da modellenip aynı ışıkla render edildi. Kaydırarak bak.",
    "gal.c1": "Köy", "gal.c2": "Modern şehir", "gal.c3": "Şehir merkezi, yakından", "gal.c4": "Gece olunca", "gal.c5": "Trafik katmanı", "gal.c6": "Danışmanların",
    "gal.a1": "Köy çağı: ahşap evler, tarlalar, pazar ve belediye binası",
    "gal.a2": "Modern çağ: eski köy evlerinin yanında apartmanlar ve fabrikalar",
    "gal.a3": "Şehir merkezine yakından bakış: pazar ve tren istasyonunun yanında cam bir kule",
    "gal.a4": "Gece metropol, pencereler yanıyor",
    "gal.a5": "Trafik katmanı: yollar yüke göre yeşil, sarı ve kırmızı",
    "gal.a6": "Danışmanlar penceresi: maliye, şebekeler, güvenlik, sağlık, imar, ulaşım ve çevre",
    "dl.eyebrow": "İndir", "dl.title": "Adan seni bekliyor", "dl.version": "Son sürüm:",
    "dl.android": "Telefon ve tablet · Android 9 ve üstü", "dl.apk": "APK indir",
    "dl.mac": "Apple çipli Mac (M1 ve sonrası)", "dl.dmg": "DMG indir",
    "dl.iosT": "iPhone ve iPad", "dl.ios": "Hazır; App Store'a çıkınca burada", "dl.soon": "Yakında",
    "dl.sync": "Bulut kaydı isteğe bağlı: Android'de Google, iPhone'da Apple ya da Google hesabınla giriş yap, şehrin cihazlarının arasında seninle gelsin. Giriş yapmadan da her şey oynanır. Mac sürümü şimdilik şehrini Mac'te tutar.",
    "dl.howto": "Kurulumda takılırsan",
    "dl.howA": "APK'yı indirip aç. Telefon bu kaynaktan yüklemeye izin vermeni isteyebilir; izin verip kurulumu tamamla.",
    "dl.howM": "DMG'yi aç, PocketVille'i Uygulamalar klasörüne sürükle. Uygulama henüz Apple onayından geçmediği için ilk açılışta macOS onu durdurur: Sistem Ayarları → Gizlilik ve Güvenlik'te en alttaki “Yine de Aç” düğmesine bas.",
    "dl.howB": "Bu bir beta: hatalarla karşılaşabilirsin. Bir sorun görürsen GitHub'da bir issue açman çok yardımcı olur.",
    "dl.all": "Bütün sürümler ve sürüm notları →",
    "pv.title": "Gizlilik",
    "pv.p1": "Reklam, analiz ve izleme yok. Giriş yapmazsan şehrin yalnızca cihazında durur.",
    "pv.p2": "Giriş yaparsan şehir kaydın ve kaydı yapan cihazın adı hesabına bağlı olarak Google Firebase'de saklanır. Hesabını ve buluttaki kaydını istediğin an oyunun Ayarlar bölümünden silebilirsin.",
    "pv.p3": "Oyun, saat ileri alınarak kazanç elde edilmesin diye açılışta internetten saati sorar. Bu site çerez kullanmaz; yalnızca son sürümü öğrenmek için GitHub'a sorar.",
    "ft.releases": "Sürümler", "ft.issues": "Hata bildir", "ft.privacy": "Gizlilik",
    "ft.note": "Bu sayfadaki bütün görseller oyunun kendisinden."
  };

  /* Çağ görüntüleyicisinde her karenin gün ve nüfusu (ekran görüntülerindeki değerler). */
  var ERAS = {
    village: { day: 63, pop: 2150 },
    modern: { day: 302, pop: 14823 },
    metro: { day: 488, pop: 25525 },
    night: { day: 488, pop: 25525 }
  };
  var ORDER = ["village", "modern", "metro", "night"];

  var lang = "en";
  var originals = {};

  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { return null; }
  }

  function number(n) { return n.toLocaleString(lang === "tr" ? "tr-TR" : "en-US"); }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in originals)) originals[key] = el.textContent;
      el.textContent = lang === "tr" && TR[key] ? TR[key] : originals[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var k = "alt:" + key;
      if (!(k in originals)) originals[k] = el.alt;
      el.alt = lang === "tr" && TR[key] ? TR[key] : originals[k];
    });
    var btn = document.getElementById("langBtn");
    btn.textContent = lang === "tr" ? "EN" : "TR";
    btn.setAttribute("aria-label", lang === "tr" ? "Switch to English" : "Türkçe'ye geç");
    showHud(current);
  }

  /* ---------- Çağ görüntüleyici ---------- */
  var current = "village";
  var timer = null;
  var DWELL = 4500;
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".era-tabs button"));
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".era-img"));

  function showHud(era) {
    var info = ERAS[era];
    document.getElementById("hudDay").textContent = (lang === "tr" ? "Gün " : "Day ") + info.day;
    document.getElementById("hudPop").textContent = number(info.pop);
  }

  function show(era, running) {
    current = era;
    document.body.setAttribute("data-era", era);
    imgs.forEach(function (img) { img.classList.toggle("on", img.getAttribute("data-for") === era); });
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-era") === era;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.classList.remove("running");
      if (on && running) { void tab.offsetWidth; tab.classList.add("running"); }
    });
    showHud(era);
  }

  function autoplay() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.documentElement.style.setProperty("--dwell", DWELL + "ms");
    timer = setInterval(function () {
      if (document.hidden) return;
      show(ORDER[(ORDER.indexOf(current) + 1) % ORDER.length], true);
    }, DWELL);
    show(current, true);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      if (timer) { clearInterval(timer); timer = null; }
      show(tab.getAttribute("data-era"), false);
    });
  });

  /* ---------- Kaydırınca belirme ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Son sürüm (ön sürümler dahil) ---------- */
  function mb(bytes) { return Math.round(bytes / 1048576) + " MB"; }
  fetch("https://api.github.com/repos/serkantkn/PocketVille/releases?per_page=5")
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (list) {
      var rel = (list || []).filter(function (x) { return !x.draft; })[0];
      if (!rel) return;
      document.getElementById("relName").textContent = rel.name || rel.tag_name;
      (rel.assets || []).forEach(function (a) {
        if (/\.apk$/i.test(a.name)) { document.getElementById("apkLink").href = a.browser_download_url; document.getElementById("apkSize").textContent = mb(a.size); }
        if (/\.dmg$/i.test(a.name)) { document.getElementById("dmgLink").href = a.browser_download_url; document.getElementById("dmgSize").textContent = mb(a.size); }
      });
    })
    .catch(function () { /* bağlantılar sabit Beta 1 adreslerinde kalır */ });

  /* ---------- Başlat ---------- */
  var saved = store("pv-lang");
  var browser = (navigator.language || "en").toLowerCase();
  applyLang(saved === "tr" || saved === "en" ? saved : (browser.indexOf("tr") === 0 ? "tr" : "en"));
  document.getElementById("langBtn").addEventListener("click", function () {
    var next = lang === "tr" ? "en" : "tr";
    store("pv-lang", next);
    applyLang(next);
  });
  autoplay();
})();
