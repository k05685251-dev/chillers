import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const PHONE = "+998 55 557-44-44";
const TELEGRAM = "https://t.me/chiller_uzb";

const content = {
  uz: {
    nav: ["Bosh sahifa", "Kim uchun", "Mahsulotlar", "Loyihalar", "Savollar"],
    quote: "Bepul hisob-kitob",
    catalog: "Katalogni yuklab olish",
    eyebrow: "CHILLER SYSTEM · 2019 YILDAN",
    heroTitle: "Obyektingiz uchun isitish-sovutish tizimini tanlash va hisob-kitobi — 24 soatda, bepul.",
    heroText: "Muhandisimiz obyektingiz ma’lumotlarini ko‘rib chiqadi. Uskuna narxi, yillik elektr sarfi va umumiy xarajatni raqamlarda olasiz.",
    proof: ["500+ bajarilgan loyiha", "GRAD va HYC rasmiy distribyutori", "O‘z ombori va servisi"],
    sectorsTitle: "Qaysi obyekt uchun yechim kerak?",
    sectorsText: "Obyektingiz turini tanlang — hisob-kitob savollari shu tanlov bilan boshlanadi.",
    productsTitle: "Uskunalar va tizimlar",
    productsText: "Har bir obyekt uchun mos yechimni muhandislarimiz tanlaydi. Narx obyekt hisob-kitobidan keyin aniqlanadi.",
    processTitle: "Hisobdan servisgacha — bitta kompaniya, bitta mas’ul",
    projectsTitle: "Loyihalar va tajriba",
    projectsText: "Har bir obyekt bo‘yicha foto, shahar, quvvat va montaj muddati tasdiqlangan ma’lumotlar asosida beriladi.",
    quizTitle: "5 ta savolga javob bering — 24 soatda hisob-kitob oling",
    quizText: "Ma’lumotlaringiz muhandisga obyekt uchun mos tizimni hisoblashga yordam beradi.",
    docsTitle: "Sertifikatlar va ishonch",
    faqTitle: "Ko‘p beriladigan savollar",
    contactTitle: "Obyektingiz uchun hisob-kitobni 24 soatda bepul oling",
    contactText: "Ismingiz va telefon raqamingizni qoldiring. Mutaxassisimiz siz bilan bog‘lanadi.",
    name: "Ismingiz", phone: "Telefon raqamingiz", consent: "Shaxsiy ma’lumotlarimni qayta ishlashga roziman",
    send: "Hisob-kitob olish", call: "Qo‘ng‘iroq qilish", telegram: "Telegram’ga yozish",
    address: "Manzil va ish vaqti", addressValue: "Manzil va ish vaqti kompaniya tomonidan kiritiladi.",
    noPrice: "Narx obyekt hisob-kitobidan keyin aniqlanadi",
    quizNext: "Davom etish", quizBack: "Orqaga", quizFinish: "Yuborish",
    quizName: "Ism", quizContact: "Telefon", quizDone: "Arizangiz qabul qilindi!",
    quizDoneText: "Mutaxassisimiz siz bilan bog‘lanadi. Rahmat!",
    select: "Variantni tanlang", other: "Boshqa", area: "Maydon yoki quvvat", purpose: "Tizim nima uchun kerak?",
    timing: "Qachon kerak?", city: "Shahar", contactWay: "Qulay aloqa usuli", drawing: "Chizma yoki fayl (ixtiyoriy)",
    callback: "Qo‘ng‘iroq", faqAnswers: [
      "Ha. Texnik topshiriqda ko‘rsatilganidek, tizim tashqi havo −25 °C gacha bo‘lganda isitish rejimida ishlashi mumkin.",
      "O‘rnatish joyi va kerakli maydon obyekt hamda tanlangan model bo‘yicha muhandis hisob-kitobida aniqlanadi.",
      "Shovqin darajasi modelning texnik pasporti bo‘yicha aniqlanadi.",
      "Modulli yechimlarda zaxiralash imkoniyati ko‘rib chiqiladi. Aniq javob obyekt loyihasiga bog‘liq.",
      "Dastlab obyekt turi, maydoni, kerakli rejim, muddat va shahar haqidagi ma’lumotlar kerak bo‘ladi.",
      "Muddat uskuna mavjudligi, obyekt sharoiti va montaj hajmiga bog‘liq. Hisob-kitobda aniqlashtiriladi.",
      "Kafolat va servis shartlari tanlangan uskuna hamda shartnoma bo‘yicha belgilanadi.",
      "Elektr sarfi obyekt maydoni, issiqlik yuklamasi, uskuna va foydalanish rejimiga qarab hisoblanadi."
    ]
  },
  ru: {
    nav: ["Главная", "Для кого", "Оборудование", "Проекты", "Вопросы"],
    quote: "Бесплатный расчёт", catalog: "Скачать каталог",
    eyebrow: "CHILLER SYSTEM · С 2019 ГОДА",
    heroTitle: "Подбор и расчёт системы отопления и охлаждения для вашего объекта — бесплатно за 24 часа.",
    heroText: "Наш инженер изучит параметры объекта. Вы получите расчёт стоимости оборудования, годового расхода электроэнергии и общих затрат.",
    proof: ["500+ реализованных проектов", "Официальный дистрибьютор GRAD и HYC", "Собственный склад и сервис"],
    sectorsTitle: "Для какого объекта нужно решение?",
    sectorsText: "Выберите тип объекта — расчёт начнётся с этого ответа.",
    productsTitle: "Оборудование и системы",
    productsText: "Наши инженеры подберут решение для вашего объекта. Стоимость определяется после расчёта.",
    processTitle: "От расчёта до сервиса — одна компания, одна ответственность",
    projectsTitle: "Проекты и опыт",
    projectsText: "Фото, город, мощность и сроки по каждому объекту публикуются на основе подтверждённых данных.",
    quizTitle: "Ответьте на 5 вопросов — получите расчёт за 24 часа",
    quizText: "Ваши ответы помогут инженеру подобрать систему для объекта.",
    docsTitle: "Сертификаты и доверие", faqTitle: "Часто задаваемые вопросы",
    contactTitle: "Получите бесплатный расчёт для вашего объекта за 24 часа",
    contactText: "Оставьте имя и номер телефона. Наш специалист свяжется с вами.",
    name: "Ваше имя", phone: "Номер телефона", consent: "Я согласен(на) на обработку персональных данных",
    send: "Получить расчёт", call: "Позвонить", telegram: "Написать в Telegram",
    address: "Адрес и время работы", addressValue: "Адрес и график работы будут добавлены компанией.",
    noPrice: "Стоимость определяется после расчёта объекта",
    quizNext: "Продолжить", quizBack: "Назад", quizFinish: "Отправить",
    quizName: "Имя", quizContact: "Телефон", quizDone: "Заявка принята!",
    quizDoneText: "Наш специалист свяжется с вами. Спасибо!",
    select: "Выберите вариант", other: "Другое", area: "Площадь или мощность", purpose: "Для чего нужна система?",
    timing: "Когда требуется?", city: "Город", contactWay: "Предпочтительный способ связи", drawing: "Чертёж или файл (необязательно)",
    callback: "Звонок", faqAnswers: [
      "Да. Согласно техническому заданию, система может работать на обогрев при наружной температуре до −25 °C.",
      "Место установки и необходимая площадь определяются инженером с учётом объекта и выбранной модели.",
      "Уровень шума определяется по техническому паспорту конкретной модели.",
      "Для модульных решений рассматривается резервирование. Точный ответ зависит от проекта объекта.",
      "На первом этапе нужны тип объекта, площадь, требуемый режим, сроки и город.",
      "Срок зависит от наличия оборудования, условий объекта и объёма монтажа. Он уточняется при расчёте.",
      "Условия гарантии и сервиса определяются выбранным оборудованием и договором.",
      "Расход электроэнергии рассчитывается с учётом площади, тепловой нагрузки, оборудования и режима эксплуатации."
    ]
  }
};

