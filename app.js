"use strict";

const dinosaurs = [
  { id: "trex", name: "T. rex", fullName: "Tyrannosaurus rex", syllables: "tie-RAN-oh-SORE-us", nickname: "The mighty biter", diet: "Meat eater", period: "Late Cretaceous", fact: "Its teeth were as big as bananas!", size: "As long as a school bus", emoji: "🦷", color: "#df654d", belly: "#f3b05e", type: "trex" },
  { id: "triceratops", name: "Triceratops", fullName: "Triceratops", syllables: "try-SAIR-ah-tops", nickname: "The three-horn face", diet: "Plant eater", period: "Late Cretaceous", fact: "It had three horns and a giant frill.", size: "As long as a big van", emoji: "📯", color: "#e29b3e", belly: "#f3cf73", type: "triceratops" },
  { id: "stegosaurus", name: "Stegosaurus", fullName: "Stegosaurus", syllables: "STEG-oh-SORE-us", nickname: "The plated back", diet: "Plant eater", period: "Late Jurassic", fact: "The plates on its back may have helped it show off.", size: "As long as a small bus", emoji: "🔶", color: "#6c9b58", belly: "#b6cf78", type: "stegosaurus" },
  { id: "brachiosaurus", name: "Brachiosaurus", fullName: "Brachiosaurus", syllables: "BRACK-ee-oh-SORE-us", nickname: "The tall browser", diet: "Plant eater", period: "Late Jurassic", fact: "Its long neck reached leaves high in the trees.", size: "Taller than a giraffe", emoji: "🌿", color: "#70a9a1", belly: "#acd4bf", type: "longneck" },
  { id: "velociraptor", name: "Velociraptor", fullName: "Velociraptor", syllables: "veh-LOSS-ih-RAP-tor", nickname: "The speedy hunter", diet: "Meat eater", period: "Late Cretaceous", fact: "It was feathered and about the size of a turkey.", size: "About as tall as a big dog", emoji: "🪶", color: "#c66c46", belly: "#eabf72", type: "raptor" },
  { id: "ankylosaurus", name: "Ankylosaurus", fullName: "Ankylosaurus", syllables: "ANG-kih-loh-SORE-us", nickname: "The armored tank", diet: "Plant eater", period: "Late Cretaceous", fact: "Its heavy tail club helped keep it safe.", size: "As long as two beds", emoji: "🛡️", color: "#829552", belly: "#c0bd72", type: "ankylo" },
  { id: "parasaurolophus", name: "Parasaurolophus", fullName: "Parasaurolophus", syllables: "PAIR-ah-SORE-OL-oh-fus", nickname: "The musical crest", diet: "Plant eater", period: "Late Cretaceous", fact: "Its long head crest may have made deep sounds.", size: "As long as a small bus", emoji: "🎺", color: "#d58454", belly: "#efc477", type: "parasaur" },
  { id: "spinosaurus", name: "Spinosaurus", fullName: "Spinosaurus", syllables: "SPY-noh-SORE-us", nickname: "The river hunter", diet: "Fish & meat", period: "Late Cretaceous", fact: "It had a huge sail and spent lots of time near water.", size: "Longer than a school bus", emoji: "🐟", color: "#527f76", belly: "#8fc3a9", type: "spino" },
  { id: "diplodocus", name: "Diplodocus", fullName: "Diplodocus", syllables: "dih-PLOD-oh-kus", nickname: "The whip tail", diet: "Plant eater", period: "Late Jurassic", fact: "Its tail was extra long and thin like a whip.", size: "As long as three school buses", emoji: "📏", color: "#8f9f4f", belly: "#cad078", type: "diplodocus" },
  { id: "pteranodon", name: "Pteranodon", fullName: "Pteranodon", syllables: "teh-RAN-oh-don", nickname: "The flying reptile friend", diet: "Fish eater", period: "Late Cretaceous", fact: "Not a dinosaur, but a flying reptile that lived beside them!", size: "Wings wider than a car", emoji: "☁️", color: "#7b78aa", belly: "#c1afd0", type: "pteranodon" },
  { id: "iguanodon", name: "Iguanodon", fullName: "Iguanodon", syllables: "ih-GWAH-noh-don", nickname: "The thumb spike", diet: "Plant eater", period: "Early Cretaceous", fact: "It had pointy thumb spikes on its hands.", size: "As long as a small bus", emoji: "👍", color: "#4f9263", belly: "#9ac67e", type: "iguanodon" },
  { id: "pachy", name: "Pachycephalosaurus", fullName: "Pachycephalosaurus", syllables: "PACK-ee-SEF-ah-loh-SORE-us", nickname: "The dome head", diet: "Plant eater", period: "Late Cretaceous", fact: "The thick dome on its head was made of bone.", size: "About as long as a sofa", emoji: "⛑️", color: "#b66a55", belly: "#e6ac74", type: "pachy" }
];

