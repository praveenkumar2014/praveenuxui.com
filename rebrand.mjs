// Rebrand the mirrored site as a UX/UI portfolio for PRAVEENUXUI.
// Copy is original writing inspired by Don Norman's design principles and the
// seven stages of action; the original layout, frames and visual theme stay intact.
// Idempotent: safe to run again after `node mirror.mjs` or after a previous run.
import { promises as fs, existsSync } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SITE = path.resolve('site');
const LOGO_SRC = path.resolve('../Downloads/praveenlogo.png');

const files = [
  'index.html',
  'aleph/index.html',
  '_payload.json',
  'aleph/_payload.json',
];

// ---------------------------------------------------------------------------
// Pass 1: original source strings -> first-pass portfolio copy.
// Long/specific strings come before brand catch-alls.
// ---------------------------------------------------------------------------
const R = [
  // metadata / brand
  ['Amaterasu is a physics cognition lab working at the intersection of technology and nature to transform mental health.', 'PRAVEENUXUI is a UX/UI designer turning complex ideas into clear, human-centered digital experiences.'],
  ['Amaterasu - Empower your mental health journey', 'PRAVEENUXUI - UX/UI Design Portfolio'],
  ['Empower your mental health journey', 'Designing digital experiences that feel human'],
  ['amaterasu, mental, health, physics, cognition, lab, technology, nature', 'praveenuxui, ux, ui, product design, design systems, interaction design, portfolio'],
  ['"titleTemplate":"Amaterasu - %s"', '"titleTemplate":"PRAVEENUXUI - %s"'],
  ['© 2024 - Amaterasu, empowering your mental health with quantum precision.', '© 2026 - PRAVEENUXUI. Designing thoughtful digital experiences.'],
  ['Crafted by Exo Ape', 'Designed by PRAVEENUXUI'],
  ['invest@amaterasu.ai', 'hello@praveenuxui.com'],
  ['info@amaterasu.ai', 'hello@praveenuxui.com'],
  ['https://x.com/Amaterasu_mind', 'https://twitter.com/praveenuxui/'],
  ['https://x.com/PRAVEENUXUI_mind', 'https://twitter.com/praveenuxui/'],
  ['https://x.com/', 'https://twitter.com/praveenuxui/'],
  ['https://www.linkedin.com/company/amaterasu-quantum', 'https://www.linkedin.com/in/praveenuxui/'],
  [/https:\/\/www\.linkedin\.com\/(?!in\/praveenuxui\/)/g, 'https://www.linkedin.com/in/praveenuxui/'],
  ['https://www.exoape.com/', 'https://www.praveenuxui.com/'],

  // splash / chrome
  ['Click to Enter', 'Welcome'],
  ['Tap to Enter', 'Welcome'],

  // home: hero + vision
  ['We empower humanity with the tools, knowledge, and wisdom to face mental health challenges from a position of unprecedented resilience.', 'I design with empathy and evidence — balancing real user needs, business goals, and technical reality to create experiences that feel effortless.'],
  ['Understand the Patient', 'Understand the User'],
  ['Initial Assessment', 'Discovery'],
  ['Assessment continued', 'Synthesis'],
  ['Diagnostic', 'Ideation'],
  ['Re-do Initial Assessment', 'Iterate'],
  ['Our minds are a deep reflection of nature, yet our internal world has driven too far from natural order.', 'Great interfaces reflect how people actually think — not how systems are organised.'],
  ['Reconnecting with nature', 'Back to the user'],
  ['It is now our duty to restore balance and harmony.', 'Every screen is a chance to remove friction and restore clarity.'],
  ['Modern mental health care operates in a linear way, isolating insights over long periods of time, with little consideration or ability to map a full view of the mind.', 'Most products still treat journeys as linear funnels, ignoring the messy, connected way people actually behave.'],
  ['Beyond linear treatment', 'Beyond linear flows'],
  ['Amaterasu moves beyond the linear, leveraging nonlinear dynamics to capture the fully connected conscious mind, towards holistic, dynamic, and interconnected truths.', 'PRAVEENUXUI designs beyond the linear — mapping connected journeys, states, and edge cases into flexible, coherent systems.'],

  // home: craft section
  ['Amaterasu pioneers research at the intersection of quantum computing, neuroscience, and non-linear dynamics towards a frontier pushing mental health care ecosystem. We leverage nature to deliver a degree of personalized mental health care not yet seen before.', 'PRAVEENUXUI works across research, interaction design, interface design, and design systems — using prototypes and evidence to turn ambiguity into products people love.'],
  ['Our Mind,\\na Quantum World', 'Research-Led\\nThinking'],
  ['Our Mind,\na Quantum World', 'Research-Led,\nThinking'],
  ['The quantum \\nnature of thought', 'Clarity \\nthrough research'],
  ['We are making long term investments in quantum computing research and hardware to form the pinnacle of our focus. We believe that while the brain itself may not be quantum in nature, it\'s often encoded behavioralisms exhibit patterns incredibly well suited for quantum encoded modeling, allowing us to play with behavioral complexities in orders of magnitude more complex than current formalisms.', 'I start with people, not pixels — interviews, journey mapping, and usability testing turn fuzzy problems into a clear design direction.'],
  ['Beauty in\\nNature’s Entropy', 'Systems\\n& Consistency'],
  ['Beauty in\nNature’s Entropy', 'Systems\n& Consistency'],
  ['Understanding \\nnature’s order', 'Order \\nfrom complexity'],
  ['We explore how small changes in mental processes can lead to significant shifts in behavior. Our work is focused on uncovering emergent patterns in decision-making, emotional regulation, and social interactions. By pushing the limits of understanding in these areas, we aim to develop transformative technologies that enhance both individual and collective human potential.', 'Small details compound. I build scalable design systems and reusable patterns that keep every screen coherent as a product grows.'],
  ['Applied Clinical\\nBest Practices', 'Accessible\\nby Default'],
  ['Applied Clinical\nBest Practices', 'Accessible\nby Default'],
  ['Human wisdom, \\npersonalized', 'Inclusive \\nby design'],
  ['We intricately complement our approach to the use of frontier technologies with deep insights driven by the world\'s best practicing psychologists, psychiatrists, and neuroscientists, ensuring our research is grounded in safe, empirically, and applied ethical best practice, towards a true nurturing human experience.', 'Accessibility and ethics are not checkboxes. I design for real contexts, diverse abilities, and the moments when technology should simply get out of the way.'],

  // home: principles
  ['Through the seamless integration of our 6 guiding principles, we set in motion our relentless culture, focus, and ethics.', 'Six principles shape how I work, collaborate, and make decisions on every project.'],
  ['Synergy with nature', 'Purpose First'],
  ['We closely partner with nature and deeply advocate for a relationship that embodies not only complete synergies within our innovation, but also to our approach to minimizing the use of compute resources to only as fundamentally required.', 'I begin with the real problem and the people behind it, keeping every design decision tied to an outcome that matters.'],
  ['Mental World Models', 'User Mental Models'],
  ['We relentlessly pursue to model complexities across all levels of mental abstractions, towards a holistic unified view of your personality, even the abstractions and archetypes that might be confrontational. ', 'I map what users believe, expect, and remember — then design interfaces that match their mental model, not our internal one. '],
  ['Interconnected Systems', 'Connected Systems'],
  ['We believe in empowering you with the ability to completely integrate transformational technologies in personalized ways that are meaningful and unique to you, accessible always, all of the time, and forever.', 'Every touchpoint belongs to a bigger journey. I connect screens, states, and services into experiences that feel continuous.'],
  ['Dynamic Diversity', 'Embrace Diversity'],
  ['We move away from traditional categorical approaches to mental health-care and progress towards a true view of you. You are more than a categorical label, and we embrace the complexity associated with this.', 'People are more than personas. I design flexible patterns that support different goals, contexts, and abilities.'],
  ['Pioneering Evolution', 'Keep Evolving'],
  ['We are dedicated to advancing the state of the art before it arrives, ensuring our innovations stay ahead of life’s challenges. By anticipating needs and championing continuous growth, we empower individuals with tools that unlock their future potential.', 'I prototype early, test honestly, and refine often — good design is a practice, not a finish line.'],
  ['Eternity', 'Long-Term Thinking'],
  ['We strive to solve mental-health unequivocally, relentlessly, and for all time, and will not deviate from this vision until it is complete.', 'I build systems that last: documented, maintainable, and easy for teams to extend long after handoff.'],

  // home: voices + CTA
  ['Collective voices of human beings sharing their experiences with the current mental health care system. This is why we do what we do.', 'A few notes from founders, product leads, and collaborators I have had the privilege to design with.'],
  ['“I’ve been on a waitlist for months, and every day feels like a battle. The system is so slow to respond, and there’s no help for people in immediate crisis.” Sarah’s experience emphasises the urgency of addressing delays in mental health support.', '“Praveen took a messy, ambitious idea and turned it into a flow our users understood instantly. The handoff was the cleanest we have ever had.” Sarah’s team shipped with confidence.'],
  ['Sarah, 29', 'Sarah, Product Lead'],
  ['- Marketing Professional', '- Fintech Startup'],
  ['Marketing Professional', 'Fintech Startup'],
  ['Software Engineer', 'SaaS Platform'],
  [' Educator', 'Healthtech Team'],
  ['Educator', 'Healthtech Team'],
  [' Graduate Student', 'Early-Stage Venture'],
  ['Graduate Student', 'Early-Stage Venture'],
  [' Finance Analyst', 'E-commerce'],
  ['Finance Analyst', 'E-commerce'],
  [' University Student', 'Education App'],
  ['University Student', 'Education App'],
  ['“Every therapist I see has a different idea of what’s wrong with me, but none seem to get it right. It’s exhausting to be reassessed constantly without real progress.” John’s frustration underscores the challenges of inconsistent diagnoses.', '“Every review brought a sharper insight. Our usability scores went up and support tickets went down within one release.” John says the process changed how their team talks about design.'],
  ['John, 35', 'John, Head of Product'],
  ['- Software Engineer', '- SaaS Platform'],
  ['“I’ve had to switch therapists multiple times, and every time I do, it feels like starting from square one.” Emily’s experiences highlight the instability and lack of continuity in mental health care.', '“The design system gave our whole team a shared language. We shipped faster without losing consistency.” Emily credits it with keeping quality high.'],
  ['Emily, 41', 'Emily, Design Manager'],
  ['-  Educator', '- Healthtech Team'],
  ['“It’s hard to find a therapist who understands my cultural background. I often feel like they don’t get the unique pressures I face, which makes it harder to open up.” Alex’s struggle reflects the need for culturally competent care.', '“They asked the questions nobody else asked — and the research changed our roadmap for the better.” Alex says the work paid for itself in clarity.'],
  ['Alex, 26', 'Alex, Founder'],
  ['-  Graduate Student', '- Early-Stage Venture'],
  ['“There’s so much stigma around mental health that even when I reach out for help, I feel ashamed. The system doesn’t support openness, which makes it harder.” Kevin’s experience highlights the emotional toll of stigma in seeking mental health support.', '“Thoughtful, fast, and genuinely collaborative. Our onboarding finally feels like our brand.” Kevin says the difference was obvious from day one.'],
  ['Kevin, 30', 'Kevin, Marketing Lead'],
  ['-  Finance Analyst', '- E-commerce'],
  ['“The mental health system feels like it’s constantly playing catch-up. By the time you get the help you need, it’s already too late for so many people.” Olivia’s frustration speaks to the slow response in providing timely care.', '“Accessibility was baked in from day one. That made the whole product better for everyone.” Olivia says it raised the bar for the entire team.'],
  ['Olivia, 24', 'Olivia, Frontend Lead'],
  ['-  University Student', '- Education App'],
  ['The future \\nof cognitive\\ntreatment ', 'The future \\nof thoughtful\\ninterfaces '],
  ['The future \nof cognitive\ntreatment ', 'The future \nof thoughtful\ninterfaces '],
  ['Aleph is a quantum algorithm in development which simulates mental health treatment approaches against the complex representation of your mental and cognitive predispositions. Aleph will cut down the average time to optimal treatment plans from months to seconds.', 'A deeper look at how research, systems thinking, and careful craft turn a complex product challenge into a simple, human experience.'],
  ['Discover our solution', 'View case study'],
  ['Start your journey', 'Explore my work'],

  // work (aleph) page
  ['We are designing Aleph to surpass classical diagnostic methods in orders of magnitude, in both accuracy and speed. We believe in a future where truth, insight, and wisdom becomes democratized at a moment\'s notice, when you need it most.', 'Every interaction follows a quiet loop: a goal forms, an intention takes shape, a move is planned and made, the interface answers, we read that answer, and we decide what comes next. I design for all of it.'],
  ['Your Mind,\\nMapped', 'The Process,\\nMapped'],
  ['Your Mind,\nMapped', 'The Process,\nMapped'],
  ['We tirelessly work with our team of psychologists and neuroscientists to model a multi-modal intake mechanisms to understand the true you across varying degrees of abstraction, through exposure to art, music, games, and introspective questions.', 'I combine interviews, analytics, workshops, and prototype testing to understand people across different contexts — uncovering the needs that never make it into a brief.'],
  ['Have you ever felt a deep sense of connection to a place?', 'What does success look like for you, and how will we know when we get there?'],
  ['How do you balance your personal ambitions with maintaining relationships?', 'Where does the current experience slow you down or break your flow?'],
  ['What helps you come to terms with the realization that some aspects of yourself may never change?', 'Which part of this process feels unclear or frustrating today?'],
  ['In what ways do you cope with regrets about the past?', 'How do you decide what to keep, what to cut, and what to simplify?'],
  ['Can you recall a moment of peace during chaos? What contributed to that sense of calm?', 'What would make this feel effortless on your busiest day?'],
  ['How do you balance your inner desires with the pressures you face from the outside world?', 'What do you wish the product understood about the way you actually work?'],
  ['We seek to illuminate complexities within you, mapping you to empirical archetypical structures.', 'I untangle complex requirements and map them into clear user journeys, information architecture, and actionable insights.'],
  ['We apply non-linear dynamics to capture the complex chaos within you.', 'Discovery surfaces contradictions, edge cases, and unmet needs.'],
  ['And turn this into intelligent representations of true order to capture who you are.', 'Synthesis turns them into structured flows, wireframes, and a clear direction.'],
  ['By synthesizing these complexes, structures, and predispositions that make you who you are, we create a digital twin of you.', 'By connecting research, content, and interaction patterns, I build a shared picture of the product that whole teams can rally around.'],
  ['We place your digital twin in superposition, enabling precise analysis of each complex structure as a unique entity, generating insights from scenario-based comparisons.', 'I test multiple directions in parallel — comparing real tasks, accessibility, and edge cases before committing to one.'],
  ['We model your superimposed self onto novel quantum circuits designed to simulate end to end treatment. ', 'Prototypes and usability sessions simulate end-to-end journeys before production code is written. '],
  ['Precision care at \\nquantum speed', 'Feedback \\nthat answers'],
  ['Precision care at \nquantum speed', 'Feedback \nthat answers'],
  ['The current mental healthcare system makes you wait an average of 141 days for accurate treatment. Aleph accelerates this, revolutionizing mental care with unmatched speed.', 'Great design should not wait. I move from insight to usable prototype quickly, so teams can validate ideas while they still matter.'],
  ['Aleph simulates 4000 treatments per second.', 'Ideas tested. Patterns found. Better decisions, faster.'],
  ['Optimal \\nTreatment \\nFound\n', 'Outcome\\nUnderstood\\nClearly\n'],
  ['Optimal \nTreatment \nFound\n', 'Outcome\nUnderstood\nClearly\n'],
  ['One in 8 Billion', 'One Size Does Not Fit All'],
  ['We embrace your uniqueness and provide you with a tailored path to becoming your best self.', 'Every product and audience is different. I tailor the process, the system, and the details to fit the people you serve.'],
  ['Get research\\naccess to Aleph', 'Let\'s build\\nsomething clear'],
  ['Get research \naccess to Aleph', 'Let\'s build\nsomething clear'],
  ['Reach out to become part of our early trial studies, and discover how one second can transform a lifetime of wellbeing.', 'Have a product that needs clarity? I would love to hear about it and explore how we can work together.'],
  ['Join The Waitlist', 'Start a Conversation'],
  ['We appreciate your interest. Our team will reach out soon with details on how Aleph can enhance your wellbeing.', 'Thanks for reaching out. I will get back to you shortly to talk about your project.'],

  // structural / generic
  ['Frontier Technologies', 'Design Toolkit'],
  ['Personal\\nPerspectives', 'Client\\nVoices'],
  ['Personal\nPerspectives', 'Client\nVoices'],
  ['Guiding\\nPrinciples', 'Working\\nPrinciples'],
  ['Guiding\nPrinciples', 'Working\nPrinciples'],
  ['Meet Aleph', 'Selected Work'],
  ['Invest with us', 'Hire me'],
  ['Start journey', 'See my work'],
  [',"Vision",', ',"Profile",'],
  ['Crafted by Exo Ape', 'Designed by PRAVEENUXUI'],
  ['Amaterasu', 'PRAVEENUXUI'],
];

