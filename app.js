/* Alireza HA: portfolio v6. English lives in index.html; Persian lives here. */
"use strict";

const FA = {
  "a11y.skip": "رفتن به محتوا", "a11y.theme": "تغییر تم روشن و تیره", "a11y.menu": "منو",
  "nav.work": "نمونه‌کار", "nav.log": "گزارش انتشار", "nav.services": "خدمات", "nav.process": "روند کار", "nav.faq": "پرسش‌ها", "nav.shop": "فروشگاه", "nav.cta": "شروع پروژه",

  "hero.status": "پروژهٔ جدید می‌پذیرم؛ پاسخ در کمتر از یک روز",
  "hero.title": "محصولی می‌سازم که مردم هر روز با آن کار می‌کنند — و سرپا نگهش می‌دارم.",
  "hero.lede": "علیرضا هستم، برنامه‌نویس فول‌استک در مشهد. وب‌اپ، PWA قابل نصب، ایجنت و چت‌بات هوشمند و ربات تلگرام طراحی، پیاده‌سازی و منتشر می‌کنم — یک نفر، از اولین طرح تا سرور زنده.",
  "hero.cta1": "شروع پروژه", "hero.cta2": "دیدن نمونه‌کارها",
  "proof.commits": "کامیت منتشرشده روی هوم‌فود پرو در ۲۴ روز",
  "proof.platforms": "پلتفرم از یک کد: وب، PWA، اندروید",
  "proof.langs": "رابط کاربری فارسی، انگلیسی و عربی",
  "alt.home": "صفحهٔ اصلی هوم‌فود پرو: آشپزها و مغازه‌های اطراف روی نقشه",
  "alt.track": "صفحهٔ پیگیری زندهٔ سفارش در هوم‌فود پرو",
  "ticket.aria": "آخرین انتشارها — باز کردن گزارش انتشار",
  "ticket.title": "لایو روی homefoodpro.ir",
  "d.oct17": "۲۵ مهر", "d.oct15": "۲۳ مهر", "d.oct14": "۲۲ مهر", "d.oct13": "۲۱ مهر", "d.oct01": "۹ مهر",
  "t.1": "صفحهٔ اصلی جدید + سوییچ تم متحرک",
  "t.2": "تسویهٔ روزانه برای همهٔ آشپزها",
  "t.3": "نوتیفیکیشن بومی اندروید",

  "work.title": "نمونه‌کارهای منتخب",
  "work.sub": "همهٔ این‌ها لایو هستند و استفاده می‌شوند. پروژهٔ اصلی، بازارچه‌ای است که خودم به‌تنهایی طراحی کردم، ساختم و هنوز اداره‌اش می‌کنم.",
  "case.kind": "بازارچهٔ آنلاین · در حال اجرا",
  "case.title": "هوم‌فود پرو — غذای خانگی، به سادگی سفارش بیرون‌بر",
  "case.body": "مشتری از آشپزهای خانگی و مغازه‌های نزدیکش سفارش می‌دهد. آشپز آشپزخانه‌اش را از پنل مدیریت می‌کند، پیک خودکار رزرو می‌شود و حساب‌ها هر شب تسویه می‌شوند. همه‌اش با من است: محصول، طراحی، کد، سرور و پشتیبانی.",
  "case.visit": "باز کردن homefoodpro.ir", "case.log": "تازه‌ترین انتشارها",
  "case.f1t": "پلتفرم‌ها", "case.f1": "وب، PWA قابل نصب، اپ اندروید در مایکت",
  "case.f2t": "تکنولوژی", "case.f3t": "تیم", "case.f3": "یک برنامه‌نویس — خودم",
  "cap.1t": "پیگیری زندهٔ سفارش", "cap.1": "هر تغییر وضعیت همان لحظه به مشتری و آشپز می‌رسد (Server-Sent Events). سفارش تازه با هشدار تمام‌صفحه و زنگ اعلام می‌شود.",
  "cap.2t": "پرداخت و تسویهٔ شبانه", "cap.2": "درگاه زیبال، کیف پول داخل اپ و فهرست تسویهٔ شبانه برای هر آشپز. در سفارش نقدی فقط کمیسیون کسر می‌شود.",
  "cap.3t": "اعزام پیک", "cap.3": "استعلام قیمت از اسنپ‌باکس و همگام‌سازی پس‌زمینه که سفارش را خودش به «در مسیر» و «تحویل شد» می‌برد و لغوها را خبر می‌دهد.",
  "cap.4t": "اعتماد و امنیت", "cap.4": "احراز هویت آشپز، امتیاز اعتماد وزن‌دار که رتبه‌بندی را تعیین می‌کند و صف بازبینی عکس‌ها و نظرها.",
  "cap.5t": "اپ بومی اندروید", "cap.5": "ساخته‌شده با Capacitor از همان کد، منتشرشده در مایکت، با پوش Firebase و آیکون تطبیقی.",
  "cap.6t": "مدیریت از داخل تلگرام", "cap.6": "ربات، سفارش‌های تازه، چک‌لیست تسویه و تیکت‌های پشتیبانی را برای ادمین می‌فرستد؛ کار روزانه در یک چت جا می‌شود.",
  "cap.7t": "ساخته‌شده برای دیده شدن", "cap.7": "دوازده صفحهٔ شهر، راهنمای غذاها، نشانه‌گذاری schema.org و llms.txt تا هم موتورهای جست‌وجو و هم دستیارهای هوش مصنوعی به آن ارجاع دهند.",
  "cap.8t": "اطلاعات بانکی رمزنگاری‌شده", "cap.8": "شمارهٔ شبای آشپزها با یک کلید اصلی جداگانه رمز می‌شود. خطای سرویس‌های بیرونی هرگز به کاربر نشت نمی‌کند.",
  "alt.mascot": "قابلمور، ماسکات گرد چت که روی صفحهٔ وب نشسته",
  "w1.kind": "ویجت هوشمند قابل جاسازی",
  "w1.title": "قابلمور — ماسکات چت برای هر سایتی",
  "w1.body": "ماسکاتی شناور با فیزیک واقعی، حالت‌های احساسی و مغز هوش مصنوعی که یک ایجنت n8n پشتش است و نسخهٔ محلی پشتیبان دارد. با یک تگ اسکریپت نصب می‌شود و به رنگ‌های سایت میزبان، کاربران صفحه‌کلید و کاهش حرکت احترام می‌گذارد.",
  "alt.shop": "ویترین فروشگاه دیجیتال با قالب‌ها و ابزارها",
  "alt.exir": "صفحهٔ اصلی فروشگاه اکسیر با دسته‌بندی کالاها و بنر تبلیغاتی",
  "w0.kind": "فروشگاه آنلاین · در حال اجرا",
  "w0.title": "اکسیر — فروشگاه آنلاین محصولات طبیعی، آرایشی و سلامت",
  "w0.body": "یک فروشگاه اینترنتی کامل: ۳۷۷ کالا در ۸ دسته، صفحهٔ برندها، جست‌وجو، سبد خرید و پرداخت، پیگیری سفارش، حساب کاربری و بلاگ. رندر سمت سرور برای بارگذاری سریع و سئو، با نشانه‌گذاری OnlineStore و PWA قابل نصب.",
  "w0.link": "باز کردن raherahai.ir",
  "w2.kind": "فروشگاه دیجیتال · لایو",
  "w2.title": "فروشگاهی برای قالب‌ها و ابزارهای خودم",
  "w2.body": "قالب، پک پرامپت، ابزارهای کوچک و پک‌های استراتژی Pine Script — همه ساخت خودم. پرداخت با کارت از زیبال یا با کریپتو روی شبکهٔ Base؛ هر دانلود یک لینک امضاشده است که بعد از ۲۴ ساعت منقضی می‌شود.",
  "w2.link": "ورود به فروشگاه",
  "alt.clue": "وب‌سایت عربی کافهٔ CLUE Specialty Coffee",
  "w3.kind": "وب‌سایت · شارجه، امارات",
  "w3.body": "سایت دوزبانهٔ کافه با اولویت عربی، منوی دیجیتال، مسیریابی روی نقشه و انیمیشن‌هایی که مزاحم نیستند. موبایل‌محور و آماده برای جست‌وجوی محلی.",
  "w4.kind": "اتوماسیون · ویدیو",
  "w4.title": "ویدیوی تبلیغاتی که از کد رندر می‌شود",
  "w4.body": "یک صحنهٔ HTML در مرورگر بدون رابط متحرک می‌شود، فریم‌به‌فریم ضبط و با FFmpeg و موسیقی خروجی گرفته می‌شود. ویدیوی تبلیغاتی جدید یعنی یک ویرایش و یک دستور، نه یک هفته تدوین.",

  "log.title": "گزارش انتشار",
  "log.sub": "آنچه در سه هفتهٔ اخیر روی هوم‌فود پرو لایو شد. روی محصول شما هم همین‌طور کار می‌کنم: انتشارهای کوچک، هر چند روز یک‌بار، روی محیط واقعی.",
  "log.count": "کامیت از ۲ مهر",
  "l.1t": "صفحهٔ اصلی جدید", "l.1": "بخش اول با حال‌وهوای وعدهٔ غذایی، ریل غذاها، جدول مقایسه و سوییچ تم با نمایش دایره‌ای.",
  "l.2t": "تسویهٔ روزانه برای همهٔ آشپزها", "l.2": "فهرست تسویهٔ شبانه هم‌زمان با سقف زمانی بانک، به‌علاوهٔ چک‌لیست تلگرامی برای ادمین.",
  "l.3t": "نوتیفیکیشنی که از دست نمی‌رود", "l.3": "پوش بومی اندروید با Firebase و هشدار تمام‌صفحه با زنگ برای هر سفارش تازه.",
  "l.4t": "پیکی که خودش به‌روز می‌شود", "l.4": "وضعیت اسنپ‌باکس در پس‌زمینه همگام می‌شود؛ آشپز می‌تواند خودش هم ارسال یا بازپرداخت کند.",
  "l.5t": "ثبت‌نام یک‌مرحله‌ای فروشنده", "l.5": "نام، آدرس و نقطه روی نقشه — احراز هویت بعد از بازبینی ادمین.",
  "l.6t": "قابلمور ۸٫۴", "l.6": "ماسکات و پنجرهٔ چت روی سیستم طراحی هوم‌فود بازطراحی شدند.",
  "l.7t": "دوازده صفحهٔ شهر", "l.7": "سئوی برنامه‌نویسی‌شده با schema، نقشهٔ سایت و llms.txt، متصل به راهنمای غذاها.",
  "l.8t": "خوانا برای همه", "l.8": "تغییر اندازهٔ رابط و حالت پرکنتراست، بعد از یک دور کامل بازبینی دسترس‌پذیری.",
  "l.9t": "پیشنهاد هوشمند", "l.9": "موتور رتبه‌بندی وزن‌دار برای آشپزها و Web Push برای همه.",

  "svc.title": "چه چیزی می‌توانم برایتان بسازم",
  "svc.sub": "چهار نوع کار، یک استاندارد: منتشر می‌شود، مستند است و روی دامنهٔ خودتان اجرا می‌شود.",
  "svc.1t": "وب‌سایت", "svc.1s": "سایت شرکتی، صفحهٔ فرود، وردپرس", "svc.1d": "۱ تا ۳ هفته",
  "svc.1": "سایتی که مشتری می‌آورد، نه یک کارت ویزیت دیجیتال.",
  "svc.1a": "وردپرس یا کدنویسی اختصاصی، هر کدام که با بودجه و تیمتان جور باشد",
  "svc.1b": "موبایل‌محور، تست‌شده روی گوشی‌های واقعی",
  "svc.1c": "فارسی، انگلیسی و عربی با فونت و جهت درست",
  "svc.1d2": "تنظیمات سئو: متا تگ، schema، نقشهٔ سایت، بارگذاری سریع",
  "svc.1e": "رفع کندی و بازطراحی سایت‌های موجود",
  "svc.2t": "وب‌اپ و PWA", "svc.2s": "قابل نصب، آفلاین، به‌روزرسانی زنده", "svc.2d": "۲ تا ۵ هفته",
  "svc.2": "یک کد برای وب، اپ روی صفحهٔ گوشی و اندروید. بدون کمیسیون اپ‌استور، بدون تیم دوم.",
  "svc.2a": "قابل نصب روی اندروید، آیفون و دسکتاپ",
  "svc.2b": "کار بدون اینترنت با سرویس‌ورکر",
  "svc.2c": "به‌روزرسانی زنده بدون رفرش صفحه",
  "svc.2d2": "نوتیفیکیشن، پرداخت، نقشه، داشبورد",
  "svc.2e": "نسخهٔ اندروید با Capacitor وقتی به فروشگاه اپ نیاز دارید",
  "svc.3t": "ایجنت و چت‌بات هوشمند", "svc.3s": "پشتیبانی، فروش و جست‌وجو روی دادهٔ خودتان", "svc.3d": "۱ تا ۳ هفته",
  "svc.3": "چت‌باتی که کسب‌وکارتان را می‌شناسد و به‌موقع گفت‌وگو را به آدم می‌سپارد.",
  "svc.3a": "متصل به محصولات، سفارش‌ها یا اسنادتان از طریق n8n",
  "svc.3b": "با یک تگ اسکریپت در هر سایتی",
  "svc.3c": "گفت‌وگوی فارسی، انگلیسی و عربی",
  "svc.3d2": "تحویل تمیز به اپراتور، و نسخهٔ پشتیبان وقتی مدل در دسترس نیست",
  "svc.4t": "ربات تلگرام و اتوماسیون", "svc.4s": "سفارش، اعلان، یادآوری، کارهای پشت صحنه", "svc.4d": "۳ تا ۱۰ روز",
  "svc.4": "دیگر برای کار ماشین به آدم پول ندهید. ربات‌هایی که کارهای تکراری را شبانه‌روز انجام می‌دهند.",
  "svc.4a": "ربات سفارش‌گیری، یادآوری و اعلان",
  "svc.4b": "ثبت هر سفارش یا مشتری بالقوه در شیت یا CRM",
  "svc.4c": "پنل مدیریت داخل خود ربات",
  "svc.4d2": "اجرا روی یک سرور کوچک با هزینهٔ تقریباً صفر",

  "proc.title": "یک پروژه چطور پیش می‌رود",
  "proc.sub": "محدودهٔ ثابت، چرخه‌های کوتاه و یک لینک آزمایشی که هر وقت خواستید بازش کنید.",
  "proc.1t": "گفت‌وگو", "proc.1": "دربارهٔ کسب‌وکار، کاربران و معیار موفقیت حرف می‌زنیم. محدودهٔ کار و قیمت ثابت را مکتوب می‌گیرید.",
  "proc.2t": "طراحی", "proc.2": "وایرفریم، بعد طراحی بصری، بعد بازخورد شما — قبل از نوشتن حتی یک خط کد نهایی.",
  "proc.3t": "ساخت", "proc.3": "هر چند روز یک انتشار روی لینک آزمایشی؛ پیشرفت واقعی می‌بینید، نه گزارش وضعیت.",
  "proc.4t": "انتشار و تحویل", "proc.4": "روی دامنهٔ شما منتشر می‌شود، با مستندات و رفع رایگان باگ بعد از تحویل.",
  "stack.title": "ابزارهایی که با آن‌ها می‌سازم",
  "stack.front": "فرانت‌اند", "stack.back": "بک‌اند", "stack.ai": "هوش مصنوعی و اتوماسیون", "stack.mobile": "موبایل", "stack.ops": "زیرساخت", "stack.pay": "پرداخت",

  "faq.title": "پرسش‌های رایج کارفرماها",
  "faq.sub": "اگر سؤالتان اینجا نیست، در تلگرام بپرسید.",
  "faq.q1": "هزینهٔ پروژه چقدر است؟", "faq.a1": "به محدودهٔ کار بستگی دارد، پس لیست قیمت ندارم. بعد از یک تماس کوتاه، قیمت ثابت را مکتوب می‌گیرید — بدون غافلگیری ساعتی.",
  "faq.q2": "چقدر طول می‌کشد؟", "faq.a2": "وب‌سایت ۱ تا ۳ هفته، وب‌اپ ۲ تا ۵ هفته، ربات ۳ تا ۱۰ روز. هم‌زمان فقط یکی دو پروژه می‌گیرم، پس تاریخی که می‌دهم همان تاریخ تحویل است.",
  "faq.q3": "با کارفرمای خارج از ایران هم کار می‌کنید؟", "faq.a3": "بله. دورکار هستم، ساعت کاری‌ام با اروپا، حاشیهٔ خلیج فارس و شرق آسیا هم‌پوشانی دارد و کارفرماهای خارجی معمولاً با USDT پرداخت می‌کنند.",
  "faq.q4": "هم طراحی می‌کنید هم کدنویسی؟", "faq.a4": "بله، از وایرفریم تا انتشار. اگر طراح یا راهنمای برند دارید، دقیقاً مطابق آن می‌سازم.",
  "faq.q5": "بعد از تحویل چه می‌شود؟", "faq.a5": "مستندات تحویل می‌گیرید و رفع باگ رایگان است. اگر بخواهید ادامه دهیم، انتشار به انتشار جلو می‌رویم.",
  "faq.q6": "نمی‌دانم دقیقاً چه می‌خواهم. از کجا شروع کنم؟", "faq.a6": "مشکل و نتیجه‌ای را که می‌خواهید بگویید. پیشنهاد می‌دهم نسخهٔ اول چه داشته باشد و چه چیزهایی می‌تواند صبر کند.",

  "c.title": "بگویید چه می‌خواهید بسازید",
  "c.body": "به سه سؤال جواب دهید؛ ظرف یک روز کاری محدودهٔ کار، زمان‌بندی و قیمت ثابت را می‌فرستم — به فارسی، انگلیسی یا عربی.",
  "c.tg": "تلگرام", "c.mail": "ایمیل", "c.copy": "کپی", "c.copied": "کپی شد", "c.phone": "تلفن / واتساپ",
  "f.type": "چه چیزی لازم دارید؟", "f.web": "وب‌سایت", "f.pwa": "وب‌اپ / PWA", "f.ai": "چت‌بات هوشمند", "f.bot": "ربات تلگرام", "f.other": "چیز دیگر",
  "f.desc": "قرار است چه کاری انجام دهد؟", "f.desc_ph": "مشکل، کاربرانش، سایتی که دوستش دارید…",
  "f.when": "کی لازمش دارید؟", "f.w1": "هرچه زودتر", "f.w2": "تا یک ماه", "f.w3": "دو ماه یا بیشتر", "f.w4": "انعطاف دارم",
  "f.via": "ارسال از طریق", "f.send": "ارسال درخواست",
  "f.fine": "تلگرام یا برنامهٔ ایمیلتان با پیام آماده باز می‌شود. چیزی روی این سایت ذخیره نمی‌شود.",
  "foot.city": "مشهد، ایران", "foot.install": "نصب این صفحه به‌عنوان اپ"
};