const sectors = [
  ["Zavod va ishlab chiqarish", "Texnologik jarayon uchun uzluksiz isitish va sovutish", "factory"],
  ["Issiqxona", "Qishda −25 °C gacha isitadi; davlat subsidiyasi dasturlariga mos", "greenhouse"],
  ["Savdo markazi", "Katta maydonda jaziramada ham, sovuqda ham barqaror harorat", "mall"],
  ["Mehmonxona", "Har xonada alohida boshqaruv va past shovqin", "hotel"],
  ["Klinika va sanatoriy", "24/7 ishonchli ishlash, modullar hisobiga zaxira", "clinic"],
  ["Biznes markaz va ofis", "Bitta tizim bilan isitish va sovutish, elektr xarajati kamroq", "office"],
  ["Ta’lim muassasasi", "Sinf va zallarda qulay harorat, qishda isitish", "school"],
  ["Davlat obyekti", "Sertifikatlar, rekvizitlar va tender hujjatlari tayyor", "public"]
];

const products = [
  ["Chiller–issiqlik nasoslari", "Barcha turdagi yirik binolar; yozda sovutadi, qishda isitadi", "32–450 kVt · ≈250–4 500 m² · 5 model", "01"],
  ["Kassetali fankoyllar", "Ofis, savdo zali va restoranlar — shift ichiga o‘rnatiladi", "7 model", "02"],
  ["Kanalli fankoyllar", "Mehmonxona, ofis va koridor — shift ortiga yashiriladi", "8 model", "03"],
  ["Polga o‘rnatiladigan fankoyllar", "Issiqxona, sex va zallar — polga yoki devor yoniga", "6 model", "04"]
];

