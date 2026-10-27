/* Alireza HA — portfolio v8. Persian text lives in index.html; EN overrides below (?lang=en). */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
root.classList.add("js");
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

const EN = {
  "skip": "Skip to content", "brand": "Alireza HA", "nav.aria": "Main",
  "nav.work": "Work", "nav.svc": "Services", "nav.proc": "Process", "nav.faq": "FAQ", "nav.shop": "Shop",
  "theme": "Switch theme", "cta.short": "Start a project", "cta.main": "Tell me about your project", "cta.work": "See the work",
  "hero.status": "Taking new projects — replies within a day",
  "hero.title": "I build sites and apps <em>people use every day</em> — and keep them running.",
  "hero.lead": "Online stores, web and Android apps, AI chatbots and Telegram bots. Design, code, servers, payments and support all sit with one person, so things move fast and nothing gets lost between people.",
  "st.1": "live products", "st.2": "releases in 5 weeks", "st.3": "languages: Persian, English, Arabic",
  "hero.sticker": "Flagship · live", "hero.cap": "HomeFood — home-cooked food online",
  "alt.hf": "HomeFood homepage, an online marketplace for home-cooked food",
  "work.eye": "Work", "work.title": "All of it is live and in use right now",
  "work.sub": "Open the links and try them yourself — these are real products, not mockups.",
  "alt.hftrack": "Live order tracking screen in HomeFood",
  "p1.kind": "Marketplace · web, PWA and Android",
  "p1.title": "HomeFood — home cooks and local kitchens, ordered like takeaway",
  "p1.body": "Customers order from home cooks and restaurants nearby, cooks run their kitchen from a panel, couriers are booked automatically and money settles every night. Product, design, code, servers and support — all mine.",
  "p1.f1": "Live order tracking (SSE)", "p1.f2": "Zibal gateway and wallet", "p1.f3": "SnappBox courier dispatch",
  "p1.f4": "Android app on Myket", "p1.f5": "Run from inside Telegram", "p1.f6": "Encrypted bank details",
  "p1.link": "Open homefoodpro.ir",
  "alt.exir": "Exir online store homepage with product categories",
  "p2.kind": "Online store · live",
  "p2.title": "Exir — an online store for natural, beauty and health products",
  "p2.body": "A complete store with 377 products in 8 categories: search and brand pages through cart, checkout and order tracking. Server-rendered for fast loads and SEO, and installable on phones.",
  "p2.f1": "377 products, 8 categories, brand pages", "p2.f2": "Cart and checkout",
  "p2.f3": "Order tracking and accounts", "p2.f4": "Blog and OnlineStore schema",
  "p2.link": "Open raherahai.ir",
  "alt.shop": "Digital shop storefront with templates and tools",
  "p3.kind": "Digital store · live", "p3.title": "A shop for my own templates and tools",
  "p3.body": "Templates, prompt packs, small tools and Pine Script strategies. Pay by card (Zibal) or crypto on Base; every download is a signed link that expires in 24 hours.",
  "p3.link": "Browse the shop",
  "alt.mascot": "Ghablamoore, a chat mascot sitting on a web page",
  "p4.kind": "AI widget", "p4.title": "Ghablamoore — a chat mascot for any website",
  "p4.body": "A floating mascot with real physics and moods, answered by an n8n agent. One script tag installs it, and it respects the host site's colours, keyboard users and reduced motion.",
  "alt.clue": "CLUE café website in Arabic",
  "p5.kind": "Café website · Sharjah, UAE", "p5.title": "CLUE Specialty Coffee",
  "p5.body": "A bilingual, Arabic-first site with a digital menu, map directions and local-search setup.",
  "p6.kind": "Automation · video", "p6.title": "Promo videos rendered from code",
  "p6.body": "An HTML stage animated in a headless browser, captured frame by frame and encoded with FFmpeg and music. A new ad is an edit and a command, not a week of editing.",
  "p7.kind": "Bots and automation", "p7.title": "A Telegram bot that runs the business",
  "p7.body": "New orders, the payout checklist and support tickets land in the owner's Telegram; the daily work fits in one chat.",
  "svc.eye": "Services", "svc.title": "What can I build for you?",
  "svc.sub": "Every project starts with a fixed price and a clear timeline, and I stay around after launch.",
  "s1.t": "Online store", "s1.p": "Catalogue, cart, payment gateway, order panel and product SEO — without heavy themes.",
  "s2.t": "Web apps and dashboards", "s2.p": "Booking systems, marketplaces, CRMs or any tool that makes your team's work simpler, with roles and reports.",
  "s3.t": "Android app and PWA", "s3.p": "An installable app and an Android build for Myket and Bazaar from the same web code, with push notifications.",
  "s4.t": "AI chatbot", "s4.p": "A site assistant that knows your business, answers customers and collects leads.",
  "s5.t": "Telegram bots and automation", "s5.p": "Orders, alerts and daily reports in Telegram; your tools wired together with n8n.",
  "s6.t": "SEO and speed", "s6.p": "Page structure, schema.org, Core Web Vitals and local pages, so Google and AI assistants find you.",
  "proc.eye": "Process", "proc.title": "From the first message to launch",
  "pr1.t": "Talk", "pr1.p": "You describe the need; within one working day you get scope, timeline and a fixed price.",
  "pr2.t": "Design and prototype", "pr2.p": "Before the full build you click through a working version, so the direction is right.",
  "pr3.t": "Weekly builds", "pr3.p": "A live version on a test link every week — you see progress yourself, not in a report.",
  "pr4.t": "Launch and support", "pr4.p": "Deployment, a short walkthrough and post-launch support. The code and accounts are yours.",
  "faq.eye": "FAQ", "faq.title": "Questions clients usually ask",
  "q1": "How much does a website cost?", "a1": "It depends on the scope. After we talk I give a fixed price and it stays fixed; if something is added, I quote it first.",
  "q2": "How long does it take?", "a2": "A brochure site is usually 1–2 weeks, an online store 3–6 weeks, larger web apps depending on features. The timeline is written down before we start.",
  "q3": "Who owns the code and the server?", "a3": "You do. Code, domain and server access are handed over in your name — you are never locked to me.",
  "q4": "Do you support it after launch?", "a4": "Yes. Fixes after launch are included, and a monthly retainer is available for further work.",
  "q5": "Do you work with clients outside Iran?", "a5": "Yes — in Persian, English and Arabic, fully remote. The CLUE café site in Sharjah is one example.",
  "c.title": "Tell me what you want to <em>build</em>",
  "c.body": "Answer three questions and I'll reply within one working day with scope, timeline and a fixed price.",
  "c.tg": "Telegram", "c.phone": "Phone / WhatsApp", "c.mail": "Email",
  "f.type": "What do you need?", "f.store": "Online store", "f.web": "Website", "f.app": "Web app / Android app",
  "f.ai": "AI chatbot", "f.bot": "Telegram bot", "f.other": "Something else",
  "f.desc": "What should it do?", "f.desc_ph": "The problem, who uses it, a site you like…",
  "f.when": "When do you need it?", "f.w1": "As soon as possible", "f.w2": "Within a month", "f.w3": "Two months or more", "f.w4": "Flexible",
  "f.via": "Send via", "f.send": "Send my brief",
  "f.fine": "Opens Telegram or your email app with the message filled in. Nothing is stored on this site.",
  "foot.city": "Mashhad, Iran", "foot.aria": "Footer", "foot.hf": "HomeFood", "foot.exir": "Exir store"
};
const UI = {
  fa: { err: "نوعِ پروژه را انتخاب کن و چند خط درباره‌اش بنویس.", okTg: "تلگرام با متنِ آماده باز شد؛ آنجا «ارسال» را بزن.", okMail: "برنامهٔ ایمیل با متنِ آماده باز شد.",
        lType: "نوع", lWhen: "زمان", lDesc: "توضیح", subject: "درخواست پروژه از سایت", title: document.title },
  en: { err: "Pick a project type and write a few lines about it.", okTg: "Telegram is opening with your brief. Press send there.", okMail: "Your email app is opening with the brief filled in.",
        lType: "Type", lWhen: "When", lDesc: "Details", subject: "Project brief from the website", title: "Alireza HA — websites, online stores and web apps" }
};

