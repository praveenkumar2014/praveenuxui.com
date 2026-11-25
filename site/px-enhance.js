(function () {
  'use strict';

  /* Everything lives inside this one in-page workspace. No page sections are added. */
  var BRAIN = '/img/px/ai-brain.png';

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
    { id: 'atlas', name: 'ATLAS', role: 'Research Scout', color: '#4cc9f0', hue: '160deg', tagline: 'Finds the signal in the noise.', output: 'Research synthesis delivered: 14 stakeholder interviews clustered into 5 opportunity themes; the top friction point was identified in the checkout flow with supporting evidence.' },
    { id: 'nova', name: 'NOVA', role: 'Experience Architect', color: '#ff9d09', hue: '20deg', tagline: 'Turns ambiguity into structure.', output: 'Experience map delivered: a 7-stage customer journey with decision points, failure states and recovery paths aligned to business goals.' },
    { id: 'pixel', name: 'PIXEL', role: 'Design Systems Bot', color: '#b06bff', hue: '275deg', tagline: 'Consistency, component by component.', output: 'Component library delivered: 42 tokenized components, responsive variants and accessibility notes ready for engineering handoff.' },
    { id: 'vector', name: 'VECTOR', role: 'AI Workflow Agent', color: '#3ecf8e', hue: '95deg', tagline: 'Orchestrates intelligence with guardrails.', output: 'Workflow delivered: a multi-step agent pipeline with verification loop, human approval gate and graceful fallback on low-confidence output.' },
    { id: 'echo', name: 'ECHO', role: 'Prototype Runner', color: '#ff5c74', hue: '330deg', tagline: 'Ideas you can actually click.', output: 'Interactive prototype delivered: key flows wired with realistic states and transitions, validated against 6 usability scenarios.' }
  ];

  var PROJECTS = [
    { title: 'Enterprise Retail Experience', kind: 'UX LEADERSHIP', img: '/img/px/hero-banner.jpg', blurb: 'Retail journeys rebuilt for clarity, speed and measurable task completion.' },
    { title: 'Agentic AI Hub', kind: 'AI PRODUCT', img: '/img/px/agent-hub.jpg', blurb: 'A multi-agent workspace where roles collaborate with human approval gates.' },
    { title: 'Design System Engine', kind: 'SYSTEMS', img: '/img/px/ai-brain.png', blurb: 'Tokenized component architecture scaled across product squads.' }
  ];

  var ANSWERS = [
    { keys: ['experience', 'career', 'work', 'role', 'lowe', 'bank'], head: '18+ years across enterprise UX, AI and delivery', body: 'Praveen has led experience and technology work for Lowe\'s Innovation Labs, GTBank, Accenture, SociallyGood and ITC Infotech - from retail checkout journeys to banking for millions of users. Today he consults on AI product strategy and agentic systems.', metrics: [['18+', 'Years'], ['8', 'Roles'], ['14+', 'Countries']] },
    { keys: ['agent', 'ai', 'mcp', 'llm', 'workflow'], head: 'Agentic AI, built with guardrails', body: 'Multi-agent workflows are designed as orchestrated pipelines with verification loops, human approval gates, MCP tool usage and hybrid RAG. Intelligence is architected before the interface is polished.', metrics: [['100+', 'AI tests'], ['30%', 'Faster'], ['MCP', 'Native']] },
    { keys: ['education', 'degree', 'cert', 'bsc', 'diploma'], head: 'Education and certifications', body: 'A B.Sc from Osmania University, a multimedia and interactive design diploma from Arena Animation, plus certifications in enterprise UX, WCAG 2.1 AA accessibility, agentic systems architecture and agile delivery.', metrics: [['B.Sc', 'Osmania'], ['4', 'Certs'], ['WCAG', '2.1 AA']] },
    { keys: ['project', 'showcase', 'portfolio', 'case'], head: 'Selected project showcases', body: 'Explore enterprise retail experiences, an agentic AI hub and a design system engine - each built around clarity, measurable outcomes and human-centred decisions.', metrics: [['3', 'Projects'], ['UX', 'Leadership'], ['AI', 'Product']] },
    { keys: ['contact', 'hire', 'call', 'talk'], head: 'Start a conversation', body: 'Open to fractional advisory, AI product strategy and design systems leadership. Reach out at hello@praveenuxui.com or connect on LinkedIn.', metrics: [['24h', 'Response'], ['Remote', 'Global'], ['Open', 'Advisory']] }
  ];

  /* ------------------------------------------------------------------ css */
  var CSS = [
    '#px-workspace{position:fixed;inset:0;z-index:80;display:none}',
    '#px-workspace.px-on{display:block}',
    '#px-workspace .px-scrim{position:absolute;inset:0;background:rgba(0,4,16,.6);backdrop-filter:blur(3px);cursor:pointer}',
    '#px-workspace .px-frame{position:absolute;top:0;right:0;bottom:0;width:min(920px,96vw);background:radial-gradient(circle at 18% 82%,rgba(255,157,9,.24),transparent 42%),radial-gradient(circle at 68% 58%,rgba(141,12,57,.28),transparent 46%),radial-gradient(circle at 86% 18%,rgba(2,9,58,.95),transparent 54%),#080d1b;border-left:1px solid rgba(255,255,255,.16);box-shadow:-28px 0 90px rgba(0,0,0,.72);transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column}',
    '#px-workspace.px-on .px-frame{transform:none}',
    '#px-workspace .px-chrome{height:44px;flex-shrink:0;display:flex;align-items:center;gap:10px;padding:0 14px;background:#111827;border-bottom:1px solid rgba(255,255,255,.1)}',
    '#px-workspace .px-dot{width:10px;height:10px;border-radius:50%;background:#ff5f56}.px-dot.y{background:#ffbd2e}.px-dot.g{background:#27c93f}',
    '#px-workspace .px-url{flex:1;margin-left:8px;background:#0a0f1f;border:1px solid rgba(255,255,255,.09);border-radius:7px;padding:6px 12px;font:11px monospace;color:#8fa0bd;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '#px-workspace .px-close{border:0;background:transparent;color:#fff;font-size:20px;cursor:pointer;line-height:1}',
    '#px-workspace .px-body{display:flex;flex:1;min-height:0}',
    '#px-workspace .px-rail{width:218px;flex-shrink:0;background:#070b16;border-right:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;overflow:auto}',
    '#px-workspace .px-rail-head{padding:18px 16px 8px;font-size:10px;letter-spacing:.2em;color:#7f8da8;font-weight:700}',
    '#px-workspace .px-rail-item{display:flex;align-items:center;gap:11px;padding:11px 16px;cursor:pointer;border-left:2px solid transparent;transition:background .2s}',
    '#px-workspace .px-rail-item:hover{background:rgba(255,255,255,.04)}',
    '#px-workspace .px-rail-item.px-sel{background:rgba(255,157,9,.10);border-left-color:var(--accent,#ff9d09)}',
    '#px-workspace .px-rail-item img{width:30px;height:30px;object-fit:contain;border-radius:8px;filter:hue-rotate(var(--hue,0deg)) saturate(1.2)}',
    '#px-workspace .px-rail-item .px-mark{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;font-size:11px;font-weight:800;color:#ffcf8a;background:rgba(255,157,9,.12);border:1px solid rgba(255,157,9,.28)}',
    '#px-workspace .px-rail-item .px-rn{font-size:12px;font-weight:700;color:#e9eef8;letter-spacing:.07em}',
    '#px-workspace .px-rail-item .px-rr{font-size:10px;color:#7f8da8}',
    '#px-workspace .px-rail-foot{margin-top:auto;padding:14px 16px;border-top:1px solid rgba(255,255,255,.08);font-size:10px;color:#66748f;line-height:1.6}',
    '#px-workspace .px-stage{flex:1;min-width:0;display:flex;flex-direction:column}',
    '#px-workspace .px-view{flex:1;overflow:auto;padding:30px 34px;line-height:1.7;font-family:var(--font-f-neo-sans-pro-medium,Arial,sans-serif);color:#c5cee0}',
    '#px-workspace .px-view h3{font-size:22px;margin:0 0 6px;color:#fff}',
    '#px-workspace .px-view .px-sub{font-size:11px;color:#ffb347;margin-bottom:22px;letter-spacing:.08em}',
    '#px-workspace .px-view h5{font-size:10px;letter-spacing:.18em;color:#7f8da8;text-transform:uppercase;margin:20px 0 8px}',
    '#px-workspace .px-view p,#px-workspace .px-view li{font-size:13px;color:#c5cee0}',
    '#px-workspace .px-view ul{padding-left:18px}',
    '#px-workspace .px-tag{display:inline-block;background:rgba(255,157,9,.14);border:1px solid rgba(255,157,9,.4);color:#ffc06b;border-radius:999px;padding:5px 11px;font-size:10px;margin:0 6px 6px 0}',
    '#px-workspace .px-output{border-left:3px solid var(--accent,#ff9d09);background:rgba(255,255,255,.03);padding:15px 18px;border-radius:0 12px 12px 0;margin-top:16px}',
    '#px-workspace .px-shot{width:100%;max-height:220px;object-fit:cover;border-radius:14px;margin-bottom:18px}',
    '#px-workspace .px-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}',
    '#px-workspace .px-metrics div{background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:12px;text-align:center}',
    '#px-workspace .px-metrics b{display:block;color:#ffb347;font-size:15px}',
    '#px-workspace .px-metrics small{color:#8996b0;font-size:10px}',
    '#px-workspace .px-thread{display:flex;flex-direction:column;gap:12px}',
    '#px-workspace .px-msg{max-width:88%;padding:12px 15px;border-radius:14px;font-size:13px;line-height:1.6}',
    '#px-workspace .px-msg.px-user{align-self:flex-end;background:rgba(255,157,9,.16);border:1px solid rgba(255,157,9,.34);color:#ffe2bd}',
    '#px-workspace .px-msg.px-agent{align-self:flex-start;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);color:#c5cee0}',
    '#px-workspace .px-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}',
    '#px-workspace .px-tabs button{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);color:#b9c4d8;padding:8px 15px;border-radius:999px;font-size:11px;cursor:pointer}',
    '#px-workspace .px-tabs button.px-sel{background:linear-gradient(115deg,#ff9d09,#f34d11);color:#fff;border-color:transparent}',
    '#px-workspace .px-card{background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:18px;margin-bottom:12px}',
    '#px-workspace .px-card h4{margin:0 0 4px;font-size:15px;color:#fff;line-height:1.35}',
    '#px-workspace .px-card .px-meta{font-size:11px;color:#ffb347;margin-bottom:10px}',
    '#px-workspace .px-card p{font-size:12px;margin:0 0 10px}',
    '#px-workspace .px-card ul{font-size:11px;color:#c5cee0;margin:0;padding-left:18px}',
    '#px-workspace .px-card li{margin-bottom:4px}',
    '#px-workspace .px-open{margin-top:10px;background:transparent;border:1px solid rgba(255,157,9,.5);color:#ffc06b;padding:7px 12px;border-radius:9px;font-size:10px;font-weight:700;cursor:pointer}',
    '#px-workspace .px-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}',
    '#px-workspace .px-proj{border-radius:14px;overflow:hidden;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);cursor:pointer}',
    '#px-workspace .px-proj img{width:100%;height:130px;object-fit:cover;display:block}',
    '#px-workspace .px-proj .px-body{padding:14px}',
    '#px-workspace .px-proj .px-kind{font-size:9px;letter-spacing:.18em;color:#ffb347;font-weight:700}',
    '#px-workspace .px-proj h4{margin:6px 0;font-size:15px;color:#fff}',
    '#px-workspace .px-proj p{font-size:11px;margin:0}',
    '#px-workspace .px-compose{flex-shrink:0;border-top:1px solid rgba(255,255,255,.09);padding:14px 18px;background:#0a0f1f}',
    '#px-workspace .px-compose form{display:flex;gap:8px}',
    '#px-workspace .px-compose input{flex:1;min-width:0;background:#0e1425;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:11px 14px;color:#fff;font-size:13px;outline:none}',
    '#px-workspace .px-compose input:focus{border-color:#ff9d09}',
    '#px-workspace .px-compose button{border:0;border-radius:10px;padding:0 18px;background:linear-gradient(115deg,#ffd466,#ff9d09,#f34d11);color:#1a0b00;font-weight:700;font-size:12px;cursor:pointer}',
    '#px-workspace .px-music{flex-shrink:0;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,157,9,.5);background:#0a0f1f;color:#ffb347;cursor:pointer;display:grid;place-items:center;position:relative}',
    '#px-workspace .px-music .px-note{font-size:15px;line-height:1;transition:opacity .2s}',
    '#px-workspace .px-music.px-playing .px-note{opacity:0;position:absolute}',
    '#px-workspace .px-music .px-eq{display:none;align-items:flex-end;gap:2px;height:14px}',
    '#px-workspace .px-music.px-playing .px-eq{display:flex}',
    '#px-workspace .px-music .px-eq i{width:2px;background:linear-gradient(#ffd466,#f34d11);border-radius:2px;animation:pxEq .9s ease-in-out infinite}',
    '#px-workspace .px-music .px-eq i:nth-child(1){height:7px}#px-workspace .px-music .px-eq i:nth-child(2){height:12px;animation-delay:.2s}#px-workspace .px-music .px-eq i:nth-child(3){height:9px;animation-delay:.4s}#px-workspace .px-music .px-eq i:nth-child(4){height:13px;animation-delay:.6s}',
    '@keyframes pxEq{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1)}}',
    '@media(max-width:700px){#px-workspace .px-rail{width:150px}#px-workspace .px-view{padding:22px}#px-workspace .px-metrics{grid-template-columns:1fr}}'
  ].join('\n');

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function findAnswer(q) {
    var ql = (q || '').toLowerCase();
    return ANSWERS.find(function (a) { return a.keys.some(function (k) { return ql.indexOf(k) >= 0; }); }) || {
      head: 'PRAVEENUXUI workspace',
      body: 'I combine enterprise UX leadership, AI product architecture and design systems to turn ambiguity into products people understand. Ask me about experience, agents, education, projects or how to work together.',
      metrics: [['18+', 'Years'], ['100k+', 'Learners'], ['AI', 'Product']]
    };
  }
  function metricsHTML(a) {
    return '<div class="px-metrics">' + a.metrics.map(function (p) { return '<div><b>' + p[0] + '</b><small>' + p[1] + '</small></div>'; }).join('') + '</div>';
  }

  var ws, view, urlEl, composeInput;
  function select(id) {
    Array.prototype.forEach.call(ws.querySelectorAll('.px-rail-item'), function (n) {
      n.classList.toggle('px-sel', n.getAttribute('data-id') === id);
    });
  }
  function setUrl(s) { urlEl.textContent = 'praveenuxui.com / workspace / ' + s; }
  function reveal() {
    ws.classList.add('px-on');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    ws.classList.remove('px-on');
    document.body.style.overflow = '';
  }

  function showChat(q) {
    select('chat'); setUrl('chat');
    var html = '<div class="px-sub">AI COPILOT / GROUNDED PROFILE DATA</div>';
    if (q) {
      var a = findAnswer(q);
      html += '<div class="px-thread"><div class="px-msg px-user">' + esc(q) + '</div>' +
        '<div class="px-msg px-agent">' + a.head + '</div></div>' +
        '<h3>' + a.head + '</h3><p>' + a.body + '</p>' + metricsHTML(a);
    } else {
      html += '<h3>Ask PRAVEENUXUI</h3><p>The workspace answers from grounded profile data. Type a prompt below, or try one of these.</p>' +
        '<div class="px-tabs">' +
        ['Tell me about your experience', 'Show agentic AI work', 'Education & certifications', 'Showcase projects', 'How to work together']
          .map(function (c) { return '<button data-chip="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') + '</div>';
    }
    view.innerHTML = html;
    Array.prototype.forEach.call(view.querySelectorAll('[data-chip]'), function (b) {
      b.addEventListener('click', function () { showChat(b.getAttribute('data-chip')); });
    });
  }

  function showProfile() {
    select('profile'); setUrl('profile');
    view.innerHTML = '<div class="px-sub">PROFILE / EXPERIENCE, EDUCATION & CERTIFICATIONS</div><h3>Praveen Kumar K</h3>' +
      '<p>AI Product, Experience & Technology Leader - 18+ years of enterprise UX, product strategy, design systems and technology delivery.</p>' +
      '<div class="px-tabs"><button data-tab="experience">Work Experience</button><button data-tab="education">Education</button><button data-tab="certifications">Certifications</button></div>' +
      '<div id="px-profile-content"></div>';
    var content = view.querySelector('#px-profile-content');
    function tab(name) {
      Array.prototype.forEach.call(view.querySelectorAll('[data-tab]'), function (b) { b.classList.toggle('px-sel', b.getAttribute('data-tab') === name); });
      if (name === 'experience') {
        content.innerHTML = CAREER.map(function (r, i) {
          return '<div class="px-card"><h4>' + esc(r.role) + '</h4><div class="px-meta">' + esc(r.company) + ' | ' + esc(r.period) + '</div>' +
            '<p>' + esc(r.summary) + '</p><ul>' + r.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul>' +
            '<div style="font-size:10px;color:#66748f">' + esc(r.tools) + '</div>' +
            '<button class="px-open" data-doc="' + i + '">Open document &rarr;</button></div>';
        }).join('');
        Array.prototype.forEach.call(content.querySelectorAll('[data-doc]'), function (b) {
          b.addEventListener('click', function () { showDocument(CAREER[parseInt(b.getAttribute('data-doc'), 10)]); });
        });
      } else if (name === 'education') {
        content.innerHTML = EDUCATION.map(function (e) {
          return '<div class="px-card"><h4>' + esc(e.degree) + '</h4><div class="px-meta">' + esc(e.school) + ' | ' + esc(e.period) + '</div><p>' + esc(e.focus) + '</p></div>';
        }).join('');
      } else {
        content.innerHTML = CERTS.map(function (c) {
          return '<div class="px-card"><h4>' + esc(c.name) + '</h4><div class="px-meta">' + esc(c.issuer) + ' | ' + esc(c.year) + '</div><p>' + esc(c.focus) + '</p></div>';
        }).join('');
      }
    }
    Array.prototype.forEach.call(view.querySelectorAll('[data-tab]'), function (b) {
      b.addEventListener('click', function () { tab(b.getAttribute('data-tab')); });
    });
    tab('experience');
  }

  function showDocument(r) {
    setUrl('document');
    view.style.setProperty('--accent', '#ff9d09');
    view.innerHTML = '<div class="px-sub">DOCUMENT VIEWER / WORK EXPERIENCE</div><h3>' + esc(r.role) + '</h3>' +
      '<div class="px-sub">' + esc(r.company) + ' | ' + esc(r.period) + ' | ' + esc(r.place) + '</div>' +
      '<h5>Summary</h5><p>' + esc(r.summary) + '</p>' +
      '<h5>Outcomes</h5><ul>' + r.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul>' +
      '<h5>Toolkit</h5><div>' + r.tools.split(',').map(function (t) { return '<span class="px-tag">' + esc(t.trim()) + '</span>'; }).join('') + '</div>';
  }

  function showAgent(a) {
    select(a.id); setUrl('agent / ' + a.id);
    view.style.setProperty('--accent', a.color);
    view.innerHTML = '<h3>' + esc(a.name) + ' <span style="font-size:13px;color:#7f8da8;font-weight:400">/ ' + esc(a.role) + '</span></h3>' +
      '<div class="px-sub">' + esc(a.tagline) + '</div>' +
      '<img class="px-shot" src="' + BRAIN + '" alt="' + esc(a.name) + '" style="filter:hue-rotate(' + a.hue + ') saturate(1.2)">' +
      '<h5>Output</h5><div class="px-output"><p>' + esc(a.output) + '</p></div>' +
      '<div style="margin-top:22px"><span class="px-tag">Output ready</span><span class="px-tag">Human reviewed</span><span class="px-tag">Verified</span></div>';
  }

  function showProjects() {
    select('projects'); setUrl('projects');
    view.innerHTML = '<div class="px-sub">SELECTED WORK / PROJECT SHOWCASES</div><h3>Project showcases</h3><p>Open a project to view its output inside the workspace.</p>' +
      '<div class="px-grid">' + PROJECTS.map(function (p, i) {
        return '<div class="px-proj" data-p="' + i + '"><img src="' + p.img + '" alt=""><div class="px-body"><div class="px-kind">' + p.kind + '</div><h4>' + esc(p.title) + '</h4><p>' + esc(p.blurb) + '</p></div></div>';
      }).join('') + '</div>';
    Array.prototype.forEach.call(view.querySelectorAll('[data-p]'), function (n) {
      n.addEventListener('click', function () {
        var p = PROJECTS[parseInt(n.getAttribute('data-p'), 10)];
        view.innerHTML = '<div class="px-sub">' + p.kind + ' / PROJECT OUTPUT</div><h3>' + esc(p.title) + '</h3>' +
          '<img class="px-shot" src="' + p.img + '" alt=""><h5>Outcome</h5><p>' + esc(p.blurb) + '</p>' +
          '<h5>What I owned</h5><p>Experience strategy, interaction design and delivery oversight from discovery through release.</p>';
      });
    });
  }

  function build() {
    if (document.getElementById('px-workspace')) return;
    var st = document.createElement('style');
    st.id = 'px-workspace-style';
    st.textContent = CSS;
    document.head.appendChild(st);

    // The site's own Profile/Menu control opens the workspace in place.
    // Capture before Vue's bubble handler so the old navigation does not open.
    document.addEventListener('click', function (e) {
      var menu = e.target && e.target.closest ? e.target.closest('.menu') : null;
      if (!menu || !document.body.contains(menu)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      reveal();
    }, true);

    ws = el('div', '', ''); ws.id = 'px-workspace';
    var scrim = el('div', 'px-scrim', '');
    scrim.addEventListener('click', close);
    var frame = el('div', 'px-frame', '');

    var chrome = el('div', 'px-chrome', '<span class="px-dot"></span><span class="px-dot y"></span><span class="px-dot g"></span>');
    urlEl = el('div', 'px-url', 'praveenuxui.com / workspace');
    chrome.appendChild(urlEl);

    var music = el('button', 'px-music', '<span class="px-note">&#9835;</span><span class="px-eq"><i></i><i></i><i></i><i></i></span>');
    music.setAttribute('aria-label', 'Toggle ambient music');
    var audio = document.createElement('audio');
    audio.src = '/audio/ambient.mp3'; audio.loop = true; audio.volume = 0.45; audio.preload = 'none';
    music.addEventListener('click', function () {
      if (audio.paused) audio.play().then(function () { music.classList.add('px-playing'); }).catch(function () {});
      else { audio.pause(); music.classList.remove('px-playing'); }
    });
    chrome.appendChild(music);

    var x = el('button', 'px-close', '&times;');
    x.setAttribute('aria-label', 'Close workspace');
    x.addEventListener('click', close);
    chrome.appendChild(x);

    var body = el('div', 'px-body', '');
    var rail = el('div', 'px-rail', '<div class="px-rail-head">WORKSPACE</div>');

    function railItem(id, label, sub, html, color) {
      var it = el('div', 'px-rail-item', html);
      it.setAttribute('data-id', id);
      if (color) it.style.setProperty('--accent', color);
      it.addEventListener('click', function () {
        if (id === 'chat') showChat();
        else if (id === 'profile') showProfile();
        else if (id === 'projects') showProjects();
        else showAgent(AGENTS.filter(function (a) { return a.id === id; })[0]);
      });
      rail.appendChild(it);
    }
    railItem('chat', 'Chat', '', '<span class="px-mark">AI</span><div><div class="px-rn">CHAT</div><div class="px-rr">Ask copilot</div></div>');
    railItem('profile', 'Profile', '', '<span class="px-mark">CV</span><div><div class="px-rn">PROFILE</div><div class="px-rr">Experience / education</div></div>');
    railItem('projects', 'Projects', '', '<span class="px-mark">PR</span><div><div class="px-rn">PROJECTS</div><div class="px-rr">Selected work</div></div>');
    rail.appendChild(el('div', 'px-rail-head', 'AGENTS'));
    AGENTS.forEach(function (a) {
      railItem(a.id, a.name, a.role, '<img src="' + BRAIN + '" alt="" style="--hue:' + a.hue + '"><div><div class="px-rn">' + a.name + '</div><div class="px-rr">' + a.role + '</div></div>', a.color);
    });
    rail.appendChild(el('div', 'px-rail-foot', 'PRAVEENUXUI / AGENTIC WORKSPACE<br>LOCAL SESSION - OUTPUT ONLY'));

    var stage = el('div', 'px-stage', '');
    view = el('div', 'px-view', '');
    var compose = el('div', 'px-compose', '<form><input type="text" placeholder="Ask the workspace..." aria-label="Ask the workspace"><button type="submit">Run</button></form>');
    composeInput = compose.querySelector('input');
    compose.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = composeInput.value.trim();
      if (!q) return;
      composeInput.value = '';
      showChat(q);
    });

    stage.appendChild(view); stage.appendChild(compose);
    body.appendChild(rail); body.appendChild(stage);
    frame.appendChild(chrome); frame.appendChild(body);
    ws.appendChild(scrim); ws.appendChild(frame);
    document.body.appendChild(ws);

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    showChat();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