const state = {
  screen: "home-screen",
  cardIndex: 0,
  soundOn: true,
  quizRound: 0,
  stars: 0,
  quizTargets: [],
  currentOptions: [],
  acceptingAnswer: true,
  touchStartX: null
};

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const homeButton = $("#home-button");
const soundButton = $("#sound-button");

function svgParts(dino) {
  const c = dino.color;
  const b = dino.belly;
  const dark = "#183a2a";
  const eye = `<circle cx="0" cy="0" r="5.2" fill="#fffdf5"/><circle cx="1.4" cy=".5" r="2.5" fill="${dark}"/><circle cx="2" cy="-1" r=".7" fill="white"/>`;
  const spots = `<g fill="${dark}" opacity=".16"><circle cx="190" cy="133" r="7"/><circle cx="220" cy="111" r="5"/><circle cx="249" cy="137" r="8"/><circle cx="280" cy="116" r="4"/></g>`;
  const ground = `<ellipse cx="235" cy="263" rx="178" ry="16" fill="${dark}" opacity=".14"/>`;

  const templates = {
    trex: `${ground}<path d="M77 158 Q29 166 17 129 Q55 151 111 129" fill="${c}" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/><ellipse cx="218" cy="151" rx="119" ry="70" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M183 194 Q181 235 159 254 L201 254 Q216 219 220 192" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M265 194 Q274 227 259 253 L301 253 Q310 218 299 180" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M270 105 Q323 63 383 83 Q426 97 408 135 Q388 164 320 149 L270 139Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M328 145 Q365 161 401 137 Q378 172 327 164Z" fill="#fff6d6" stroke="${dark}" stroke-width="4"/><g transform="translate(386 104)">${eye}</g><path d="M277 147 Q310 163 294 182 Q282 186 271 167" fill="none" stroke="${dark}" stroke-width="6" stroke-linecap="round"/><path d="M286 169 l18 4" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>`,
    triceratops: `${ground}<path d="M97 168 Q45 182 18 158 Q60 157 110 124" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="214" cy="163" rx="123" ry="67" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M150 202 L142 253 L181 253 L196 202M264 204 L270 253 L308 253 L300 195" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M316 99 Q340 58 387 71 Q419 94 406 142 Q367 161 325 135Z" fill="${b}" stroke="${dark}" stroke-width="5"/><path d="M343 109 Q380 88 412 114 L399 154 Q361 163 330 140Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M385 108 L413 67 L403 119M352 107 L348 67 L366 109M401 133 L430 123 L404 147" fill="${b}" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/><g transform="translate(382 127)">${eye}</g>`,
    stegosaurus: `${ground}<path d="M113 168 Q55 166 20 191 Q58 147 125 130" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M25 190 l-16 -20 M25 190 l-3 22" stroke="${dark}" stroke-width="6" stroke-linecap="round"/><ellipse cx="228" cy="164" rx="127" ry="70" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<g fill="${b}" stroke="${dark}" stroke-width="4"><path d="M126 115 l19-53 27 47Z"/><path d="M169 101 l28-63 28 60Z"/><path d="M218 96 l32-66 27 71Z"/><path d="M270 105 l31-52 22 69Z"/></g><path d="M154 208 L149 253 H187 L198 211M273 211 L279 253 H317 L310 197" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M326 129 Q388 111 410 143 Q410 176 344 178Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(391 143)">${eye}</g>`,
    longneck: `${ground}<path d="M115 165 Q54 170 18 202 Q52 150 129 126" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="213" cy="160" rx="111" ry="66" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M270 139 Q302 74 322 31 Q339 2 377 17 Q404 32 384 60 Q353 67 340 61 Q325 118 327 181Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M329 31 Q368 1 399 27 Q405 52 375 62 L337 57Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(380 32)">${eye}</g><path d="M146 199 L134 254 H177 L191 207M267 203 L274 254 H317 L307 183" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    raptor: `${ground}<path d="M135 166 Q69 169 21 126 Q68 143 159 116" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M23 126 q27 -5 41 8 M49 135 q18 -2 29 10" fill="none" stroke="${dark}" stroke-width="4"/><ellipse cx="232" cy="145" rx="92" ry="58" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M269 105 Q308 69 370 81 Q411 91 398 121 Q368 144 310 130Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(380 100)">${eye}</g><path d="M207 182 Q201 223 170 247 L210 247 Q227 222 239 184M276 178 Q284 220 270 246 L310 246 Q316 211 300 164" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M304 133 Q322 159 345 154 M304 141 Q322 173 350 171" fill="none" stroke="${dark}" stroke-width="7" stroke-linecap="round"/><path d="M278 92 l14-25 12 28" fill="${b}" stroke="${dark}" stroke-width="4"/>`,
    ankylo: `${ground}<path d="M118 178 Q65 178 47 198 L18 184 L39 157 Q76 150 124 142" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="38" cy="182" rx="27" ry="23" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M103 158 Q128 79 252 91 Q331 96 352 165 Q278 191 113 190Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g fill="${b}" stroke="${dark}" stroke-width="3"><path d="M129 127 l17-28 17 29Z"/><path d="M171 108 l17-31 17 30Z"/><path d="M216 103 l18-30 17 33Z"/><path d="M262 112 l17-27 18 35Z"/></g>${spots}<path d="M125 181 L120 243 H158 L168 184M275 182 L279 243 H319 L313 172" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M329 137 Q376 116 414 148 Q418 184 352 190Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(397 148)">${eye}</g>`,
    parasaur: `${ground}<path d="M120 164 Q60 167 19 137 Q56 148 132 123" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="218" cy="154" rx="112" ry="64" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M306 111 Q351 72 401 101 Q419 126 390 147 Q343 154 299 135Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M334 94 Q345 45 391 28 Q385 66 374 99" fill="${b}" stroke="${dark}" stroke-width="5"/><g transform="translate(392 113)">${eye}</g><path d="M154 194 L146 248 H185 L199 200M269 196 L277 248 H316 L307 180" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    spino: `${ground}<path d="M116 166 Q55 169 17 139 Q56 148 137 118" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M117 129 Q144 49 284 62 Q316 67 327 116 L306 147 L133 151Z" fill="${b}" stroke="${dark}" stroke-width="5"/><path d="M128 126 L143 78 L161 123 L183 58 L203 120 L230 54 L246 122 L275 66 L290 130" fill="none" stroke="${dark}" stroke-width="4"/><ellipse cx="226" cy="151" rx="112" ry="61" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M308 113 Q361 79 422 106 Q432 137 391 150 L315 139Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(405 116)">${eye}</g><path d="M161 188 L153 246 H193 L204 194M274 190 L281 246 H320 L309 175" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    diplodocus: `${ground}<path d="M145 160 Q63 171 16 130 Q72 151 184 118" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="229" cy="157" rx="99" ry="58" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M286 135 Q310 85 321 39 Q331 5 367 18 Q389 28 376 54 Q354 65 338 58 Q330 115 331 178Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M332 31 Q365 9 396 31 Q400 54 373 61 L338 57Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(378 36)">${eye}</g><path d="M171 193 L163 250 H201 L211 196M268 193 L276 250 H314 L305 180" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    pteranodon: `${ground}<path d="M212 135 Q104 53 35 62 Q90 103 127 161 Q166 177 218 159Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M221 135 Q325 48 407 70 Q340 103 313 162 Q265 177 214 158Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M123 91 Q152 113 168 148 M324 97 Q290 118 276 150" fill="none" stroke="${b}" stroke-width="7"/><ellipse cx="220" cy="151" rx="63" ry="42" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M238 122 Q272 90 324 108 L289 132 Q332 126 359 139 Q300 153 250 149Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M273 106 L242 76 L305 102" fill="${b}" stroke="${dark}" stroke-width="5"/><g transform="translate(292 115)">${eye}</g><path d="M208 185 l-13 50 M234 185 l15 50 M195 235 l-15 11 M249 235 l15 11" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>`,
    iguanodon: `${ground}<path d="M130 165 Q70 170 19 131 Q67 150 146 119" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="231" cy="151" rx="103" ry="64" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M292 109 Q331 76 384 93 Q416 112 396 140 Q354 155 304 135Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(384 108)">${eye}</g><path d="M304 143 Q321 171 347 161 M322 158 l13-25" fill="none" stroke="${dark}" stroke-width="6" stroke-linecap="round"/><path d="M171 191 L162 249 H202 L213 196M273 192 L281 249 H320 L307 177" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    pachy: `${ground}<path d="M136 166 Q70 171 21 132 Q69 148 155 116" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="237" cy="151" rx="97" ry="61" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M297 112 Q323 65 378 69 Q422 76 417 121 Q393 151 316 139Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M334 91 Q349 48 387 58 Q411 67 408 96" fill="${b}" stroke="${dark}" stroke-width="5"/><g fill="${b}" stroke="${dark}" stroke-width="3"><path d="M326 101 l-14-18 22 5Z"/><path d="M405 99 l18-14-10 24Z"/></g><g transform="translate(393 104)">${eye}</g><path d="M177 190 L168 248 H207 L216 195M274 191 L282 248 H321 L308 176" fill="${c}" stroke="${dark}" stroke-width="5"/>`
  };
  return templates[dino.type];
}