const productImages = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85", // Chiller / industrial equipment
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85", // Ceiling HVAC installation
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85", // Ductwork / engineering
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"  // Floor-mounted equipment / workshop
];

const sectorImages = [
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85", // Zavod va ishlab chiqarish
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85", // Issiqxona
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85", // Savdo markazi
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85", // Mehmonxona
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85", // Klinika
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85", // Biznes markaz va ofis
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85", // Ta'lim muassasasi
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"  // Davlat obyekti
];

const projectImages = sectorImages.slice(0, 4);

const steps = [
  ["01", "Loyihalash", "Obyekt parametrlarini o‘rganish va yechimni hisoblash"],
  ["02", "Yetkazib berish", "Tanlangan uskunani obyektga yetkazish"],
  ["03", "Montaj", "O‘rnatish, zarur ko‘tarish ishlari va ulash"],
  ["04", "Ishga tushirish", "Tizimni tekshirish va ishga tushirish"],
  ["05", "Servis va kafolat", "Keyingi texnik xizmat va kafolat"]
];

const faqs = [
  "Chiller qishda ham isitadimi?",
  "Chiller qancha joy egallaydi va qayerga o‘rnatiladi?",
  "Shovqin darajasi qancha?",
  "Elektr uzilsa yoki bitta modul ishdan chiqsa nima bo‘ladi?",
  "Hisob-kitob uchun mendan qanday ma’lumot kerak?",
  "Yetkazib berish va montaj qancha vaqt oladi?",
  "Kafolat va servis qanday?",
  "Oyiga elektr sarfi qancha bo‘ladi?"
];

const questions = [
  { title: "Obyekt turi", options: ["Zavod / sex", "Issiqxona", "Savdo markazi", "Mehmonxona", "Klinika", "Biznes markaz / ofis", "Ta’lim", "Davlat obyekti", "Boshqa"] },
  { title: "Maydon yoki quvvat", options: ["1 000 m² gacha", "1–5 ming m²", "5–20 ming m²", "20 ming m² dan ko‘p", "Quvvatni bilaman: ___ kVt"] },
  { title: "Tizim nima uchun kerak?", options: ["Faqat sovutish", "Faqat isitish", "Sovutish va isitish"] },
  { title: "Qachon kerak?", options: ["1 oy ichida", "1–3 oy", "3–6 oy", "Hali rejalashtiryapman"] },
  { title: "Shahar", options: ["Toshkent", "Toshkent viloyati", "Samarqand", "Boshqa"] }
];