// ---------------------------------------------------------------------------
// Pass 2: original, non-copied UX writing. Rewrites the first-pass copy into a
// profile grounded in seven usability principles and the seven-stage cycle.
// ---------------------------------------------------------------------------
const COPY = [
  // hero
  ['Empower\\nyour mental\\nhealth journey', 'Turning\\ncomplexity\\ninto clarity'],
  ['Empower\nyour mental\nhealth journey', 'Turning\ncomplexity\ninto clarity'],

  // working principles: seven ideas across the existing six cards
  ['Six principles shape how I work, collaborate, and make decisions on every project.', 'Seven principles keep the work usable: showing what matters, answering every action, setting gentle limits, linking controls to results, staying familiar, suggesting what can be done, and pointing to where it happens.'],
  ['Seven habits keep the work usable:', 'Seven principles keep the work usable:'],
  ['© 2026 - PRAVEENUXUI. Designing thoughtful digital experiences.', '© 2026 - PRAVEENUXUI. UX/UI design with clarity and intent.'],
  ['Purpose First', 'Visibility'],
  ['I begin with the real problem and the people behind it, keeping every design decision tied to an outcome that matters.', 'Important things stay easy to find. I use hierarchy, contrast, and space so people can see what is available and what to do next.'],
  ['User Mental Models', 'Mapping'],
  ['I map what users believe, expect, and remember — then design interfaces that match their mental model, not our internal one. ', 'Controls should behave as people expect. I connect each action to a clear effect so the interface follows the user’s own logic. '],
  ['Connected Systems', 'Consistency'],
  ['Every touchpoint belongs to a bigger journey. I connect screens, states, and services into experiences that feel continuous.', 'Familiar patterns reduce thinking. Shared components, words, and rhythm make every new screen feel like part of the same place.'],
  ['Embrace Diversity', 'Constraints'],
  ['People are more than personas. I design flexible patterns that support different goals, contexts, and abilities.', 'Good guardrails stop mistakes early. Thoughtful limits and clear states steer people toward the right move without feeling restrictive.'],
  ['Keep Evolving', 'Feedback'],
  ['I prototype early, test honestly, and refine often — good design is a practice, not a finish line.', 'Every action gets an answer. Immediate, readable responses confirm what happened and show what comes next.'],
  ['Long-Term Thinking', 'Affordances & Signifiers'],
  ['I build systems that last: documented, maintainable, and easy for teams to extend long after handoff.', 'Elements should explain themselves. Shape, wording, and visual cues work together so the right interaction is obvious at a glance.'],

  // work page: the seven-stage action cycle, told in original words
  ['A closer look at my process — from messy discovery to a polished, scalable interface. I believe great design should make complex things feel obvious, available to everyone, exactly when they need it.', 'Every interaction follows a quiet loop: a goal forms, an intention takes shape, a move is planned and made, the interface answers, we read that answer, and we decide what comes next. I design for all of it.'],
  ['Precision design\\nat real speed', 'Feedback\\nthat answers'],
  ['Precision design\nat real speed', 'Feedback\nthat answers'],
  ['Better\\nExperience\\nFound\n', 'Outcome\\nUnderstood\\nTogether\n'],
  ['Better\nExperience\nFound\n', 'Outcome\nUnderstood\nTogether\n'],
  ['Join the waitlist', 'Start a Conversation'],
  ['Thank you for \\nsigning up', 'Thanks for reaching out. I’ll be in touch soon.'],
  ['Thank you for \nsigning up', 'Thanks for reaching out. I’ll be in touch soon.'],
  ['Innovating\\nthe future of\\nmental health', 'Designing\\nthe future of\\ninteraction'],
  ['Optimal \\nTreatment \\nFound\\n', 'Outcome\\nUnderstood\\nTogether\\n'],
  ['Get research \\naccess to Aleph', 'Let\'s build\\nsomething clear'],
  ['Inclination to \\ntrust others easily', 'Open to \\nshared ideas'],
  ['Likelihood of \\nquitting your job', 'Quick to \\nabandon a flow'],
  ['Likelihood of adapting \\nto new challenges', 'Adapts well \\nto new tools'],
  ['Likelihood of excelling \\nin leadership roles', 'Natural \\nfacilitator'],
  ['Likelihood of violence \\ntowards others', 'Resistant to \\nrough edges'],
  ['Predisposition \\nto procrastination', 'Needs a \\nclear next step'],
  ['Predisposition \\nto skepticism', 'Questions \\nassumptions'],
  ['Probability of engaging \\nin risky behavior', 'Willing \\nto prototype'],
  ['Probability of succeeding in \\nhigh-pressure scenarios', 'Calm under \\ntight deadlines'],
  ['Probability of thriving \\nin chaotic environments', 'Finds order \\nin ambiguity'],
  ['Propensity for \\nimpulsive decisions', 'Fast \\ndecision-maker'],
  ['Tendency to \\navoid confrontation', 'Prefers \\nquiet consensus'],
  ['Tendency to \\noverthink situations', 'Thinks in \\nedge cases'],
  ['Tendency to seek \\nexternal validation', 'Tests with \\nreal people'],
  ['The Process,\\nMapped', 'The Journey,\\nMapped'],
  ['The Process,\nMapped', 'The Journey,\nMapped'],
  ['From Chaos to Clarity', 'Intent Into Action'],
  ['Clear Paths Ahead', 'See The Response'],
  ['The Digital Twin', 'Read The Signal'],
  ['Feedback \\nthat answers', 'Feedback\\nthat answers'],
  ['Feedback \nthat answers', 'Feedback\nthat answers'],
  ['Outcome\\nUnderstood\\nClearly\n', 'Outcome\\nUnderstood\\nTogether\n'],
  ['Outcome\nUnderstood\nClearly\n', 'Outcome\nUnderstood\nTogether\n'],
  ['Thanks for reaching out. I will get back to you shortly to talk about your project.', 'Thanks for reaching out. I’ll be in touch soon to talk about what you are building.'],
];

