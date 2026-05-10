// ---- TRANSLATIONS ----
const i18n = {
    uz: {
        nav_about: "Haqida",
        nav_services: "Xizmatlar",
        nav_conditions: "Kasalliklar",
        nav_certs: "Sertifikatlar",
        nav_contact: "Aloqa",
        nav_cta: "Qabulga yozilish",
        hero_badge: "Oliy toifali allergolog",
        hero_sub:
            "Allergologiya sohasida 23+ yillik tajriba. Yevropa Allergologiya va Klinik Immunologiya akademiyasi (EAACI) faxriy a'zosi. Complex Med klinikasi allergologi. Har bir bemorga individual yondashuv va zamonaviy davolash usullari bilan maksimal natija kafolatlanadi.",
        stat1: "Yil tajriba",
        stat2: "Bemorlar",
        stat3: "% Mamnunlik",
        hero_btn1: "Qabulga yozilish",
        hero_btn2: "Batafsil",
        doc_title: "Oliy toifali allergolog",
        doc_edu: "2-ToshDTI",
        rating: "Reyting",
        cert_label: "Sertifikat",
        about_tag: "Doktor haqida",
        about_title: "Allergiya bilan kurashishda ishonchli hamkoringiz",
        about_text:
            "Axmedov Xushnud Saparbayevich — O'zbekiston Sog'liqni saqlash vazirligi Respublika ixtisoslashtirilgan ilmiy-amaliy tibbiyot markazi (Dermato-venerologiya va kosmetologiya) ning oliy toifali allergologi. 2004 yildan beri faoliyat yuritib, 23+ yillik klinikalik tajribaga ega. Respublika allergologiya markazida 12 yil ishlagan, TMA da o'qituvchi bo'lgan va Respublika ilmiy ixtisoslashtirilgan allergologiya markazi direktor o'rinbosari lavozimlarida xizmat qilgan.",
        tl_eaaci_tag: "Faxriy a'zolik",
        tl_eaaci_t: "Yevropa Allergologiya va Klinik Immunologiya akademiyasi",
        tl_eaaci_d:
            "Faxriy a'zo — EAACI (European Academy of Allergy and Clinical Immunology)",
        tl_tag1: "Ta'lim",
        tl_tag2: "Klinik ordinatura",
        tl_tag3: "Ish faoliyati",
        tl_tag4: "Rahbarlik",
        tl_tag5: "Xalqaro mukofot",
        tl_tag6: "Bosh shifokor",
        tl_tag7: "Ish faoliyati",
        tl_tag8: "Hozirgi ish joyi",
        cred1_t: "2-ToshDTI — Oliy tibbiy ta'lim (1997–2004)",
        cred1_d: "Tibbiyot instituti bitiruvchisi",
        cred2_t:
            "Respublika allergologiya markazi — Klinik ordinatura (2004–2006)",
        cred2_d: "Ish stajiga kiritilgan klinik amaliyot",
        cred3_t: "Respublika allergologiya markazi (2006–2018)",
        cred3_d:
            "TMA Allergologiya va immunologiya kafedrasi assistenti (2018–2019)",
        cred4_t:
            "Respublika ilmiy ixtisoslashtirilgan allergologiya markazi (2018–2022)",
        cred4_d: "Direktor o'rinbosari lavozimida xizmat",
        cred5_t: 'Melbourne, Avstraliya — "Global Education Award" (2021)',
        cred5_d: "ToshTibbiyot Malaka oshirish: 2010, 2013, 2018, 2024",
        cred6_t: "Global Medical Center klinikasi (2022–2023)",
        cred6_d: "Bosh shifokor lavozimida xizmat, Toshkent",
        cred7_t:
            "Respublika dermatovenerologiya va kosmetologiya ilmiy amaliy markazi (2023–2025)",
        cred7_d: "Oliy toifali allergolog",
        cred8_t: "Complex Med klinikasi — Oliy toifali allergolog",
        cred8_d: "Complex Med klinikasi, Toshkent",
        video_tag: "Video",
        video_title: "Doktor haqida ko'proq bilib oling",
        video_sub:
            "Allergologiya va immunologiya sohasidagi tajriba, davolash usullari va bemorlar bilan ishlash haqida batafsil ma'lumot.",
        serv_tag: "Xizmatlar",
        serv_title: "Taklif etilayotgan xizmatlar",
        serv_sub:
            "Diagnostikadan davolashgacha — zamonaviy tibbiyot usullarida to'liq kompleks yordam",
        s1_name: "Allergiya diagnostikasi",
        s1_desc:
            "Teri testlari, qon tekshiruvi va provokatsiya testlari yordamida allergenni aniq aniqlash.",
        s2_name: "Immunoterapiya (ASIT)",
        s2_desc:
            "Allergenga sezuvchanlikni kamaytirish uchun individual immunoterapiya kurslari.",
        s3_name: "Bronxial astma",
        s3_desc:
            "Astmani nazorat qilish, davolash va hayot sifatini yaxshilash bo'yicha to'liq dastur.",
        s4_name: "Teri allergik kasalliklari",
        s4_desc:
            "Atopik dermatit, allergik dermatit, Eshakemi va boshqa allergik teri muammolarini davolash.",
        s5_name: "Pollinoz (gul changiga)",
        s5_desc:
            "Mavsumiy allergiya alomatlarini oldini olish va davolash bo'yicha maxsus yondashuv.",
        s6_name: "Og'ir allergik reaksiyalar",
        s6_desc:
            "Stivens-Jonson sindromi, Layell sindromi, toksidermiya va anafilaksiyani davolash.",
        cond_tag: "Kasalliklar",
        cond_title: "Davolanadigan kasalliklar",
        cond_sub:
            "Keng ko'lamli allergik kasalliklarni davolashda 23+ yillik tajriba va yuqori samaradorlik",
        c1: "Atopik dermatit",
        c2: "Allergik dermatit",
        c3: "Eshakemi",
        c4: "Kvinke shishi",
        c5: "Dori allergiyasi",
        c6: "Oziq-ovqat allergiyasi",
        c7: "Allergik rinit",
        c8: "Allergik kon'yunktivit",
        c9: "Bronxial astma",
        c10: "Allergik bronxit",
        c11: "Toksidermiya",
        c12: "Stivens-Jonson sindromi",
        c13: "Layell sindromi",
        c14: "Pollinoz",
        proc_tag: "Qabul tartibi",
        proc_title: "Qabul qanday kechadi?",
        p1_t: "Murojaat",
        p1_d: "Telefon yoki sayt orqali qulay vaqtga yozilasiz",
        p2_t: "Tahlil va diagnostika",
        p2_d: "Zamonaviy usullar bilan to'liq tekshiruv o'tkaziladi",
        p3_t: "Diagnoz",
        p3_d: "Natijalar tahlil qilinib, aniq diagnoz qo'yiladi",
        p4_t: "Davolash rejasi",
        p4_d: "Sizga individual davolash dasturi tuziladi",
        p5_t: "Nazorat",
        p5_d: "Davolash jarayoni doimiy nazorat ostida olib boriladi",
        test_tag: "Fikrlar",
        test_title: "Bemorlarimiz fikrlari",
        faq_tag: "FAQ",
        faq_title: "Ko'p beriladigan savollar",
        cont_tag: "Aloqa",
        cont_title: "Qabulga yozilish",
        ci_title: "Biz bilan bog'laning",
        ci_sub: "Savol va takliflar uchun quyidagi manzil va telefon raqamlari orqali murojaat qiling.",
        ci_addr_l: "Manzil",
        ci_phone_l: "Telefon",
        ci_hours_l: "Ish vaqti",
        ci_hours_v: "Dush–Jum: 8:00–16:00",
        form_title: "Qabul uchun so'rov",
        f_name: "Ism",
        f_phone: "Telefon",
        f_date: "Sana",
        f_time: "Vaqt",
        f_reason: "Murojaat sababi",
        f_msg: "Xabar (ixtiyoriy)",
        f_submit: "Yozilish →",
        fr1: "Allergiya tekshiruvi",
        fr2: "Bronxial astma",
        fr3: "Immunoterapiya",
        fr4: "Teri allergiyasi",
        fr5: "Boshqa",
        cert_tag: "Hujjatlar",
        cert_section_title: "Sertifikatlar va yutuqlar",
        cert_section_sub:
            "Malaka oshirish kurslari, xalqaro mukofotlar va ilmiy faoliyat natijalari",
        cert_no_img: "Rasm yuklanmagan",
        cert_zoom: "🔍 Ko'rish",
        cert1_title: "Global Education Award",
        cert1_desc: "Xalqaro kongress, Melbourne, Avstraliya",
        cert_training_title: "Malaka oshirish sertifikati",
        cert_tmmi: "Toshkent tibbiyot malaka oshirish instituti",
        cert6_title: "Klinik ordinatura diplomi",
        cert6_desc: "2-Toshkent Davlat Tibbiyot Instituti",
        map_tag: "Manzil",
        map_title: "Bizni xaritada toping",
        footer_nav: "Sahifalar",
        footer_serv: "Xizmatlar",
        footer_contact: "Aloqa",
        footer_desc:
            "Complex Med klinikasi oliy toifali allergologi. 23+ yillik klinikalik tajriba.",
        footer_copy:
            "© 2026 Dr. Xushnud Axmedov. Barcha huquqlar himoyalangan.",
        footer_copy2: "Complex Med klinikasi, Toshkent",
        days: ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"],
        hours: ["8–16", "8–16", "8–16", "8–16", "8–16", "Dam", "Dam"],
        toast_success:
            "Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
        faqs: [
            {
                q: "Birinchi qabul qancha vaqt davom etadi?",
                a: "Birinchi qabul odatda 40–60 daqiqa davom etadi. Bu vaqt ichida anamnez to'plash, ko'rik o'tkazish va zaruriy tahlillar buyurish amalga oshiriladi.",
            },
            {
                q: "Allergiya testlari og'riqli bo'ladimi?",
                a: "Teri testlari, ayniqsa, prick-test (teshish testi) deyarli og'riqsiz. Ko'pchilik bemorlar faqat engil qichishni his qiladi.",
            },
            {
                q: "Bolalar nechanchi yoshdan qabul qilinadi?",
                a: "Biz 6 oylikdan boshlab barcha yoshdagi bolalarda allergologik ko'rik o'tkazamiz. Bolalarda allergiyani erta aniqlash juda muhimdir.",
            },
            {
                q: "Immunoterapiya kursining davomiyligi?",
                a: "Odatda immunoterapiya 3–5 yil davom etadi: birinchi yil intensiv, qolgan yillarda qo'llab-quvvatlovchi dozalar beriladi.",
            },
            {
                q: "Qabul uchun qanday hujjatlar kerak?",
                a: "Pasport yoki ID karta, avvalgi tekshiruv natijalari (agar mavjud bo'lsa) va ro'yxatdan o'tish talab qilinadi.",
            },
        ],
    },
    ru: {
        nav_about: "О враче",
        nav_services: "Услуги",
        nav_conditions: "Заболевания",
        nav_certs: "Сертификаты",
        nav_contact: "Контакты",
        nav_cta: "Записаться",
        hero_badge: "Аллерголог высшей категории",
        hero_sub:
            "27 лет опыта в аллергологии. Почётный член Европейской академии аллергологии и клинической иммунологии (EAACI). Аллерголог клиники Complex Med. Современная диагностика и индивидуальный подход к каждому пациенту.",
        stat1: "Лет опыта",
        stat2: "Пациентов",
        stat3: "% Довольных",
        hero_btn1: "Записаться на приём",
        hero_btn2: "Подробнее",
        doc_title: "Аллерголог высшей категории",
        doc_edu: "2-ТашМИ",
        rating: "Рейтинг",
        cert_label: "Сертификат",
        about_tag: "О докторе",
        about_title: "Ваш надёжный партнёр в борьбе с аллергией",
        about_text:
            "Ахмедов Хушнуд Сапарбаевич — аллерголог высшей категории клиники Complex Med. Имеет 23+ лет клинического опыта с 2004 года. Работал в Республиканском аллергологическом центре 12 лет, был ассистентом кафедры TMA, заместителем директора Республиканского научно-специализированного аллергологического центра.",
        tl_eaaci_tag: "Почётное членство",
        tl_eaaci_t:
            "Европейская академия аллергологии и клинической иммунологии",
        tl_eaaci_d:
            "Почётный член — EAACI (European Academy of Allergy and Clinical Immunology)",
        tl_tag1: "Образование",
        tl_tag2: "Клиническая ординатура",
        tl_tag3: "Деятельность",
        tl_tag4: "Руководство",
        tl_tag5: "Международная награда",
        tl_tag6: "Главный врач",
        tl_tag7: "Деятельность",
        tl_tag8: "Текущее место работы",
        cred1_t: "2-ТашМИ — Высшее медицинское образование (1997–2004)",
        cred1_d: "Окончил медицинский институт",
        cred2_t:
            "Республиканский аллергологический центр — Клиническая ординатура (2004–2006)",
        cred2_d: "Клиническая практика, засчитана в трудовой стаж",
        cred3_t: "Республиканский аллергологический центр (2006–2018)",
        cred3_d: "Ассистент кафедры аллергологии и иммунологии ТМА (2018–2019)",
        cred4_t:
            "Республиканский научно-специализированный аллергологический центр (2018–2022)",
        cred4_d: "Заместитель директора",
        cred5_t: "Мельбурн, Австралия — «Global Education Award» (2021)",
        cred5_d: "Повышение квалификации ТашИУВ: 2010, 2013, 2018, 2024",
        cred6_t: "Клиника Global Medical Center (2022–2023)",
        cred6_d: "Главный врач, Ташкент",
        cred7_t:
            "Республиканский научно-практический центр дерматовенерологии и косметологии (2023–2025)",
        cred7_d: "Аллерголог высшей категории",
        cred8_t: "Клиника Complex Med — Аллерголог высшей категории",
        cred8_d: "Клиника Complex Med, Ташкент",
        video_tag: "Видео",
        video_title: "Узнайте больше о докторе",
        video_sub:
            "Подробная информация об опыте в области аллергологии, методах лечения и работе с пациентами.",
        serv_tag: "Услуги",
        serv_title: "Предоставляемые услуги",
        serv_sub:
            "От диагностики до лечения — комплексная помощь по современным методикам медицины",
        s1_name: "Диагностика аллергии",
        s1_desc:
            "Точное определение аллергена с помощью кожных тестов, анализа крови и провокационных тестов.",
        s2_name: "Иммунотерапия (АСИТ)",
        s2_desc:
            "Индивидуальные курсы иммунотерапии для снижения чувствительности к аллергену.",
        s3_name: "Бронхиальная астма",
        s3_desc:
            "Комплексная программа по контролю, лечению астмы и улучшению качества жизни.",
        s4_name: "Аллергические заболевания кожи",
        s4_desc:
            "Лечение атопического дерматита, аллергического дерматита, крапивница и других кожных аллергий.",
        s5_name: "Поллиноз (аллергия на пыльцу)",
        s5_desc:
            "Специальный подход к профилактике и лечению симптомов сезонной аллергии.",
        s6_name: "Тяжёлые аллергические реакции",
        s6_desc:
            "Лечение синдрома Стивенса-Джонсона, синдрома Лайелла, токсикодермии и анафилаксии.",
        cond_tag: "Заболевания",
        cond_title: "Лечимые заболевания",
        cond_sub:
            "27 лет опыта и высокая эффективность в лечении широкого спектра аллергических заболеваний",
        c1: "Атопический дерматит",
        c2: "Аллергический дерматит",
        c3: "Крапивница",
        c4: "Отёк Квинке",
        c5: "Лекарственная аллергия",
        c6: "Пищевая аллергия",
        c7: "Аллергический ринит",
        c8: "Аллергический конъюнктивит",
        c9: "Бронхиальная астма",
        c10: "Аллергический бронхит",
        c11: "Токсикодермия",
        c12: "Синдром Стивенса-Джонсона",
        c13: "Синдром Лайелла",
        c14: "Поллиноз",
        proc_tag: "Порядок приёма",
        proc_title: "Как проходит приём?",
        p1_t: "Обращение",
        p1_d: "Записываетесь на удобное время по телефону или сайту",
        p2_t: "Анализы и диагностика",
        p2_d: "Проводится полное обследование современными методами",
        p3_t: "Диагноз",
        p3_d: "Результаты анализируются и ставится точный диагноз",
        p4_t: "План лечения",
        p4_d: "Составляется индивидуальная программа лечения",
        p5_t: "Контроль",
        p5_d: "Процесс лечения проводится под постоянным наблюдением",
        test_tag: "Отзывы",
        test_title: "Отзывы пациентов",
        faq_tag: "FAQ",
        faq_title: "Часто задаваемые вопросы",
        cont_tag: "Контакты",
        cont_title: "Запись на приём",
        ci_title: "Свяжитесь с нами",
        ci_sub: "По вопросам и предложениям обращайтесь по адресу и номерам телефонов ниже.",
        ci_addr_l: "Адрес",
        ci_phone_l: "Телефон",
        ci_hours_l: "Рабочие часы",
        ci_hours_v: "Пн–Пт: 8:00–16:00",
        form_title: "Запрос на приём",
        f_name: "Имя",
        f_phone: "Телефон",
        f_date: "Дата",
        f_time: "Время",
        f_reason: "Причина обращения",
        f_msg: "Сообщение (необязательно)",
        f_submit: "Записаться →",
        fr1: "Диагностика аллергии",
        fr2: "Бронхиальная астма",
        fr3: "Иммунотерапия",
        fr4: "Кожная аллергия",
        fr5: "Другое",
        cert_tag: "Документы",
        cert_section_title: "Сертификаты и достижения",
        cert_section_sub:
            "Курсы повышения квалификации, международные награды и результаты научной деятельности",
        cert_no_img: "Изображение не загружено",
        cert_zoom: "🔍 Просмотр",
        cert1_title: "Global Education Award",
        cert1_desc: "Международный конгресс, Мельбурн, Австралия",
        cert_training_title: "Сертификат повышения квалификации",
        cert_tmmi: "Ташкентский институт усовершенствования врачей",
        cert6_title: "Диплом клинической ординатуры",
        cert6_desc: "2-й Ташкентский государственный медицинский институт",
        map_tag: "Адрес",
        map_title: "Найдите нас на карте",
        footer_nav: "Страницы",
        footer_serv: "Услуги",
        footer_contact: "Контакты",
        footer_desc:
            "Аллерголог высшей категории клиники Complex Med. 27 лет клинического опыта.",
        footer_copy: "© 2026 Др. Хушнуд Ахмедов. Все права защищены.",
        footer_copy2: "Complex Med клиника, Ташкент",
        days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        hours: ["8–16", "8–16", "8–16", "8–16", "8–16", "Вых", "Вых"],
        toast_success:
            "Успешно отправлено! Мы свяжемся с вами в ближайшее время.",
        faqs: [
            {
                q: "Сколько длится первичный приём?",
                a: "Первичный приём длится 40–60 минут: сбор анамнеза, осмотр и назначение необходимых анализов.",
            },
            {
                q: "Болезненны ли тесты на аллергию?",
                a: "Кожные тесты, особенно прик-тест, практически безболезненны. Большинство пациентов ощущают лишь лёгкое зуд.",
            },
            {
                q: "С какого возраста принимают детей?",
                a: "Мы проводим аллергологические осмотры с 6 месяцев. Раннее выявление аллергии у детей очень важно.",
            },
            {
                q: "Как долго длится курс иммунотерапии?",
                a: "Обычно иммунотерапия длится 3–5 лет: первый год — интенсивный, последующие — поддерживающие дозы.",
            },
            {
                q: "Какие документы нужны для приёма?",
                a: "Паспорт или удостоверение личности, предыдущие результаты обследований (если есть) и запись на приём.",
            },
        ],
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_conditions: "Conditions",
        nav_certs: "Certificates",
        nav_contact: "Contact",
        nav_cta: "Book Appointment",
        hero_badge: "Allergist of the Highest Category",
        hero_sub:
            "27 years of experience in allergology. Honorary Member of the European Academy of Allergy and Clinical Immunology (EAACI). Allergist at Complex Med Clinic. Maximum results guaranteed through an individual approach and modern treatment methods.",
        stat1: "Years experience",
        stat2: "Patients",
        stat3: "% Satisfaction",
        hero_btn1: "Book Appointment",
        hero_btn2: "Learn More",
        doc_title: "Allergist of the Highest Category",
        doc_edu: "2nd TashSMI",
        rating: "Rating",
        cert_label: "Certificate",
        about_tag: "About Doctor",
        about_title: "Your trusted partner in fighting allergies",
        about_text:
            "Axmedov Xushnud Saparbaevich is an allergist of the highest category at Complex Med Clinic. With 23+ years of clinical experience since 2004, he served at the Republican Allergological Center for 12 years, as an assistant professor at TMA, and as Deputy Director of the Republican Scientific-Specialized Allergological Center.",
        tl_eaaci_tag: "Honorary Membership",
        tl_eaaci_t: "European Academy of Allergy and Clinical Immunology",
        tl_eaaci_d:
            "Honorary Member — EAACI (European Academy of Allergy and Clinical Immunology)",
        tl_tag1: "Education",
        tl_tag2: "Clinical Residency",
        tl_tag3: "Career",
        tl_tag4: "Leadership",
        tl_tag5: "International Award",
        tl_tag6: "Chief Doctor",
        tl_tag7: "Career",
        tl_tag8: "Current Workplace",
        cred1_t: "2nd TashSMI — Higher Medical Education (1997–2004)",
        cred1_d: "Graduated from medical institute",
        cred2_t:
            "Republican Allergological Center — Clinical Residency (2004–2006)",
        cred2_d: "Clinical practice counted as work experience",
        cred3_t: "Republican Allergological Center (2006–2018)",
        cred3_d:
            "Assistant, Dept. of Allergology & Immunology, TMA (2018–2019)",
        cred4_t:
            "Republican Scientific-Specialized Allergological Center (2018–2022)",
        cred4_d: "Deputy Director",
        cred5_t: 'Melbourne, Australia — "Global Education Award" (2021)',
        cred5_d: "Advanced training at TashIUV: 2010, 2013, 2018, 2024",
        cred6_t: "Global Medical Center Clinic (2022–2023)",
        cred6_d: "Chief Doctor, Tashkent",
        cred7_t:
            "Republican Scientific-Practical Center of Dermatovenereology and Cosmetology (2023–2025)",
        cred7_d: "Senior Allergist",
        cred8_t: "Complex Med Clinic — Senior Allergist",
        cred8_d: "Complex Med Clinic, Tashkent",
        video_tag: "Video",
        video_title: "Learn more about the doctor",
        video_sub:
            "Detailed information about experience in allergology, treatment methods and work with patients.",
        serv_tag: "Services",
        serv_title: "Services Offered",
        serv_sub:
            "From diagnosis to treatment — comprehensive care using modern medical methods",
        s1_name: "Allergy Diagnostics",
        s1_desc:
            "Accurate allergen identification through skin tests, blood tests, and provocation tests.",
        s2_name: "Immunotherapy (ASIT)",
        s2_desc:
            "Individual immunotherapy courses to reduce allergen sensitivity.",
        s3_name: "Bronchial Asthma",
        s3_desc:
            "Comprehensive program for asthma control, treatment, and improved quality of life.",
        s4_name: "Allergic Skin Diseases",
        s4_desc:
            "Treatment of atopic dermatitis, allergic dermatitis, urticaria and other skin allergy conditions.",
        s5_name: "Pollinosis (Hay Fever)",
        s5_desc:
            "Special approach to preventing and treating seasonal allergy symptoms.",
        s6_name: "Severe Allergic Reactions",
        s6_desc:
            "Treatment of Stevens-Johnson syndrome, Lyell syndrome, toxicoderma and anaphylaxis.",
        cond_tag: "Conditions",
        cond_title: "Treatable Conditions",
        cond_sub:
            "27 years of experience and high efficacy in treating a wide range of allergic diseases",
        c1: "Atopic Dermatitis",
        c2: "Allergic Dermatitis",
        c3: "Urticaria",
        c4: "Quincke's Edema",
        c5: "Drug Allergy",
        c6: "Food Allergy",
        c7: "Allergic Rhinitis",
        c8: "Allergic Conjunctivitis",
        c9: "Bronchial Asthma",
        c10: "Allergic Bronchitis",
        c11: "Toxicoderma",
        c12: "Stevens-Johnson Syndrome",
        c13: "Lyell Syndrome",
        c14: "Pollinosis",
        proc_tag: "Process",
        proc_title: "How does the appointment go?",
        p1_t: "Request",
        p1_d: "Book a convenient time by phone or website",
        p2_t: "Tests & Diagnostics",
        p2_d: "Full examination using modern methods",
        p3_t: "Diagnosis",
        p3_d: "Results are analyzed and precise diagnosis is made",
        p4_t: "Treatment Plan",
        p4_d: "An individual treatment program is designed for you",
        p5_t: "Monitoring",
        p5_d: "Treatment process is conducted under constant supervision",
        test_tag: "Reviews",
        test_title: "Patient Reviews",
        faq_tag: "FAQ",
        faq_title: "Frequently Asked Questions",
        cont_tag: "Contact",
        cont_title: "Book an Appointment",
        ci_title: "Get in Touch",
        ci_sub: "For questions and inquiries, contact us via the address and phone numbers below.",
        ci_addr_l: "Address",
        ci_phone_l: "Phone",
        ci_hours_l: "Working Hours",
        ci_hours_v: "Mon–Fri: 8:00–16:00",
        form_title: "Appointment Request",
        f_name: "Name",
        f_phone: "Phone",
        f_date: "Date",
        f_time: "Time",
        f_reason: "Reason for visit",
        f_msg: "Message (optional)",
        f_submit: "Book Appointment →",
        fr1: "Allergy diagnostics",
        fr2: "Bronchial asthma",
        fr3: "Immunotherapy",
        fr4: "Skin allergy",
        fr5: "Other",
        cert_tag: "Documents",
        cert_section_title: "Certificates & Achievements",
        cert_section_sub:
            "Advanced training courses, international awards and scientific achievements",
        cert_no_img: "Image not loaded",
        cert_zoom: "🔍 View",
        cert1_title: "Global Education Award",
        cert1_desc: "International Congress, Melbourne, Australia",
        cert_training_title: "Advanced Training Certificate",
        cert_tmmi: "Tashkent Institute for Advanced Medical Training",
        cert6_title: "Clinical Residency Diploma",
        cert6_desc: "2nd Tashkent State Medical Institute",
        map_tag: "Location",
        map_title: "Find us on the map",
        footer_nav: "Pages",
        footer_serv: "Services",
        footer_contact: "Contact",
        footer_desc:
            "Allergist of the highest category, Complex Med Clinic. 27 years of experience.",
        footer_copy: "© 2026 Dr. Xushnud Axmedov. All rights reserved.",
        footer_copy2: "Complex Med Clinic, Tashkent",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        hours: ["8–16", "8–16", "8–16", "8–16", "8–16", "Off", "Off"],
        toast_success: "Successfully submitted! We will contact you shortly.",
        faqs: [
            {
                q: "How long does the first appointment take?",
                a: "The first appointment usually takes 40–60 minutes including history taking, examination, and ordering necessary tests.",
            },
            {
                q: "Are allergy tests painful?",
                a: "Skin tests, especially the prick test, are nearly painless. Most patients only feel a mild itch.",
            },
            {
                q: "From what age are children accepted?",
                a: "We perform allergological examinations from 6 months of age. Early detection of allergies in children is very important.",
            },
            {
                q: "How long does immunotherapy last?",
                a: "Immunotherapy usually lasts 3–5 years: the first year is intensive, subsequent years are maintenance doses.",
            },
            {
                q: "What documents are needed for the appointment?",
                a: "Passport or ID card, previous test results (if available), and registration/booking.",
            },
        ],
    },
};