const UI = {
  en: {
    title: document.title,
    desc: document.querySelector('meta[name="description"]').content,
    themeDark: "Switch to dark theme", themeLight: "Switch to light theme",
    err: "Pick what you need and add a sentence about it.",
    okTg: "Telegram is opening with your brief. Press send there.",
    okMail: "Your email app is opening with the brief filled in.",
    copied: "Copied",
    subject: "New project", lType: "Type", lWhen: "Timeline", lDesc: "Details"
  },
  fa: {
    title: "علیرضا HA — برنامه‌نویس فول‌استک: وب‌اپ، PWA و ایجنت هوشمند",
    desc: "علیرضا وب‌اپ، PWA قابل نصب، چت‌بات هوشمند و ربات تلگرام طراحی، پیاده‌سازی و اداره می‌کند. برنامه‌نویس فول‌استک در مشهد، همکاری دورکاری با سراسر دنیا.",
    themeDark: "تغییر به تم تیره", themeLight: "تغییر به تم روشن",
    err: "نوع پروژه را انتخاب کنید و یک جمله درباره‌اش بنویسید.",
    okTg: "تلگرام با پیام آماده باز می‌شود. آنجا ارسال را بزنید.",
    okMail: "برنامهٔ ایمیل با متن آماده باز می‌شود.",
    copied: "کپی شد",
    subject: "پروژهٔ جدید", lType: "نوع", lWhen: "زمان‌بندی", lDesc: "توضیحات"
  }
};

