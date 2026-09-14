# Jackson Quotes

## Background and Goal
- An original, retro-game-inspired personal quote site for Jackson. The home page is titled `杰神语录 · THE BOOK OF JACKSON`.
- The first prototype uses simulated quotes so the real, unstructured archive can be added later without changing the site framework.

## Current Status
- Initial static prototype follows the reference site’s station hero, daily fortune card, chapter list, and archive order, with a small playable platform game.
- No external deployment or third-party assets are used.

## Decisions
### 2026-09-13 — Interaction structure
- Problem: The reference site has a game and quote archive, while this site needs a distinct Jackson identity.
- Assistant view: Keep the game as a lightweight standalone easter egg rather than making quotes into game prizes; make the daily quote a draw-and-interpret ritual.
- User view: The homepage title is `杰神语录 · THE BOOK OF JACKSON`; `sayless` enters a game. Coins produce `saymore +1`; the game should include meaningful obstacles but no quote-answer mechanic.
- Decision and reason: Build an original pixel platformer with moving hazards, pits, checkpoint-like restarts, and coin blocks; keep the archive independently browsable; use a random fortune draw for `今日一句`.
- Execution impact: Initial data is isolated in `app.js` and can be replaced with organized quotes later.

### 2026-09-13 — Reference-led revision
- User view: Recreate the reference site’s style and page layout, changing only the relevant Jackson elements; provided pixel images belong in the game and hero.
- Decision and reason: The original interpretation was removed in favor of a close purple CRT station layout with the reference page’s information hierarchy and section sequence.
- Execution impact: The user-provided assets are local in `assets/`; simulated content remains replaceable in `app.js`.

## Change Log
- 2026-09-14: Increased the desktop station walker display height to 150px; mobile uses 96px to preserve the hero layout.
- 2026-09-14: Converted the user-supplied walking-video background to a compact transparent WebM walker and placed it at the station screen's lower right. The keying tolerance was tightened to preserve gray clothing and legs; the display was enlarged to button-adjacent scale. It loops outside game mode and hides while the game is active.
- 2026-09-14: Removed unstable chapter-based quote numbers; every library entry now uses the neutral `杰语 ·` prefix.
- 2026-09-14: Replaced the five recommendation-card placeholders with user-supplied video titles, in the supplied link order.
- 2026-09-14: Replaced the `杰外之音` simulated archive with a `杰神推荐` card collection. It contains five user-supplied Bilibili interview links, each opening in a new tab.
- 2026-09-14: Replaced the daily blessing with the user-supplied AI/all-in/purity version; added five quotes and reorganized the full library into seven content-led collections: speaking and resolve, AI/work, Mian/classroom, food/places, Guguga mythology, emotions/relationships, and system reports.
- 2026-09-14: Removed two invisible gaps that were drawn as ordinary ground, and rebuilt the platform sequence so the first jump reaches a low platform before progressing to the higher pair.
- 2026-09-14: Restored the game surface to the same fixed hero-screen ratio as the homepage, moved its HUD and controls onto that surface, and constrained the close control to a small top-right icon. Added seven supplied quotes as `第七辑`.
- 2026-09-14: Changed the platform game from a fixed modal to an in-station screen replacement, keeping the rest of the page scrollable. Death and manual restart now reset coins and score; coin hits also show an in-game `saymore +1` float.
- 2026-09-14: Added seventeen supplied quotes as `第六辑`, preserving the duplicated erythritol line. The archive now derives from the same quote collection as the chapter list and random draw, preventing future mismatches.
- 2026-09-14: Replaced the section-bounded watermark images with one visible full-page avatar watermark layer, removed the legacy penguin-decoration creation code, and added the Camel Xiangzi quote to the draw and archive data.
- 2026-09-14: Moved the avatar pattern from a foreground overlay to the page background so opaque cards, buttons, and text boxes fully cover it.
- 2026-09-14: Added the supplied avatar pattern as sparse, low-opacity watermarks on large fortune, chapter, and archive background areas; text, cards, controls, and game remain unwatermarked and above the pattern.
- 2026-09-14: Updated the Pinduoduo warehouse quote, added two science-building/chemistry quotes, and removed the accidental global click-to-top handler so reading or copying chapter quotes no longer returns the visitor to the homepage.
- 2026-09-14: Replaced all simulated chapter and archive quotes with the first eight user-supplied Jackson quotes. Daily fortune draws now sample only from this real set; neutral “第一辑” through “第四辑” headings are temporary until the user provides preferred categories.
- 2026-09-14: Removed the temporary `#fortune` CSS behavior that hid the station on page load; the homepage remains visible regardless of the URL fragment.
- 2026-09-13: Diagnosed `PRESS START`: legacy JavaScript was intercepting the native fragment without moving the viewport. Removed that interception and added a CSS target state that collapses the station when `#fortune` is reached; verified in a fresh local browser session (`#fortune`, station hidden, fortune at viewport top).
- 2026-09-13: Replaced the `PRESS START` button with a native `#fortune` anchor so reaching the signing section no longer depends on JavaScript execution.
- 2026-09-13: Added an independent DOM-ready `PRESS START` binding so the entry scrolls to the fortune section even if legacy page scripts fail elsewhere.
- 2026-09-13: Made fortune signing fully in-place: the signature count increments only by draws during the current visit; both draw/copy controls share equal, shadow-free styling; copy now writes the visible signed quote to the clipboard with a local fallback.
- 2026-09-13: Kept fortune draws in place by preventing click navigation, moved the quote-card character to the right side facing the text, and replaced the station-stage background with the user-provided pixel office image.
- 2026-09-13: Made the fortune draw explicitly select one random quote from the chapter library on every click and shifted the interface palette from purple to penguin-inspired slate blue, ice gray, and beak yellow.
- 2026-09-13: Expanded the penguin easter eggs to stable, visible desktop placements around station, fortune, chapter, and archive edges; decorations remain outside primary content and hide only on narrow mobile layouts.
- 2026-09-13: Replaced the framed source-image crops with an alpha-preserving penguin asset, and moved/hid decorations responsively so they appear only in desktop side whitespace.
- 2026-09-13: Changed the fortune CTA from “抽取杰签” on first visit to “再抽一签” only after a draw; standardized both fortune button widths; added small cropped penguin easter eggs using the user-provided source image.
- 2026-09-13: Simplified the station hero: removed the walking character, floating sprite, and in-stage Jackson/Jackson Studio title marks so the stage stays visually empty until the game opens.
- 2026-09-13: Rebuilt the hero animation as a three-layer pixel puppet (torso plus independently swinging legs), lifted above all hero controls, and preserved a fade-out only during game entry.
- 2026-09-13: Added continuous hero-character patrol animation; the character fades only while the game overlay is open and returns on close.
- 2026-09-13: Created the standalone static prototype folder and project record.
