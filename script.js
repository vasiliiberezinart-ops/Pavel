// СВОБОДА × Pavel — i18n + handlettered timestamp colon insert + click-to-seek.

const I18N = {
  ru: {
    hero_tag: '"ЛАГЕРЬ ДЛЯ БЕЖЕНЦЕВ." "ТИХАЯ КЛОУНАДА."',
    concept_p1: "«Эмигрант без лагеря — ни в оппозиции, ни среди возвращенцев. Только в полицейских протоколах. Маски, предательство, тоска. Жизнь после смерти.»",
    concept_p2: "Действие — в лагере для беженцев. Стилистика — клоунада. Тихая. Без шума, без эстрады, без ужаса. Рисунок, бумага, мелки.",
    m_director: '"РЕЖИССЁР"',
    m_song: '"ПЕСНЯ"',
    m_dur: '"ДЛИНА"',
    m_format: '"ФОРМАТ"',
    m_budget: '"БЮДЖЕТ"',
    m_loc: '"МЕСТО"',
    loc_v: "ЛАГЕРЬ / ПАВИЛЬОН",
    f01_l: "«— ИНСТРУМЕНТАЛ —»",
    f01_p: "Палатки, бирки, забор-сетка. Клоун стоит спиной, тиняшный, лицо не видно. Лагерь дышит. Откуда-то — первый удар.",
    f02_l: "«ТОЛЬКО В ПРОТОКОЛАХ У ПОЛИЦИИ / И ВРОДЕ БЫ ВСЕ КОРЕША И ПАЦИ // НО НА МОНТАЖЕ ТЕБЯ ВЫЧЕРКИВАЮТ / СЛОВНО ОТ ТЕБЯ УЖЕ ПЕЧЕНКИ ГНИЮТ»",
    f02_p: "Руки клоуна перебирают бумаги — анкеты, протоколы. Он проходит мимо групп: митингующие, тусовка, кореша. Никого не задевает, никуда не вливается. Все его «вычеркивают».",
    f03_l: "«СВОБОДА И НИКЧЕМНОСТЬ / СВОБОДА И НЕОПРЕКАЕМОСТЬ / СВОБОДА И ОБРЕЧЕННОСТЬ»",
    f03_p: "Широкий план. Клоун маленький в огромном лагере. Замедление. Холодный неон. Слово «свобода» — как пустая жестянка на ветру.",
    f04_l: "«КАКИЕ-ТО ЧУЖИЕ ПРЕДСТАВИТЕЛИ ПРОВАЛИВАЮТ МИССИЮ В ПРАВИТЕЛИ / ВСЕ ИЗ СЕБЯ СВОБОДНЫЕ, ОПАЛЬНЫЕ / ГОЛОДНЫЕ, СКАНДАЛЬНЫЕ // ОНИ МНЕ СТРОЯТ ЖИЗНЬ ПОСЛЕ СМЕРТИ / КАКОЕ ПОЛЕ ВЫЖЖЕННОЕ ТАМ ЗА СПИНОЙ»",
    f04_p: "Клоуна обступает делегация — «представители» в плохо сидящих костюмах. Они говорят, машут бумагой, ставят печать. За спиной у клоуна — выжженное поле, дым из палаток.",
    f05_l: "«ПОРОЙ НАВАЛИВАЕТ В ТОСКА / ЧТО ОДНИМ ПРЕДАТЕЛЬ, ДРУГИМ МАСКАЛЬ / ДУМАЕШЬ, ЗАТО ЭТО НЕ МАСКА / ЗАТО ЭТО НЕ МАСКА»",
    f05_p: "Клоун перед зеркалом. Долго смотрит. Отражение чуть запаздывает. Поднимает руку — отражение поднимает. Снимает с лица что-то — отражение не снимает.",
    f06_l: "«СВОБОДА И НИКЧЕМНОСТЬ…» — НА ВОКАЛИЗЕ",
    f06_p: "Быстрый монтаж лиц — обитатели лагеря, все чуть не в фокусе. Клоун в центре, статичен. Бумаги, бирки, мел. Кто-то моет руки в тазу.",
    f07_l: "«— ЗАТИХАНИЕ —»",
    f07_p: "Клоун снимает с лица — или надевает — что-то. Не показываем что. Лагерь пуст. Только след света на земле и одна перевёрнутая бирка. Стоп-кадр.",
    prod_need_h: '"НУЖНО"',
    prod_team_h: '"КОМАНДА"',
    need_1: "Декорации лагеря (палатки, сетка, бирки) — найдём",
    need_2: "1 день съёмки",
    need_3: "1–2 светильника + дневной",
    need_4: "Камера + оператор",
    need_5: "Грим клоуна — тихий, сухой",
    need_6: "Реквизит — бумаги, тазик, зеркало",
    team_1: "Режиссёр — Василий Берёзин",
    team_2: "Артист — Павел Фахрутдинов",
    team_3: "Оператор — TBD",
    team_4: "Художник — TBD",
    team_5: "Монтаж — внутри",
  },
  en: {
    hero_tag: '"REFUGEE CAMP." "QUIET CLOWNERY."',
    concept_p1: '"AN ÉMIGRÉ WITH NO CAMP — NEITHER IN THE OPPOSITION, NOR AMONG THE RETURNEES. ONLY IN POLICE REPORTS. MASKS, BETRAYAL, LONGING. LIFE AFTER DEATH."',
    concept_p2: "The action is set in a refugee camp. The style — clownery. Quiet. No noise, no spectacle, no horror. Drawing, paper, crayon.",
    m_director: '"DIRECTOR"',
    m_song: '"SONG"',
    m_dur: '"LENGTH"',
    m_format: '"FORMAT"',
    m_budget: '"BUDGET"',
    m_loc: '"LOCATION"',
    loc_v: "CAMP / STUDIO",
    f01_l: '"— INSTRUMENTAL —"',
    f01_p: "Tents, paper tags, a mesh fence. The clown stands with his back turned — small, face hidden. The camp breathes. Somewhere — the first beat.",
    f02_l: '"ONLY IN POLICE REPORTS / EVERYONE SEEMS A BUDDY OR A BROTHER // BUT IN THE EDIT THEY CROSS YOU OUT / AS IF YOUR LIVER WERE ALREADY ROTTING"',
    f02_p: "The clown's hands sift through papers — forms, protocols. He passes by groups: protesters, hangers-on, mates. Joins no one. Everyone crosses him out.",
    f03_l: '"FREEDOM AND WORTHLESSNESS / FREEDOM AND UNFORGIVABILITY / FREEDOM AND DOOM"',
    f03_p: "Wide shot. The clown — tiny in the vast camp. Slowed time. Cold neon. The word freedom — like an empty tin can in the wind.",
    f04_l: '"SOME KIND OF STRANGERS AS OUR REPRESENTATIVES BOTCH THE MISSION OF BEING RULERS / ALL SO FREE, DISGRACED / HUNGRY, SCANDALOUS // THEY BUILD ME A LIFE AFTER DEATH / WHAT A SCORCHED FIELD IS LEFT BEHIND ME"',
    f04_p: "A delegation surrounds the clown — representatives in ill-fitting suits. They talk, wave a paper, stamp it. Behind him: a scorched field, smoke from tents.",
    f05_l: '"SOMETIMES THE LONGING ACHES / TO ONE A TRAITOR, TO ANOTHER A MUSCOVITE MASK / YOU THINK — BUT ISN\'T THIS A MASK / ISN\'T THIS A MASK"',
    f05_p: "The clown before a mirror. Looks long. The reflection lags. Raises a hand — reflection raises. Takes something off his face — reflection doesn't.",
    f06_l: '"FREEDOM AND WORTHLESSNESS…" — ON VOCALISE',
    f06_p: "Fast cuts of faces — camp dwellers, slightly out of focus. The clown at the centre, still. Papers, tags, chalk. Someone washing hands in a basin.",
    f07_l: '"— FADE —"',
    f07_p: "The clown takes off — or puts on — something on his face. We don't see what. The camp is empty. A trace of light on the ground and one overturned tag. Freeze frame.",
    prod_need_h: '"NEEDED"',
    prod_team_h: '"CREW"',
    need_1: "Camp decor (tents, mesh, tags) — to be sourced",
    need_2: "1 shooting day",
    need_3: "1–2 lights + daylight",
    need_4: "Camera + DOP",
    need_5: "Clown make-up — quiet, dry",
    need_6: "Props — papers, basin, mirror",
    team_1: "Director — Vasily Berezin",
    team_2: "Artist — Pavel Fakhrutdinov",
    team_3: "DOP — TBD",
    team_4: "Production designer — TBD",
    team_5: "Edit — in-house",
  }
};

function setLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.langSet === lang);
  });
  document.title = lang === "ru"
    ? "СВОБОДА — Павел Фахрутдинов"
    : "SVOBODA — Pavel Fakhrutdinov";
  try { localStorage.setItem("pavel.lang", lang); } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.langSet));
});

// Click on frame-time → seek audio
document.querySelectorAll(".frame[data-time]").forEach(frame => {
  const ts = frame.querySelector(".frame-time");
  if (!ts) return;
  ts.title = "PLAY FROM " + frame.dataset.time;
  ts.addEventListener("click", () => {
    const audio = document.getElementById("track");
    const [m, s] = frame.dataset.time.split(":").map(Number);
    audio.currentTime = m * 60 + s;
    audio.play().catch(() => {});
    audio.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Hide drawing img elements that 404 (placeholders), let CSS show NO IMG
document.querySelectorAll(".frame-img img").forEach(img => {
  img.addEventListener("load", () => img.dataset.loaded = "1");
  img.addEventListener("error", () => img.style.display = "none");
});

// init
const saved = (() => { try { return localStorage.getItem("pavel.lang"); } catch (_) { return null; } })();
const initial = saved || (navigator.language?.startsWith("en") ? "en" : "ru");
setLang(initial);