const root = document.documentElement;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const lang = () => (root.lang === "fa" ? "fa" : "en");

/* ---------- language ---------- */
// Snapshot the English markup once so switching back needs no second dictionary.
const EN = {};
$$("[data-i18n]").forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });
$$("[data-i18n-alt]").forEach(el => { EN[el.dataset.i18nAlt] ??= el.alt; });
$$("[data-i18n-aria]").forEach(el => { EN[el.dataset.i18nAria] ??= el.getAttribute("aria-label"); });
$$("[data-i18n-ph]").forEach(el => { EN[el.dataset.i18nPh] ??= el.placeholder; });

function applyLang(l) {
  const d = l === "fa" ? FA : EN;
  const pick = k => d[k] ?? EN[k];
  root.lang = l;
  root.dir = l === "fa" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.innerHTML = pick(el.dataset.i18n); });
  $$("[data-i18n-alt]").forEach(el => { el.alt = pick(el.dataset.i18nAlt); });
  $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", pick(el.dataset.i18nAria)); });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = pick(el.dataset.i18nPh); });
  document.title = UI[l].title;
  $('meta[name="description"]').content = UI[l].desc;
  const btn = $("#langBtn");
  btn.textContent = l === "fa" ? "En" : "فا";
  btn.lang = l === "fa" ? "en" : "fa";
  btn.setAttribute("aria-label", l === "fa" ? "English" : "فارسی");
  updateThemeLabel();
}
$("#langBtn").addEventListener("click", () => {
  const next = lang() === "fa" ? "en" : "fa";
  store.set("ali.lang", next);
  applyLang(next);
});

