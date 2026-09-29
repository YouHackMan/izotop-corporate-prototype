/* Демонстрационный статический прототип. Формы не отправляют данные. */
const routes = {
  '/': 'Главная',
  '/services': 'Все услуги',
  '/design': 'Проектирование',
  '/idk': 'Индивидуальный дозиметрический контроль',
  '/radiation': 'Радиационный контроль',
  '/metrology': 'Метрология',
  '/delivery': 'Доставка оборудования',
  '/about': 'О компании',
  '/contacts': 'Контакты'
};

const serviceRows = [
  { n: '01', title: 'Проектирование', text: 'Кабинеты, помещения с источниками излучения, испытательные и лабораторные направления.', href: '/design', featured: true },
  { n: '02', title: 'Индивидуальный дозиметрический контроль', text: 'Организация контроля доз персонала и сопровождение регулярных измерений.', href: '/idk' },
  { n: '03', title: 'Радиационный контроль', text: 'Измерения и обследования рабочих мест, помещений, оборудования и объектов.', href: '/radiation' },
  { n: '04', title: 'Метрология', text: 'Поверка приборов радиационного контроля и работа со средствами измерений.', href: '/metrology' },
  { n: '05', title: 'Доставка оборудования', text: 'Передача приборов курьером: Москва и отправления из регионов России.', href: '/delivery' }
];