const htmlOnly = [
  // hero headline (keeps the same three-line frame)
  ['<div data-v-e086a7c9>Empower</div><div data-v-e086a7c9>your mental</div><div data-v-e086a7c9>health journey</div>', '<div data-v-e086a7c9>Turning</div><div data-v-e086a7c9>complexity</div><div data-v-e086a7c9>into clarity</div>'],

  // home headings
  ['<div data-v-649bca58>Innovating</div><div data-v-649bca58>the future of</div><div data-v-649bca58>mental health</div>', '<div data-v-649bca58>Designing</div><div data-v-649bca58>the future of</div><div data-v-649bca58>interaction</div>'],
  ['<div data-v-649bca58>The future </div><div data-v-649bca58>of cognitive</div><div data-v-649bca58>treatment </div>', '<div data-v-649bca58>The future </div><div data-v-649bca58>of thoughtful</div><div data-v-649bca58>interfaces </div>'],
  ['<div data-v-649bca58>Guiding</div><div data-v-649bca58>Principles</div>', '<div data-v-649bca58>Working</div><div data-v-649bca58>Principles</div>'],
  ['<div data-v-649bca58>Personal</div><div data-v-649bca58>Perspectives</div>', '<div data-v-649bca58>Client</div><div data-v-649bca58>Voices</div>'],
  ['<div data-v-a3fbfafe>Our Mind,<br>a Quantum World</div>', '<div data-v-a3fbfafe>Research-Led<br>Thinking</div>'],
  ['<div data-v-a3fbfafe>Beauty in<br>Nature’s Entropy</div>', '<div data-v-a3fbfafe>Systems<br>&amp; Consistency</div>'],
  ['<div data-v-a3fbfafe>Applied Clinical<br>Best Practices</div>', '<div data-v-a3fbfafe>Accessible<br>by Default</div>'],
  ['<div class="label" data-v-654b17dd>Vision</div>', '<div class="label" data-v-654b17dd>Profile</div>'],
  ['> Vision </a>', '> Profile </a>'],
  ['> Aleph </a>', '> Work </a>'],
  ['<div class="label" data-v-feeb5cb6>Welcome</div>', ''],
  ['>Welcome</div>', ''],

  // work page headings/copy (SSR splits text across tags and uses &#39;)
  ['We are designing Aleph to surpass classical diagnostic methods in orders of magnitude, in both accuracy and speed. We believe in a future where truth, insight, and wisdom becomes democratized at a moment&#39;s notice, when you need it most. ', 'Every interaction follows a quiet loop: a goal forms, an intention takes shape, a move is planned and made, the interface answers, we read that answer, and we decide what comes next. I design for all of it.'],
  ['<div data-v-649bca58>Your Mind,</div><div data-v-649bca58>Mapped</div>', '<div data-v-649bca58>The Journey,</div><div data-v-649bca58>Mapped</div>'],
  ['<div data-v-649bca58>The Process,</div><div data-v-649bca58>Mapped</div>', '<div data-v-649bca58>The Journey,</div><div data-v-649bca58>Mapped</div>'],
  ['<div class="label" data-v-654b17dd>From Chaos to Clarity</div>', '<div class="label" data-v-654b17dd>Intent Into Action</div>'],
  ['<div class="label" data-v-654b17dd>Intent Into Action</div>', '<div class="label" data-v-654b17dd>Intent Into Action</div>'],
  ['<h2 class="heading" data-v-776b5fcf>Clear Paths Ahead</h2>', '<h2 class="heading" data-v-776b5fcf>See The Response</h2>'],
  ['<h2 class="heading" data-v-776b5fcf>See The Response</h2>', '<h2 class="heading" data-v-776b5fcf>See The Response</h2>'],
  ['Optimal \nTreatment \nFound\n', 'Outcome\nUnderstood\nTogether\n'],
  ['<div data-v-649bca58>Get research </div><div data-v-649bca58>access to Aleph</div>', '<div data-v-649bca58>Let\'s build</div><div data-v-649bca58>something clear</div>'],
  ['<div data-v-649bca58>Let\'s build</div><div data-v-649bca58>something clear</div>', '<div data-v-649bca58>Let\'s build</div><div data-v-649bca58>something clear</div>'],

  // header logo -> image (the active home link has extra classes)
  [/<a ([^>]*\bclass="[^"]*\blogo\b[^"]*"[^>]*)>\s*(?:Amaterasu|PRAVEENUXUI)\s*<\/a>/g, '<a $1><img src="/img/praveenlogo.png" alt="PRAVEENUXUI" class="brand-logo"></a>'],

  // footer logo: insert once only
  (text) => text.includes('class="footer-logo"') ? text : text.replace(
    '<div class="payoff" data-v-e5946b68>',
    '<img src="/img/praveenlogo.png" alt="PRAVEENUXUI" class="footer-logo" data-v-e5946b68><div class="payoff" data-v-e5946b68>',
  ),

  ['action="https://formspree.io/f/xgvewqkk" method="POST"', 'action="mailto:hello@praveenuxui.com" method="get" enctype="text/plain"'],

  // keep the Nuxt head title in sync with the SSR title after hydration
  ['{"title":"Designing digital experiences that feel human","titleTemplate":"PRAVEENUXUI - %s"}', '{"title":"UX/UI Design Portfolio","titleTemplate":"PRAVEENUXUI - %s"}'],
];

