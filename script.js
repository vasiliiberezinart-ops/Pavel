// СВОБОДА — i18n + player.

const I18N = {
  ru: {
    brand: "СВОБОДА",
    eyebrow: "препродакшн · клип · 2026",
    tag: "Лагерь для беженцев. Тихая клоунада.",
    player_note: "Pre-final · 320kbps",
    concept_h: "Концепт",
    concept_p1: "Эмигрант без лагеря — ни в оппозиции, ни среди возвращенцев. Только в протоколах полиции. Маски, предательство, тоска. «Жизнь после смерти».",
    concept_p2: "Действие — в лагере для беженцев. Стилистика — клоунада. Тихая. Без шума, без эстрады, без ужаса. Рисунок, бумага, мелки.",
    m_director: "Режиссёр",
    m_song: "Песня",
    m_dur: "Длительность",
    m_format: "Формат",
    m_budget: "Бюджет",
    m_loc: "Локация",
    loc_v: "Лагерь / павильон",
    board_h: "Раскадровка",
    board_sub: "Семь кадров по структуре трека. Восковые мелки, белая бумага.",
    f01_h: "Вступление",
    f01_l: "— инструментал —",
    f01_p: "Палатки, бирки, забор-сетка. Клоун стоит спиной, тиняшный, лицо не видно. Лагерь дышит. Откуда-то — первый удар.",
    f02_h: "Куплет 1",
    f02_l: "«Только в протоколах у полиции / И вроде бы все кореша и паци / И вроде бы ни с кем не конфронтации // Но на монтаже тебя вычеркивают / Словно от тебя уже печенки гниют»",
    f02_p: "Руки клоуна перебирают бумаги — анкеты, протоколы. Он проходит мимо групп: митингующие, тусовка, кореша. Никого не задевает, никуда не вливается. Все его «вычеркивают».",
    f03_h: "Припев",
    f03_l: "«Свобода и никчемность / Свобода и неопрекаемость / Свобода и обреченность»",
    f03_p: "Широкий план. Клоун маленький в огромном лагере. Замедление. Холодный неон. Слово «свобода» — как пустая жестянка на ветру.",
    f04_h: "Куплет 2",
    f04_l: "«Какие-то чужие представители проваливают миссию в правители / Все из себя свободные, опальные / Голодные, скандальные // Они мне строят жизнь после смерти / Какое поле выжженное там за спиной»",
    f04_p: "Клоуна обступает делегация — «представители» в плохо сидящих костюмах. Они говорят, машут бумагой, ставят печать. За спиной у клоуна — выжженное поле, дым из палаток.",
    f05_h: "Бридж",
    f05_l: "«Порой наваливает в тоска / Что одним предатель, другим маскаль / Думаешь, зато это не маска / Зато это не маска»",
    f05_p: "Клоун перед зеркалом. Долго смотрит. Отражение чуть запаздывает. Поднимает руку — отражение поднимает. Снимает с лица что-то — отражение не снимает.",
    f06_h: "Припев / реприза",
    f06_l: "«Свобода и никчемность…» — на вокализе",
    f06_p: "Быстрый монтаж лиц — обитатели лагеря, все чуть не в фокусе. Клоун в центре, статичен. Бумаги, бирки, мел. Кто-то моет руки в тазу.",
    f07_h: "Финал / Аутро",
    f07_l: "— затихание —",
    f07_p: "Клоун снимает с лица — или надевает — что-то. Не показываем что. Лагерь пуст. Только след света на земле и одна перевёрнутая бирка. Стоп-кадр.",
    prod_h: "Производство",
    prod_need_h: "Нужно",
    need_1: "Декорации лагеря (палатки, сетка, бирки) — найдём",
    need_2: "1 день съёмки",
    need_3: "1–2 светильника + дневной",
    need_4: "Камера + оператор",
    need_5: "Грим клоуна (тихий, сухой)",
    need_6: "Реквизит — бумаги, тазик, зеркало",
    prod_team_h: "Команда",
    team_1: "Режиссёр — Василий Берёзин",
    team_2: "Артист — Павел Фахрутдинов",
    team_3: "Оператор — TBD",
    team_4: "Художник — TBD",
    team_5: "Монтаж — внутри",
    foot: "препродакшн"
  },
  en: {
    brand: "SVOBODA",
    eyebrow: "pre-production · music video · 2026",
    tag: "Refugee camp. Quiet clownery.",
    player_note: "Pre-final · 320kbps",
    concept_h: "Concept",
    concept_p1: "An émigré with no camp — not in the opposition, not among the returnees. Only in police reports. Masks, betrayal, longing. “Life after death.”",
    concept_p2: "The action takes place in a refugee camp. The style — clownery. Quiet. No noise, no spectacle, no horror. Drawing, paper, crayon.",
    m_director: "Director",
    m_song: "Song",
    m_dur: "Length",
    m_format: "Format",
    m_budget: "Budget",
    m_loc: "Location",
    loc_v: "Camp / studio",
    board_h: "Storyboard",
    board_sub: "Seven frames following the song. Wax crayon, white paper.",
    f01_h: "Intro",
    f01_l: "— instrumental —",
    f01_p: "Tents, tags, mesh fence. The clown stands with his back turned, small, face hidden. The camp breathes. Somewhere — the first beat.",
    f02_h: "Verse 1",
    f02_l: "«Only in police reports / Everyone seems a buddy or a brother / No confrontation with anyone // But in the edit they cross you out / As if your liver were already rotting»",
    f02_p: "The clown's hands sift through papers — forms, protocols. He passes by groups: protesters, hangers-on, mates. Touches no one, joins no one. Everyone “crosses him out.”",
    f03_h: "Chorus",
    f03_l: "«Freedom and worthlessness / Freedom and unforgivability / Freedom and doom»",
    f03_p: "Wide shot. The clown is tiny in the vast camp. Slowed time. Cold neon. The word “freedom” — like an empty tin can in the wind.",
    f04_h: "Verse 2",
    f04_l: "«Some kind of strangers as our representatives / Botch the mission of being rulers / All so free, disgraced, / hungry, scandalous // They build me a life after death / What a scorched field is left behind me»",
    f04_p: "A delegation surrounds the clown — “representatives” in ill-fitting suits. They talk, wave a paper, stamp it. Behind him — a scorched field, smoke from tents.",
    f05_h: "Bridge",
    f05_l: "«Sometimes the longing aches / That to one a traitor, to another a Muscovite mask / You think — but isn't this a mask / Isn't this a mask»",
    f05_p: "The clown before a mirror. Looks long. The reflection lags slightly. He raises a hand — reflection raises. Takes something off his face — reflection doesn't.",
    f06_h: "Chorus / reprise",
    f06_l: "«Freedom and worthlessness…» — on vocalise",
    f06_p: "Fast cuts of faces — camp dwellers, all slightly out of focus. The clown at the centre, still. Papers, tags, chalk. Someone washing hands in a basin.",
    f07_h: "Outro",
    f07_l: "— fade —",
    f07_p: "The clown takes off — or puts on — something on his face. We don't see what. The camp is empty. Only a trace of light on the ground and one overturned tag. Freeze frame.",
    prod_h: "Production",
    prod_need_h: "Needed",
    need_1: "Camp decor (tents, mesh, tags) — to be sourced",
    need_2: "1 shooting day",
    need_3: "1–2 lights + daylight",
    need_4: "Camera + DOP",
    need_5: "Clown make-up (quiet, dry)",
    need_6: "Props — papers, basin, mirror",
    prod_team_h: "Team",
    team_1: "Director — Vasily Berezin",
    team_2: "Artist — Pavel Fakhrutdinov",
    team_3: "DOP — TBD",
    team_4: "Production designer — TBD",
    team_5: "Edit — in-house",
    foot: "pre-production"
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
document.querySelectorAll(".frame-time[data-time]").forEach(el => {
  el.style.cursor = "pointer";
  el.title = "Кликни — заиграет с этой секунды";
  el.addEventListener("click", () => {
    const audio = document.getElementById("track");
    const [m, s] = el.dataset.time.split(":").map(Number);
    audio.currentTime = m * 60 + s;
    audio.play().catch(() => {});
    audio.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// init
const saved = (() => { try { return localStorage.getItem("pavel.lang"); } catch (_) { return null; } })();
const initial = saved || (navigator.language?.startsWith("ru") ? "ru" : "ru");
setLang(initial);