/* ---------- theme ---------- */
function updateThemeLabel() {
  const dark = root.dataset.theme === "dark";
  $("#themeBtn").setAttribute("aria-label", dark ? UI[lang()].themeLight : UI[lang()].themeDark);
}
function setTheme(t) {
  root.dataset.theme = t;
  store.set("ali.theme", t);
  updateThemeLabel();
}
$("#themeBtn").addEventListener("click", e => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) return setTheme(next);
  const r = e.currentTarget.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(() => setTheme(next)).ready.then(() => {
    root.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)", pseudoElement: "::view-transition-new(root)" });
  }).catch(() => {});
});

/* ---------- nav ---------- */
const nav = $("#nav"), links = $("#navLinks"), menuBtn = $("#menuBtn");
function closeMenu() { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
document.addEventListener("click", e => { if (!nav.contains(e.target)) closeMenu(); });

const fab = $("#fab");
let heroGone = false, contactSeen = false;
const syncFab = () => fab.classList.toggle("show", heroGone && !contactSeen);
new IntersectionObserver(([e]) => {
  nav.classList.toggle("scrolled", !e.isIntersecting);
}, { rootMargin: "-1px 0px 0px 0px" }).observe($(".hero-title"));
new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting; syncFab(); }).observe($(".hero-cta"));
new IntersectionObserver(([e]) => { contactSeen = e.isIntersecting; syncFab(); }, { threshold: .05 }).observe($("#contact"));

