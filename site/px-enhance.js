(function () {
  'use strict';

  /* ---------------------------------------------------------------- data */
  var CAREER = [
    { role: 'Independent Consultant | AI Product, Agentic Systems & UX Engineering', company: 'Self-Employed / Strategic Consulting', period: 'Jun 2023 - Present', place: 'Global / Remote', summary: 'Designs and builds end-to-end AI product experiences, agentic workflows, and self-hosted model environments. Translates human intent into structured model execution with human-in-the-loop validation.', outcomes: ['Designed reference architectures for custom OpenAI-compatible multi-model gateways.', 'Upskilled 2,300+ students and professionals in AI and digital product development.', 'Built full-stack React/Next.js prototypes connecting model APIs to interactive visual canvases.'], tools: 'React, TypeScript, Next.js, Docker, Ollama, LiteLLM, MCP, FastAPI, PostgreSQL' },
    { role: 'User Experience Design Manager', company: "Lowe's Innovation Labs & India", period: 'Jun 2022 - May 2024', place: 'Bengaluru / USA', summary: 'Led UX revamp for retail platforms and innovation initiatives with atomic design systems, AI-augmented design workflows, and continuous usability benchmarking.', outcomes: ['+14% checkout task completion on key web retail journeys.', 'Scaled an atomic design system across cross-functional product squads.', 'Integrated Azure Static Web Apps previews with GitHub Actions regression testing.'], tools: 'Figma, Atomic Design, Design Tokens, React, Flutter, Hotjar, WCAG 2.1 AA' },
    { role: 'Mobile / Web UX/UI Technology Supervisor', company: 'Guaranty Trust Bank (GTBank)', period: 'Jun 2019 - Jul 2021', place: 'Nigeria / Remote', summary: 'Supervised UX/UI and technology delivery across web and mobile banking solutions, transforming complex financial flows into intuitive customer journeys.', outcomes: ['Redesigned core digital banking journeys across five product lines.', 'Mentored a team of 12 designers and frontend developers.', 'Improved mobile banking adoption and reduced friction in transfer flows.'], tools: 'Mobile UX, Figma, Design Systems, iOS/Android Guidelines, Agile/Scrum' },
    { role: 'Senior UX Architect / UX Consultant', company: 'SociallyGood / Soczen Technologies', period: 'Apr 2018 - Jun 2019', place: 'India', summary: 'Led experience architecture for an international philanthropic marketplace connecting non-profits with corporate donors and individual supporters.', outcomes: ['+23% increase in first-time donation conversion.', 'Lighthouse accessibility and performance scores raised to 90+.', 'Optimized single-page donation with transparent tax-receipt generation.'], tools: 'UX Strategy, Journey Mapping, Information Architecture, Lighthouse' },
    { role: 'Team Lead - UX/UI & Web Delivery', company: 'Accenture India', period: 'Jan 2014 - Apr 2018', place: 'India', summary: 'Led multidisciplinary design and web development teams delivering enterprise-scale multilingual travel booking platforms and corporate enablement.', outcomes: ['Delivered multilingual booking portal with multi-currency support.', 'Trained 1,252 new joiners across frontend and UX standards.'], tools: 'Enterprise UX, Multilingual UI, JavaScript, Responsive Design, Bootstrap' },
    { role: 'Senior Associate Consultant / Lead UX Architect', company: 'ITC Infotech', period: 'Feb 2012 - Jan 2014', place: 'India', summary: 'Architected responsive banking journeys, depository portals for low-bandwidth environments, and enterprise planning modernization to SAP Fiori.', outcomes: ['Reduced error rates in complex financial transfer forms.', 'Delivered portals operable over constrained 2G/3G connections.'], tools: 'SAP UI5, SAP Fiori, HTML5, CSS3, JavaScript, Banking UX' },
    { role: 'Senior Visual / Web UX/UI Designer & Front-End Developer', company: 'PurpleTalk India', period: 'Aug 2010 - Feb 2012', place: 'Hyderabad, India', summary: 'Designed and developed customer-facing web and mobile experiences from creative visual concepts through clean frontend implementation.', outcomes: ['Shipped 10+ web and mobile applications with international reach.'], tools: 'Photoshop, Illustrator, HTML, CSS, JavaScript, PHP' },
    { role: 'Graphic / Web & UI Designer and Developer', company: 'SamanInfoTech & XL Yellow Pages', period: 'Apr 2006 - Aug 2010', place: 'India', summary: 'Built foundational expertise in layout systems, visual communication, accessibility, and front-end coding.', outcomes: ['Developed design and frontend foundations across 30+ client projects.'], tools: 'HTML, CSS, JavaScript, Photoshop, CorelDraw' }
  ];

  var EDUCATION = [
    { degree: 'Bachelor of Science (B.Sc)', school: 'Osmania University - Spoorthy Degree College', period: '2005 - 2009', focus: 'Computer Science & Physical Sciences' },
    { degree: 'Diploma in Multimedia & Interactive Design', school: 'Arena Animation', period: '2004 - 2006', focus: 'Visual Communication, Digital Media & Interface Prototyping' },
    { degree: 'Board of Intermediate Education (10+2)', school: 'GSR Junior College, Guntur', period: '2002 - 2005', focus: 'Mathematics, Physics, Chemistry (MPC)' },
    { degree: 'Secondary School Certificate (SSC)', school: 'Naveena Vidya Nikethan', period: 'Completed 2001', focus: 'General Academics & Foundation Studies' }
  ];

  var CERTS = [
    { name: 'Enterprise UX Center of Excellence (CoE)', issuer: 'Industry CoE', year: '2022', focus: 'Design governance & scale' },
    { name: 'WCAG 2.1 AA Accessibility Standards', issuer: 'W3C Guidelines', year: '2023', focus: 'Accessible digital experiences' },
    { name: 'AI & Agentic Systems Architecture', issuer: 'Independent Research', year: '2024', focus: 'MCP, RAG & LLM orchestration' },
    { name: 'Scrum Master & Agile Delivery', issuer: 'Enterprise Agile', year: '2020', focus: 'Cross-functional team leadership' }
  ];

  var AGENTS = [
    { id: 'atlas', name: 'ATLAS', role: 'Research Scout', color: '#4cc9f0', shape: 'rings', tagline: 'Finds the signal in the noise.', output: 'Research synthesis delivered: 14 stakeholder interviews clustered into 5 opportunity themes; top friction point identified in the checkout flow with supporting evidence.' },
    { id: 'nova', name: 'NOVA', role: 'Experience Architect', color: '#ff9d09', shape: 'orbit', tagline: 'Turns ambiguity into structure.', output: 'Experience map delivered: 7-stage customer journey with decision points, failure states, and recovery paths aligned to the business goals.' },
    { id: 'pixel', name: 'PIXEL', role: 'Design Systems Bot', color: '#b06bff', shape: 'grid', tagline: 'Consistency, component by component.', output: 'Component library delivered: 42 tokenized components, responsive variants, and accessibility notes ready for engineering handoff.' },
    { id: 'vector', name: 'VECTOR', role: 'AI Workflow Agent', color: '#3ecf8e', shape: 'bars', tagline: 'Orchestrates intelligence with guardrails.', output: 'Workflow delivered: multi-step agent pipeline with verification loop, human approval gate, and graceful fallback on low-confidence output.' },
    { id: 'echo', name: 'ECHO', role: 'Prototype Runner', color: '#ff5c74', shape: 'waves', tagline: 'Ideas you can actually click.', output: 'Interactive prototype delivered: key flows wired with realistic states and transitions, validated against 6 usability scenarios.' }
  ];

  var PROJECTS = [
    { title: 'Enterprise Retail Experience', kind: 'UX LEADERSHIP', img: '/img/px/hero-banner.jpg', blurb: 'Retail journeys rebuilt for clarity, speed, and measurable task completion.' },
    { title: 'Agentic AI Hub', kind: 'AI PRODUCT', img: '/img/px/agent-hub.jpg', blurb: 'A multi-agent workspace where roles collaborate with human approval gates.' },
    { title: 'Design System Engine', kind: 'SYSTEMS', img: '/img/px/ai-brain.png', blurb: 'Tokenized component architecture scaled across product squads.' }
  ];

  /* ----------------------------------------------------------------- css */
  var CSS = [
    '#px-root{position:relative;z-index:2;font-family:var(--font-f-neo-sans-pro-medium,Arial,sans-serif);color:#e9eef8}',
    '#px-root section{position:relative;padding:100px 6vw;max-width:1280px;margin:0 auto}',
    '#px-root .px-eyebrow{font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:#ffb347;margin-bottom:18px;font-weight:700}',
    '#px-root h2.px-title{font-size:clamp(34px,5.2vw,64px);line-height:1.02;letter-spacing:-.03em;margin:0 0 16px;font-weight:700;background:linear-gradient(115deg,#fff 10%,#ffd9a0 55%,#ff8a3d 100%);-webkit-background-clip:text;background-clip:text;color:transparent}',
    '#px-root .px-lead{max-width:720px;font-size:16px;line-height:1.75;color:#b9c4d8;margin:0 0 42px}',

    /* chat */
    '#px-chat{background:rgba(4,10,32,.46);border:1px solid rgba(255,255,255,.12);border-radius:26px;backdrop-filter:blur(22px);padding:46px;box-shadow:0 24px 80px rgba(0,0,0,.45)}',
    '#px-chat .px-form{display:flex;gap:10px;align-items:center;background:rgba(2,6,24,.72);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:8px 8px 8px 18px;transition:border-color .2s}',
    '#px-chat .px-form:focus-within{border-color:#ff9d09}',
    '#px-chat .px-form span.px-spark{color:#ffb347;font-size:20px;animation:pxPulse 1.8s ease-in-out infinite}',
    '#px-chat input{flex:1;min-width:0;background:transparent;border:0;outline:0;color:#fff;font-size:15px;padding:10px 4px}',
    '#px-chat input::placeholder{color:#71809d}',
    '#px-chat button.px-send{border:0;border-radius:12px;padding:12px 22px;font-weight:700;font-size:13px;color:#1a0b00;background:linear-gradient(115deg,#ffd466,#ff9d09,#f34d11);cursor:pointer;white-space:nowrap;transition:transform .2s,filter .2s}',
    '#px-chat button.px-send:hover{transform:translateY(-2px);filter:brightness(1.1)}',
    '#px-chat .px-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}',
    '#px-chat .px-chips button{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);color:#c5cee0;border-radius:999px;padding:7px 13px;font-size:11px;cursor:pointer;transition:background .2s,color .2s}',
    '#px-chat .px-chips button:hover{background:rgba(255,157,9,.2);color:#fff}',
    '#px-chat .px-answer{margin-top:22px;border:1px solid rgba(255,157,9,.4);border-radius:18px;padding:24px;background:linear-gradient(160deg,rgba(37,10,74,.6),rgba(2,9,58,.7));animation:pxFade .35s ease both}',
    '#px-chat .px-answer h3{margin:0 0 8px;font-size:20px;color:#fff}',
    '#px-chat .px-answer p{margin:0;line-height:1.7;color:#c5cee0;font-size:14px}',
    '#px-chat .px-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}',
    '#px-chat .px-metrics div{background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:12px;text-align:center}',
    '#px-chat .px-metrics b{display:block;color:#ffb347;font-size:16px}',
    '#px-chat .px-metrics small{color:#8996b0;font-size:10px}',

    /* tabs + resume */
    '#px-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:30px}',
    '#px-tabs button{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);color:#b9c4d8;padding:11px 20px;border-radius:999px;font-size:13px;font-weight:600;cursor:pointer;transition:.2s}',
    '#px-tabs button.px-active{background:linear-gradient(115deg,#ff9d09,#f34d11);color:#fff;border-color:transparent;box-shadow:0 8px 24px rgba(243,77,17,.35)}',
    '#px-panel{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}',
    '#px-root .px-card{background:rgba(4,10,32,.52);border:1px solid rgba(255,255,255,.11);border-radius:18px;padding:24px;backdrop-filter:blur(14px);transition:transform .25s,border-color .25s}',
    '#px-root .px-card:hover{transform:translateY(-5px);border-color:rgba(255,157,9,.5)}',
    '#px-root .px-card h4{margin:0 0 4px;font-size:17px;color:#fff;line-height:1.3}',
    '#px-root .px-card .px-meta{font-size:12px;color:#ffb347;margin-bottom:12px}',
    '#px-root .px-card p{font-size:13px;line-height:1.65;color:#aebad0;margin:0 0 14px}',
    '#px-root .px-card ul{margin:0 0 14px;padding-left:18px;color:#c5cee0;font-size:12px;line-height:1.7}',
    '#px-root .px-card li{margin-bottom:5px}',
    '#px-root .px-tools{font-size:10px;color:#7f8da8;letter-spacing:.04em;line-height:1.6}',
    '#px-root .px-open{display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:transparent;border:1px solid rgba(255,157,9,.55);color:#ffc06b;padding:8px 14px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;transition:.2s}',
    '#px-root .px-open:hover{background:rgba(255,157,9,.18);color:#fff}',

    /* agents */
    '#px-agents{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}',
    '#px-root .px-agent{position:relative;overflow:hidden;background:rgba(4,10,32,.55);border:1px solid rgba(255,255,255,.11);border-radius:22px;padding:28px 22px;text-align:center;cursor:pointer;transition:transform .3s,border-color .3s;backdrop-filter:blur(14px)}',
    '#px-root .px-agent:hover{transform:translateY(-8px);border-color:var(--accent)}',
    '#px-root .px-agent .px-orb{width:88px;height:88px;margin:0 auto 18px;position:relative;display:grid;place-items:center}',
    '#px-root .px-agent .px-glyph{position:relative;z-index:2;font-size:11px;font-weight:800;letter-spacing:.1em;color:#fff}',
    '#px-root .px-agent h4{margin:0 0 4px;font-size:16px;letter-spacing:.12em;color:#fff}',
    '#px-root .px-agent .px-role{font-size:12px;color:var(--accent);margin-bottom:8px;font-weight:700}',
    '#px-root .px-agent p{font-size:12px;line-height:1.6;color:#aebad0;margin:0}',
    '.px-rings i{position:absolute;inset:0;border:2px solid var(--accent);border-radius:50%;opacity:.8;animation:pxRing 2.6s ease-out infinite}',
    '.px-rings i:nth-child(2){animation-delay:.85s}.px-rings i:nth-child(3){animation-delay:1.7s}',
    '.px-orbit i{position:absolute;width:9px;height:9px;background:var(--accent);border-radius:50%;top:50%;left:50%;transform-origin:0 0;animation:pxOrbit 3.4s linear infinite}',
    '.px-orbit i:nth-child(2){animation-delay:1.1s;width:6px;height:6px}.px-orbit i:nth-child(3){animation-delay:2.2s;width:12px;height:12px;opacity:.6}',
    '.px-grid i{position:absolute;width:14px;height:14px;background:var(--accent);border-radius:3px;opacity:.85;animation:pxBlink 1.6s ease-in-out infinite}',
    '.px-grid i:nth-child(1){top:8px;left:8px}.px-grid i:nth-child(2){top:8px;right:8px;animation-delay:.4s}.px-grid i:nth-child(3){bottom:8px;left:8px;animation-delay:.8s}.px-grid i:nth-child(4){bottom:8px;right:8px;animation-delay:1.2s}',
    '.px-bars i{position:absolute;bottom:14px;width:8px;background:var(--accent);border-radius:4px;animation:pxBar 1.4s ease-in-out infinite}',
    '.px-bars i:nth-child(1){left:16px;height:30px}.px-bars i:nth-child(2){left:32px;height:50px;animation-delay:.25s}.px-bars i:nth-child(3){left:48px;height:38px;animation-delay:.5s}.px-bars i:nth-child(4){left:64px;height:58px;animation-delay:.75s}',
    '.px-waves i{position:absolute;left:10px;right:10px;height:2px;background:var(--accent);border-radius:2px;top:50%;animation:pxWave 2s ease-in-out infinite}',
    '.px-waves i:nth-child(2){animation-delay:.5s}.px-waves i:nth-child(3){animation-delay:1s}',
    '@keyframes pxPulse{0%,100%{opacity:.55}50%{opacity:1}}',
    '@keyframes pxFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}',
    '@keyframes pxRing{0%{transform:scale(.35);opacity:.9}100%{transform:scale(1);opacity:0}}',
    '@keyframes pxOrbit{to{transform:rotate(360deg) translateX(34px)}}',
    '@keyframes pxBlink{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}',
    '@keyframes pxBar{0%,100%{height:18px}50%{height:56px}}',
    '@keyframes pxWave{0%,100%{transform:translateY(-14px) scaleX(.7);opacity:.5}50%{transform:translateY(14px) scaleX(1);opacity:1}}',

    /* projects */
    '#px-projects{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}',
    '#px-root .px-project{border-radius:20px;overflow:hidden;background:rgba(4,10,32,.55);border:1px solid rgba(255,255,255,.11);cursor:pointer;transition:transform .3s,border-color .3s}',
    '#px-root .px-project:hover{transform:translateY(-6px);border-color:rgba(255,157,9,.55)}',
    '#px-root .px-project img{width:100%;height:170px;object-fit:cover;display:block}',
    '#px-root .px-project .px-body{padding:20px}',
    '#px-root .px-project .px-kind{font-size:10px;letter-spacing:.2em;color:#ffb347;font-weight:700}',
    '#px-root .px-project h4{margin:8px 0 6px;font-size:18px;color:#fff}',
    '#px-root .px-project p{margin:0;font-size:12px;line-height:1.6;color:#aebad0}',

    /* integrated browser drawer */
    '#px-drawer{position:fixed;inset:0;z-index:60;display:none}',
    '#px-drawer.px-on{display:block}',
    '#px-drawer .px-scrim{position:absolute;inset:0;background:rgba(0,4,16,.66);backdrop-filter:blur(4px)}',
    '#px-drawer .px-frame{position:absolute;top:0;right:0;bottom:0;width:min(620px,94vw);background:#0a0f1f;border-left:1px solid rgba(255,255,255,.16);box-shadow:-24px 0 80px rgba(0,0,0,.6);transform:translateX(100%);transition:transform .38s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column}',
    '#px-drawer.px-on .px-frame{transform:none}',
    '#px-drawer .px-chrome{height:46px;display:flex;align-items:center;gap:10px;padding:0 14px;background:#111827;border-bottom:1px solid rgba(255,255,255,.1);flex-shrink:0}',
    '#px-drawer .px-dot{width:10px;height:10px;border-radius:50%;background:#ff5f56}.px-dot.y{background:#ffbd2e}.px-dot.g{background:#27c93f}',
    '#px-drawer .px-url{flex:1;margin-left:8px;background:#0a0f1f;border:1px solid rgba(255,255,255,.09);border-radius:7px;padding:6px 12px;font-size:11px;color:#8fa0bd;font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '#px-drawer .px-close{background:transparent;border:0;color:#fff;font-size:20px;cursor:pointer;line-height:1}',
    '#px-drawer .px-view{flex:1;overflow:auto;padding:34px;line-height:1.7}',
    '#px-drawer .px-view h3{font-size:24px;margin:0 0 6px;color:#fff}',
    '#px-drawer .px-view .px-sub{font-size:12px;color:#ffb347;margin-bottom:24px;letter-spacing:.06em}',
    '#px-drawer .px-view h5{font-size:11px;letter-spacing:.18em;color:#7f8da8;text-transform:uppercase;margin:22px 0 8px}',
    '#px-drawer .px-view p,#px-drawer .px-view li{font-size:14px;color:#c5cee0}',
    '#px-drawer .px-view ul{padding-left:18px}',
    '#px-drawer .px-tag{display:inline-block;background:rgba(255,157,9,.14);border:1px solid rgba(255,157,9,.4);color:#ffc06b;border-radius:999px;padding:5px 11px;font-size:10px;margin:0 6px 6px 0}',
    '#px-drawer .px-output{border-left:3px solid var(--accent,#ff9d09);background:rgba(255,255,255,.03);padding:16px 18px;border-radius:0 12px 12px 0;margin-top:18px}',
    /* music */
    '#px-music{position:fixed;right:22px;bottom:22px;z-index:70;display:flex;flex-direction:column;align-items:center;gap:6px}',
    '#px-music button{width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,157,9,.55);background:rgba(6,12,32,.72);backdrop-filter:blur(14px);color:#ffb347;cursor:pointer;display:grid;place-items:center;position:relative;transition:transform .2s,box-shadow .2s;box-shadow:0 8px 26px rgba(0,0,0,.4)}',
    '#px-music button:hover{transform:scale(1.08);box-shadow:0 8px 30px rgba(255,157,9,.3)}',
    '#px-music .px-note{font-size:22px;line-height:1;transition:opacity .2s}',
    '#px-music.px-playing .px-note{opacity:0;position:absolute}',
    '#px-music .px-eq{display:none;align-items:flex-end;gap:3px;height:20px}',
    '#px-music.px-playing .px-eq{display:flex}',
    '#px-music .px-eq i{width:3px;background:linear-gradient(#ffd466,#f34d11);border-radius:2px;animation:pxEq .9s ease-in-out infinite}',
    '#px-music .px-eq i:nth-child(1){height:9px;animation-delay:0s}',
    '#px-music .px-eq i:nth-child(2){height:16px;animation-delay:.2s}',
    '#px-music .px-eq i:nth-child(3){height:12px;animation-delay:.4s}',
    '#px-music .px-eq i:nth-child(4){height:18px;animation-delay:.6s}',
    '@keyframes pxEq{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1)}}',
    '#px-music .px-music-label{font-size:8px;letter-spacing:.2em;color:#8996b0;font-weight:700}',
    '@media(max-width:700px){#px-root section{padding:70px 5vw}#px-chat{padding:24px}#px-chat .px-metrics{grid-template-columns:1fr}#px-drawer .px-view{padding:22px}#px-music{right:14px;bottom:14px}}'
  ].join('\n');

  /* ------------------------------------------------------------- helpers */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function section(id, eyebrow, title, lead) {
    var s = el('section', '', '');
    s.id = id;
    s.appendChild(el('div', 'px-eyebrow', eyebrow));
    s.appendChild(el('h2', 'px-title', title));
    s.appendChild(el('p', 'px-lead', lead));
    return s;
  }

  /* --------------------------------------------------------------- drawer */
  var drawer, view, urlEl;
  function buildDrawer() {
    drawer = el('div', '', ''); drawer.id = 'px-drawer';
    var scrim = el('div', 'px-scrim', '');
    scrim.addEventListener('click', closeDrawer);
    var frame = el('div', 'px-frame', '');
    var chrome = el('div', 'px-chrome', '');
    chrome.appendChild(el('span', 'px-dot', ''));
    chrome.appendChild(el('span', 'px-dot y', ''));
    chrome.appendChild(el('span', 'px-dot g', ''));
    urlEl = el('div', 'px-url', 'praveenuxui.com / document');
    chrome.appendChild(urlEl);
    var close = el('button', 'px-close', '&times;');
    close.setAttribute('aria-label', 'Close');
    close.addEventListener('click', closeDrawer);
    chrome.appendChild(close);
    view = el('div', 'px-view', '');
    frame.appendChild(chrome); frame.appendChild(view);
    drawer.appendChild(scrim); drawer.appendChild(frame);
    document.body.appendChild(drawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  }
  function openDrawer(title, url, html, accent) {
    urlEl.textContent = url;
    view.innerHTML = '<h3>' + title + '</h3>' + html;
    view.style.setProperty('--accent', accent || '#ff9d09');
    drawer.classList.add('px-on');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('px-on');
    document.body.style.overflow = '';
  }

  /* ----------------------------------------------------------------- chat */
  var ANSWERS = [
    { keys: ['experience', 'career', 'work', 'role', 'lowe', 'bank'], head: '18+ years across enterprise UX, AI and delivery', body: 'Praveen has led experience and technology work for Lowe\'s Innovation Labs, GTBank, Accenture, SociallyGood and ITC Infotech - from retail checkout journeys to banking for millions of users. Today he consults on AI product strategy and agentic systems.', metrics: [['18+', 'Years'], ['8', 'Career roles'], ['14+', 'Countries']], tab: 'px-experience' },
    { keys: ['agent', 'ai', 'mcp', 'llm', 'workflow'], head: 'Agentic AI, built with guardrails', body: 'Multi-agent workflows are designed as orchestrated pipelines with verification loops, human approval gates, MCP tool usage, and hybrid RAG. Intelligence is architected before the interface is polished.', metrics: [['100+', 'AI usability tests'], ['30%', 'Faster delivery'], ['MCP', 'Native']], tab: 'px-agents' },
    { keys: ['education', 'degree', 'cert', 'bsc', 'diploma'], head: 'Education and certifications', body: 'A B.Sc from Osmania University, a multimedia and interactive design diploma from Arena Animation, plus certifications in enterprise UX, WCAG 2.1 AA accessibility, agentic systems architecture and agile delivery.', metrics: [['B.Sc', 'Osmania'], ['4', 'Certifications'], ['WCAG', '2.1 AA']], tab: 'px-experience' },
    { keys: ['project', 'showcase', 'portfolio', 'case'], head: 'Selected project showcases', body: 'Explore enterprise retail experiences, an agentic AI hub, and a design system engine - each built around clarity, measurable outcomes, and human-centred decisions.', metrics: [['3', 'Showcases'], ['UX', 'Leadership'], ['AI', 'Product']], tab: 'px-projects' },
    { keys: ['contact', 'hire', 'call', 'talk'], head: 'Start a conversation', body: 'Open to fractional advisory, AI product strategy and design systems leadership. Reach out at hello@praveenuxui.com or connect on LinkedIn.', metrics: [['24h', 'Response'], ['Remote', 'Global'], ['Open', 'Advisory']], tab: null }
  ];
  function answerChat(q, host) {
    var ql = q.toLowerCase();
    var a = ANSWERS.find(function (x) { return x.keys.some(function (k) { return ql.indexOf(k) >= 0; }); }) || {
      head: 'Ask PRAVEENUXUI',
      body: 'I combine enterprise UX leadership, AI product architecture and design systems to turn ambiguity into products people understand. Ask me about experience, agents, education, projects or how to work together.',
      metrics: [['18+', 'Years'], ['100k+', 'Learners'], ['AI', 'Product']], tab: null
    };
    var out = el('div', 'px-answer', '');
    out.appendChild(el('h3', '', a.head));
    out.appendChild(el('p', '', a.body));
    var m = el('div', 'px-metrics', '');
    a.metrics.forEach(function (p) { m.appendChild(el('div', '', '<b>' + p[0] + '</b><small>' + p[1] + '</small>')); });
    out.appendChild(m);
    if (a.tab) {
      var btn = el('button', 'px-open', 'Open ' + a.tab.replace('px-', '') + ' &rarr;');
      btn.addEventListener('click', function () {
        var target = document.getElementById(a.tab);
        if (target) { target.scrollIntoView({ behavior: 'smooth' }); setTab(a.tab === 'px-experience' ? 'experience' : 'agents'); }
      });
      out.appendChild(btn);
    }
    var old = host.querySelector('.px-answer');
    if (old) old.remove();
    host.appendChild(out);
  }

  function buildChat() {
    var s = section('px-chat-section', 'AI COPILOT', 'Ask PRAVEENUXUI', 'A grounded assistant for my experience, agentic work, education and projects. Try a prompt below.');
    var box = el('div', '', ''); box.id = 'px-chat';
    var form = el('form', 'px-form', '<span class="px-spark">&#10022;</span>');
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Ask about experience, agentic AI, education, projects...';
    input.setAttribute('aria-label', 'Ask PRAVEENUXUI');
    var send = el('button', 'px-send', 'Ask AI');
    send.type = 'submit';
    form.appendChild(input); form.appendChild(send);
    box.appendChild(form);
    var chips = el('div', 'px-chips', '');
    ['Tell me about your experience', 'Show agentic AI work', 'Education & certifications', 'Showcase projects', 'How to work together'].forEach(function (c) {
      var b = el('button', '', '+ ' + c);
      b.addEventListener('click', function () { input.value = c; answerChat(c, box); });
      chips.appendChild(b);
    });
    box.appendChild(chips);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input.value.trim()) return;
      answerChat(input.value, box);
      input.value = '';
    });
    s.appendChild(box);
    return s;
  }

  /* ------------------------------------------------------------- resume */
  var tabButtons = {};
  function setTab(name) {
    Object.keys(tabButtons).forEach(function (k) { tabButtons[k].classList.toggle('px-active', k === name); });
    ['experience', 'education', 'certifications'].forEach(function (k) {
      var p = document.getElementById('px-panel-' + k);
      if (p) p.style.display = k === name ? 'grid' : 'none';
    });
  }
  function buildResume() {
    var s = section('px-experience', 'PROFILE', 'Experience & credentials', 'Eighteen years of enterprise experience, formal education and verified certifications.');
    var tabs = el('div', '', ''); tabs.id = 'px-tabs';
    [['experience', 'Work Experience'], ['education', 'Education'], ['certifications', 'Certifications']].forEach(function (t) {
      var b = el('button', '', t[1]);
      b.addEventListener('click', function () { setTab(t[0]); });
      tabButtons[t[0]] = b; tabs.appendChild(b);
    });
    s.appendChild(tabs);

    var exp = el('div', 'px-panel', ''); exp.id = 'px-panel-experience';
    CAREER.forEach(function (r) {
      var c = el('div', 'px-card', '');
      c.appendChild(el('h4', '', r.role));
      c.appendChild(el('div', 'px-meta', r.company + ' &middot; ' + r.period));
      c.appendChild(el('p', '', r.summary));
      var ul = el('ul', '', r.outcomes.map(function (o) { return '<li>' + o + '</li>'; }).join(''));
      c.appendChild(ul);
      c.appendChild(el('div', 'px-tools', r.tools));
      var b = el('button', 'px-open', 'Open document &rarr;');
      b.addEventListener('click', function () {
        openDrawer('Work Experience', 'praveenuxui.com / documents / ' + r.company.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          '<div class="px-sub">' + r.role + ' | ' + r.period + '</div>' +
          '<h5>Company</h5><p>' + r.company + ' - ' + r.place + '</p>' +
          '<h5>Summary</h5><p>' + r.summary + '</p>' +
          '<h5>Outcomes</h5><ul>' + r.outcomes.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul>' +
          '<h5>Toolkit</h5><div>' + r.tools.split(',').map(function (t) { return '<span class="px-tag">' + t.trim() + '</span>'; }).join('') + '</div>');
      });
      c.appendChild(b); exp.appendChild(c);
    });
    s.appendChild(exp);

    var edu = el('div', 'px-panel', ''); edu.id = 'px-panel-education'; edu.style.display = 'none';
    EDUCATION.forEach(function (e) {
      var c = el('div', 'px-card', '');
      c.appendChild(el('h4', '', e.degree));
      c.appendChild(el('div', 'px-meta', e.school + ' &middot; ' + e.period));
      c.appendChild(el('p', '', e.focus));
      edu.appendChild(c);
    });
    s.appendChild(edu);

    var cert = el('div', 'px-panel', ''); cert.id = 'px-panel-certifications'; cert.style.display = 'none';
    CERTS.forEach(function (c0) {
      var c = el('div', 'px-card', '');
      c.appendChild(el('h4', '', c0.name));
      c.appendChild(el('div', 'px-meta', c0.issuer + ' &middot; ' + c0.year));
      c.appendChild(el('p', '', c0.focus));
      cert.appendChild(c);
    });
    s.appendChild(cert);
    setTab('experience');
    return s;
  }

  /* -------------------------------------------------------------- agents */
  var SHAPES = {
    rings: '<i></i><i></i><i></i>', orbit: '<i></i><i></i><i></i>', grid: '<i></i><i></i><i></i><i></i>',
    bars: '<i></i><i></i><i></i><i></i>', waves: '<i></i><i></i><i></i>'
  };
  function buildAgents() {
    var s = section('px-agents-section', 'AGENT COLLECTION', 'Meet the agents', 'Distinct roles, distinct personalities. Open one to see what it produces - the result, not the process.');
    var grid = el('div', '', ''); grid.id = 'px-agents';
    AGENTS.forEach(function (a) {
      var c = el('div', 'px-agent', '');
      c.style.setProperty('--accent', a.color);
      var orb = el('div', 'px-orb ' + a.shape, SHAPES[a.shape]);
      orb.appendChild(el('span', 'px-glyph', a.name.charAt(0)));
      c.appendChild(orb);
      c.appendChild(el('h4', '', a.name));
      c.appendChild(el('div', 'px-role', a.role));
      c.appendChild(el('p', '', a.tagline));
      c.addEventListener('click', function () {
        openDrawer(a.name + ' - ' + a.role, 'praveenuxui.com / agent / ' + a.id + ' / builder',
          '<div class="px-sub">' + a.tagline + '</div>' +
          '<h5>Latest output</h5>' +
          '<div class="px-output"><p>' + a.output + '</p></div>' +
          '<div style="margin-top:26px"><span class="px-tag">Output ready</span><span class="px-tag">Human reviewed</span><span class="px-tag">Verified</span></div>', a.color);
      });
      grid.appendChild(c);
    });
    s.appendChild(grid);
    return s;
  }

  /* ------------------------------------------------------------ projects */
  function buildProjects() {
    var s = section('px-projects-section', 'SELECTED WORK', 'Project showcases', 'A few things I have shaped - each opened in an integrated browser view.');
    var grid = el('div', '', ''); grid.id = 'px-projects';
    PROJECTS.forEach(function (p) {
      var c = el('div', 'px-project', '');
      c.appendChild(el('img', '', ''));
      c.querySelector('img').src = p.img;
      c.querySelector('img').alt = p.title;
      var body = el('div', 'px-body', '<div class="px-kind">' + p.kind + '</div><h4>' + p.title + '</h4><p>' + p.blurb + '</p>');
      c.appendChild(body);
      c.addEventListener('click', function () {
        openDrawer(p.title, 'praveenuxui.com / projects / ' + p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          '<div class="px-sub">' + p.kind + '</div>' +
          '<img src="' + p.img + '" alt="" style="width:100%;border-radius:14px;margin-bottom:20px">' +
          '<h5>Outcome</h5><p>' + p.blurb + '</p>' +
          '<h5>What I owned</h5><p>Experience strategy, interaction design and delivery oversight from discovery through release.</p>');
      });
      grid.appendChild(c);
    });
    s.appendChild(grid);
    return s;
  }

  /* --------------------------------------------------------------- music */
  function buildMusic() {
    var wrap = el('div', '', '');
    wrap.id = 'px-music';
    wrap.innerHTML =
      '<button id="px-music-btn" aria-label="Toggle ambient music" title="Ambient sound">' +
      '<span class="px-eq"><i></i><i></i><i></i><i></i></span>' +
      '<span class="px-note">&#9835;</span>' +
      '</button>' +
      '<span class="px-music-label">AMBIENT</span>';
    var audio = document.createElement('audio');
    audio.src = '/audio/ambient.mp3';
    audio.loop = true;
    audio.preload = 'none';
    audio.volume = 0.45;
    var btn = wrap.querySelector('#px-music-btn');
    btn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play().then(function () { wrap.classList.add('px-playing'); }).catch(function () {});
      } else {
        audio.pause();
        wrap.classList.remove('px-playing');
      }
    });
    document.body.appendChild(wrap);
    document.body.appendChild(audio);
  }

  /* ---------------------------------------------------------------- init */
  function init() {
    if (document.getElementById('px-root')) return;
    var style = document.createElement('style');
    style.id = 'px-enhance-style';
    style.textContent = CSS;
    document.head.appendChild(style);
    buildDrawer();
    buildMusic();
    var root = el('div', '', ''); root.id = 'px-root';
    root.appendChild(buildChat());
    root.appendChild(buildResume());
    root.appendChild(buildAgents());
    root.appendChild(buildProjects());
    var nuxt = document.getElementById('__nuxt');
    if (nuxt && nuxt.nextSibling) document.body.insertBefore(root, nuxt.nextSibling);
    else document.body.appendChild(root);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
