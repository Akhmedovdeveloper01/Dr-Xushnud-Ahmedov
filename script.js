// ---- TRANSLATIONS ----
const i18n = {
  uz: {
    nav_about: 'Haqida', nav_services: 'Xizmatlar', nav_conditions: 'Kasalliklar',
    nav_contact: 'Aloqa', nav_cta: 'Qabulga yozilish',
    hero_badge: 'Mutaxassis Allergolog',
    hero_sub: 'Allergiya va immunologiya sohasida 20 yillik tajriba. Zamonaviy diagnostika usullari va individual yondashuv bilan har bir bemorga eng yaxshi natijani ta\'minlaymiz.',
    stat1: 'Yil tajriba', stat2: 'Bemorlar', stat3: '% Mamnunlik',
    hero_btn1: 'Qabulga yozilish', hero_btn2: 'Batafsil',
    doc_title: 'Allergolog-immunolog', doc_edu: 'ToshDTI',
    rating: 'Reyting', cert_label: 'Sertifikat',
    about_tag: 'Doktor haqida',
    about_title: 'Allergiya bilan kurashishda ishonchli hamkoringiz',
    about_text: 'Doktor Xushnud Ahmedov — O\'zbekiston Respublikasining yetakchi allergolog-immunolog mutaxassislaridan biri. U Toshkent Davlat Tibbiyot Institutini bitirgan va Yevropa allergologiya markazlarida malaka oshirgan. Har bir bemorga individual yondashuv, zamonaviy diagnostika va samarali davolash usullari taklif etiladi.',
    cred1_t: 'ToshDTI — Oliy tibbiy ma\'lumot', cred1_d: 'Pediatriya va umumiy tibbiyot bo\'yicha diplom',
    cred2_t: 'Yevropa allergologiya akademiyasi', cred2_d: 'Malaka oshirish kurslari, 2019',
    cred3_t: 'Jahon allergologiya tashkiloti a\'zosi', cred3_d: 'WAO sertifikati, 2020',
    cred4_t: 'Immunoterapiya bo\'yicha mutaxassis', cred4_d: 'SCIT va SLIT usullarida tajriba',
    serv_tag: 'Xizmatlar', serv_title: 'Taklif etilayotgan xizmatlar',
    serv_sub: 'Diagnostikadan davolashgacha — zamonaviy tibbiyot usullarida to\'liq kompleks yordam',
    s1_name: 'Allergiya diagnostikasi', s1_desc: 'Teri testlari, qon tekshiruvi va provokatsiya testlari yordamida allergenni aniq aniqlash.',
    s2_name: 'Immunoterapiya (ASIT)', s2_desc: 'Allergenga sezuvchanlikni kamaytirish uchun individual immunoterapiya kurslari.',
    s3_name: 'Bronxial astma', s3_desc: 'Astmani nazorat qilish, davolash va hayot sifatini yaxshilash bo\'yicha to\'liq dastur.',
    s4_name: 'Immunitet holati tahlili', s4_desc: 'Immunogramma va keng qamrovli immunologik tekshiruvlar orqali holat baholash.',
    s5_name: 'Pollinoz (gul changiga)', s5_desc: 'Mavsumiy allergiya alomatlarini oldini olish va davolash bo\'yicha maxsus yondashuv.',
    s6_name: 'Bolalar allergologiyasi', s6_desc: '0 yoshdan 18 yoshgacha bolalarda allergik kasalliklarni davolash bo\'yicha maxsus yondashuv.',
    cond_tag: 'Kasalliklar', cond_title: 'Davolanadigan kasalliklar',
    cond_sub: 'Keng ko\'lamli allergik va immunologik kasalliklarni davolashda tajriba va yuqori samaradorlik',
    c1:'Rinit',c2:'Kon\'yunktivit',c3:'Bronxial astma',c4:'Pollinoz',c5:'Oziq-ovqat allergiyasi',
    c6:'Dori allergiyasi',c7:'Hayvon yuni allergiyasi',c8:'Hasharot chaqishi',c9:'Angioedema',
    c10:'Urtikaria',c11:'Atopik dermatit',c12:'Anafila­ksiya',
    proc_tag:'Qabul tartibi', proc_title:'Qabul qanday kechadi?',
    p1_t:'Murojaat',p1_d:'Telefon yoki sayt orqali qulay vaqtga yozilasiz',
    p2_t:'Tahlil va diagnostika',p2_d:'Zamonaviy usullar bilan to\'liq tekshiruv o\'tkaziladi',
    p3_t:'Diagnoz',p3_d:'Natijalar tahlil qilinib, aniq diagnoz qo\'yiladi',
    p4_t:'Davolash rejasi',p4_d:'Sizga individual davolash dasturi tuziladi',
    p5_t:'Nazorat',p5_d:'Davolash jarayoni doimiy nazorat ostida olib boriladi',
    test_tag:'Fikrlar', test_title:'Bemorlarimiz fikrlari',
    t1_text:'"Doktor Ahmedov menga 5 yillik astma kasalligimdan xalos bo\'lishimga yordam berdi. Immunoterapiya kursi ajoyib natija berdi. Hozir dori ichmasdan yashayapman!"',
    t2_text:'"Farzandimning oziq-ovqat allergiyasini tashxis qilishda juda professional yondashuv bo\'ldi. Doktor Xushnud juda sabr-toqatli va tushuntiruvchi. Tavsiya etaman!"',
    t3_text:'"Ko\'p yillik pollinoz kasalligim uchun eng to\'g\'ri tashxis va davolash usulini taklif qildi. Har yilgi gul chang mavsumida endi hech qanday muammo yo\'q!"',
    faq_tag:'FAQ', faq_title:'Ko\'p beriladigan savollar',
    cont_tag:'Aloqa', cont_title:'Qabulga yozilish',
    ci_title:'Biz bilan bog\'laning',
    ci_sub:'Savol va takliflar uchun quyidagi manzil va telefon raqamlari orqali murojaat qiling.',
    ci_addr_l:'Manzil', ci_phone_l:'Telefon', ci_hours_l:'Ish vaqti',
    ci_hours_v:'Dush–Jum: 9:00–18:00 | Shan: 9:00–14:00',
    form_title:'Qabul uchun so\'rov',
    f_name:'Ism', f_phone:'Telefon', f_date:'Sana', f_time:'Vaqt', f_reason:'Murojaat sababi', f_msg:'Xabar (ixtiyoriy)',
    f_submit:'Yozilish →',
    fr1:'Allergiya tekshiruvi',fr2:'Bronxial astma',fr3:'Immunoterapiya',fr4:'Bolalar allergologiyasi',fr5:'Boshqa',
    footer_nav:'Sahifalar', footer_serv:'Xizmatlar', footer_contact:'Aloqa',
    footer_desc:'Allergiya va immunologiya sohasida ishonchli mutaxassis. Zamonaviy davolash, individual yondashuv.',
    footer_copy:'© 2026 Dr. Xushnud Ahmedov. Barcha huquqlar himoyalangan.',
    footer_copy2:'Allergolog-immunolog, Toshkent',
    days:['Du','Se','Ch','Pa','Ju','Sh','Ya'],
    hours:['9–18','9–18','9–18','9–18','9–18','9–14','Dam'],
    toast_success:'Muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
    faqs:[
      {q:'Birinchi qabul qancha vaqt davom etadi?', a:'Birinchi qabul odatda 40–60 daqiqa davom etadi. Bu vaqt ichida anamnez to\'plash, ko\'rik o\'tkazish va zaruriy tahlillar buyurish amalga oshiriladi.'},
      {q:'Allergiya testlari og\'riqli bo\'ladimi?', a:'Teri testlari, ayniqsa, prick-test (teshish testi) deyarli og\'riqsiz. Ko\'pchilik bemorlar faqat engil qichishni his qiladi.'},
      {q:'Bolalar nechanchi yoshdan qabul qilinadi?', a:'Biz 6 oylikdan boshlab barcha yoshdagi bolalarda allergologik ko\'rik o\'tkazamiz. Bolalarda allergiyani erta aniqlash juda muhimdir.'},
      {q:'Immunoterapiya kursining davomiyligi?', a:'Odatda immunoterapiya 3–5 yil davom etadi: birinchi yil intensiv, qolgan yillarda qo\'llab-quvvatlovchi dozalar beriladi.'},
      {q:'Qabul uchun qanday hujjatlar kerak?', a:'Pasport yoki ID karta, avvalgi tekshiruv natijalari (agar mavjud bo\'lsa) va ro\'yxatdan o\'tish talab qilinadi.'},
    ]
  },
  ru: {
    nav_about:'О враче', nav_services:'Услуги', nav_conditions:'Заболевания',
    nav_contact:'Контакты', nav_cta:'Записаться',
    hero_badge:'Врач-аллерголог',
    hero_sub:'20 лет опыта в аллергологии и иммунологии. Современная диагностика и индивидуальный подход к каждому пациенту для достижения наилучших результатов.',
    stat1:'Лет опыта', stat2:'Пациентов', stat3:'% Довольных',
    hero_btn1:'Записаться на приём', hero_btn2:'Подробнее',
    doc_title:'Аллерголог-иммунолог', doc_edu:'ТашМА', rating:'Рейтинг', cert_label:'Сертификат',
    about_tag:'О докторе',
    about_title:'Ваш надёжный партнёр в борьбе с аллергией',
    about_text:'Доктор Хушнуд Ахмедов — один из ведущих специалистов в области аллергологии и иммунологии Узбекистана. Окончил Ташкентский государственный медицинский институт и прошёл стажировку в европейских центрах аллергологии.',
    cred1_t:'ТашМА — Высшее медицинское образование', cred1_d:'Диплом по педиатрии и общей медицине',
    cred2_t:'Европейская академия аллергологии', cred2_d:'Повышение квалификации, 2019',
    cred3_t:'Член Всемирной организации аллергологии', cred3_d:'Сертификат WAO, 2020',
    cred4_t:'Специалист по иммунотерапии', cred4_d:'Опыт SCIT и SLIT методов',
    serv_tag:'Услуги', serv_title:'Предоставляемые услуги',
    serv_sub:'От диагностики до лечения — комплексная помощь по современным методикам медицины',
    s1_name:'Диагностика аллергии', s1_desc:'Точное определение аллергена с помощью кожных тестов, анализа крови и провокационных тестов.',
    s2_name:'Иммунотерапия (АСИТ)', s2_desc:'Индивидуальные курсы иммунотерапии для снижения чувствительности к аллергену.',
    s3_name:'Бронхиальная астма', s3_desc:'Комплексная программа по контролю, лечению астмы и улучшению качества жизни.',
    s4_name:'Анализ иммунного статуса', s4_desc:'Оценка состояния через иммунограмму и расширенные иммунологические исследования.',
    s5_name:'Поллиноз (аллергия на пыльцу)', s5_desc:'Специальный подход к профилактике и лечению симптомов сезонной аллергии.',
    s6_name:'Детская аллергология', s6_desc:'Специальный подход к лечению аллергических заболеваний у детей от 0 до 18 лет.',
    cond_tag:'Заболевания', cond_title:'Лечимые заболевания',
    cond_sub:'Опыт и высокая эффективность в лечении широкого спектра аллергических и иммунологических заболеваний',
    c1:'Ринит',c2:'Конъюнктивит',c3:'Бронхиальная астма',c4:'Поллиноз',c5:'Пищевая аллергия',
    c6:'Лекарственная аллергия',c7:'Аллергия на животных',c8:'Укусы насекомых',c9:'Ангиоотёк',
    c10:'Крапивница',c11:'Атопический дерматит',c12:'Анафилаксия',
    proc_tag:'Порядок приёма', proc_title:'Как проходит приём?',
    p1_t:'Обращение',p1_d:'Записываетесь на удобное время по телефону или сайту',
    p2_t:'Анализы и диагностика',p2_d:'Проводится полное обследование современными методами',
    p3_t:'Диагноз',p3_d:'Результаты анализируются и ставится точный диагноз',
    p4_t:'План лечения',p4_d:'Составляется индивидуальная программа лечения',
    p5_t:'Контроль',p5_d:'Процесс лечения проводится под постоянным наблюдением',
    test_tag:'Отзывы', test_title:'Отзывы наших пациентов',
    t1_text:'"Доктор Ахмедов помог мне избавиться от астмы, которая мучила меня 5 лет. Курс иммунотерапии дал прекрасный результат. Теперь живу без лекарств!"',
    t2_text:'"При диагностике пищевой аллергии у моего ребёнка был очень профессиональный подход. Доктор Хушнуд очень терпелив и всё объясняет. Рекомендую!"',
    t3_text:'"Предложил самый правильный диагноз и метод лечения моего многолетнего поллиноза. Теперь в сезон цветения никаких проблем!"',
    faq_tag:'FAQ', faq_title:'Часто задаваемые вопросы',
    cont_tag:'Контакты', cont_title:'Запись на приём',
    ci_title:'Свяжитесь с нами',
    ci_sub:'По вопросам и предложениям обращайтесь по адресу и номерам телефонов ниже.',
    ci_addr_l:'Адрес', ci_phone_l:'Телефон', ci_hours_l:'Рабочие часы',
    ci_hours_v:'Пн–Пт: 9:00–18:00 | Сб: 9:00–14:00',
    form_title:'Запрос на приём',
    f_name:'Имя', f_phone:'Телефон', f_date:'Дата', f_time:'Время', f_reason:'Причина обращения', f_msg:'Сообщение (необязательно)',
    f_submit:'Записаться →',
    fr1:'Диагностика аллергии',fr2:'Бронхиальная астма',fr3:'Иммунотерапия',fr4:'Детская аллергология',fr5:'Другое',
    footer_nav:'Страницы', footer_serv:'Услуги', footer_contact:'Контакты',
    footer_desc:'Надёжный специалист в области аллергологии и иммунологии. Современное лечение, индивидуальный подход.',
    footer_copy:'© 2026 Др. Хушнуд Ахмедов. Все права защищены.',
    footer_copy2:'Аллерголог-иммунолог, Ташкент',
    days:['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    hours:['9–18','9–18','9–18','9–18','9–18','9–14','Вых'],
    toast_success:'Успешно отправлено! Мы свяжемся с вами в ближайшее время.',
    faqs:[
      {q:'Сколько длится первичный приём?', a:'Первичный приём длится 40–60 минут: сбор анамнеза, осмотр и назначение необходимых анализов.'},
      {q:'Болезненны ли тесты на аллергию?', a:'Кожные тесты, особенно прик-тест, практически безболезненны. Большинство пациентов ощущают лишь лёгкое зуд.'},
      {q:'С какого возраста принимают детей?', a:'Мы проводим аллергологические осмотры с 6 месяцев. Раннее выявление аллергии у детей очень важно.'},
      {q:'Как долго длится курс иммунотерапии?', a:'Обычно иммунотерапия длится 3–5 лет: первый год — интенсивный, последующие — поддерживающие дозы.'},
      {q:'Какие документы нужны для приёма?', a:'Паспорт или удостоверение личности, предыдущие результаты обследований (если есть) и запись на приём.'},
    ]
  },
  en: {
    nav_about:'About', nav_services:'Services', nav_conditions:'Conditions',
    nav_contact:'Contact', nav_cta:'Book Appointment',
    hero_badge:'Specialist Allergologist',
    hero_sub:'20 years of experience in allergology and immunology. Modern diagnostics and personalized approach ensure the best outcomes for every patient.',
    stat1:'Years experience', stat2:'Patients', stat3:'% Satisfaction',
    hero_btn1:'Book Appointment', hero_btn2:'Learn More',
    doc_title:'Allergologist-Immunologist', doc_edu:'TashMI', rating:'Rating', cert_label:'Certificate',
    about_tag:'About Doctor',
    about_title:'Your trusted partner in fighting allergies',
    about_text:'Dr. Xushnud Ahmedov is one of the leading allergologist-immunologists in Uzbekistan. He graduated from Tashkent State Medical Institute and completed advanced training at European allergy centers. Every patient receives an individual approach with modern diagnostics and effective treatment.',
    cred1_t:'TashMI — Higher Medical Education', cred1_d:'Diploma in Pediatrics and General Medicine',
    cred2_t:'European Academy of Allergology', cred2_d:'Advanced training courses, 2019',
    cred3_t:'World Allergy Organization Member', cred3_d:'WAO Certificate, 2020',
    cred4_t:'Immunotherapy Specialist', cred4_d:'Experience in SCIT and SLIT methods',
    serv_tag:'Services', serv_title:'Services Offered',
    serv_sub:'From diagnosis to treatment — comprehensive care using modern medical methods',
    s1_name:'Allergy Diagnostics', s1_desc:'Accurate allergen identification through skin tests, blood tests, and provocation tests.',
    s2_name:'Immunotherapy (ASIT)', s2_desc:'Individual immunotherapy courses to reduce allergen sensitivity.',
    s3_name:'Bronchial Asthma', s3_desc:'Comprehensive program for asthma control, treatment, and improved quality of life.',
    s4_name:'Immune Status Analysis', s4_desc:'State assessment through immunogram and comprehensive immunological examinations.',
    s5_name:'Pollinosis (Hay Fever)', s5_desc:'Special approach to preventing and treating seasonal allergy symptoms.',
    s6_name:'Pediatric Allergology', s6_desc:'Special approach to treating allergic diseases in children aged 0–18 years.',
    cond_tag:'Conditions', cond_title:'Treatable Conditions',
    cond_sub:'Experience and high efficacy in treating a wide range of allergic and immunological diseases',
    c1:'Rhinitis',c2:'Conjunctivitis',c3:'Bronchial Asthma',c4:'Pollinosis',c5:'Food Allergy',
    c6:'Drug Allergy',c7:'Pet Allergy',c8:'Insect Stings',c9:'Angioedema',
    c10:'Urticaria',c11:'Atopic Dermatitis',c12:'Anaphylaxis',
    proc_tag:'Process', proc_title:'How does the appointment go?',
    p1_t:'Request',p1_d:'Book a convenient time by phone or website',
    p2_t:'Tests & Diagnostics',p2_d:'Full examination using modern methods',
    p3_t:'Diagnosis',p3_d:'Results are analyzed and precise diagnosis is made',
    p4_t:'Treatment Plan',p4_d:'An individual treatment program is designed for you',
    p5_t:'Monitoring',p5_d:'Treatment process is conducted under constant supervision',
    test_tag:'Reviews', test_title:'What our patients say',
    t1_text:'"Dr. Ahmedov helped me overcome asthma that had troubled me for 5 years. The immunotherapy course gave amazing results. I now live without medication!"',
    t2_text:'"Diagnosing my child\'s food allergy was handled very professionally. Dr. Xushnud is very patient and explains everything clearly. Highly recommend!"',
    t3_text:'"He offered the most accurate diagnosis and treatment for my years-long hay fever. During pollen season now, there are absolutely no problems!"',
    faq_tag:'FAQ', faq_title:'Frequently Asked Questions',
    cont_tag:'Contact', cont_title:'Book an Appointment',
    ci_title:'Get in Touch',
    ci_sub:'For questions and inquiries, contact us via the address and phone numbers below.',
    ci_addr_l:'Address', ci_phone_l:'Phone', ci_hours_l:'Working Hours',
    ci_hours_v:'Mon–Fri: 9:00–18:00 | Sat: 9:00–14:00',
    form_title:'Appointment Request',
    f_name:'Name', f_phone:'Phone', f_date:'Date', f_time:'Time', f_reason:'Reason for visit', f_msg:'Message (optional)',
    f_submit:'Book Appointment →',
    fr1:'Allergy diagnostics',fr2:'Bronchial asthma',fr3:'Immunotherapy',fr4:'Pediatric allergology',fr5:'Other',
    footer_nav:'Pages', footer_serv:'Services', footer_contact:'Contact',
    footer_desc:'Trusted specialist in allergology and immunology. Modern treatment, individual approach.',
    footer_copy:'© 2026 Dr. Xushnud Ahmedov. All rights reserved.',
    footer_copy2:'Allergologist-Immunologist, Tashkent',
    days:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    hours:['9–18','9–18','9–18','9–18','9–18','9–14','Off'],
    toast_success:'Successfully submitted! We will contact you shortly.',
    faqs:[
      {q:'How long does the first appointment take?', a:'The first appointment usually takes 40–60 minutes including history taking, examination, and ordering necessary tests.'},
      {q:'Are allergy tests painful?', a:'Skin tests, especially the prick test, are nearly painless. Most patients only feel a mild itch.'},
      {q:'From what age are children accepted?', a:'We perform allergological examinations from 6 months of age. Early detection of allergies in children is very important.'},
      {q:'How long does immunotherapy last?', a:'Immunotherapy usually lasts 3–5 years: the first year is intensive, subsequent years are maintenance doses.'},
      {q:'What documents are needed for the appointment?', a:'Passport or ID card, previous test results (if available), and registration/booking.'},
    ]
  }
};

let currentLang = 'uz';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === lang.toUpperCase()));
  const t = i18n[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key]) el.textContent = t[key];
  });
  renderFAQ();
  renderHours();
}