let currentLang = "uz";

function setLang(lang) {
    currentLang = lang;
    document
        .querySelectorAll(".lang-btn")
        .forEach((b) =>
            b.classList.toggle(
                "active",
                b.textContent.trim() === lang.toUpperCase()
            )
        );
    const t = i18n[lang];
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (t[key]) el.textContent = t[key];
    });
    renderFAQ();
    renderHours();
}

// ---- THEME ----
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    document.getElementById("themeBtn").textContent = isDark ? "🌙" : "☀️";
}

// ---- PARTICLES ----
function createParticles() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 20; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${0.1 + Math.random() * 0.3};
    `;
        container.appendChild(p);
    }
}

// ---- COUNTER ANIMATION ----
function animateCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count"));
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const suffix =
            el.parentElement
                .querySelector("[data-key]")
                ?.getAttribute("data-key") === "stat3"
                ? ""
                : target > 100
                ? "+"
                : "+";
        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent =
                Math.round(eased * target) + (progress < 1 ? "" : suffix);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), i * 80);
            }
        });
    },
    { threshold: 0.1 }
);

// ---- NAVBAR SCROLL ----
let countersAnimated = false;
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) nav.style.boxShadow = "var(--shadow)";
    else nav.style.boxShadow = "none";
    if (!countersAnimated && window.scrollY < 200) {
        countersAnimated = true;
        animateCounters();
    }
});

// ---- FAQ ----
function renderFAQ() {
    const t = i18n[currentLang];
    const list = document.getElementById("faqList");
    list.innerHTML = t.faqs
        .map(
            (f, i) => `
    <div class="faq-item" id="faq${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>
  `
        )
        .join("");
}
function toggleFAQ(i) {
    const item = document.getElementById("faq" + i);
    const isOpen = item.classList.contains("open");
    document
        .querySelectorAll(".faq-item")
        .forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
}

// ---- HOURS GRID ----
function renderHours() {
    const t = i18n[currentLang];
    const today = new Date().getDay();
    const grid = document.getElementById("hoursGrid");
    const dayMap = [6, 0, 1, 2, 3, 4, 5];
    grid.innerHTML = t.days
        .map(
            (d, i) => `
    <div class="hour-day ${dayMap[today] === i ? "today" : ""}">
      <div class="hd-name">${d}</div>
      <div class="${
          t.hours[i] === "Dam" || t.hours[i] === "Вых" || t.hours[i] === "Off"
              ? "hd-closed"
              : "hd-time"
      }">${t.hours[i]}</div>
    </div>
  `
        )
        .join("");
}

// ---- FORM SUBMIT ----
const TG_TOKEN = "8565288610:AAFVpeY4O4EvKB4gqKN4FZ8Nlq4aVs6pSnk";
const TG_CHAT = "@allergologahmedovqabul";

async function submitForm() {
    const name = document.getElementById("fName").value.trim();
    const phone = document.getElementById("fPhone").value.trim();
    const date = document.getElementById("fDate").value;
    const time = document.getElementById("fTime").value;
    const reason = document.getElementById("fReason").value;
    const msg = document.getElementById("fMsg").value.trim();

    if (!name || !phone) {
        showToast(
            currentLang === "uz"
                ? "Iltimos, ism va telefon kiriting."
                : currentLang === "ru"
                ? "Пожалуйста, введите имя и телефон."
                : "Please enter name and phone."
        );
        return;
    }
    if (!date) {
        showToast(
            currentLang === "uz"
                ? "Iltimos, sanani kiriting."
                : currentLang === "ru"
                ? "Пожалуйста, выберите дату."
                : "Please select a date."
        );
        return;
    }

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.textContent = "⏳";

    const text = [
        "🩺 *Yangi qabul so'rovi*",
        `👤 *Ism:* ${name}`,
        `📞 *Telefon:* ${phone}`,
        `📅 *Sana:* ${date}`,
        `⏰ *Vaqt:* ${time}`,
        `📋 *Sabab:* ${reason}`,
        msg ? `💬 *Xabar:* ${msg}` : "",
    ]
        .filter(Boolean)
        .join("\n");

    try {
        const res = await fetch(
            `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TG_CHAT,
                    text,
                    parse_mode: "Markdown",
                }),
            }
        );
        const data = await res.json();
        if (data.ok) {
            showToast(i18n[currentLang].toast_success);
            document.getElementById("fName").value = "";
            document.getElementById("fPhone").value = "";
            document.getElementById("fDate").value = "";
            document.getElementById("fMsg").value = "";
            btn.textContent = "✅";
            setTimeout(() => {
                btn.textContent = i18n[currentLang].f_submit;
                btn.disabled = false;
            }, 3000);
        } else {
            showToast(
                currentLang === "uz"
                    ? "Xatolik yuz berdi. Qayta urinib ko'ring."
                    : currentLang === "ru"
                    ? "Произошла ошибка. Попробуйте снова."
                    : "An error occurred. Please try again."
            );
            btn.textContent = i18n[currentLang].f_submit;
            btn.disabled = false;
        }
    } catch {
        showToast(
            currentLang === "uz"
                ? "Tarmoq xatosi. Qayta urinib ko'ring."
                : currentLang === "ru"
                ? "Ошибка сети. Попробуйте снова."
                : "Network error. Please try again."
        );
        btn.textContent = i18n[currentLang].f_submit;
        btn.disabled = false;
    }
}
function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 4000);
}