/* ---------- brief form ---------- */
const form = $("#brief"), msg = $("#formMsg");
function say(text, kind) { msg.textContent = text; msg.className = "form-msg " + kind; }
form.addEventListener("submit", e => {
  e.preventDefault();
  const t = UI[lang()];
  const type = form.querySelector('input[name="type"]:checked');
  const desc = form.desc.value.trim();
  form.desc.setAttribute("aria-invalid", String(!desc));
  if (!type || !desc) {
    say(t.err, "err");
    (type ? form.desc : form.querySelector('input[name="type"]')).focus();
    return;
  }
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

$("#copyMail").addEventListener("click", async e => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText("alimb5554@gmail.com");
    btn.textContent = UI[lang()].copied;
    setTimeout(() => { btn.textContent = lang() === "fa" ? FA["c.copy"] : EN["c.copy"]; }, 1800);
  } catch (err) { location.href = "mailto:alimb5554@gmail.com"; }
});

/* ---------- PWA ---------- */
let installEvt = null;
const installBtn = $("#installBtn");
addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; installBtn.hidden = false; });
installBtn.addEventListener("click", async () => {
  if (!installEvt) return;
  installEvt.prompt();
  await installEvt.userChoice.catch(() => {});
  installEvt = null; installBtn.hidden = true;
});
if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));

$("#year").textContent = new Date().getFullYear();
applyLang(lang());