// ---- THEME ----
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

// ---- PARTICLES ----
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      width: ${2+Math.random()*4}px;
      height: ${2+Math.random()*4}px;
      animation-duration: ${8+Math.random()*12}s;
      animation-delay: ${Math.random()*10}s;
      opacity: ${0.1+Math.random()*0.3};
    `;
    container.appendChild(p);
  }
}

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const suffix = el.parentElement.querySelector('[data-key]')?.getAttribute('data-key') === 'stat3' ? '' : (target > 100 ? '+' : '+');
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (progress < 1 ? '' : suffix);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

// ---- NAVBAR SCROLL ----
let countersAnimated = false;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.style.boxShadow = 'var(--shadow)';
  else nav.style.boxShadow = 'none';
  if (!countersAnimated && window.scrollY < 200) {
    countersAnimated = true;
    animateCounters();
  }
});

// ---- FAQ ----
function renderFAQ() {
  const t = i18n[currentLang];
  const list = document.getElementById('faqList');
  list.innerHTML = t.faqs.map((f,i) => `
    <div class="faq-item" id="faq${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join('');
}
function toggleFAQ(i) {
  const item = document.getElementById('faq'+i);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ---- HOURS GRID ----
function renderHours() {
  const t = i18n[currentLang];
  const today = new Date().getDay();
  const grid = document.getElementById('hoursGrid');
  const dayMap = [6,0,1,2,3,4,5];
  grid.innerHTML = t.days.map((d,i) => `
    <div class="hour-day ${dayMap[today] === i ? 'today' : ''}">
      <div class="hd-name">${d}</div>
      <div class="${t.hours[i] === 'Dam' || t.hours[i] === 'Вых' || t.hours[i] === 'Off' ? 'hd-closed' : 'hd-time'}">${t.hours[i]}</div>
    </div>
  `).join('');
}

// ---- FORM SUBMIT ----
function submitForm() {
  const name = document.getElementById('fName').value;
  const phone = document.getElementById('fPhone').value;
  if (!name || !phone) {
    showToast(currentLang === 'uz' ? 'Iltimos, ism va telefon kiriting.' : currentLang === 'ru' ? 'Пожалуйста, введите имя и телефон.' : 'Please enter name and phone.');
    return;
  }
  showToast(i18n[currentLang].toast_success);
  document.getElementById('fName').value = '';
  document.getElementById('fPhone').value = '';
  document.getElementById('fDate').value = '';
  document.getElementById('fMsg').value = '';
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ---- SCROLL TO ----
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function toggleMobile() {}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderFAQ();
  renderHours();
  setLang('uz');
  animateCounters();
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Date default
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()+1).padStart(2,'0');
  document.getElementById('fDate').value = `${yyyy}-${mm}-${dd}`;
});
