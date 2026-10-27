/* Alireza HA — portfolio v9 "Bazaar". Persian text lives in index.html; English overrides below (?lang=en). */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

const EN = {
  "skip": "Skip to the work", "brand": "Alireza HA", "nav.aria": "Main",
  "nav.work": "Work", "nav.svc": "What I build", "nav.proc": "Process", "nav.faq": "Questions", "nav.contact": "Contact",
  "theme": "Switch light and dark theme",
  "hero.title": "I build your stall in the online bazaar.",
  "hero.lead": "Websites, online stores, apps and Telegram bots. Design, code, servers, payments and support all sit with one person, so work moves fast and nothing gets lost between people.",
  "cta.main": "Describe your project", "cta.work": "See the live work",
  "alt.hero": "A small bazaar with turquoise domes and four stalls: a kitchen, an apothecary, a desk of laptops and a cooking-pot mascot",
  "st.hf": "HomeFood", "st.exir": "Exir store", "st.shop": "Digital shop", "st.gm": "Ghablamoore",
  "work.title": "These four stalls are open right now",
  "work.sub": "Each one is a real product with real users. Open the link and try it yourself.",
  "f.where": "Where", "f.inside": "Inside", "f.stack": "Built with",
  "alt.hf": "HomeFood app home screen on a phone",
  "p1.title": "HomeFood", "p1.what": "An online marketplace for home cooking and neighbourhood kitchens in Mashhad",
  "p1.body": "Customers order from home cooks and nearby restaurants and follow the order live. Cooks run their menu and orders from their own panel, a courier is booked automatically, and accounts settle every night.",
  "p1.where": "Web, installable app, Android app on Myket",
  "p1.inside": "Zibal payments and wallet, SnappBox couriers, admin from Telegram",
  "p1.link": "Open homefoodpro.ir",
  "alt.exir": "Exir online store homepage",
  "p2.title": "Exir store", "p2.what": "An online store for natural, beauty and health products",
  "p2.body": "377 products in 8 categories, with search, brand pages, cart, checkout and order tracking. Pages are rendered on the server so they open fast and Google reads all of them.",
  "p2.where": "Web and installable app",
  "p2.inside": "Customer accounts, order tracking, blog, store markup for Google",
  "p2.link": "Open raherahai.ir",
  "alt.shop": "The digital shop storefront",
  "p3.title": "Digital shop", "p3.what": "Templates, prompt packs and tools I made myself",
  "p3.body": "Pay by bank card or crypto. Every purchase gets a signed download link that expires after 24 hours, so files don't get passed around.",
  "p3.inside": "Zibal gateway, payment on the Base network, signed download links",
  "p3.link": "Enter the shop",
  "alt.gm": "Ghablamoore, a red cooking-pot mascot",
  "p4.title": "Ghablamoore", "p4.what": "An AI chat mascot for any website",
  "p4.body": "A floating character with moods and motion, with an AI agent behind it answering customers' questions. One line of code installs it on any site, and it picks up that site's colours.",
  "more.aria": "Other work",
  "p5.title": "CLUE café", "p5.where": "Sharjah, UAE",
  "p5.body": "A bilingual Arabic and English site with a digital menu, map directions and local-search setup.",
  "p6.title": "Promo videos from code", "p6.where": "Automation",
  "p6.body": "The scene is built in a browser and rendered frame by frame with FFmpeg; a new ad means changing a line of text and running one command.",
  "p7.title": "A Telegram admin bot", "p7.where": "HomeFood",
  "p7.body": "New orders, the payout list and support tickets arrive in the owner's Telegram and get answered right there.",
  "svc.title": "What I can build for you",
  "svc.sub": "The price is fixed before we start, and I stay reachable after launch.",
  "s1.t": "Online store", "s1.p": "Product catalogue, cart, payment gateway, order panel and pages Google reads well.",
  "s2.t": "Web apps and dashboards", "s2.p": "Booking systems, marketplaces, CRMs or any tool that cuts your team's daily work.",
  "s3.t": "Android app", "s3.p": "An installable app and an Android build for Myket and Bazaar from the same code as the site, with notifications.",
  "s4.t": "AI chatbot", "s4.p": "An assistant on your site that knows your business, answers customers and keeps the contact details of interested ones.",
  "s5.t": "Telegram bot", "s5.p": "Taking orders, updating customers and daily reports in Telegram; your tools connected to each other.",
  "s6.t": "SEO and speed", "s6.p": "Page structure, markup for Google and load speed, so customers find you when they search.",
  "proc.title": "From the first message to an open stall",
  "proc.sub": "Four steps, with something you can see every week.",
  "pr1.t": "Talk", "pr1.p": "You describe the need; within one working day I send the scope, timeline and a fixed price.",
  "pr2.t": "A clickable draft", "pr2.p": "Before the full build you click through a working draft, so the direction is right.",
  "pr3.t": "Weekly builds", "pr3.p": "A fresh version on a test link every week; you see progress yourself.",
  "pr4.t": "Launch and support", "pr4.p": "Launch on the server, a short walkthrough and support after handover. The code and accounts are yours.",
  "faq.title": "Questions people usually ask",
  "q1": "How much does a website cost?", "a1": "It depends on the scope. After we talk I give a fixed price and it stays fixed; if something is added, I quote it first.",
  "q2": "How long does it take?", "a2": "A simple site is usually 1–2 weeks, an online store 3–6 weeks, and bigger web apps depend on the features. The timeline is written down before we start.",
  "q3": "Who owns the code and the server?", "a3": "You do. Code, domain and server access are handed over in your name, so you never depend on me.",
  "q4": "Do you support it after launch?", "a4": "Yes. Fixes after launch are included, and a monthly agreement is available for further work.",
  "q5": "Do you work with clients outside Iran?", "a5": "Yes, in Persian, English and Arabic, fully remote; the CLUE café site in Sharjah is one of them.",
  "c.title": "What should your stall look like?",
  "c.body": "Answer three questions and within one working day I'll reply with the scope, timeline and a fixed price.",
  "c.tg": "Telegram", "c.phone": "Phone and WhatsApp", "c.mail": "Email",
  "f.type": "What do you need?", "f.store": "Online store", "f.web": "Website", "f.app": "Web app or Android app",
  "f.ai": "Chatbot", "f.bot": "Telegram bot", "f.other": "Something else",
  "f.desc": "What should it do?", "f.desc_ph": "The problem it solves, who uses it, a site you like",
  "f.when": "When do you need it?", "f.w1": "As soon as possible", "f.w2": "Within a month", "f.w3": "Two months or more", "f.w4": "No rush",
  "f.via": "Send with", "f.send": "Send the request",
  "f.fine": "Telegram or your email opens with the message filled in. Nothing is stored on this site.",
  "foot.city": "Mashhad", "foot.aria": "Footer"
};
const UI = {
  fa: { err: "نوع پروژه را انتخاب کن و چند خط درباره‌اش بنویس.", okTg: "تلگرام با متنِ آماده باز شد؛ آنجا «ارسال» را بزن.", okMail: "ایمیل با متنِ آماده باز شد.",
        lType: "نوع", lWhen: "زمان", lDesc: "توضیح", subject: "درخواست پروژه از سایت", title: document.title },
  en: { err: "Choose a project type and write a few lines about it.", okTg: "Telegram opened with your request. Press send there.", okMail: "Your email opened with the request filled in.",
        lType: "Type", lWhen: "When", lDesc: "Details", subject: "Project request from the website", title: "Alireza HA — websites, online stores and apps" }
};

