# QuickNotes

## Setup

1. Repository klonen bzw. herunterladen.
2. Im Projektordner die Abhängigkeiten installieren:

```bash
npm install
```

3. Entwicklungsserver starten:

```bash
npm run dev
```

4. Die angezeigte lokale Adresse im Browser öffnen.

## Struktur

Die Notiz-Logik liegt im `useNotes`-Composable, damit die Komponenten selbst keine Liste verwalten müssen. Das `useLocalStorage`-Composable übernimmt die Speicherung und das Laden der Notizen. Dadurch bleiben die Komponenten übersichtlich und die Logik kann getrennt von der Darstellung behandelt werden.

## Reflexion

### Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?

Props sollen von der Child-Komponente nicht direkt verändert werden. `NoteCard` meldet das Löschen deshalb mit einem `delete`-Event an die übergeordnete Komponente. `App.vue` übernimmt das Event und ruft anschließend `deleteNote()` aus `useNotes` auf.

### Was passiert, wenn zwei Komponenten dasselbe `useNotes()` aufrufen – teilen sie sich die Notizen oder nicht?

Nein. Bei jedem Aufruf von `useNotes()` werden eigene reaktive Variablen erstellt. Die beiden Komponenten hätten also grundsätzlich unterschiedliche `notes`- und `searchTerm`-Zustände. Die Notizen werden aber über denselben `localStorage`-Eintrag gespeichert, sodass sie beim erneuten Laden denselben gespeicherten Stand erhalten.

### Wozu dient das Note-Interface, wenn der Code auch ohne liefe?

Das `Note`-Interface beschreibt, wie eine Notiz aufgebaut sein soll. Dadurch kann TypeScript überprüfen, ob eine Notiz die benötigten Eigenschaften wie `id`, `title`, `content` und `tags` besitzt. Der Code kann zwar auch ohne Interface laufen, aber das Interface macht den erwarteten Aufbau der Daten klarer und hilft dabei, Fehler früher zu erkennen.

## Sonstiges
Kommentare und css wurde mittels KI erstellt.