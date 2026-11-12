// Single source of truth for cheat sheet and game.
// keys: sequence after the prefix. "prefix" is added automatically unless prefix:false.
// match: what the game accepts after the prefix ("1..9" = any digit 1-9).
window.HERDR = {
  prefix: "ctrl+b",
  i18n: {
    en: {
      title: "Herdr Keyboard Cheat Sheet", sub: "Default keybindings · press the prefix (Ctrl+B), release, then the key",
      search: "Filter shortcuts…", game: "Play the game", sheet: "Cheat sheet", prefixNote: "Prefix",
      prefixText: "Every shortcut below starts with the prefix key, followed by the shown key. Example: Ctrl+B, then V.",
      footer: "Based on the default config from herdr.dev. Run `herdr --default-config` to see yours.",
      gameTitle: "Herdr Key Trainer", gameSub: "Press the shortcut for the action shown.",
      score: "Score", streak: "Streak", best: "Best", round: "Round", hint: "Show hint", skip: "Skip",
      start: "Start", again: "Play again", prompt: "Which shortcut does this?", step1: "Press the prefix: Ctrl+B",
      step2: "Now press the key…", correct: "Correct!", wrong: "Not quite – expected:", done: "Finished!",
      mode: "Rounds", all: "All", noGroup: "Category", back: "Back to cheat sheet", noPrefix: "no prefix needed",
      any1to9: "any digit 1–9"
    },
    de: {
      title: "Herdr Tastatur-Cheat-Sheet", sub: "Standard-Tastenkürzel · Prefix (Strg+B) drücken, loslassen, dann die Taste",
      search: "Kürzel filtern…", game: "Spiel starten", sheet: "Cheat-Sheet", prefixNote: "Prefix",
      prefixText: "Jedes Kürzel unten beginnt mit der Prefix-Taste, danach folgt die gezeigte Taste. Beispiel: Strg+B, dann V.",
      footer: "Basiert auf der Standard-Konfiguration von herdr.dev. Mit `herdr --default-config` siehst du deine.",
      gameTitle: "Herdr Tasten-Trainer", gameSub: "Drücke das Kürzel für die gezeigte Aktion.",
      score: "Punkte", streak: "Serie", best: "Best", round: "Runde", hint: "Hinweis zeigen", skip: "Überspringen",
      start: "Start", again: "Nochmal spielen", prompt: "Welches Kürzel macht das?", step1: "Drücke den Prefix: Strg+B",
      step2: "Jetzt die Taste drücken…", correct: "Richtig!", wrong: "Leider nein – erwartet:", done: "Geschafft!",
      mode: "Runden", all: "Alle", noGroup: "Kategorie", back: "Zurück zum Cheat-Sheet", noPrefix: "kein Prefix nötig",
      any1to9: "beliebige Ziffer 1–9"
    }
  },
  groups: [
    { id: "general", en: "General", de: "Allgemein", items: [
      { k: "?", m: "?", en: "Show help", de: "Hilfe anzeigen" },
      { k: "s", m: "s", en: "Open settings", de: "Einstellungen öffnen" },
      { k: "q", m: "q", en: "Detach from session", de: "Session trennen (detach)" },
      { k: "Shift+R", m: "shift+r", en: "Reload config", de: "Konfiguration neu laden" },
      { k: "o", m: "o", en: "Open notification target", de: "Ziel der Benachrichtigung öffnen" },
      { k: "[", m: "[", en: "Enter copy mode", de: "Kopiermodus starten" },
      { k: "e", m: "e", en: "Edit scrollback in editor", de: "Scrollback im Editor öffnen" },
      { k: "b", m: "b", en: "Toggle sidebar", de: "Seitenleiste ein-/ausklappen" }
    ]},
    { id: "panes", en: "Panes", de: "Panes", items: [
      { k: "V", m: "v", en: "Split vertically (side by side)", de: "Vertikal teilen (nebeneinander)" },
      { k: "-", m: "-", en: "Split horizontally (stacked)", de: "Horizontal teilen (übereinander)" },
      { k: "x", m: "x", en: "Close pane", de: "Pane schließen" },
      { k: "z", m: "z", en: "Zoom pane (toggle)", de: "Pane zoomen (umschalten)" },
      { k: "r", m: "r", en: "Resize mode", de: "Größenänderungs-Modus" },
      { k: "h", m: "h", en: "Focus pane left", de: "Pane links fokussieren" },
      { k: "j", m: "j", en: "Focus pane below", de: "Pane darunter fokussieren" },
      { k: "k", m: "k", en: "Focus pane above", de: "Pane darüber fokussieren" },
      { k: "l", m: "l", en: "Focus pane right", de: "Pane rechts fokussieren" },
      { k: "Shift+H", m: "shift+h", en: "Swap pane left", de: "Pane nach links tauschen" },
      { k: "Shift+J", m: "shift+j", en: "Swap pane down", de: "Pane nach unten tauschen" },
      { k: "Shift+K", m: "shift+k", en: "Swap pane up", de: "Pane nach oben tauschen" },
      { k: "Shift+L", m: "shift+l", en: "Swap pane right", de: "Pane nach rechts tauschen" },
      { k: "Tab", m: "tab", en: "Next pane", de: "Nächste Pane" },
      { k: "Shift+Tab", m: "shift+tab", en: "Previous pane", de: "Vorherige Pane" },
      { k: "Shift+P", m: "shift+p", en: "Rename pane", de: "Pane umbenennen" }
    ]},
    { id: "tabs", en: "Tabs", de: "Tabs", items: [
      { k: "c", m: "c", en: "New tab", de: "Neuer Tab" },
      { k: "n", m: "n", en: "Next tab", de: "Nächster Tab" },
      { k: "p", m: "p", en: "Previous tab", de: "Vorheriger Tab" },
      { k: "1 … 9", m: "1..9", en: "Jump to tab 1–9", de: "Zu Tab 1–9 springen" },
      { k: "Shift+T", m: "shift+t", en: "Rename tab", de: "Tab umbenennen" },
      { k: "Shift+X", m: "shift+x", en: "Close tab", de: "Tab schließen" }
    ]},
    { id: "workspaces", en: "Workspaces", de: "Workspaces", items: [
      { k: "Shift+N", m: "shift+n", en: "New workspace", de: "Neuer Workspace" },
      { k: "Shift+G", m: "shift+g", en: "New worktree", de: "Neuer Worktree" },
      { k: "w", m: "w", en: "Workspace picker", de: "Workspace-Auswahl" },
      { k: "g", m: "g", en: "Go to…", de: "Gehe zu…" },
      { k: "Shift+W", m: "shift+w", en: "Rename workspace", de: "Workspace umbenennen" },
      { k: "Shift+D", m: "shift+d", en: "Close workspace", de: "Workspace schließen" }
    ]},
    { id: "navigate", en: "Navigate mode (no prefix)", de: "Navigate-Modus (ohne Prefix)", noPrefix: true, items: [
      { k: "↑", m: "arrowup", en: "Workspace up", de: "Workspace hoch" },
      { k: "↓", m: "arrowdown", en: "Workspace down", de: "Workspace runter" },
      { k: "h / ←", m: "h", en: "Pane left", de: "Pane links" },
      { k: "j", m: "j", en: "Pane down", de: "Pane unten" },
      { k: "k", m: "k", en: "Pane up", de: "Pane oben" },
      { k: "l / →", m: "l", en: "Pane right", de: "Pane rechts" }
    ]}
  ]
};