const payloadOnly = [
  [',"Aleph",', ',"Work",'], // story name only; route/component names stay functional
];

// All visible strings that live inside the JS bundles.
const jsCopy = [
  // specific URLs/labels first, then the generic brand swap
  ['x=k("Welcome")', 'x=k("")'],
  ['x.value="Welcome"', 'x.value=""'],
  ['https://x.com/Amaterasu_mind', 'https://twitter.com/praveenuxui/'],
  ['https://x.com/PRAVEENUXUI_mind', 'https://twitter.com/praveenuxui/'],
  ['https://x.com/', 'https://twitter.com/praveenuxui/'],
  ['https://www.linkedin.com/company/amaterasu-quantum', 'https://www.linkedin.com/in/praveenuxui/'],
  [/https:\/\/www\.linkedin\.com\/(?!in\/praveenuxui\/)/g, 'https://www.linkedin.com/in/praveenuxui/'],
  ['https://www.exoape.com/', 'https://www.praveenuxui.com/'],
  ['mailto:info@amaterasu.ai', 'mailto:hello@praveenuxui.com'],
  ['mailto:invest@amaterasu.ai', 'mailto:hello@praveenuxui.com'],
  ['no(" Amaterasu ",-1)', 'z("img",{src:"/img/praveenlogo.png",alt:"PRAVEENUXUI",class:"brand-logo"})'],
  ['no(" PRAVEENUXUI ",-1)', 'z("img",{src:"/img/praveenlogo.png",alt:"PRAVEENUXUI",class:"brand-logo"})'],
  ['Click to Enter', 'Welcome'],
  ['Tap to Enter', 'Welcome'],
  ['Invest with us', 'Hire me'],
  ['Start journey', 'See my work'],
  ['© 2024 - Amaterasu, empowering your mental health with quantum precision.', '© 2026 - PRAVEENUXUI. UX/UI design with clarity and intent.'],
  ['© 2024 - PRAVEENUXUI, empowering your mental health with quantum precision.', '© 2026 - PRAVEENUXUI. UX/UI design with clarity and intent.'],
  ['E(" Empower"),s("br"),E(" your mental"),s("br"),E(" health journey ")', 'E(" Designing"),s("br"),E(" clear & human"),s("br"),E(" digital experiences ")'],
  ['E(" Turning"),s("br"),E(" complexity"),s("br"),E(" into clarity ")', 'E(" Designing"),s("br"),E(" clear & human"),s("br"),E(" digital experiences ")'],
  ['[h[0]||(h[0]=s("div",{class:"payoff"},[E(" Designing"),s("br"),E(" clear & human"),s("br"),E(" digital experiences ")],-1))', '[h[0]||(h[0]=[s("img",{src:"/img/praveenlogo.png",alt:"PRAVEENUXUI",class:"footer-logo"}),s("div",{class:"payoff"},[E(" Designing"),s("br"),E(" clear & human"),s("br"),E(" digital experiences ")],-1)])'],
  ['kr(" Vision ",-1)', 'kr(" Profile ",-1)'],
  ['kr(" Aleph ",-1)', 'kr(" Work ",-1)'],
  ['c.includes("aleph")?"Aleph":"Vision"', 'c.includes("aleph")?"Work":"Profile"'],
  ['\u{1F30C} Quantum Space \u{1F30C}', 'UX Space'],
  ['\u{1F535} Aleph Scene \u{1F535}', 'Work Scene'],
  ['Understand the Patient', 'Understand the User'],
  ['Initial Assessment', 'Discovery'],
  ['Assessment continued', 'Synthesis'],
  ['Re-do Initial Assessment', 'Iterate'],
  ['Diagnostic', 'Ideation'],
  ['Join The Waitlist', 'Start a Conversation'],
  ['action:"https://formspree.io/f/xgvewqkk",method:"POST"', 'action:"mailto:hello@praveenuxui.com",method:"get",enctype:"text/plain"'],
  ['Crafted by Exo Ape', 'Designed by PRAVEENUXUI'],
  ['Amaterasu', 'PRAVEENUXUI'],
];