function dinoSvg(dino, label = true) {
  return `<svg viewBox="0 0 450 280" role="${label ? "img" : "presentation"}" ${label ? `aria-label="Friendly illustration of ${dino.name}"` : "aria-hidden=\"true\""} xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-linejoin="round">${svgParts(dino)}</g></svg>`;
}

function showScreen(id) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  state.screen = id;
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.id === id));
  homeButton.classList.toggle("is-hidden", id === "home-screen");
  $("#app").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function speak(text, rate = 0.82) {
  if (!state.soundOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = 1.08;
  utterance.lang = "en-US";
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((voice) => voice.lang.startsWith("en") && /Samantha|Karen|Moira|Daniel/i.test(voice.name)) || voices.find((voice) => voice.lang.startsWith("en"));
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
}

function renderCard() {
  const dino = dinosaurs[state.cardIndex];
  $("#flash-card").classList.remove("is-flipped");
  $("#flash-card").setAttribute("aria-pressed", "false");
  $("#card-progress").textContent = `${state.cardIndex + 1} of ${dinosaurs.length}`;
  $("#specimen-number").textContent = String(state.cardIndex + 1).padStart(2, "0");
  $("#card-art").innerHTML = dinoSvg(dino);
  $("#card-nickname").textContent = dino.nickname;
  $("#card-name").textContent = dino.name;
  $("#card-syllables").textContent = dino.syllables;
  $("#diet-badge").textContent = dino.diet;
  $("#period-label").textContent = dino.period;
  $("#fact-emoji").textContent = dino.emoji;
  $("#card-fact").textContent = dino.fact;
  $("#card-size").textContent = dino.size;
  document.querySelectorAll(".card-dot").forEach((dot, index) => {
    dot.classList.toggle("is-current", index === state.cardIndex);
    dot.setAttribute("aria-current", index === state.cardIndex ? "true" : "false");
  });
}

function changeCard(direction) {
  state.cardIndex = (state.cardIndex + direction + dinosaurs.length) % dinosaurs.length;
  renderCard();
  speak(dinosaurs[state.cardIndex].fullName);
}

function flipCard() {
  const card = $("#flash-card");
  const flipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(flipped));
  if (flipped) speak(dinosaurs[state.cardIndex].fact, 0.88);
}

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  state.quizRound = 0;
  state.stars = 0;
  state.quizTargets = shuffled(dinosaurs).slice(0, 5);
  $("#star-count").textContent = "0";
  $("#quiz-progress-fill").style.width = "0%";
  showScreen("quiz-screen");
  renderQuizRound();
}