/* ---------- language ---------- */
const FA = {};
$$("[data-i18n]").forEach(el => { FA[el.dataset.i18n] = el.textContent; });
$$("[data-i18n-alt]").forEach(el => { FA[el.dataset.i18nAlt] = el.alt; });
$$("[data-i18n-ph]").forEach(el => { FA[el.dataset.i18nPh] = el.placeholder; });
$$("[data-i18n-aria]").forEach(el => { FA[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

const lang = () => root.lang === "en" ? "en" : "fa";
function applyLang(l) {
  const D = l === "en" ? EN : FA;
  root.lang = l; root.dir = l === "en" ? "ltr" : "rtl";
  $$("[data-i18n]").forEach(el => { const v = D[el.dataset.i18n]; if (v != null) el.textContent = v; });
  $$("[data-i18n-alt]").forEach(el => { const v = D[el.dataset.i18nAlt]; if (v != null) el.alt = v; });
  $$("[data-i18n-ph]").forEach(el => { const v = D[el.dataset.i18nPh]; if (v != null) el.placeholder = v; });
  $$("[data-i18n-aria]").forEach(el => { const v = D[el.dataset.i18nAria]; if (v != null) el.setAttribute("aria-label", v); });
  document.title = UI[l].title;
  const b = $("#langBtn");
  b.textContent = l === "en" ? "فا" : "EN";
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

/* ---------- request form ---------- */
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