// ---- TESTIMONIALS CAROUSEL ----
function initTestimonialsCarousel() {
    const track = document.getElementById("testimonialsTrack");
    const dotsEl = document.getElementById("tDots");
    if (!track) return;

    const cards = Array.from(track.querySelectorAll(".testimonial-card"));
    const total = cards.length;
    let current = 0;
    let autoTimer;

    function perView() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function maxIndex() {
        return total - perView();
    }

    function buildDots() {
        dotsEl.innerHTML = "";
        const count = maxIndex() + 1;
        for (let i = 0; i < count; i++) {
            const d = document.createElement("button");
            d.className = "carousel-dot" + (i === current ? " active" : "");
            d.setAttribute("aria-label", `Slide ${i + 1}`);
            d.addEventListener("click", () => goTo(i));
            dotsEl.appendChild(d);
        }
    }

    function updateDots() {
        dotsEl
            .querySelectorAll(".carousel-dot")
            .forEach((d, i) => d.classList.toggle("active", i === current));
    }

    function goTo(idx) {
        const max = maxIndex();
        current = Math.max(0, Math.min(idx, max));
        const pv = perView();
        const cardWidth = track.parentElement.offsetWidth / pv;
        track.style.transform = `translateX(-${current * cardWidth}px)`;
        updateDots();
    }

    function next() {
        goTo(current >= maxIndex() ? 0 : current + 1);
    }
    function prev() {
        goTo(current <= 0 ? maxIndex() : current - 1);
    }

    function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(next, 4500);
    }

    document.getElementById("tNext").addEventListener("click", () => {
        next();
        startAuto();
    });
    document.getElementById("tPrev").addEventListener("click", () => {
        prev();
        startAuto();
    });

    track.parentElement.addEventListener("mouseenter", () =>
        clearInterval(autoTimer)
    );
    track.parentElement.addEventListener("mouseleave", startAuto);

    // Touch/swipe
    let touchX = 0;
    track.addEventListener(
        "touchstart",
        (e) => {
            touchX = e.touches[0].clientX;
        },
        { passive: true }
    );
    track.addEventListener(
        "touchend",
        (e) => {
            const diff = touchX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? next() : prev();
                startAuto();
            }
        },
        { passive: true }
    );

    window.addEventListener("resize", () => {
        buildDots();
        goTo(Math.min(current, maxIndex()));
    });

    buildDots();
    goTo(0);
    startAuto();
}

// ---- CERTIFICATE LIGHTBOX ----
function openCertImg(src) {
    document.getElementById("certLightboxImg").src = src;
    document.getElementById("certLightbox").classList.add("active");
    document.body.style.overflow = "hidden";
}
function closeCert() {
    document.getElementById("certLightbox").classList.remove("active");
    document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCert();
});

// ---- SCROLL TO ----
function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function toggleMobile() {
    const nav = document.querySelector(".nav-links");
    const btn = document.querySelector(".mobile-menu-btn");
    const isOpen = nav.classList.toggle("mobile-open");
    btn.textContent = isOpen ? "✕" : "☰";
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    renderFAQ();
    renderHours();
    setLang("uz");
    animateCounters();
    initTestimonialsCarousel();
    document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));

    // Date default
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate() + 1).padStart(2, "0");
    document.getElementById("fDate").value = `${yyyy}-${mm}-${dd}`;

    // Close mobile menu on link click
    document.querySelectorAll(".nav-links a").forEach((a) => {
        a.addEventListener("click", () => {
            document
                .querySelector(".nav-links")
                .classList.remove("mobile-open");
            document.querySelector(".mobile-menu-btn").textContent = "☰";
        });
    });
});