function renderQuizRound() {
  state.acceptingAnswer = true;
  const target = state.quizTargets[state.quizRound];
  const distractors = shuffled(dinosaurs.filter((dino) => dino.id !== target.id)).slice(0, 2);
  state.currentOptions = shuffled([target, ...distractors]);
  $("#quiz-target").textContent = target.name;
  $("#quiz-feedback").textContent = "";
  $("#quiz-options").innerHTML = state.currentOptions.map((dino) => `
    <button class="quiz-option" type="button" data-id="${dino.id}" aria-label="${dino.name}">
      ${dinoSvg(dino)}
      <strong>${dino.name}</strong>
    </button>`).join("");
  document.querySelectorAll(".quiz-option").forEach((option) => option.addEventListener("click", answerQuiz));
  setTimeout(() => speak(`Which one is ${target.fullName}?`), 250);
}

function answerQuiz(event) {
  if (!state.acceptingAnswer) return;
  const selected = event.currentTarget;
  const target = state.quizTargets[state.quizRound];
  if (selected.dataset.id !== target.id) {
    selected.classList.remove("is-wrong");
    void selected.offsetWidth;
    selected.classList.add("is-wrong");
    $("#quiz-feedback").textContent = "Good try! Look again.";
    speak("Good try. Look again!");
    return;
  }

  state.acceptingAnswer = false;
  selected.classList.add("is-correct");
  state.stars += 1;
  $("#star-count").textContent = String(state.stars);
  $("#quiz-feedback").textContent = ["ROAR-some!", "Dino-mite!", "You found it!", "Great spotting!", "Super explorer!"][state.quizRound];
  $("#quiz-progress-fill").style.width = `${((state.quizRound + 1) / 5) * 100}%`;
  miniConfetti(selected);
  speak(`${$("#quiz-feedback").textContent} That is ${target.fullName}.`);

  setTimeout(() => {
    state.quizRound += 1;
    if (state.quizRound >= 5) finishQuiz();
    else renderQuizRound();
  }, 1500);
}