function link(path, label, cls = '') {
  return `<a href="#${path}" class="${cls}">${label}</a>`;
}
function brand() {
  return `<a class="brand" href="#/" aria-label="Изотоп РК — главная"><span class="brand-mark">И</span><span class="brand-text">ИЗОТОП РК<small>ИНЖЕНЕРИЯ · КОНТРОЛЬ</small></span></a>`;
}
function header(path) {
  const nav = [
    ['/services', 'Услуги'],
    ['/design', 'Проектирование'],
    ['/idk', 'Дозиметрия'],
    ['/radiation', 'Радиационный контроль'],
    ['/about', 'О компании'],
    ['/contacts', 'Контакты']
  ];
  return `<div class="topbar"><div class="container"><span>МОСКВА · РАБОТАЕМ ПО ВСЕЙ РОССИИ</span><div class="topbar-right"><a href="tel:+74991413290">+7 (499) 141-32-90</a><a href="mailto:info@izotoprk.ru">info@izotoprk.ru</a></div></div></div>
  <header class="site-header"><div class="container header-main">${brand()}<nav class="desktop-nav" aria-label="Главная навигация">${nav.map(([url,name]) => link(url,name,'nav-link' + (path === url ? ' active' : ''))).join('')}</nav>${link('/contacts','Обсудить задачу <span class="arrow">↗</span>','btn btn-primary header-cta')}<button class="menu-button" id="menu-button" type="button" aria-label="Открыть меню" aria-expanded="false">☰</button></div><nav class="mobile-nav" id="mobile-nav" aria-label="Мобильная навигация">${nav.map(([url,name])=>link(url,name)).join('')}</nav></header>`;
}
function footer() {
  return `<footer class="footer"><div class="container"><div class="footer-main">
    <div>${brand()}<p>Проектирование, радиационный контроль, индивидуальная дозиметрия и метрология. Один технический партнёр для связанных задач.</p><span class="prototype-badge">ДЕМОНСТРАЦИОННЫЙ КОНЦЕПТ</span></div>
    <div><div class="foot-title">Направления</div><div class="foot-links">${link('/design','Проектирование')}${link('/idk','Индивидуальный контроль')}${link('/radiation','Радиационный контроль')}${link('/metrology','Метрология')}${link('/services','Все услуги')}</div></div>
    <div><div class="foot-title">Компания</div><div class="foot-links">${link('/about','О компании')}${link('/delivery','Доставка приборов')}${link('/contacts','Контакты')}<a href="mailto:info@izotoprk.ru">Написать нам</a></div></div>
    <div><div class="foot-title">Связаться</div><div class="foot-links"><a href="tel:+74991413290">+7 (499) 141-32-90</a><a href="mailto:info@izotoprk.ru">info@izotoprk.ru</a><span style="font-size:12px">Москва, ул. Маршала Тимошенко, 23, стр. 2</span></div></div>
  </div><div class="footer-bottom"><span>© Изотоп РК · Концепция будущего сайта</span><span>Материалы, изображения и формы в макете требуют согласования перед публикацией.</span></div></div></footer>`;
}
function eyebrow(text, light = false) {
  return `<span class="eyebrow${light ? ' light' : ''}">${text}</span>`;
}
function arrowLink(path, text) {
  return link(path, text + ' <span class="arrow">↗</span>', 'link-arrow');
}
function pageHero(title, lead, crumb, cta = true) {
  const label = crumb === 'О компании' ? 'КОМПАНИЯ'
    : crumb === 'Контакты' ? 'СВЯЗЬ С КОМАНДОЙ'
    : crumb === 'Все услуги' ? 'КАРТА НАПРАВЛЕНИЙ'
    : crumb === 'Доставка оборудования' ? 'ЛОГИСТИКА'
    : 'НАПРАВЛЕНИЕ';
  return `<section class="page-hero"><div class="container"><div class="crumbs">${link('/','Главная')}<span>/</span><span>${crumb}</span></div>${eyebrow('ИЗОТОП РК · ' + label,true)}<h1>${title}</h1><p>${lead}</p>${cta ? `<div class="hero-actions">${link('/contacts','Обсудить задачу <span class="arrow">↗</span>','btn btn-light')}${link('/services','Смотреть все услуги','btn btn-outline')}</div>` : ''}</div></section>`;
}
function finalCta(title = 'Обсудим вашу задачу', copy = 'Опишите объект, оборудование или направление работ. Мы свяжемся с вами и уточним, какие данные нужны для дальнейшего расчёта.') {
  return `<section class="final-cta"><div class="container cta-layout"><div>${eyebrow('СВЯЗАТЬСЯ С КОМАНДОЙ',true)}<h2>${title}</h2><p class="lead">${copy}</p><p>Или позвоните: <a href="tel:+74991413290" style="color:white;font-weight:800">+7 (499) 141-32-90</a></p></div>
    <form class="request-form" data-demo-form><div class="field"><label for="name">Ваше имя</label><input id="name" name="name" placeholder="Как к вам обращаться" required></div><div class="field"><label for="phone">Телефон или почта</label><input id="phone" name="contact" placeholder="Контакт для связи" required></div><div class="field full"><label for="topic">Направление</label><select id="topic" name="topic"><option>Выберите направление</option><option>Проектирование</option><option>Индивидуальный дозиметрический контроль</option><option>Радиационный контроль</option><option>Метрология и поверка</option><option>Комплексная задача</option></select></div><div class="field full"><label for="message">Коротко о задаче</label><textarea id="message" name="message" placeholder="Объект, приборы, регион, желаемые сроки"></textarea></div><button type="submit" class="btn btn-light">Отправить запрос <span class="arrow">↗</span></button><div class="form-note">Это демонстрационная форма: на этапе макета данные не отправляются.</div><div class="form-feedback" role="status">Форма показывает только сценарий. Отправка будет подключена после согласования проекта.</div></form>
  </div></section>`;
}
function serviceIndex(rows = serviceRows) {
  return `<div class="service-index">${rows.map(item => `<a class="service-row${item.featured ? ' featured' : ''}" href="#${item.href}"><span class="index-no">${item.n}</span><h3>${item.title}</h3><p>${item.text}</p><span class="arrow">↗</span></a>`).join('')}</div>`;
}
function faq(items) {
  return `<div class="faq">${items.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
}
function process(items) {
  return `<div class="process">${items.map((item,i)=>`<div class="process-item"><span class="process-no">0${i+1} / 04</span><h3>${item[0]}</h3><p>${item[1]}</p></div>`).join('')}</div>`;
}
function home() {
  return `<main class="page-main">
    <section class="hero home-hero"><div class="hero-image"></div><div class="hero-shade"></div><div class="container hero-grid"><div class="hero-copy">${eyebrow('ИНЖЕНЕРИЯ РАДИАЦИОННОЙ БЕЗОПАСНОСТИ',true)}<h1>Технические задачи.<br><span class="accent">Одно решение.</span></h1><p class="hero-lead">Проектирование, дозиметрический и радиационный контроль, лабораторные направления и метрология — комплексно для организаций в Москве и по всей России.</p><div class="hero-actions">${link('/services','Изучить направления <span class="arrow">↗</span>','btn btn-light')}${link('/contacts','Обсудить проект','btn btn-outline')}</div></div></div><div class="hero-bottom"><div class="container"><div class="hero-proof"><span>01 / Инженерия</span>От проекта до контроля</div><div class="hero-proof"><span>02 / Масштаб</span>Москва и регионы России</div><div class="hero-proof"><span>03 / Удобство</span>Передача приборов курьером</div></div></div></section>

    <section class="section section-white"><div class="container"><div class="intro-grid"><div>${eyebrow('ОДНА КОМАНДА · НЕСКОЛЬКО НАПРАВЛЕНИЙ')}<h2>Больше, чем отдельная услуга</h2></div><div><p class="lead">Радиационная безопасность объекта — это связанная система: проектирование, измерения, контроль персонала и работа с приборами.</p><p>Сайт объединяет эти задачи в понятную структуру, чтобы заказчик мог найти нужное направление и увидеть, как оно связано с остальными.</p></div></div><div style="height:50px"></div>${serviceIndex()}</div></section>

    <section class="feature-grid"><div class="feature-visual"><span class="visual-label mono">ПРОЕКТИРОВАНИЕ / ИНЖЕНЕРНЫЕ РЕШЕНИЯ</span></div><div class="feature-content">${eyebrow('КЛЮЧЕВОЕ НАПРАВЛЕНИЕ',true)}<h2>Проектирование как основа безопасной работы</h2><p>Проектные решения для помещений и объектов, где применяются источники ионизирующего излучения. От исходных данных и планировочных ограничений — к технически обоснованному решению.</p><div class="feature-points"><span>Рентгеновские кабинеты</span><span>Радиационные источники</span><span>Испытательные лаборатории</span><span>Смежные разделы и сопровождение</span></div>${link('/design','Смотреть проектные направления <span class="arrow">↗</span>','btn btn-light')}</div></section>

    <section class="section section-pale"><div class="container split"><div>${eyebrow('ПЕРСОНАЛ · ДОЗИМЕТРИЯ')}<h2>Контроль доз — понятный регулярный процесс</h2><p class="lead">Организуем индивидуальный дозиметрический контроль сотрудников, работающих с источниками ионизирующего излучения.</p><p>Задача сайта — объяснить, как начинается работа, какие данные нужны и что получает организация по результатам контроля.</p>${arrowLink('/idk','Подробнее об индивидуальном контроле')}</div><div class="technical-sheet"><div class="sheet-top mono"><span>ИДК / СХЕМА РАБОТЫ</span><span>01—04</span></div><div class="sheet-line"><span class="mono">01</span><div><strong>Разбираем задачу</strong><small>Состав персонала, вид работ, площадки и периодичность.</small></div></div><div class="sheet-line"><span class="mono">02</span><div><strong>Согласуем порядок контроля</strong><small>Как передаются дозиметры и фиксируются результаты.</small></div></div><div class="sheet-line"><span class="mono">03</span><div><strong>Проводим измерения</strong><small>Регулярный цикл с понятными точками контакта.</small></div></div><div class="sheet-line"><span class="mono">04</span><div><strong>Передаём результаты</strong><small>Документы и сведения в согласованном формате.</small></div></div></div></div></section>

    <section class="section section-white"><div class="container split"><div class="image-panel"><img src="./assets/metrology-lab.png" alt="Специалист выполняет измерения с дозиметрическим оборудованием"><div class="image-panel-label"><span class="mono">ИЗМЕРЕНИЯ / ЛАБОРАТОРНЫЕ НАПРАВЛЕНИЯ</span><h3>Точность начинается с правильного метода</h3></div></div><div>${eyebrow('КОНТРОЛЬ И ИЗМЕРЕНИЯ')}<h2>Радиационный контроль и лабораторная компетенция</h2><p>Обследование объектов, измерение параметров среды и оценка условий работы с источниками излучения. Отдельные работы связаны с физическими факторами и испытательными направлениями.</p><ul class="bullet-list"><li>Радиационный контроль помещений и рабочих мест</li><li>Обследование объектов с источниками излучения</li><li>Измерение физических факторов</li></ul>${arrowLink('/radiation','Подробнее о радиационном контроле')}</div></div></section>

    <section class="section section-dark"><div class="container"><div class="section-heading"><div>${eyebrow('СВЯЗАННЫЕ ЗАДАЧИ',true)}<h2>Комплексный маршрут<br>от вопроса до результата</h2></div><p class="text-white">Один проект может затрагивать инженерные решения, контроль персонала, измерения и приборы. Показываем эту связь без лишних переходов между разрозненными разделами.</p></div>${process([['Уточняем контекст','Понимаем тип объекта, оборудование, площадку и необходимый результат.'],['Формируем маршрут','Определяем, какие направления работ нужны и как они связаны.'],['Выполняем работы','Организуем проектную, контрольную или метрологическую часть.'],['Передаём результат','Согласуем формат документов и дальнейшее сопровождение.']])}</div></section>

    <section class="section section-white"><div class="container benefit-layout"><div>${eyebrow('МЕТРОЛОГИЯ')}<h2>Приборы тоже часть системы</h2><p>Поверка и метрологические работы важны для корректных измерений, но не подменяют собой весь профиль компании.</p>${arrowLink('/metrology','Смотреть метрологию')}</div><div class="benefit-list"><div class="benefit"><span class="mono">01</span><div><h3>Поверка приборов радиационного контроля</h3><p>Для организаций, использующих дозиметры и другие средства измерений.</p></div></div><div class="benefit"><span class="mono">02</span><div><h3>Удобная передача оборудования</h3><p>Курьерская логистика и отправления из регионов по согласованной схеме.</p></div></div><div class="benefit"><span class="mono">03</span><div><h3>Связь с другими направлениями</h3><p>Измерения, контроль и проектирование собраны в одной структуре услуг.</p></div></div></div></div></section>

    <section class="geo-band"><div class="container geo-inner"><div>${eyebrow('ГЕОГРАФИЯ РАБОТЫ')}<h2>Москва — точка контакта.<br>Россия — география задач.</h2><p>Компания работает с заказчиками из Москвы и регионов. Для приборов можно согласовать курьерскую передачу; формат и сроки уточняются под конкретную задачу.</p>${arrowLink('/delivery','Как организована доставка')}</div><div class="geo-graphic" aria-label="Схематическая иллюстрация работы по России"><i class="geo-dot a"></i><i class="geo-dot b"></i><i class="geo-dot c"></i><i class="geo-dot d"></i><i class="geo-dot e"></i><span class="geo-label">МОСКВА</span><span class="geo-caption">СХЕМА ГЕОГРАФИИ / НЕ КАРТА ПУНКТОВ ПРИЁМА</span></div></div></section>

    <section class="section section-white"><div class="container trust-grid"><div>${eyebrow('ДОВЕРИЕ ЧЕРЕЗ ФАКТЫ')}<h2>Документы и компетенции — на виду</h2><p>Для технических услуг важны проверяемые основания работы. В будущем сайте предусмотрен отдельный раздел для действующих документов, областей работ и пояснений к ним.</p><p class="page-note">Конкретные свидетельства, сроки действия и области аккредитации будут размещены после передачи и проверки материалов компании.</p>${arrowLink('/about','О компании')}</div><div class="trust-preview"><div class="document"><span class="mono">01 / ДОКУМЕНТЫ</span><strong>Подтверждения и область работ</strong></div><div class="document"><span class="mono">02 / КОМПЕТЕНЦИИ</span><strong>Направления лаборатории и специалистов</strong></div></div></div></section>

    <section class="section section-pale"><div class="container"><div class="section-heading"><div>${eyebrow('ПОЛЕЗНЫЕ МАТЕРИАЛЫ')}<h2>Сложные темы — ясным языком</h2></div><p>Будущая база знаний поможет подготовиться к проекту, измерениям или передаче оборудования.</p></div><div class="materials"><div class="material"><span class="mono">ТЕМА ДЛЯ МАТЕРИАЛА</span><h3>Какие исходные данные нужны для проектирования кабинета</h3><p>Короткий чек-лист перед первым разговором.</p></div><div class="material"><span class="mono">ТЕМА ДЛЯ МАТЕРИАЛА</span><h3>Как организовать дозиметрический контроль персонала</h3><p>Логика регулярного процесса без перегрузки терминами.</p></div><div class="material"><span class="mono">ТЕМА ДЛЯ МАТЕРИАЛА</span><h3>Как подготовить приборы к передаче на поверку</h3><p>Что уточнить до отправки оборудования.</p></div></div><div class="page-note" style="margin-top:20px">Заголовки показаны как концепция будущей базы знаний; материалы ещё не опубликованы.</div></div></section>

    <section class="section section-white"><div class="container"><div class="section-heading"><div>${eyebrow('ЧАСТЫЕ ВОПРОСЫ')}<h2>С чего начать?</h2></div></div>${faq([['Можно обратиться, если задача затрагивает несколько направлений?','Да. Опишите объект и ожидаемый результат. На первом этапе можно определить, какие виды работ связаны между собой и с чего логичнее начать.'],['Работаете ли вы только в Москве?','Компания рассматривает задачи в Москве и регионах России. Доступность конкретных работ и формат взаимодействия уточняются индивидуально.'],['Можно ли передать приборы курьером?','Да, возможность курьерской передачи оборудования предусмотрена. Способ отправки, упаковку и сроки нужно согласовать до передачи.'],['Что нужно для первого обращения?','Достаточно краткого описания объекта или прибора, региона и желаемого результата. Остальные исходные данные можно уточнить в разговоре.']])}</div></section>
    ${finalCta()}
  </main>`;
}

const serviceData = {
  '/design': {
    title: 'Проектирование',
    lead: 'Инженерные решения для кабинетов, помещений с источниками излучения и испытательных направлений. Помогаем выстроить проектную часть в контексте всей задачи заказчика.',
    intro: 'Проектирование — не отдельный чертёж, а основа дальнейшей безопасной эксплуатации, контроля и согласования смежных работ.',
    description: 'В фокусе — назначение помещения, оборудование, технологический процесс и требования к будущему объекту. Точный состав проектных работ определяется по исходным данным.',
    features: [
      ['Кабинеты с источниками излучения','Проектная проработка рентгеновских и других специализированных кабинетов.'],
      ['Испытательные и лабораторные помещения','Планировочные и инженерные решения под процессы будущей лаборатории.'],
      ['Объекты и установки','Работа с помещениями для радиационных источников и сопутствующей инфраструктурой.'],
      ['Комплексное сопровождение','Увязка проектных решений с обследованием, контролем и документацией.']
    ],
    bullets: ['Назначение объекта и состав оборудования','Планировки и имеющиеся технические материалы','Адрес, регион и состояние площадки','Ожидаемый результат и этап проекта'],
    outcome: ['Состав работ, согласованный под объект','Проектные материалы в установленном объёме','Понятные следующие шаги для смежных направлений'],
    faq: [['Можно ли начать без полного комплекта исходных данных?','Да. Для первичного обсуждения достаточно описания объекта и оборудования. Недостающие сведения уточняются после определения состава работ.'],['Работаете ли вы с проектированием испытательных лабораторий?','Это направление заложено в концепцию как приоритетное. Конкретный объём и профиль лаборатории необходимо согласовать с командой компании.']],
    special: 'engineering'
  },
  '/idk': {
    title: 'Индивидуальный дозиметрический контроль',
    lead: 'Регулярный контроль индивидуальных доз сотрудников, работающих с источниками ионизирующего излучения. Понятная организация процесса для работодателя.',
    intro: 'Контроль персонала должен быть последовательным: от перечня работников и режима работы до передачи результатов.',
    description: 'Помогаем организовать цикл индивидуального дозиметрического контроля и определить удобную схему взаимодействия для конкретной организации.',
    features: [
      ['Состав персонала','Определяем, какие группы сотрудников и площадки входят в задачу.'],
      ['Периодичность','Согласуем ритм передачи дозиметров и получения результатов.'],
      ['Измерения','Организуем выполнение контрольных измерений в рамках согласованной схемы.'],
      ['Результаты','Передаём сведения и документы в согласованном формате.']
    ],
    bullets: ['Число сотрудников и подразделений','Типы источников и характер работ','Адреса площадок и регион','Текущий порядок контроля, если он есть'],
    outcome: ['Понятная схема регулярного контроля','Результаты измерений в согласованном формате','Контакт для вопросов по дальнейшему циклу'],
    faq: [['Нужен ли контроль, если сотрудники работают на нескольких площадках?','Формат контроля зависит от состава персонала и характера работ. Опишите площадки и режим работы — схему можно обсудить индивидуально.'],['Можно ли организовать передачу дозиметров из региона?','Формат логистики можно согласовать при обращении. Сроки и условия передачи зависят от конкретной задачи.']],
    special: 'sheet'
  },
  '/radiation': {
    title: 'Радиационный контроль',
    lead: 'Измерения и обследования для объектов, помещений и рабочих мест, связанных с источниками ионизирующего излучения.',
    intro: 'Объективные измерения помогают оценивать фактические условия на объекте и принимать технические решения на основе данных.',
    description: 'Направление объединяет радиационный контроль, обследование помещений и измерение физических факторов. Состав работ определяется типом объекта и целью проверки.',
    features: [
      ['Помещения и рабочие места','Контроль условий в зонах работы персонала и на прилегающих участках.'],
      ['Источники и оборудование','Обследование объектов, где размещаются или используются источники излучения.'],
      ['Физические факторы','Измерения факторов среды в рамках профиля лабораторных работ.'],
      ['Документирование','Передача результатов и пояснение их применения к задаче заказчика.']
    ],
    bullets: ['Тип объекта и источника','План помещений и назначение зон','Адрес объекта и режим доступа','Цель обследования и нужный результат'],
    outcome: ['Программа работ под конкретный объект','Результаты выполненных измерений','Документы в согласованном составе'],
    faq: [['Проводится ли контроль на действующем объекте?','Возможность и порядок работ зависят от объекта, оборудования и режима доступа. Это уточняется при первичном обсуждении.'],['Чем радиационный контроль отличается от поверки прибора?','Радиационный контроль оценивает параметры на объекте, а поверка относится к средству измерений. В одном проекте могут потребоваться оба направления.']],
    special: 'photo'
  },
  '/metrology': {
    title: 'Метрология',
    lead: 'Поверка приборов радиационного контроля и работа со средствами измерений как часть надёжной системы измерений.',
    intro: 'Прибор, которым измеряют, должен соответствовать задаче. Метрологическое направление поддерживает качество результатов контроля.',
    description: 'На действующем сайте компании представлены поверка дозиметров и приборов радиационного контроля. В новой структуре это важный, но не единственный сервис.',
    features: [
      ['Дозиметры','Обсуждение модели, состояния прибора и нужного объёма работ.'],
      ['Приборы радиационного контроля','Поверка применяемых организациями средств измерений.'],
      ['Передача оборудования','Курьерская логистика в Москве и отправления из регионов по согласованию.'],
      ['Связанные услуги','При необходимости — переход к задачам контроля и измерений.']
    ],
    bullets: ['Тип, модель и количество приборов','Текущие документы на оборудование','Местонахождение приборов','Желаемые сроки и способ передачи'],
    outcome: ['Согласованный состав метрологических работ','Уточнённый порядок передачи приборов','Результаты в рамках выполненной услуги'],
    faq: [['Можно ли отправить приборы из другого города?','Да, компания рассматривает курьерскую передачу оборудования по России. Перед отправкой нужно согласовать модель, комплектность и адрес получения.'],['Можно ли заранее узнать срок и стоимость?','Да, после получения перечня приборов и исходных данных команда сможет уточнить условия. В макете намеренно нет вымышленных цен и сроков.']],
    special: 'photo'
  }
};

function servicePage(path) {
  const d = serviceData[path];
  const special = d.special === 'engineering'
    ? `<div class="image-panel"><img src="./assets/engineering-plan.png" alt="Работа с инженерным планом специализированного помещения"><div class="image-panel-label"><span class="mono">ПРОЕКТ / ПЛАНИРОВАНИЕ</span><h3>Техническое решение начинается с контекста объекта</h3></div></div>`
    : d.special === 'sheet'
      ? `<div class="technical-sheet"><div class="sheet-top mono"><span>ИДК / ОРГАНИЗАЦИЯ РАБОТ</span><span>01—04</span></div><div class="sheet-line"><span class="mono">01</span><div><strong>Персонал</strong><small>Кого касается контроль</small></div></div><div class="sheet-line"><span class="mono">02</span><div><strong>Площадки</strong><small>Где выполняются работы</small></div></div><div class="sheet-line"><span class="mono">03</span><div><strong>Цикл</strong><small>Периодичность и передача</small></div></div><div class="sheet-line"><span class="mono">04</span><div><strong>Результат</strong><small>Документы и сведения</small></div></div></div>`
      : `<div class="image-panel"><img src="./assets/metrology-lab.png" alt="Приборы радиационного контроля в лабораторной работе"><div class="image-panel-label"><span class="mono">ИЗМЕРЕНИЯ / ОБОРУДОВАНИЕ</span><h3>Точная работа с техническими задачами</h3></div></div>`;
  return `<main class="page-main">${pageHero(d.title,d.lead,d.title)}
    <section class="section section-white"><div class="container page-intro"><div>${eyebrow('О НАПРАВЛЕНИИ')}<h2>От запроса к ясному плану работ</h2></div><div><p class="lead">${d.intro}</p><p>${d.description}</p></div></div></section>
    <section class="section section-pale"><div class="container"><div class="section-heading"><div>${eyebrow('СТРУКТУРА УСЛУГИ')}<h2>Что входит в направление</h2></div><p>Состав и объём работ всегда уточняются под объект, приборы и желаемый результат.</p></div><div class="detail-grid">${d.features.map((f,i)=>`<div class="detail"><span class="mono">0${i+1} / НАПРАВЛЕНИЕ</span><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join('')}<div class="detail"><span class="mono">05 / СВЯЗЬ</span><h3>Дальнейшее сопровождение</h3><p>Поможем увидеть, какие смежные задачи нужно учесть на следующих этапах.</p></div></div></div></section>
    <section class="section section-white"><div class="container split"><div>${eyebrow('ПОДГОТОВКА')}<h2>Что полезно сообщить в начале</h2><p>Не обязательно готовить полный пакет документов до первого обращения. Эти сведения помогут быстрее определить маршрут работ.</p><ul class="bullet-list">${d.bullets.map(x=>`<li>${x}</li>`).join('')}</ul>${arrowLink('/contacts','Передать задачу специалистам')}</div>${special}</div></section>
    <section class="section-sm section-white"><div class="container outcome-panel"><div>${eyebrow('РЕЗУЛЬТАТ')}<h2>На выходе — понятный следующий шаг</h2><p>Точный состав результата зависит от согласованной услуги.</p></div><ul>${d.outcome.map(x=>`<li>${x}</li>`).join('')}</ul></div></section>
    <section class="section section-dark"><div class="container"><div class="section-heading"><div>${eyebrow('КАК МЫ РАБОТАЕМ',true)}<h2>Маршрут взаимодействия</h2></div></div>${process([['Запрос','Вы описываете задачу и текущие исходные данные.'],['Уточнение','Согласуем объект, состав оборудования и ожидаемый результат.'],['Работы','Выполняем необходимые этапы в утверждённом объёме.'],['Результат','Передаём документы и обсуждаем дальнейшие задачи.']])}</div></section>
    <section class="section section-white"><div class="container"><div class="section-heading"><div>${eyebrow('ВОПРОСЫ')}<h2>Перед началом работы</h2></div></div>${faq(d.faq)}</div></section>
    ${finalCta('Расскажите о вашей задаче','Поможем определить состав работ по направлению «' + d.title + '» и связь с другими услугами компании.')}
  </main>`;
}

function services() {
  const groups = [
    ['01','Проектирование','Проектные решения для специализированных кабинетов, помещений с радиационными источниками и лабораторных направлений.',[['Проектирование кабинетов','/design'],['Проектирование испытательных лабораторий','/design'],['Радиационные источники и помещения','/design']]],
    ['02','Контроль персонала','Индивидуальные измерения и организация системного контроля доз персонала.',[['Индивидуальный дозиметрический контроль','/idk'],['Индивидуальная дозиметрия','/idk']]],
    ['03','Измерения и обследования','Радиационный контроль объектов, помещений, рабочих мест и измерение физических факторов.',[['Радиационный контроль','/radiation'],['Обследование помещений','/radiation'],['Физические факторы','/radiation']]],
    ['04','Метрология и приборы','Поверка дозиметров и других приборов радиационного контроля.',[['Поверка дозиметров','/metrology'],['Приборы радиационного контроля','/metrology'],['Доставка оборудования','/delivery']]],
    ['05','Смежные задачи','Направления, представленные на действующем сайте и требующие уточнения объёма перед публикацией.',[['Санитарно-эпидемиологическое заключение','/contacts'],['Технический паспорт рентгеновского кабинета','/contacts'],['Лабораторные направления','/radiation']]]
  ];
  return `<main class="page-main">${pageHero('Услуги','От проектной задачи до измерений и работы с приборами. Выберите направление — или опишите нам всю задачу целиком.','Все услуги')}
    <section class="section section-white"><div class="container page-intro"><div>${eyebrow('КАРТА КОМПЕТЕНЦИЙ')}<h2>Связанные задачи — в одной системе</h2></div><div><p class="lead">Изотоп РК работает на стыке инженерии, радиационной безопасности, дозиметрии и метрологии.</p><p>В каталоге направления сгруппированы по задаче клиента. Поверка занимает своё место, но не скрывает проектный и контрольный профиль компании.</p></div></div></section>
    <section class="section section-pale"><div class="container service-directory"><aside class="service-sidebar"><span class="mono">РАЗДЕЛЫ</span>${groups.map(g=>`<a href="#/services" data-scroll-target="group-${g[0]}">${g[1]}</a>`).join('')}</aside><div>${groups.map(g=>`<div class="directory-group" id="group-${g[0]}"><span class="mono">${g[0]}</span><h2>${g[1]}</h2><div><p>${g[2]}</p><div class="directory-links">${g[3].map(([name,url])=>link(url,name+' ↗')).join('')}</div></div></div>`).join('')}</div></div></section>
    <section class="section section-white"><div class="container split"><div>${eyebrow('НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?')}<h2>Можно обратиться с задачей, а не с названием услуги</h2><p>Опишите объект, приборы и ожидаемый результат. Так проще определить необходимые направления работ и порядок действий.</p>${arrowLink('/contacts','Связаться с командой')}</div><div class="technical-sheet"><div class="sheet-top mono"><span>ПЕРВЫЙ РАЗГОВОР</span><span>ДАННЫЕ</span></div><div class="sheet-line"><span class="mono">01</span><div><strong>Что за объект или прибор?</strong><small>Тип, назначение и текущее состояние.</small></div></div><div class="sheet-line"><span class="mono">02</span><div><strong>Где он находится?</strong><small>Москва или регион России.</small></div></div><div class="sheet-line"><span class="mono">03</span><div><strong>Какой результат нужен?</strong><small>Проект, измерения, контроль, документы.</small></div></div></div></div></section>
    ${finalCta()}
  </main>`;
}

function about() {
  return `<main class="page-main">${pageHero('О компании','Изотоп РК — технический партнёр для организаций, которым нужны связанные решения в проектировании, радиационном контроле, дозиметрии и метрологии.','О компании',false)}
    <section class="section section-white"><div class="container page-intro"><div>${eyebrow('ПОЗИЦИОНИРОВАНИЕ')}<h2>Широкий профиль. Один контекст задачи.</h2></div><div><p class="lead">Сила компании — не в одной услуге, а в возможности посмотреть на объект и процесс целиком.</p><p>Проектирование, контроль персонала, измерения на объекте и работа с приборами часто пересекаются. Новая структура сайта помогает заказчику увидеть эти связи и выбрать правильную точку входа.</p></div></div></section>
    <section class="section section-dark"><div class="container"><div class="section-heading"><div>${eyebrow('ПРОФИЛЬ КОМПАНИИ',true)}<h2>Четыре опорных направления</h2></div><p class="text-white">Содержание построено на действующем сайте и приоритетах, озвученных компанией на встрече.</p></div>${process([['Инженерия','Проектирование специализированных помещений и объектов.'],['Дозиметрия','Контроль персонала и регулярные измерительные процессы.'],['Радиационный контроль','Обследования и измерения на объектах.'],['Метрология','Работа с приборами и средствами измерений.']])}</div></section>
    <section class="section section-white"><div class="container split"><div class="image-panel"><img src="./assets/engineering-plan.png" alt="Инженер изучает план специализированного помещения"><div class="image-panel-label"><span class="mono">ИНЖЕНЕРНЫЙ ПОДХОД</span><h3>От исходных данных к техническому решению</h3></div></div><div>${eyebrow('РАБОТА ПО ВСЕЙ РОССИИ')}<h2>Близко к задаче, независимо от региона</h2><p>Компания находится в Москве и рассматривает проекты в других регионах России. Для оборудования предусмотрена возможность курьерской передачи по согласованию.</p><ul class="bullet-list"><li>Москва — место расположения компании</li><li>Региональные задачи — по всей России</li><li>Передача приборов — по согласованной схеме</li></ul>${arrowLink('/contacts','Контакты и адрес')}</div></div></section>
    <section class="section section-pale"><div class="container trust-grid"><div>${eyebrow('ПРОВЕРЯЕМЫЕ СВЕДЕНИЯ')}<h2>Документы нужно показать предметно</h2><p>В финальном сайте здесь должны появиться актуальные подтверждающие документы, реальные сведения о лаборатории и область выполняемых работ.</p><p class="page-note">Макет не подменяет документы выдуманными номерами или сертификатами. Перечень и формулировки необходимо согласовать с компанией.</p></div><div class="trust-preview"><div class="document"><span class="mono">ДЛЯ ПУБЛИКАЦИИ</span><strong>Подтверждающие документы</strong></div><div class="document"><span class="mono">ДЛЯ ПУБЛИКАЦИИ</span><strong>Область выполняемых работ</strong></div></div></div></section>
    ${finalCta('Есть задача на стыке направлений?','Опишите её без подбора точного названия услуги. Поможем определить подходящий маршрут обсуждения.')}
  </main>`;
}

function delivery() {
  return `<main class="page-main">${pageHero('Курьерская доставка оборудования','Согласуем удобную передачу приборов для метрологических и связанных работ: по Москве и из регионов России.','Доставка оборудования')}
    <section class="section section-white"><div class="container page-intro"><div>${eyebrow('УДОБСТВО ДЛЯ ЗАКАЗЧИКА')}<h2>Оборудование может приехать к нам</h2></div><div><p class="lead">Для клиента важна не только услуга, но и простая логистика приборов.</p><p>Компания предлагает курьерскую передачу оборудования. Конкретный маршрут, сроки, упаковка и состав комплекта согласуются перед отправкой. Этот блок показывает сценарий сервиса, а не фиксированные тарифы.</p></div></div></section>
    <section class="section section-dark"><div class="container"><div class="section-heading"><div>${eyebrow('ПОРЯДОК ПЕРЕДАЧИ',true)}<h2>Четыре понятных шага</h2></div></div>${process([['Перечень приборов','Сообщите модели и количество оборудования.'],['Согласование','Уточним комплектность, условия и адрес передачи.'],['Передача','Отправка курьером по согласованной схеме.'],['Результат','Возврат приборов и документов после выполненных работ.']])}</div></section>
    <section class="section section-white"><div class="container split"><div>${eyebrow('ДО ОТПРАВКИ')}<h2>Что уточнить заранее</h2><ul class="bullet-list"><li>Модель, серийные данные и количество приборов</li><li>Комплектность и состояние оборудования</li><li>Адрес отправления и контакт получателя</li><li>Нужные работы и документы</li></ul><p>Условия упаковки и перевозки важно подтвердить до передачи.</p></div><div class="geo-graphic" style="height:350px" aria-label="Схема доставки по России"><i class="geo-dot a"></i><i class="geo-dot b"></i><i class="geo-dot c"></i><i class="geo-dot d"></i><span class="geo-label">МОСКВА</span><span class="geo-caption">УСЛОВНАЯ СХЕМА / НЕ ЛОГИСТИЧЕСКАЯ КАРТА</span></div></div></section>
    ${finalCta('Согласовать передачу приборов','Напишите модели оборудования и город отправления — уточним удобный вариант взаимодействия.')}
  </main>`;
}

function contacts() {
  return `<main class="page-main">${pageHero('Контакты','Расскажите о проекте, объекте или оборудовании. Поможем определить, какое направление работ подходит вашей задаче.','Контакты',false)}
    <section class="section section-white"><div class="container contacts-grid"><div>${eyebrow('СВЯЗЬ С КОМПАНИЕЙ')}<h2>Начните с разговора</h2><div class="contact-item"><span class="mono">ТЕЛЕФОН</span><a href="tel:+74991413290">+7 (499) 141-32-90</a><p>Дополнительные номера доступны на действующем сайте компании.</p></div><div class="contact-item"><span class="mono">ЭЛЕКТРОННАЯ ПОЧТА</span><a href="mailto:info@izotoprk.ru">info@izotoprk.ru</a></div><div class="contact-item"><span class="mono">АДРЕС</span><strong>Москва, ул. Маршала Тимошенко, дом 23, строение 2</strong><p>Левое крыло, 2 этаж. Ближайшая станция метро — «Крылатское».</p></div><div class="contact-item"><span class="mono">ВРЕМЯ РАБОТЫ</span><strong>Пн–чт: 09:00–17:00 · Пт: 09:00–16:00</strong><p>Перед визитом лучше уточнить приём и порядок прохода.</p></div></div><div class="contact-map"><div class="contact-map-pin"><strong>Изотоп РК</strong><small>ул. Маршала Тимошенко, 23, стр. 2</small></div><span class="mono">УСЛОВНАЯ СХЕМА · УТОЧНИТЕ МАРШРУТ ПЕРЕД ВИЗИТОМ</span></div></div></section>
    <section class="section section-pale"><div class="container split"><div>${eyebrow('МОСКВА И РЕГИОНЫ')}<h2>Работаем с задачами по всей России</h2><p>Если вы находитесь вне Москвы, расскажите о регионе и характере работ. Для оборудования можно обсудить курьерскую передачу.</p>${arrowLink('/delivery','Передача оборудования')}</div><div class="technical-sheet"><div class="sheet-top mono"><span>ПЕРВОЕ ОБРАЩЕНИЕ</span><span>3 ПУНКТА</span></div><div class="sheet-line"><span class="mono">01</span><div><strong>Какая задача?</strong><small>Проект, контроль, измерения или приборы.</small></div></div><div class="sheet-line"><span class="mono">02</span><div><strong>Где находится объект?</strong><small>Москва или регион России.</small></div></div><div class="sheet-line"><span class="mono">03</span><div><strong>Когда нужен результат?</strong><small>Пожелания по срокам и этапу работ.</small></div></div></div></div></section>
    ${finalCta('Напишите нам','Короткого описания задачи достаточно для первого контакта. Форма в макете демонстрационная и пока не отправляет данные.')}
  </main>`;
}

function render() {
  const path = routes[location.hash.slice(1)] ? location.hash.slice(1) : '/';
  let content = path === '/' ? home()
    : path === '/services' ? services()
    : serviceData[path] ? servicePage(path)
    : path === '/about' ? about()
    : path === '/delivery' ? delivery()
    : contacts();
  document.title = routes[path] + ' — Изотоп РК · концепт';
  document.getElementById('app').innerHTML = header(path) + content + footer();
  const menuButton = document.getElementById('menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.form-feedback').classList.add('visible');
  }));
  document.querySelectorAll('[data-scroll-target]').forEach(anchor => anchor.addEventListener('click', event => {
    event.preventDefault();
    const target = document.getElementById(anchor.dataset.scrollTarget);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);
render();