const BRAND_CSS = `
<style id="praveenuxui-brand">
:root{--px-sun-1:#ff9d09;--px-sun-2:#f34d11;--px-sun-3:#8d0c39;--px-night-1:#250a4a;--px-night-2:#02093a}
html,body{background:#02093a!important}
#px-gradient{position:fixed!important;inset:0!important;z-index:0!important;pointer-events:none!important;display:block}
#__nuxt{position:relative;z-index:1!important}
.webgl{opacity:0!important}
@keyframes pxLogoFill{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.logo[data-v-9229b6a8]{display:flex!important;align-items:center;justify-content:center;letter-spacing:0!important;text-indent:0!important;width:auto!important;position:relative!important}
.logo .brand-logo{height:100%!important;width:auto!important;max-width:34vw!important;object-fit:contain!important;opacity:0!important;filter:none!important}
.logo::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,#ffcf4d 0%,#ff9d09 18%,#f34d11 38%,#8d0c39 62%,#250a4a 80%,#02093a 100%);background-size:300% 300%;animation:pxLogoFill 7s ease-in-out infinite;-webkit-mask:url("/img/praveenlogo.png") center/contain no-repeat;mask:url("/img/praveenlogo.png") center/contain no-repeat;pointer-events:none}
.header.is-light .logo .brand-logo{filter:none}
.footer-logo[data-v-e5946b68]{height:2.8vw;width:auto;max-height:44px;object-fit:contain;margin-bottom:2.2vw;filter:brightness(0) invert(1)}
.splash[data-v-feeb5cb6] .enter[data-v-feeb5cb6]::before{content:"";position:absolute;top:12%;left:50%;transform:translateX(-50%);width:56%;height:56%;background:linear-gradient(115deg,#ffcf4d 0%,#ff9d09 18%,#f34d11 38%,#8d0c39 62%,#250a4a 80%,#02093a 100%);background-size:300% 300%;animation:pxLogoFill 7s ease-in-out infinite;-webkit-mask:url("/img/praveenlogo.png") center/contain no-repeat;mask:url("/img/praveenlogo.png") center/contain no-repeat;filter:none;opacity:.95;pointer-events:none}
.splash[data-v-feeb5cb6] .enter[data-v-feeb5cb6] .label[data-v-feeb5cb6]{display:none!important}
.logo[data-v-d2ba1143]{background:none!important;-webkit-mask-image:none!important;mask-image:none!important;background-image:url("/img/praveenlogo.png")!important;background-position:center!important;background-repeat:no-repeat!important;background-size:contain!important;filter:none!important}
@media (max-width:600px){.logo .brand-logo{max-width:44vw!important}.footer-logo[data-v-e5946b68]{height:9vw;margin-bottom:7vw}}
</style>`;

