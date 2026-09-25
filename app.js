"use strict";

const dinosaurs = [
  { id: "trex", name: "T. rex", fullName: "Tyrannosaurus rex", syllables: "tie-RAN-oh-SORE-us", nickname: "The mighty biter", diet: "Meat eater", period: "Late Cretaceous", fact: "Its teeth were as big as bananas!", size: "As long as a school bus", emoji: "🦷", color: "#68704b", belly: "#a99a72", type: "trex" },
  { id: "triceratops", name: "Triceratops", fullName: "Triceratops", syllables: "try-SAIR-ah-tops", nickname: "The three-horn face", diet: "Plant eater", period: "Late Cretaceous", fact: "It had three horns and a giant frill.", size: "As long as a big van", emoji: "📯", color: "#7c6b57", belly: "#b7a27d", type: "triceratops" },
  { id: "stegosaurus", name: "Stegosaurus", fullName: "Stegosaurus", syllables: "STEG-oh-SORE-us", nickname: "The plated back", diet: "Plant eater", period: "Late Jurassic", fact: "The plates on its back may have helped it show off.", size: "As long as a small bus", emoji: "🔶", color: "#586b54", belly: "#9b7655", type: "stegosaurus" },
  { id: "brachiosaurus", name: "Brachiosaurus", fullName: "Brachiosaurus", syllables: "BRACK-ee-oh-SORE-us", nickname: "The tall browser", diet: "Plant eater", period: "Late Jurassic", fact: "Its long neck reached leaves high in the trees.", size: "Taller than a giraffe", emoji: "🌿", color: "#687164", belly: "#aaa188", type: "longneck" },
  { id: "velociraptor", name: "Velociraptor", fullName: "Velociraptor", syllables: "veh-LOSS-ih-RAP-tor", nickname: "The speedy hunter", diet: "Meat eater", period: "Late Cretaceous", fact: "It was feathered and about the size of a turkey.", size: "About as tall as a big dog", emoji: "🪶", color: "#755d46", belly: "#b28a5b", type: "raptor" },
  { id: "ankylosaurus", name: "Ankylosaurus", fullName: "Ankylosaurus", syllables: "ANG-kih-loh-SORE-us", nickname: "The armored tank", diet: "Plant eater", period: "Late Cretaceous", fact: "Its heavy tail club helped keep it safe.", size: "As long as two beds", emoji: "🛡️", color: "#66634b", belly: "#91845c", type: "ankylo" },
  { id: "parasaurolophus", name: "Parasaurolophus", fullName: "Parasaurolophus", syllables: "PAIR-ah-SORE-OL-oh-fus", nickname: "The musical crest", diet: "Plant eater", period: "Late Cretaceous", fact: "Its long head crest may have made deep sounds.", size: "As long as a small bus", emoji: "🎺", color: "#80624a", belly: "#b88b59", type: "parasaur" },
  { id: "spinosaurus", name: "Spinosaurus", fullName: "Spinosaurus", syllables: "SPY-noh-SORE-us", nickname: "The river hunter", diet: "Fish & meat", period: "Late Cretaceous", fact: "It had a huge sail and spent lots of time near water.", size: "Longer than a school bus", emoji: "🐟", color: "#496763", belly: "#9a5e46", type: "spino" },
  { id: "diplodocus", name: "Diplodocus", fullName: "Diplodocus", syllables: "dih-PLOD-oh-kus", nickname: "The whip tail", diet: "Plant eater", period: "Late Jurassic", fact: "Its tail was extra long and thin like a whip.", size: "As long as three school buses", emoji: "📏", color: "#65705a", belly: "#9c956e", type: "diplodocus" },
  { id: "pteranodon", name: "Pteranodon", fullName: "Pteranodon", syllables: "teh-RAN-oh-don", nickname: "The flying reptile friend", diet: "Fish eater", period: "Late Cretaceous", fact: "Not a dinosaur, but a flying reptile that lived beside them!", size: "Wings wider than a car", emoji: "☁️", color: "#71675c", belly: "#a58c72", type: "pteranodon" },
  { id: "iguanodon", name: "Iguanodon", fullName: "Iguanodon", syllables: "ih-GWAH-noh-don", nickname: "The thumb spike", diet: "Plant eater", period: "Early Cretaceous", fact: "It had pointy thumb spikes on its hands.", size: "As long as a small bus", emoji: "👍", color: "#5d6c52", belly: "#97966b", type: "iguanodon" },
  { id: "pachy", name: "Pachycephalosaurus", fullName: "Pachycephalosaurus", syllables: "PACK-ee-SEF-ah-loh-SORE-us", nickname: "The dome head", diet: "Plant eater", period: "Late Cretaceous", fact: "The thick dome on its head was made of bone.", size: "About as long as a sofa", emoji: "⛑️", color: "#735847", belly: "#a87d56", type: "pachy" },
  { id: "allosaurus", name: "Allosaurus", fullName: "Allosaurus", syllables: "AL-oh-SORE-us", nickname: "The different lizard", diet: "Meat eater", period: "Late Jurassic", fact: "It grabbed prey with three sharp claws on each hand.", size: "As long as a school bus", emoji: "🖐️", color: "#686145", belly: "#a58c5f", type: "allosaurus" },
  { id: "carnotaurus", name: "Carnotaurus", fullName: "Carnotaurus", syllables: "CAR-noh-TORE-us", nickname: "The horned hunter", diet: "Meat eater", period: "Late Cretaceous", fact: "It had two horns above its eyes and very tiny arms.", size: "As long as a big van", emoji: "🐂", color: "#79513e", belly: "#b17a55", type: "carnotaurus" },
  { id: "giganotosaurus", name: "Giganotosaurus", fullName: "Giganotosaurus", syllables: "JIG-ah-NOT-oh-SORE-us", nickname: "The giant southern lizard", diet: "Meat eater", period: "Late Cretaceous", fact: "This huge hunter lived in what is now Argentina.", size: "Longer than a school bus", emoji: "🗺️", color: "#536457", belly: "#899176", type: "giganotosaurus" },
  { id: "therizinosaurus", name: "Therizinosaurus", fullName: "Therizinosaurus", syllables: "THER-ih-ZIN-oh-SORE-us", nickname: "The giant claw", diet: "Plant eater", period: "Late Cretaceous", fact: "Its long claws were about as tall as a four-year-old child.", size: "As tall as a giraffe", emoji: "🪶", color: "#665b4f", belly: "#9c8768", type: "therizino" },
  { id: "oviraptor", name: "Oviraptor", fullName: "Oviraptor", syllables: "OH-vih-RAP-tor", nickname: "The caring nester", diet: "Mixed eater", period: "Late Cretaceous", fact: "Fossils show it sitting carefully on a nest of eggs.", size: "About as long as a person", emoji: "🥚", color: "#735e4c", belly: "#b49468", type: "oviraptor" },
  { id: "gallimimus", name: "Gallimimus", fullName: "Gallimimus", syllables: "GAL-ih-MY-mus", nickname: "The speedy runner", diet: "Mixed eater", period: "Late Cretaceous", fact: "Its long legs and toothless beak looked a little like an ostrich.", size: "As long as a family car", emoji: "💨", color: "#7a704e", belly: "#b4a071", type: "gallimimus" },
  { id: "apatosaurus", name: "Apatosaurus", fullName: "Apatosaurus", syllables: "ah-PAT-oh-SORE-us", nickname: "The powerful giant", diet: "Plant eater", period: "Late Jurassic", fact: "Its neck was thick and strong, and its tail was very long.", size: "As long as two school buses", emoji: "🌲", color: "#586859", belly: "#8f9a7b", type: "apatosaurus" },
  { id: "argentinosaurus", name: "Argentinosaurus", fullName: "Argentinosaurus", syllables: "ar-jen-TEEN-oh-SORE-us", nickname: "The enormous walker", diet: "Plant eater", period: "Late Cretaceous", fact: "It was one of the largest land animals ever discovered.", size: "As long as three school buses", emoji: "🏔️", color: "#62665b", belly: "#999589", type: "argentinosaurus" },
  { id: "corythosaurus", name: "Corythosaurus", fullName: "Corythosaurus", syllables: "kor-ITH-oh-SORE-us", nickname: "The helmet crest", diet: "Plant eater", period: "Late Cretaceous", fact: "Its hollow helmet-shaped crest may have helped make sounds.", size: "As long as a small bus", emoji: "🎵", color: "#75624d", belly: "#ad895c", type: "corythosaurus" },
  { id: "edmontosaurus", name: "Edmontosaurus", fullName: "Edmontosaurus", syllables: "ed-MON-toh-SORE-us", nickname: "The broad duck bill", diet: "Plant eater", period: "Late Cretaceous", fact: "It used a wide beak and many grinding teeth to eat plants.", size: "As long as a school bus", emoji: "🌱", color: "#5d6d52", belly: "#95986c", type: "edmontosaurus" },
  { id: "protoceratops", name: "Protoceratops", fullName: "Protoceratops", syllables: "PRO-toh-SAIR-ah-tops", nickname: "The little frill", diet: "Plant eater", period: "Late Cretaceous", fact: "It had a neck frill but no large horns on its face.", size: "About as long as a sheep", emoji: "🌼", color: "#77654d", belly: "#ad946d", type: "protoceratops" },
  { id: "kentrosaurus", name: "Kentrosaurus", fullName: "Kentrosaurus", syllables: "KEN-troh-SORE-us", nickname: "The spiky back", diet: "Plant eater", period: "Late Jurassic", fact: "It had plates near its shoulders and long spikes near its tail.", size: "As long as a small car", emoji: "🔺", color: "#536655", belly: "#9a7958", type: "kentrosaurus" }
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

function svgParts(dino, paintKey = dino.id) {
  const c = dino.color;
  const b = dino.belly;
  const dark = "#292d25";
  const eye = `<ellipse cx="0" cy="0" rx="4.8" ry="3.5" fill="#d5b35d" stroke="${dark}" stroke-width="1.5"/><ellipse cx=".8" cy=".2" rx="1.15" ry="2.7" fill="#11150f"/><circle cx="1.3" cy="-.8" r=".65" fill="#fff"/><path d="M-5 -2 Q0 -5 5 -1" fill="none" stroke="${dark}" stroke-width="1.8"/>`;
  const spots = `<g fill="${dark}" opacity=".18"><ellipse cx="185" cy="128" rx="11" ry="5" transform="rotate(-18 185 128)"/><ellipse cx="220" cy="108" rx="8" ry="4" transform="rotate(12 220 108)"/><ellipse cx="252" cy="132" rx="13" ry="5" transform="rotate(-8 252 132)"/><ellipse cx="282" cy="113" rx="7" ry="3.5"/></g><g fill="none" stroke="#f1e4c4" stroke-width="1.4" opacity=".22"><path d="M158 151q22-13 42-2M212 142q19-11 38-1M263 151q18-10 34-1"/></g>`;
  const ground = `<ellipse cx="235" cy="263" rx="178" ry="13" fill="#20271f" opacity=".17"/><ellipse cx="235" cy="260" rx="128" ry="5" fill="#20271f" opacity=".1"/>`;

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

  Object.assign(templates, {
    allosaurus: `${ground}<path d="M145 157Q73 163 19 127Q72 144 171 111" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="229" cy="145" rx="96" ry="59" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M288 107Q329 69 390 82Q423 91 414 121Q389 144 310 132Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M337 132q31 19 69-7q-23 35-70 28Z" fill="#d9cfad" stroke="${dark}" stroke-width="4"/><g transform="translate(391 101)">${eye}</g><path d="M203 181q-3 43-30 67h39q19-25 25-65M278 177q14 40 2 70h42q7-43-13-85" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M300 137q16 24 35 20m-29-12q17 26 38 23m-11-10 9 8m-1-7 9 6" fill="none" stroke="${dark}" stroke-width="6"/>`,
    carnotaurus: `${ground}<path d="M146 161Q73 168 17 141Q69 146 169 113" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="231" cy="151" rx="99" ry="61" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M294 111Q334 73 393 86Q427 99 414 132Q380 151 307 137Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M338 88l8-24 16 25m20-1 13-22 9 29" fill="${b}" stroke="${dark}" stroke-width="4"/><g transform="translate(394 106)">${eye}</g><path d="M203 187q-2 40-25 63h40q17-26 21-64M280 181q15 41 1 69h42q8-42-14-86" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M306 143q9 14 18 11m-15-6 13 14" fill="none" stroke="${dark}" stroke-width="6"/>`,
    giganotosaurus: `${ground}<path d="M158 160Q75 166 14 126Q76 145 181 109" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="237" cy="148" rx="93" ry="58" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M292 106Q349 68 420 92Q438 105 427 127Q383 148 303 133Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M335 132q43 22 88-7q-29 38-87 27Z" fill="#d8cead" stroke="${dark}" stroke-width="4"/><g transform="translate(406 104)">${eye}</g><path d="M206 183q-4 43-29 67h41q19-27 23-66M281 180q14 41 0 70h43q8-44-14-87" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M306 136q20 26 42 20m-36-11q18 30 44 26" fill="none" stroke="${dark}" stroke-width="6"/><path d="M183 94l9-12 8 11 10-13 9 11 10-12 10 12" fill="${b}" stroke="${dark}" stroke-width="3"/>`,
    therizino: `${ground}<path d="M191 157Q105 165 35 128Q97 140 206 105" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="239" cy="146" rx="72" ry="66" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M265 113q27-55 57-73 30-17 58 3 11 21-13 35-21 2-34-8-18 37-22 93Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M328 45q31-23 63-4 8 22-17 37l-39-7Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(373 48)">${eye}</g><path d="M230 188q-10 36-31 61h40q18-30 22-62M278 179q18 42 8 70h41q4-39-13-84" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M298 121q37 24 62 64m-54-53q43 26 72 58" fill="none" stroke="${dark}" stroke-width="9"/><path d="M357 182l52 38-42-49m10 17 48 18-41-32m-74-40 9 19m-1-26 10 18" fill="none" stroke="#d8cfb2" stroke-width="4" stroke-linecap="round"/>`,
    oviraptor: `${ground}<path d="M170 159Q101 174 40 146q57 2 142-38" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M48 144l-22-15 8 23-21 8 27 7" fill="${b}" stroke="${dark}" stroke-width="3"/><ellipse cx="231" cy="145" rx="72" ry="59" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M270 114q28-50 72-54 44 4 53 35-5 34-60 35Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M323 66q18-30 42-3 12 13 10 25" fill="${b}" stroke="${dark}" stroke-width="4"/><path d="M378 92l43 15-43 15" fill="${b}" stroke="${dark}" stroke-width="4"/><g transform="translate(367 86)">${eye}</g><path d="M209 183q-7 37-29 64h38q17-24 24-61M263 181q12 37 2 66h38q6-38-9-75" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M283 131q20 20 39 31m-34-22q17 26 39 37" fill="none" stroke="${dark}" stroke-width="7"/>`,
    gallimimus: `${ground}<path d="M177 153Q92 159 18 126q75 13 177-25" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="232" cy="137" rx="59" ry="45" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M266 116q30-62 60-89 23-20 49-6 17 18-4 37-19 7-35-2-20 43-22 96Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M333 29q31-26 70-3 8 19-18 31l-46-2Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M392 35l30 8-30 9" fill="${b}" stroke="${dark}" stroke-width="3"/><g transform="translate(383 32)">${eye}</g><path d="M213 169q-3 37-21 80h30q17-41 24-80M260 166q15 39 19 83h31q-4-49-17-93" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M191 249l-20 7m108-7 21 7" stroke="${dark}" stroke-width="5"/>`,
    apatosaurus: `${ground}<path d="M161 165Q77 181 16 150q72 11 164-39" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="225" cy="153" rx="91" ry="65" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M277 130q20-48 35-86 13-35 46-31 29 9 26 39-19 21-47 7-9 50-4 119Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M328 29q28-25 60-4 8 25-18 37l-35-6Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(370 34)">${eye}</g><path d="M165 194l-8 59h39l14-57m70-4 5 61h41l-7-82" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    argentinosaurus: `${ground}<path d="M139 164Q69 170 17 144q61 5 137-30" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="215" cy="145" rx="121" ry="77" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M284 127q30-60 45-97 13-27 44-21 30 8 26 36-15 21-47 11-10 54-7 124Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M340 23q28-24 61-3 9 23-17 36l-36-4Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(383 29)">${eye}</g><path d="M137 190l-4 64h49l11-63m84-2 7 65h50l-4-84" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    corythosaurus: `${ground}<path d="M154 161Q80 171 18 136q61 13 159-29" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="232" cy="148" rx="87" ry="58" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M286 111q36-43 89-35 39 10 38 43-22 34-107 23Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M324 84q20-52 56-42 30 11 22 45" fill="${b}" stroke="${dark}" stroke-width="4"/><path d="M392 111l39 12-40 14" fill="${b}" stroke="${dark}" stroke-width="3"/><g transform="translate(390 101)">${eye}</g><path d="M201 183q-6 42-27 65h39q18-25 24-64m44-4q13 40 2 68h41q5-39-13-83" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    edmontosaurus: `${ground}<path d="M151 161Q78 172 17 139q63 10 158-31" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="231" cy="150" rx="89" ry="60" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M285 113q38-39 91-31 38 7 39 35-22 35-108 27Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M389 109l44 14-44 18q-12-15 0-32" fill="${b}" stroke="${dark}" stroke-width="3"/><g transform="translate(389 101)">${eye}</g><path d="M200 186q-6 40-28 63h40q18-25 25-65m43-1q14 39 2 66h41q6-39-13-83" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M306 144q22 20 42 16" fill="none" stroke="${dark}" stroke-width="6"/>`,
    protoceratops: `${ground}<path d="M132 179q-58 6-100-14 45-2 111-27" fill="${c}" stroke="${dark}" stroke-width="5"/><ellipse cx="221" cy="168" rx="100" ry="58" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<path d="M299 117q24-43 70-41 39 9 43 53-14 50-84 53l-35-34Z" fill="${b}" stroke="${dark}" stroke-width="5"/><path d="M331 125q34-28 77-5l7 34q-37 28-79 7Z" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M401 141l30 9-28 17" fill="${b}" stroke="${dark}" stroke-width="3"/><g transform="translate(390 136)">${eye}</g><path d="M151 202l-5 50h35l10-48m86 0 5 48h36l-6-58" fill="${c}" stroke="${dark}" stroke-width="5"/>`,
    kentrosaurus: `${ground}<path d="M139 174Q70 176 20 198q54-42 137-67" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M58 181L17 146m58 27-27-51m47 39-11-55" fill="none" stroke="${b}" stroke-width="9"/><ellipse cx="239" cy="166" rx="112" ry="64" fill="${c}" stroke="${dark}" stroke-width="5"/>${spots}<g fill="${b}" stroke="${dark}" stroke-width="4"><path d="M151 128l15-35 19 31Z"/><path d="M184 112l20-45 22 43Z"/><path d="M224 107l24-49 22 52Z"/><path d="M268 117l25-40 17 50Z"/></g><path d="M165 203l-6 49h37l11-47m78-2 5 49h39l-8-65" fill="${c}" stroke="${dark}" stroke-width="5"/><path d="M326 143q61-17 86 17 3 32-66 37Z" fill="${c}" stroke="${dark}" stroke-width="5"/><g transform="translate(394 159)">${eye}</g>`
  });

  const shape = templates[dino.type]
    .split(`fill="${c}"`).join(`fill="url(#skin-${paintKey})"`)
    .split(`fill="${b}"`).join(`fill="url(#accent-${paintKey})"`)
    .replaceAll('stroke-width="7"', 'stroke-width="4"')
    .replaceAll('stroke-width="6"', 'stroke-width="3.5"')
    .replaceAll('stroke-width="5"', 'stroke-width="3"')
    .replaceAll('stroke-width="4"', 'stroke-width="2.5"');
  return `${shape}${anatomyDetails(dino)}`;
}

function anatomyDetails(dino) {
  const line = "#34382d";
  const pale = "#dfd3b4";
  const rust = "#76513b";
  const details = {
    trex: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M318 94q29-13 63-4" stroke-width="3" opacity=".65"/><path d="M324 116q34 10 78 3" stroke-width="2" opacity=".45"/><path d="M301 132q-9 13-6 27M311 133q-7 15-2 29" stroke-width="2" opacity=".55"/><path d="M176 253l-13 7m27-7 11 7m61-7-11 7m38-7 12 7" stroke-width="4"/></g><g fill="${pale}" stroke="${line}" stroke-width="1"><path d="M342 146l6 12 6-11 7 13 6-15 7 12 6-15 7 10"/></g><ellipse cx="406" cy="112" rx="4" ry="2.2" fill="${line}"/><g fill="${line}" opacity=".42"><circle cx="331" cy="96" r="2"/><circle cx="342" cy="91" r="1.5"/><circle cx="350" cy="100" r="1.7"/></g>`,
    triceratops: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M351 79q18 27 19 62M373 76q8 29 5 68M393 85q-2 27-11 54" stroke-width="2" opacity=".48"/><path d="M178 252l-15 7m16-7 11 7m82-7-12 7m36-7 14 7" stroke-width="4"/></g><g fill="${line}" opacity=".34"><circle cx="346" cy="124" r="3"/><circle cx="357" cy="133" r="2.5"/><circle cx="369" cy="119" r="2"/><circle cx="386" cy="139" r="2.3"/></g><path d="M404 70q-3 21-7 35M349 69q3 18 5 32" fill="none" stroke="${pale}" stroke-width="2.5" opacity=".7"/>`,
    stegosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M143 70l8 38M196 47l7 47M247 40l5 52M296 61l1 49" stroke-width="2" opacity=".5"/><path d="M138 181q80 33 174 0" stroke-width="2" opacity=".45"/><path d="M151 252l-13 7m35-7 11 7m97-7-12 7m34-7 13 7" stroke-width="4"/></g><g fill="${pale}" opacity=".3"><circle cx="176" cy="145" r="2"/><circle cx="194" cy="157" r="2.5"/><circle cx="217" cy="139" r="1.8"/><circle cx="241" cy="158" r="2.2"/></g>`,
    longneck: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M317 70q17 10 29 3M311 88q18 10 30 4M306 107q18 9 30 3M301 126q17 8 30 3" stroke-width="2" opacity=".4"/><path d="M139 253l-15 7m38-7 13 7m102-7-13 7m38-7 14 7" stroke-width="4"/></g><g fill="${line}" opacity=".26"><ellipse cx="323" cy="52" rx="5" ry="2"/><ellipse cx="314" cy="98" rx="5" ry="2"/><ellipse cx="298" cy="137" rx="6" ry="2.5"/></g><ellipse cx="394" cy="41" rx="3.8" ry="2" fill="${line}"/>`,
    raptor: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M44 135l-17-17m36 27-19-25m36 28-18-22M176 127l-22-14m31 8-18-18m32 14-13-22M214 110l-8-24m22 20-2-27m20 28 7-24" stroke-width="3"/><path d="M298 88l12-17m3 23 16-15m-8 23 20-12" stroke-width="2.5"/><path d="M174 247l-15 7m43-8 15 5m56-5 11 8" stroke-width="4"/></g><path d="M282 238q18-3 22-18q5 23-12 32" fill="${pale}" stroke="${line}" stroke-width="2"/><ellipse cx="399" cy="109" rx="3.5" ry="1.8" fill="${line}"/>`,
    ankylo: `<g fill="none" stroke="${line}" stroke-width="2" opacity=".6"><path d="M125 148l25-18 27 16 27-21 28 19 27-20 31 22 25-13"/><path d="M138 164l22-14 24 16 27-17 29 17 25-16 32 13"/></g><g fill="${pale}" opacity=".38"><circle cx="153" cy="139" r="4"/><circle cx="201" cy="137" r="4"/><circle cx="249" cy="138" r="4"/><circle cx="289" cy="146" r="4"/></g><g stroke="${line}" stroke-width="4"><path d="M121 243l-11 7m43-7 12 7m115-7-10 7m37-7 12 7"/></g>`,
    parasaur: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M347 88q18-25 38-44M316 128q42 15 83 3" stroke-width="2.5" opacity=".58"/><path d="M148 247l-13 7m40-7 12 7m92-7-12 7m38-7 13 7" stroke-width="4"/></g><path d="M132 130q83-35 170 5" fill="none" stroke="${pale}" stroke-width="7" opacity=".25"/><g fill="${line}" opacity=".3"><ellipse cx="348" cy="116" rx="4" ry="2"/><ellipse cx="363" cy="126" rx="3" ry="1.5"/></g>`,
    spino: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M145 77l8 48m28-64 11 65m35-67 7 66m35-53 2 55" stroke-width="2" opacity=".52"/><path d="M154 245l-13 7m40-7 12 7m90-7-12 7m38-7 13 7" stroke-width="4"/></g><path d="M130 126q76-28 179 1" fill="none" stroke="${pale}" stroke-width="4" opacity=".28"/><ellipse cx="424" cy="119" rx="4.5" ry="2" fill="${line}"/><g fill="${pale}" stroke="${line}" stroke-width=".8"><path d="M351 143l5 8 5-8 5 8 5-9 5 8 5-9 5 7"/></g>`,
    diplodocus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M321 70q13 8 23 3M315 91q15 8 25 3M309 111q15 7 26 3" stroke-width="2" opacity=".42"/><path d="M165 249l-14 7m42-7 13 7m72-7-13 7m38-7 13 7" stroke-width="4"/></g><g fill="${line}" opacity=".38"><path d="M153 119l5-8 5 8 7-9 6 8 7-8 6 7 7-8 7 7"/></g><ellipse cx="393" cy="41" rx="3.5" ry="1.8" fill="${line}"/>`,
    pteranodon: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M54 70q79 23 145 88M91 73q63 30 108 87M391 78q-82 20-156 80M354 79q-67 29-119 80" stroke-width="2" opacity=".48"/><path d="M134 90l-38 31m222-28 43 27" stroke-width="2" opacity=".34"/></g><path d="M240 82q25 11 54 21" fill="none" stroke="${pale}" stroke-width="3" opacity=".55"/><ellipse cx="348" cy="137" rx="4" ry="1.8" fill="${line}"/>`,
    iguanodon: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M144 123q9 28 5 59M171 111q11 30 5 77M203 101q12 35 4 96M239 101q13 34 4 96M275 109q13 31 5 76" stroke-width="5" opacity=".26"/><path d="M163 248l-13 7m42-7 13 7m78-7-12 7m38-7 13 7" stroke-width="4"/></g><path d="M335 153l8-20 2 22" fill="${pale}" stroke="${line}" stroke-width="2"/><ellipse cx="402" cy="119" rx="4" ry="2" fill="${line}"/>`,
    pachy: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M346 72q26 18 57 14" stroke-width="2.5" opacity=".5"/><path d="M170 247l-13 7m42-7 13 7m72-7-12 7m38-7 13 7" stroke-width="4"/></g><g fill="${rust}" opacity=".7"><circle cx="351" cy="80" r="4"/><circle cx="365" cy="71" r="3"/><circle cx="382" cy="71" r="3.5"/><circle cx="397" cy="80" r="3"/><circle cx="335" cy="98" r="2.5"/><circle cx="408" cy="99" r="2.5"/></g><g fill="${line}" opacity=".3"><ellipse cx="321" cy="128" rx="5" ry="2"/><ellipse cx="339" cy="137" rx="4" ry="2"/></g>`,
    allosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M329 91q23-12 55-3" stroke-width="3"/><path d="M177 248l-14 8m40-8 13 7m66-8-12 8m40-8 14 7" stroke-width="4"/><path d="M170 119q43-21 89-7M160 139q52-21 107-7" stroke-width="4" opacity=".25"/></g><ellipse cx="414" cy="110" rx="4" ry="2" fill="${line}"/>`,
    carnotaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M344 69l5 17m45-16-4 18" stroke="${pale}" stroke-width="2"/><path d="M178 249l-13 7m40-7 13 7m65-7-12 7m40-7 13 7" stroke-width="4"/></g><g fill="${line}" opacity=".36"><circle cx="335" cy="107" r="3"/><circle cx="348" cy="119" r="2"/><circle cx="369" cy="108" r="2.5"/><circle cx="385" cy="124" r="2"/></g>`,
    giganotosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M315 93q42-16 91 2M317 119q45 11 103 2" stroke-width="2" opacity=".5"/><path d="M178 249l-14 7m42-7 13 7m64-7-12 7m41-7 14 7" stroke-width="4"/></g><path d="M151 130q65-32 144-10" fill="none" stroke="${pale}" stroke-width="5" opacity=".2"/>`,
    therizino: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M77 138l-20-18m44 12-17-23m43 15-13-25m39 16-8-25M190 105l-3-27m24 18 4-28m17 27 10-25" stroke-width="3"/><path d="M201 249l-15 7m43-7 14 7m46-7-10 7m38-7 13 7" stroke-width="4"/></g><ellipse cx="391" cy="51" rx="3" ry="1.6" fill="${line}"/>`,
    oviraptor: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M45 145l-23-4m29 13-25 8m49-17-19-20M174 128l-21-16m31 10-15-22m30 18-9-25M217 101l-2-25m20 20 6-24" stroke-width="3"/><path d="M181 247l-13 7m41-7 13 7m44-7-11 7m39-7 13 7" stroke-width="4"/></g>`,
    gallimimus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M47 132l-20-13m43 20-20-21m45 16-18-23M181 116l-11-22m31 15-4-25m29 19 5-24" stroke-width="2.5"/><path d="M194 249l-18 7m44-7 15 7m45-7-12 7m39-7 14 7" stroke-width="4"/><path d="M326 64q14 8 24 3M320 81q14 7 23 3" stroke-width="2" opacity=".4"/></g>`,
    apatosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M319 72q14 9 25 4M314 93q15 9 27 4M309 115q16 8 29 4" stroke-width="2" opacity=".43"/><path d="M159 253l-14 7m39-7 13 7m89-7-13 7m41-7 14 7" stroke-width="4"/></g><g fill="${line}" opacity=".25"><ellipse cx="195" cy="131" rx="7" ry="3"/><ellipse cx="226" cy="113" rx="6" ry="2.5"/><ellipse cx="258" cy="128" rx="8" ry="3"/></g>`,
    argentinosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M330 64q15 9 26 4M324 87q16 9 28 4M317 111q17 8 30 4" stroke-width="2" opacity=".42"/><path d="M134 253l-15 7m48-7 14 7m104-7-14 7m50-7 15 7" stroke-width="4"/><path d="M129 161q80 25 173 3" stroke-width="2" opacity=".3"/></g>`,
    corythosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M340 75q25-19 52 2M342 90q23-13 46 0" stroke-width="2" opacity=".5"/><path d="M176 121q18 32 11 72m24-83q19 38 10 91m27-93q18 38 10 87" stroke-width="5" opacity=".22"/><path d="M175 248l-13 7m40-7 13 7m69-7-12 7m40-7 13 7" stroke-width="4"/></g>`,
    edmontosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M158 131q72-30 145-3" stroke="${pale}" stroke-width="6" opacity=".23"/><path d="M173 249l-13 7m42-7 13 7m69-7-12 7m40-7 13 7" stroke-width="4"/></g><g fill="${line}" opacity=".28"><ellipse cx="332" cy="116" rx="5" ry="2"/><ellipse cx="349" cy="126" rx="4" ry="2"/><ellipse cx="369" cy="115" rx="3" ry="1.5"/></g>`,
    protoceratops: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M326 100q25 28 18 66M350 83q17 38 10 84M376 82q8 37 0 79" stroke-width="2" opacity=".45"/><path d="M149 252l-13 7m38-7 12 7m97-7-12 7m36-7 13 7" stroke-width="4"/></g><g fill="${rust}" opacity=".45"><circle cx="340" cy="121" r="3"/><circle cx="355" cy="136" r="2.5"/><circle cx="373" cy="113" r="2.5"/></g>`,
    kentrosaurus: `<g fill="none" stroke="${line}" stroke-linecap="round"><path d="M164 99l5 25m34-50 5 34m39-42 4 39m41-22 1 31" stroke-width="2" opacity=".5"/><path d="M160 252l-13 7m39-7 13 7m92-7-12 7m39-7 13 7" stroke-width="4"/><path d="M150 181q81 30 174 0" stroke-width="2" opacity=".4"/></g>`
  };
  return details[dino.type] || "";
}

let svgInstance = 0;

function dinoSvg(dino, label = true) {
  const instanceId = `${dino.id}-${svgInstance++}`;
  const skinId = `skin-${instanceId}`;
  const accentId = `accent-${instanceId}`;
  const shadowId = `shadow-${instanceId}`;
  return `<svg viewBox="0 0 450 280" role="${label ? "img" : "presentation"}" ${label ? `aria-label="Child-friendly life reconstruction of ${dino.name}"` : "aria-hidden=\"true\""} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${skinId}" x1="0" y1="0" x2=".2" y2="1">
        <stop offset="0" stop-color="${dino.belly}"/><stop offset=".28" stop-color="${dino.color}"/><stop offset=".72" stop-color="${dino.color}"/><stop offset="1" stop-color="#34382d"/>
      </linearGradient>
      <radialGradient id="${accentId}" cx="40%" cy="25%" r="80%">
        <stop offset="0" stop-color="#d8c69d"/><stop offset=".38" stop-color="${dino.belly}"/><stop offset="1" stop-color="${dino.color}"/>
      </radialGradient>
      <filter id="${shadowId}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="5" stdDeviation="3" flood-color="#18231b" flood-opacity=".25"/></filter>
    </defs>
    <g stroke-linecap="round" stroke-linejoin="round" filter="url(#${shadowId})">${svgParts(dino, instanceId)}</g>
  </svg>`;
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
$("#card-dots").innerHTML = dinosaurs.map((dino, index) => `<span class="card-dot${index === 0 ? " is-current" : ""}" data-index="${index}" aria-current="${index === 0}"></span>`).join("");
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

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js?v=5").catch(() => {}));
}