function miniConfetti(origin) {
  const container = $("#confetti");
  const rect = origin.getBoundingClientRect();
  const colors = ["#f4be3e", "#df654d", "#80c8bf", "#4f7c48", "#fff9e8"];
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti-piece";
    piece.style.setProperty("--left", `${((rect.left + rect.width / 2) / window.innerWidth) * 100 + (Math.random() - .5) * 28}%`);
    piece.style.setProperty("--color", colors[i % colors.length]);
    piece.style.setProperty("--time", `${1.2 + Math.random() * 1.2}s`);
    piece.style.setProperty("--delay", `${Math.random() * .15}s`);
    piece.style.setProperty("--rotate", `${Math.random() * 180}deg`);
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 2700);
  }
}

function finishQuiz() {
  showScreen("finish-screen");
  fullConfetti();
  speak("Roar-some work! You earned your Dino Explorer patch!", 0.85);
}

function fullConfetti() {
  const container = $("#confetti");
  const colors = ["#f4be3e", "#df654d", "#80c8bf", "#4f7c48", "#fff9e8"];
  for (let i = 0; i < 70; i += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti-piece";
    piece.style.setProperty("--left", `${Math.random() * 100}%`);
    piece.style.setProperty("--color", colors[i % colors.length]);
    piece.style.setProperty("--time", `${2 + Math.random() * 2}s`);
    piece.style.setProperty("--delay", `${Math.random() * .7}s`);
    piece.style.setProperty("--rotate", `${Math.random() * 180}deg`);
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

$("#hero-dino").innerHTML = dinoSvg(dinosaurs[0], false);
$("#card-dots").innerHTML = dinosaurs.map((dino, index) => `<button class="card-dot${index === 0 ? " is-current" : ""}" type="button" data-index="${index}" aria-label="Show ${dino.name}" aria-current="${index === 0}"></button>`).join("");
renderCard();

$("#cards-button").addEventListener("click", () => { showScreen("cards-screen"); renderCard(); setTimeout(() => speak("Meet the dinosaurs! Tap a card to discover a fact."), 250); });
$("#quiz-button").addEventListener("click", startQuiz);
$("#play-again").addEventListener("click", startQuiz);
$("#meet-more").addEventListener("click", () => { showScreen("cards-screen"); renderCard(); });
homeButton.addEventListener("click", () => showScreen("home-screen"));
soundButton.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  soundButton.setAttribute("aria-pressed", String(state.soundOn));
  soundButton.setAttribute("aria-label", state.soundOn ? "Turn sound off" : "Turn sound on");
  soundButton.querySelector("span").textContent = state.soundOn ? "♪" : "×";
  if (!state.soundOn && window.speechSynthesis) window.speechSynthesis.cancel();
  if (state.soundOn) speak("Sound on!");
});
$("#flash-card").addEventListener("click", flipCard);
$("#flash-card").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); flipCard(); }
});
$("#flash-card").addEventListener("touchstart", (event) => { state.touchStartX = event.changedTouches[0].clientX; }, { passive: true });
$("#flash-card").addEventListener("touchend", (event) => {
  if (state.touchStartX === null) return;
  const delta = event.changedTouches[0].clientX - state.touchStartX;
  state.touchStartX = null;
  if (Math.abs(delta) > 70) {
    event.preventDefault();
    changeCard(delta > 0 ? -1 : 1);
  }
});
$("#previous-card").addEventListener("click", () => changeCard(-1));
$("#next-card").addEventListener("click", () => changeCard(1));
$("#hear-card").addEventListener("click", () => speak(dinosaurs[state.cardIndex].fullName));
$("#hear-question").addEventListener("click", () => speak(`Which one is ${state.quizTargets[state.quizRound].fullName}?`));
document.querySelectorAll(".card-dot").forEach((dot) => dot.addEventListener("click", () => { state.cardIndex = Number(dot.dataset.index); renderCard(); speak(dinosaurs[state.cardIndex].fullName); }));

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