/* ---------- language ---------- */
const FA = {};
$$("[data-i18n]").forEach(el => { FA[el.dataset.i18n] = el.textContent; });
$$("[data-i18n-html]").forEach(el => { FA[el.dataset.i18nHtml] = el.innerHTML; });
$$("[data-i18n-alt]").forEach(el => { FA[el.dataset.i18nAlt] = el.alt; });
$$("[data-i18n-ph]").forEach(el => { FA[el.dataset.i18nPh] = el.placeholder; });
$$("[data-i18n-aria]").forEach(el => { FA[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

const lang = () => root.lang === "en" ? "en" : "fa";
function applyLang(l) {
  const D = l === "en" ? EN : FA;
  root.lang = l; root.dir = l === "en" ? "ltr" : "rtl";
  $$("[data-i18n]").forEach(el => { const v = D[el.dataset.i18n]; if (v != null) el.textContent = v; });
  $$("[data-i18n-html]").forEach(el => { const v = D[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
  $$("[data-i18n-alt]").forEach(el => { const v = D[el.dataset.i18nAlt]; if (v != null) el.alt = v; });
  $$("[data-i18n-ph]").forEach(el => { const v = D[el.dataset.i18nPh]; if (v != null) el.placeholder = v; });
  $$("[data-i18n-aria]").forEach(el => { const v = D[el.dataset.i18nAria]; if (v != null) el.setAttribute("aria-label", v); });
  document.title = UI[l].title;
  const b = $("#langBtn");
  b.textContent = l === "en" ? "FA" : "EN";
  b.setAttribute("aria-label", l === "en" ? "فارسی" : "English");
}
$("#langBtn").addEventListener("click", () => {
  const next = lang() === "fa" ? "en" : "fa";
  store.set("ali.lang", next);
  const u = new URL(location.href);
  next === "en" ? u.searchParams.set("lang", "en") : u.searchParams.delete("lang");
  history.replaceState(null, "", u);
  applyLang(next);
});

/* ---------- theme ---------- */
const savedTheme = store.get("ali.theme");
if (savedTheme) root.dataset.theme = savedTheme;
$("#themeBtn").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  store.set("ali.theme", root.dataset.theme);
});

/* ---------- header, fab, reveal ---------- */
const hdr = $("#top"), fab = $("#fab");
const onScroll = () => {
  const y = scrollY;
  hdr.classList.toggle("scrolled", y > 8);
  const c = $("#contact").getBoundingClientRect().top;
  fab.classList.toggle("on", y > innerHeight * .8 && c > innerHeight);
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
$$(".reveal").forEach(el => io.observe(el));

/* ---------- brief form ---------- */
const form = $("#brief"), msg = $("#formMsg");
const say = (t, k) => { msg.textContent = t; msg.className = "form-msg " + k; };
form.addEventListener("submit", e => {
  e.preventDefault();
  const t = UI[lang()];
  const type = form.querySelector('input[name="type"]:checked');
  const desc = form.desc.value.trim();
  form.desc.setAttribute("aria-invalid", String(!desc));
  if (!type || !desc) { say(t.err, "err"); (type ? form.desc : form.querySelector('input[name="type"]')).focus(); return; }
  const typeLabel = type.nextElementSibling.textContent;
  const when = form.when.options[form.when.selectedIndex].textContent;
  const body = `${t.lType}: ${typeLabel}\n${t.lWhen}: ${when}\n\n${t.lDesc}:\n${desc}`;
  if (form.via.value === "email") {
    location.href = `mailto:alimb5554@gmail.com?subject=${encodeURIComponent(t.subject + " — " + typeLabel)}&body=${encodeURIComponent(body)}`;
    say(t.okMail, "ok");
  } else {
    window.open("https://t.me/alirha82?text=" + encodeURIComponent(`${t.subject}\n\n${body}`), "_blank", "noopener");
    say(t.okTg, "ok");
  }
});

if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
$("#year").textContent = new Date().getFullYear();

const want = new URLSearchParams(location.search).get("lang") || store.get("ali.lang");
if (want === "en") applyLang("en");
