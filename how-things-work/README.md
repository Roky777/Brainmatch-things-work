# How Things Work

Float/Sink and Spin/Roll matching variant. Run `npm start`, then choose How Things Work from the library or open `/how-things-work/`.

Uses the same shared engine, visual worlds, preview-before-flip, Practice/Beat Sparky, hints, pause/audio, compact XP and independent saves. Easy/Medium/Hard use 4/6/8 cards (2/3/4 pairs).

Easy pool: stone–Sinks, leaf–Floats, ball–Rolls, top–Spins. Medium: coin–Sinks, cork–Floats, ball–Rolls, bangle–Spins. Hard: stone–Sinks, empty bottle–Floats, ball–Rolls, top–Spins. Shuffled sampling includes all eight supplied objects across pools and repeat plays. Since there are only four behaviour labels, each pool contains exactly one of each: no child can choose an apparently correct identical label and be marked wrong due to a hidden ID. Difficulty grows through board size and Sparky memory, not extra reading.

These are the supplied classroom behaviour examples, not exclusive physical properties: a bangle is shown upright on its edge for spinning; the empty plastic bottle is capped and air-filled for floating. An object can behave differently with another material, orientation or setup. Gameplay cards contain only the object and a short behaviour word.

Five new transparent object illustrations use the built-in image-generation tool; prompts and paths are in ASSET_PROMPTS.md. Leaf and ball reuse existing repo artwork. Coin reuses Money Match's authentic ₹2 coin image; attribution/licence is retained in [../money-match/CURRENCY_SOURCES.md](../money-match/CURRENCY_SOURCES.md). The coin card retains the applicable CC BY-SA 4.0 derivative-art licence.

200 XP: three worlds × three boards × (Practice 14 + Beat Sparky 8), plus 2 XP journey-completion bonus. First clears only. Rebuild text cards with `node how-things-work/scripts/generate-word-art.mjs`.