function App() {
  const [route, setRoute] = useState(() => window.location.pathname);
  const [lang, setLang] = useState(() => window.location.pathname === "/ru" ? "ru" : "uz");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("Qo‘ng‘iroq");
  const [consent, setConsent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const t = content[lang];

  useEffect(() => {
    const syncRoute = () => {
      setRoute(window.location.pathname);
      setLang(window.location.pathname === "/ru" ? "ru" : "uz");
    };
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const changeLanguage = (next) => {
    const nextPath = next === "ru" ? "/ru" : "/";
    window.history.pushState({}, "", nextPath);
    setRoute(nextPath);
    setLang(next);
  };

  const quizQuestionTitles = lang === "uz"
    ? questions.map(q => q.title)
    : ["Тип объекта", "Площадь или мощность", "Для чего нужна система?", "Когда требуется?", "Город"];
  const quizOptions = lang === "uz" ? questions.map(q => q.options) : [
    ["Завод / цех", "Теплица", "Торговый центр", "Отель", "Клиника", "Бизнес-центр / офис", "Образование", "Государственный объект", "Другое"],
    ["До 1 000 м²", "1–5 тыс. м²", "5–20 тыс. м²", "Более 20 тыс. м²", "Знаю мощность: ___ кВт"],
    ["Только охлаждение", "Только отопление", "Охлаждение и отопление"],
    ["В течение 1 месяца", "1–3 месяца", "3–6 месяцев", "Пока планирую"],
    ["Ташкент", "Ташкентская область", "Самарканд", "Другое"]
  ];

  const leadLevel = useMemo(() => {
    const area = answers[1];
    const timing = answers[3];
    const large = ["1–5 ming m²", "5–20 ming m²", "20 ming m² dan ko‘p", "Quvvatni bilaman: ___ kVt", "До 1 000 м²", "1–5 тыс. м²", "5–20 тыс. м²", "Более 20 тыс. м²", "Знаю мощность: ___ кВт"].includes(area);
    const veryLarge = ["5–20 ming m²", "20 ming m² dan ko‘p", "Quvvatni bilaman: ___ kVt", "5–20 тыс. м²", "Более 20 тыс. м²", "Знаю мощность: ___ кВт"].includes(area);
    const urgent = ["1 oy ichida", "1–3 oy", "В течение 1 месяца", "1–3 месяца"].includes(timing);
    const medium = ["3–6 oy", "3–6 месяцев"].includes(timing);
    if ((veryLarge || (large && area !== "1 000 m² gacha" && area !== "До 1 000 м²")) && urgent) return "ISSIQ";
    if ((large && medium) || (!large && urgent)) return "ILIQ";
    return "SOVUQ";
  }, [answers]);

  const setAnswer = (index, value) => setAnswers(old => old.map((v, i) => i === index ? value : v));
  const scrollToQuiz = (sector = "") => {
    if (sector) setAnswer(0, sector);
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 9 || !consent) return;
    setSubmitted(true);
    // Demo mode: connect a secure server endpoint before collecting real customer leads.
    // The server should forward this payload to AmoCRM and the private Telegram work group.
    console.log("CHILLER SYSTEM lead — backend integration required", {
      name, phone, contact, answers, leadLevel, language: lang,
      fileName, source: window.location.href, utm: window.location.search
    });
    window.history.pushState({}, "", "/rahmat");
    setRoute("/rahmat");
  };

  const submitQuiz = (e) => {
    e.preventDefault();
    if (step < 5) {
      if (!answers[step]) return;
      setStep(step + 1);
      return;
    }
    handleSubmit(e);
  };

  const startQuiz = () => {
    setStep(0);
    scrollToQuiz();
  };

  if (route === "/rahmat") {
    return <div className="standalone-page"><div className="standalone-card"><span className="standalone-mark">✓</span><span className="section-kicker">CHILLER SYSTEM</span><h1>{lang === "uz" ? "Sinov arizasi qabul qilindi" : "Тестовая заявка принята"}</h1><p>{lang === "uz" ? "Sayt hozir sinov rejimida. Haqiqiy mijoz arizalarini qabul qilish uchun AmoCRM va Telegram server ulanishi faollashtirilishi kerak." : "Сайт пока работает в тестовом режиме. Для приёма реальных заявок необходимо подключить серверную интеграцию с AmoCRM и Telegram."}</p><div className="standalone-actions"><a className="button" href="/">{lang === "uz" ? "Bosh sahifaga qaytish" : "На главную"}</a><a className="button button-outline" href={TELEGRAM} target="_blank" rel="noreferrer">Telegram ↗</a></div></div></div>;
  }

  if (route === "/maxfiylik") {
    return <div className="standalone-page"><article className="privacy-card"><a className="brand" href="/"><span className="brand-mark">CS</span><span>CHILLER<span className="brand-light">SYSTEM</span></span></a><span className="section-kicker">CHILLER SYSTEM · {lang === "uz" ? "MAXFIYLIK" : "КОНФИДЕНЦИАЛЬНОСТЬ"}</span><h1>{lang === "uz" ? "Shaxsiy ma’lumotlarni qayta ishlash siyosati" : "Политика обработки персональных данных"}</h1><p>{lang === "uz" ? "Ushbu sahifa sayt orqali yuborilgan ism, telefon raqami, obyekt turi, maydon, kerakli tizim, muddat va shahar haqidagi ma’lumotlar bilan ishlash tartibini tushuntiradi." : "Эта страница описывает обработку имени, телефона, типа объекта, площади, требуемой системы, сроков и города, отправленных через сайт."}</p><h2>{lang === "uz" ? "Ma’lumotlardan foydalanish" : "Использование данных"}</h2><p>{lang === "uz" ? "Ma’lumotlar faqat murojaatga javob berish, muhandislik hisob-kitobini tayyorlash va mijoz bilan bog‘lanish maqsadida ishlatilishi kerak." : "Данные должны использоваться только для ответа на обращение, подготовки инженерного расчёта и связи с клиентом."}</p><h2>{lang === "uz" ? "Saqlash va himoya" : "Хранение и защита"}</h2><p>{lang === "uz" ? "Ma’lumotlarga faqat vakolatli xodimlar kirishi, ular xavfsiz tizimlarda saqlanishi va zarur bo‘lmaganida o‘chirilishi lozim. Sayt egasi yakuniy yuridik matnni tasdiqlashi kerak." : "Доступ должен быть только у уполномоченных сотрудников; данные следует хранить в защищённых системах и удалять, когда они больше не нужны. Окончательный юридический текст должен утвердить владелец сайта."}</p><p className="privacy-notice">{lang === "uz" ? "Eslatma: bu boshlang‘ich matn. Ishga tushirishdan oldin kompaniya yuristi yoki mas’ul vakili tomonidan tekshirilishi kerak." : "Примечание: это базовый текст. Перед запуском его должен проверить юрист или ответственный представитель компании."}</p><a className="button" href="/">{lang === "uz" ? "Bosh sahifaga qaytish" : "На главную"}</a></article></div>;
  }

  return (
    <div className={`site ${lang === "ru" ? "lang-ru" : ""}`}>
      <header className="header">
        <a className="brand" href="#top" aria-label="CHILLER SYSTEM bosh sahifa">
          <span className="brand-mark">CS</span>
          <span>CHILLER<span className="brand-light">SYSTEM</span></span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((item, i) => <a key={item} href={["#top", "#sectors", "#products", "#projects", "#faq"][i]}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch">
            <button className={lang === "uz" ? "active" : ""} onClick={() => changeLanguage("uz")}>UZ</button>
            <button className={lang === "ru" ? "active" : ""} onClick={() => changeLanguage("ru")}>RU</button>
          </div>
          <a className="header-phone" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
          <button className="button button-small" onClick={startQuiz}>{t.quote}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span />{t.eyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-lead">{t.heroText}</p>
            <div className="hero-buttons">
              <button className="button" onClick={startQuiz}>{t.quote}<span>↗</span></button>
              <a className="button button-outline" href="/catalog-2026.pdf" download>{t.catalog}<span>↓</span></a>
            </div>
            <div className="proof-list">
              {t.proof.map((item) => <div className="proof-item" key={item}><span className="proof-check">✓</span>{item}</div>)}
            </div>
          </div>
          <div className="hero-visual hero-photo-visual">
            <img className="hero-photo" src="/image copy.png"   alt="Sanoat binosi uchun chiller tizimining texnik vizualizatsiyasi" />
            <div className="hero-photo-shade" />
            <div className="visual-note"><span className="note-icon">✳</span><span><b>GRAD · HYC</b><small>Rasmiy distribyutor</small></span></div>
            <div className="visual-caption">MUHANDISLIK · IQLIM NAZORATI</div>
            <div className="hero-spec-panel">
              <div><strong>32–450</strong><span>kVt quvvat diapazoni</span></div>
              <i />
              <div><strong>24 <small>soat</small></strong><span>Bepul hisob-kitob</span></div>
            </div>
            <span className="visual-disclaimer">TEXNIK VIZUALIZATSIYA</span>
          </div>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span>ISHONCHLI MUHANDISLIK YECHIMLARI</span>
            <b>GRAD</b><b>HYC</b><b>CHILLER SYSTEM</b><span>2019 — 2026</span>
          </div>
        </section>

        <section className="quick-stats section-wrap" aria-label="Kompaniya ko‘rsatkichlari">
          <div className="quick-stat"><span className="stat-icon">✳</span><strong>500<span>+</span></strong><small>{lang === "uz" ? "Bajarilgan loyiha" : "Реализованных проектов"}</small></div>
          <div className="quick-stat"><span className="stat-icon">◷</span><strong>24<span>h</span></strong><small>{lang === "uz" ? "Hisob-kitob muddati" : "Срок расчёта"}</small></div>
          <div className="quick-stat"><span className="stat-icon">⌁</span><strong>32–450</strong><small>{lang === "uz" ? "kVt quvvat diapazoni" : "Диапазон мощности, кВт"}</small></div>
          <div className="quick-stat"><span className="stat-icon">✓</span><strong>2019</strong><small>{lang === "uz" ? "Yildan beri faoliyat" : "Работаем с 2019 года"}</small></div>
        </section>

        <section className="section section-wrap" id="sectors">
          <div className="section-heading">
            <div><span className="section-kicker">01 / KIM UCHUN</span><h2>{t.sectorsTitle}</h2></div>
            <p>{t.sectorsText}</p>
          </div>
          <div className="sector-grid">
            {sectors.map(([title, desc, icon], i) => (
              <button className="sector-card" key={title} onClick={() => scrollToQuiz(title)}>
                <span className="sector-number">0{i + 1}</span>
                <img className="sector-photo" src={sectorImages[i]} alt={title} onError={(e) => { e.currentTarget.style.display = "none"; }} loading="lazy" />
                <span className={`sector-icon icon-${icon}`} aria-hidden="true"><span /></span>
                <strong>{lang === "uz" ? title : ["Заводы и производство", "Теплицы", "Торговые центры", "Отели", "Клиники и санатории", "Бизнес-центры и офисы", "Учебные учреждения", "Государственные объекты"][i]}</strong>
                <small>{lang === "uz" ? desc : ["Непрерывное отопление и охлаждение технологических процессов", "Отопление зимой до −25 °C", "Стабильная температура на больших площадях", "Индивидуальное управление в каждом номере", "Надёжная работа 24/7", "Отопление и охлаждение одной системой", "Комфортная температура в классах и залах", "Сертификаты и документы для тендеров"][i]}</small>
                <span className="card-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="section-wrap">
            <div className="section-heading">
              <div><span className="section-kicker">02 / MAHSULOTLAR</span><h2>{t.productsTitle}</h2></div>
              <p>{t.productsText}</p>
            </div>
            <div className="product-grid">
              {products.map(([title, desc, spec, number]) => (
                <article className="product-card" key={number}>
                  <div className={`product-visual product-${number}`}>
                    <span className="product-index">{number}</span>
                    <img className="product-photo" src={productImages[Number(number) - 1]} alt={title} loading="lazy" decoding="async" />
                    <span className="product-type">CLIMATE SYSTEMS</span>
                  </div>
                  <div className="product-info">
                    <h3>{lang === "uz" ? title : ["Чиллеры — тепловые насосы", "Кассетные фанкойлы", "Канальные фанкойлы", "Напольные фанкойлы"][Number(number) - 1]}</h3>
                    <p>{lang === "uz" ? desc : ["Для крупных зданий: охлаждение летом и отопление зимой", "Для офисов, торговых залов и ресторанов — в потолок", "Для отелей, офисов и коридоров — скрытая установка", "Для теплиц, цехов и залов — у пола или стены"][Number(number) - 1]}</p>
                    <div className="product-bottom"><span>{spec}</span><button onClick={startQuiz}>{lang === "uz" ? "Mosini aniqlash" : "Подобрать"} ↗</button></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="price-note"><span>✳</span>{t.noPrice}</div>
          </div>
        </section>

        <section className="section section-wrap process-section">
          <div className="section-heading">
            <div><span className="section-kicker">03 / TO‘LIQ XIZMAT</span><h2>{t.processTitle}</h2></div>
            <p>{lang === "uz" ? "Loyihadan boshlab ishga tushirish va keyingi xizmatgacha." : "От проекта до запуска и дальнейшего обслуживания."}</p>
          </div>
          <div className="process-grid">
            {steps.map(([num, title, desc], i) => <div className="process-item" key={num}>
              <div className="process-top"><span>{num}</span><i>↗</i></div>
              <h3>{lang === "uz" ? title : ["Проектирование", "Поставка", "Монтаж", "Запуск", "Сервис и гарантия"][i]}</h3>
              <p>{lang === "uz" ? desc : ["Изучение параметров объекта и расчёт решения", "Доставка выбранного оборудования на объект", "Установка и подключение оборудования", "Проверка и запуск системы", "Техническое обслуживание и гарантия"][i]}</p>
            </div>)}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading light-heading">
              <div><span className="section-kicker">04 / TAJRIBA</span><h2>{t.projectsTitle}</h2></div>
              <p>{t.projectsText}</p>
            </div>
            <div className="project-grid">
              {[0, 1, 2, 3].map((n) => <article className={`project-card project-photo-card project-bg-${n}`} key={n}>
                <div className="project-image-label">CHILLER SYSTEM <span>0{n + 1}</span></div>
                <div className="project-photo-wrap">
                  <img src={projectImages[n]} onError={(e) => { e.currentTarget.style.display = "none"; }} alt={lang === "uz" ? ["Sanoat sovutish tizimi vizualizatsiyasi", "Issiqxona iqlim tizimi vizualizatsiyasi", "Savdo binosi iqlim tizimi vizualizatsiyasi", "Biznes markaz iqlim tizimi vizualizatsiyasi"][n] : ["Визуализация промышленной системы охлаждения", "Визуализация климатической системы теплицы", "Визуализация климатической системы торгового здания", "Визуализация климатической системы бизнес-центра"][n]} loading="lazy" decoding="async" />
                  <span className="project-visual-tag">{lang === "uz" ? "TEXNIK KONSEPT" : "ТЕХНИЧЕСКИЙ КОНЦЕПТ"}</span>
                </div>
                <div className="project-detail"><span>{lang === "uz" ? "LOYIHA MA’LUMOTI" : "ДАННЫЕ ПРОЕКТА"}</span><strong>{lang === "uz" ? ["Sanoat va ishlab chiqarish", "Issiqxona majmuasi", "Savdo va xizmat ko‘rsatish binosi", "Biznes markaz va ofis"][n] : ["Промышленность и производство", "Тепличный комплекс", "Торговое и сервисное здание", "Бизнес-центр и офис"][n]}</strong><small>{lang === "uz" ? "Shahar · Quvvat · Muddat — tasdiqlangan loyiha ma’lumotlari kiritiladi" : "Город · Мощность · Срок — будут добавлены подтверждённые данные"}</small></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="quiz-section" id="quiz">
          <div className="section-wrap quiz-layout">
            <div className="quiz-intro">
              <span className="section-kicker">05 / BEPUL HISOB-KITOB</span>
              <h2>{t.quizTitle}</h2><p>{t.quizText}</p>
              <div className="quiz-benefit"><span>24</span><div><b>{lang === "uz" ? "soat ichida" : "в течение 24 часов"}</b><small>{lang === "uz" ? "Muhandis hisob-kitobni tayyorlaydi" : "Инженер подготовит расчёт"}</small></div></div>
              <div className="quiz-benefit"><span>10</span><div><b>{lang === "uz" ? "yillik xarajat" : "лет расходов"}</b><small>{lang === "uz" ? "Hisob-kitob bepul sovg‘a" : "Бесплатный расчёт в подарок"}</small></div></div>
            </div>
            <div className="quiz-card">
              {submitted ? <div className="success-state"><div className="success-icon">✓</div><span className="section-kicker">CHILLER SYSTEM</span><h3>{t.quizDone}</h3><p>{t.quizDoneText}</p><a href={TELEGRAM} target="_blank" rel="noreferrer">{t.telegram} ↗</a></div> : (
                <>
                  <div className="quiz-card-top"><span>{lang === "uz" ? "OBYEKT HAQIDA" : "ОБ ОБЪЕКТЕ"}</span><b>{step < 5 ? `${step + 1} / 5` : "5 / 5"}</b></div>
                  <div className="progress-track"><span style={{ width: `${Math.min((step / 5) * 100, 100)}%` }} /></div>
                  <form onSubmit={submitQuiz}>
                    {step < 5 ? <>
                      <h3>{quizQuestionTitles[step]}</h3>
                      <div className="answer-list">
                        {quizOptions[step].map(option => <button type="button" key={option} className={`answer-option ${answers[step] === option || (step === 0 && answers[step] === sectors[0][0] && option === "Zavod / sex") ? "selected" : ""}`} onClick={() => setAnswer(step, option)}>
                          <span>{option}</span><i>{answers[step] === option ? "✓" : "↗"}</i>
                        </button>)}
                      </div>
                      <div className="quiz-controls"><button type="button" className="text-button" disabled={step === 0} onClick={() => setStep(step - 1)}>← {t.quizBack}</button><button type="submit" className="button" disabled={!answers[step]}>{t.quizNext} ↗</button></div>
                    </> : <>
                      <h3>{lang === "uz" ? "Aloqa ma’lumotlaringiz" : "Ваши контактные данные"}</h3>
                      <label className="field-label">{t.name}<input value={name} onChange={e => setName(e.target.value)} placeholder={lang === "uz" ? "Ism familiya" : "Имя и фамилия"} required /></label>
                      <label className="field-label">{t.phone}<input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+998 __ ___ __ __" inputMode="tel" required /></label>
                      <label className="field-label">{t.contactWay}<select value={contact} onChange={e => setContact(e.target.value)}><option>{t.callback}</option><option>Telegram</option></select></label>
                      <label className="field-label">{t.drawing}<input type="file" onChange={e => setFileName(e.target.files?.[0]?.name || "")} /></label>
                      <label className="consent"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /><span>{t.consent} · <a href="/maxfiylik">{lang === "uz" ? "Maxfiylik siyosati" : "Политика конфиденциальности"}</a></span></label>
                      <div className="quiz-controls"><button type="button" className="text-button" onClick={() => setStep(4)}>← {t.quizBack}</button><button type="submit" className="button" disabled={!name.trim() || phone.replace(/\D/g, "").length < 9 || !consent}>{t.quizFinish} ↗</button></div>
                    </>}
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section section-wrap documents-section">
          <div className="section-heading">
            <div><span className="section-kicker">06 / HUJJATLAR</span><h2>{t.docsTitle}</h2></div>
            <p>{lang === "uz" ? "Guvohnoma, sertifikat va dilerlik hujjatlari shu yerda joylashtiriladi." : "Здесь размещаются свидетельства, сертификаты и дилерские документы."}</p>
          </div>
          <div className="document-grid">
            {["GRAD sertifikatlari", "HYC sertifikatlari", "Dilerlik hujjatlari"].map((label, i) => <div className="document-card" key={label}>
              <div className="document-paper"><span>CHILLER SYSTEM</span><div className="paper-lines" /><div className="paper-seal">✓</div></div>
              <div><small>0{i + 1} / DOCUMENT</small><strong>{lang === "uz" ? label : ["Сертификаты GRAD", "Сертификаты HYC", "Дилерские документы"][i]}</strong><span>{lang === "uz" ? "Hujjat rasmi qo‘shiladi" : "Добавьте скан документа"}</span></div>
            </div>)}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-wrap faq-layout">
            <div><span className="section-kicker">07 / FAQ</span><h2>{t.faqTitle}</h2><p>{lang === "uz" ? "Savolingizga javob topilmadimi? Biz bilan bog‘laning." : "Не нашли ответ? Свяжитесь с нами."}</p><a className="faq-contact" href={TELEGRAM} target="_blank" rel="noreferrer">{t.telegram} ↗</a></div>
            <div className="faq-list">
              {faqs.map((question, i) => <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={question}>
                <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>0{i + 1}</span><strong>{lang === "uz" ? question : ["Чиллер работает на отопление зимой?", "Сколько места занимает чиллер и где его устанавливают?", "Какой уровень шума?", "Что будет при отключении электричества или отказе модуля?", "Какие данные нужны для расчёта?", "Сколько занимает доставка и монтаж?", "Какие условия гарантии и сервиса?", "Сколько электроэнергии расходуется в месяц?"][i]}</strong><i>{faqOpen === i ? "−" : "+"}</i></button>
                {faqOpen === i && <p>{t.faqAnswers[i]}</p>}
              </div>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div><span className="section-kicker">08 / BOG‘LANISH</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
            <div className="contact-actions">
              <button className="button button-white" onClick={startQuiz}>{t.send} ↗</button>
              <a className="button button-ghost" href={TELEGRAM} target="_blank" rel="noreferrer">{t.telegram} ↗</a>
              <a className="contact-phone" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <a className="brand brand-footer" href="#top"><span className="brand-mark">CS</span><span>CHILLER<span className="brand-light">SYSTEM</span></span></a>
          <p>{lang === "uz" ? "Sanoat va tijorat obyektlari uchun iqlim tizimlari." : "Климатические системы для промышленных и коммерческих объектов."}</p>
          <div className="footer-links"><a href="#sectors">{t.nav[1]}</a><a href="#products">{t.nav[2]}</a><a href="/maxfiylik">{lang === "uz" ? "Maxfiylik siyosati" : "Политика конфиденциальности"}</a></div>
          <div className="footer-contact"><a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a><a href={TELEGRAM} target="_blank" rel="noreferrer">@chiller_uzb</a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} CHILLER SYSTEM</span><span>{t.address}: {t.addressValue}</span></div>
      </footer>

      <a className="back-to-top" href="#top" aria-label={lang === "uz" ? "Yuqoriga qaytish" : "Наверх"}>↑</a>

      <div className="mobile-dock">
        <button onClick={startQuiz}><span>✳</span>{t.quote}</button>
        <a href={TELEGRAM} target="_blank" rel="noreferrer"><span>↗</span>Telegram</a>
        <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}><span>⌕</span>{lang === "uz" ? "Qo‘ng‘iroq" : "Звонок"}</a>
      </div>
    </div>
  );
}

export default App;
