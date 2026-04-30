# Раскадровки — промпты для Qwen / любого image-gen

**Стиль (общая шапка для всех 7 промптов):**

> Children's wax crayon drawing on white paper, naive folk-art style. Soft, slightly clumsy expressive lines. Warm muted palette: brick red, dusty blue, ochre, soft purple, pale skin tones. White paper background with visible texture. Loose strokes, no digital polish. No text, no captions, no watermarks. 4:3 aspect ratio.

Подставляй её в начало каждого промпта, потом «Scene: …» с одним из нижеследующих описаний.

---

### 01 · INTRO (00:00 — 00:30)

> Scene: A refugee camp at twilight. Rows of canvas tents, a mesh fence, paper tags strung on lines like laundry. A small lonely clown figure stands with his back turned in the centre — tiny, lost in the vast field. Round red nose visible only as a hint. The camp breathes. Quiet, no spectacle, no horror. Cold loneliness.

### 02 · ВЕРС 1 (00:30 — 01:06)

> Scene: A clown in oversized shoes carrying a thick stack of papers — forms, protocols, applications. He walks across a refugee camp, passing groups of people: protesters with signs, friends laughing together, soldiers, bureaucrats. Nobody looks at the clown. He passes through them like a ghost. Sad, deadpan face. The papers are slightly slipping out of his hands.

### 03 · ПРИПЕВ (01:06 — 01:37)

> Scene: Wide aerial-like view of a huge refugee camp. One tiny clown figure at the centre, alone, dwarfed by endless rows of tents fading into the horizon. A single empty tin can rolls in the wind. Cold blue tone over the white paper. Word-shape suggestion of "СВОБОДА" hovering on a torn paper banner — written in childlike capitals, half-erased.

### 04 · ВЕРС 2 (01:53 — 02:12)

> Scene: A clown surrounded by a delegation of "representatives" in ill-fitting suits, holding briefcases and rubber stamps. They wave papers in his face, stamping documents. Behind the clown — a scorched field, black charred ground, smoke rising from a few tents. The clown's face is blank, his hands hanging. The suits are too long, too short, mismatched.

### 05 · БРИДЖ (02:12 — 02:21)

> Scene: A clown stands in front of a large standing mirror inside a tent. He is taking off his white face make-up with a rag — but the reflection in the mirror is still wearing the make-up, watching him. Subtle horror. Both versions in the same wax-crayon naive style. The mirror has a wooden frame painted red.

### 06 · РЕПРИЗА (02:21 — 03:00)

> Scene: A collage of refugee camp inhabitants' faces — children, old people, mothers, soldiers — all slightly blurred, slightly out of focus, drawn with very loose lines. In the centre of the collage, sharply rendered, the clown stands still, looking straight ahead. To one side, a person washes their hands in a small tin basin. Papers and white identification tags scattered on the ground.

### 07 · ФИНАЛ (03:00 — 03:27)

> Scene: An empty refugee camp at dawn. All tents stand silent, no people. On the ground in the foreground — a single overturned paper identification tag and a faint trace of a footprint in light, as if a figure just stepped out of frame. Above, a thin pale sun. Stillness. Final frame.

---

## Как гнать в Qwen

1. Открыть Qwen.app, выбрать image-mode
2. Подставить шапку стиля + scene-описание из нужного блока выше
3. Сгенерить 2–3 варианта на кадр, выбрать лучший
4. Сохранить как `01.png`, `02.png`, … `07.png` в `~/Desktop/Pavel/drawings/`
5. После всех 7 — `cd ~/Desktop/Pavel && git add drawings && git commit -m "raskadrovka" && git push`

Пропорции каждого изображения — лучше **4:3 horizontal** или **square**, под рамку на сайте.