function apply(text, pairs) {
  for (const pair of pairs) {
    if (typeof pair === 'function') { text = pair(text); continue; }
    const [a, b] = pair;
    if (a instanceof RegExp) text = text.replace(a, b);
    else if (text.includes(a)) text = text.split(a).join(b);
  }
  return text;
}

async function main() {
  // brand assets
  await fs.copyFile(LOGO_SRC, path.join(SITE, 'img/praveenlogo.png'));
  for (const size of [16, 32, 180]) {
    await fs.copyFile(LOGO_SRC, path.join(SITE, `favicon/favicon-${size}x${size}.png`)).catch(() => {});
  }
  await fs.copyFile(LOGO_SRC, path.join(SITE, 'favicon/apple-touch-icon.png'));

  // Regenerate OG/favicon images and the UX copy voiceovers.
  try {
    execFileSync('python3', ['assets.py'], { stdio: 'inherit' });
  } catch (e) {
    console.warn('asset generation skipped:', e.message);
  }
  // Ambient music loop (skip regeneration if it already exists to keep builds fast).
  if (!existsSync(path.join(SITE, 'audio/ambient.mp3'))) {
    try {
      execFileSync('python3', ['music.py'], { stdio: 'inherit' });
    } catch (e) {
      console.warn('music generation skipped:', e.message);
    }
  }

  for (const rel of files) {
    const file = path.join(SITE, rel);
    let text = await fs.readFile(file, 'utf8');
    text = apply(text, R);
    text = apply(text, COPY);
    if (rel.endsWith('.html')) {
      text = apply(text, htmlOnly);
      if (text.includes('id="praveenuxui-brand"')) text = text.replace(/<style id="praveenuxui-brand">[\s\S]*?<\/style>/, BRAND_CSS);
      else text = text.replace('</head>', BRAND_CSS + '</head>');
      if (!text.includes('px-gradient.js')) text = text.replace('</head>', '<script src="/px-gradient.js" defer></script></head>');
      if (!text.includes('px-enhance.js')) text = text.replace('</body>', '<script src="/px-enhance.js" defer></script></body>');
    } else {
      text = apply(text, payloadOnly);
    }
    await fs.writeFile(file, text);
    console.log('rebranded', rel);
  }

  // JS bundles: splash, nav labels, footer copy and links
  const nuxtDir = path.join(SITE, '_nuxt');
  for (const name of await fs.readdir(nuxtDir)) {
    if (!name.endsWith('.js')) continue;
    const file = path.join(nuxtDir, name);
    const before = await fs.readFile(file, 'utf8');
    const text = apply(before, jsCopy);
    if (text !== before) { await fs.writeFile(file, text); console.log('rebranded bundle', name); }
  }
}

main();
