# Раскадровки СВОБОДА — промпты под заброшенный ДК

**Сеттинг:** заброшенный советский Дворец культуры. Колонный зал с лепниной и балконом-балюстрадой; зелёный сводчатый зал с осколками стекла на деревянном полу. Палатки UNHCR — НЕТ. Вместо них — пустой пафос бывшего дома власти.

---

## Стилевая шапка (для всех 7 промптов)

```
Children's wax crayon drawing on white paper, naive folk-art style, slightly clumsy expressive lines, warm muted palette (brick red, dusty blue, ochre, soft purple, pale skin tones, faint grey-green walls). White paper background with visible texture. Loose strokes, no digital polish, no text, no captions, no watermarks. 4:3 aspect ratio.
```

Подставляй её перед каждым описанием сцены ниже.

---

### 01 · INTRO (00:00 — 00:30)

> Scene: Inside an abandoned Soviet Palace of Culture. Tall Corinthian columns, a balcony with white balustrade, plaster rosette on the ceiling. Dust drifting in shafts of pale daylight. A small lonely clown figure stands with his back turned by the balustrade, tiny in the vast hall. Round red nose hint. Quiet, no spectacle. Cold, empty grandeur.

### 02 · ВЕРС 1 (00:30 — 01:06)

> Scene: A clown in oversized shoes walking under the colonnade of an abandoned palace, carrying a thick stack of papers — forms, protocols, applications. Two empty wooden chairs in the centre of the dusty hall. Walls scrawled with faint graffiti. Papers slip from his hands and drift to the floor. Nobody around. Sad deadpan face.

### 03 · ПРИПЕВ (01:06 — 01:37)

> Scene: Wide shot of a vast vaulted hall with green peeling walls and ceiling rosettes. One tiny clown figure at the centre, alone, dwarfed by the architecture. A single empty tin can lies on the wooden floor. Pale, cold daylight. Word-shape suggestion of "СВОБОДА" hovering on a torn paper banner — written in childlike capitals, half-erased.

### 04 · ВЕРС 2 (01:53 — 02:12)

> Scene: A delegation of "representatives" in ill-fitting suits stands on the upper balcony of the abandoned palace, leaning over the balustrade. They wave papers, stamp documents. Below, on the dusty hall floor, the clown stands small, blank-faced, hands hanging. Behind the balcony — grey daylight through tall arched windows. Green walls cracked.

### 05 · БРИДЖ (02:12 — 02:21)

> Scene: A clown crouched on the wooden floor of a green-walled hall scattered with broken glass shards. He stares into a single large shard like a mirror. The reflection inside the shard is still wearing white clown make-up — but the clown himself is half-wiping his face with a rag. Subtle horror. Two open doorways behind, leading into darkness. Crayon on white paper.

### 06 · РЕПРИЗА (02:21 — 03:00)

> Scene: A collage of human faces — children, old people, mothers, soldiers — all slightly blurred, slightly out of focus, drawn with loose lines, scattered around the foyer of an abandoned Palace of Culture. In the centre, sharply rendered, the clown stands still under a plaster rosette ceiling, looking straight ahead. To one side, a person washes their hands in a tin basin by the base of a tall column. Papers and shards on the wooden floor.

### 07 · ФИНАЛ (03:00 — 03:27)

> Scene: An empty abandoned Soviet Palace of Culture at dawn — colonnade silent, balcony empty, no people. On the wooden floor in the foreground — a single mirror shard catching a thin band of pale sunlight from a tall window above. Stillness. Final freeze frame.

---

## Как гнать в Qwen3.6-Plus

1. Открой Qwen.app, **выключи Stage Manager** (System Settings → Desktop & Dock → Stage Manager OFF) если хочешь чтобы я сам погнал через computer-use
2. Подставь стилевую шапку + scene-описание из нужного блока
3. Сгенери 2–3 варианта на кадр, выбери лучший
4. Сохрани как `01.png`, `02.png`, … `07.png` в `~/Desktop/Pavel/drawings/`
5. После всех 7 — `cd ~/Desktop/Pavel && git add drawings && git commit -m "raskadrovka" && git push`

Пропорции каждого изображения — **4:3 horizontal**, под рамку на сайте.

---

## Альтернатива — я открываю Qwen через computer-use

Чтобы это сработало без танцев:
- **System Settings → Desktop & Dock → Stage Manager: OFF**
- Не закрывай Qwen
- Скажи мне — поехал, и я пройду 7 кадров сам
