<template>
  <main>
    <h1>QuickNotes</h1>

    <!-- Formular zum Erstellen einer neuen Notiz -->
    <NoteForm @add-note="addNote" />

    <!-- Suchfeld mit v-model -->
    <SearchBar v-model="searchTerm" />

    <div>
      <!-- Für jede gefilterte Notiz wird eine NoteCard erstellt -->
      <NoteCard
        v-for="note in filteredNotes"
        :key="note.id"
        :note="note"
        @delete="deleteNote"
      />
    </div>

    <!-- Wird angezeigt, wenn keine Notizen zum Suchbegriff passen -->
    <p v-if="filteredNotes.length === 0">
      Keine Notizen gefunden.
    </p>
  </main>
</template>

<script setup>
import NoteForm from './components/NoteForm.vue'
import SearchBar from './components/SearchBar.vue'
import NoteCard from './components/NoteCard.vue'
import { useNotes } from './composables/useNotes'

// Notiz-Logik aus dem Composable holen
const {
  searchTerm,
  filteredNotes,
  addNote,
  deleteNote
} = useNotes()
</script>

<style>
:root {
  --pink: #d99aaa;
  --pink-light: #f8e9ed;
  --pink-dark: #b87588;

  --background: #faf8f8;
  --card: rgba(255, 255, 255, 0.88);
  --text: #2f292b;
  --text-light: #857b7e;
  --border: rgba(180, 145, 155, 0.18);

  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

main > div:last-of-type {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(
      circle at top right,
      rgba(217, 154, 170, 0.16),
      transparent 30%
    ),
    linear-gradient(135deg, #fffafa, #f8f3f4);

  color: var(--text);
}

main {
  width: min(900px, 92%);
  margin: 0 auto;
  padding: 70px 0;
}

/* Überschrift */

h1 {
  margin: 0 0 40px;
  text-align: center;

  font-family: Georgia, serif;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -1px;

  color: #30282a;
}

/* Formular und Suche */

form {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 26px;
  margin-bottom: 18px;

  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;

  box-shadow: 0 12px 35px rgba(70, 45, 52, 0.07);
  backdrop-filter: blur(12px);
}

input,
textarea {
  width: 100%;
  padding: 13px 15px;

  border: 1px solid #eadde1;
  border-radius: 11px;

  background: rgba(255, 255, 255, 0.75);
  color: var(--text);

  font: inherit;

  outline: none;
  transition: 0.2s ease;
}

textarea {
  min-height: 110px;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--pink);
  box-shadow: 0 0 0 3px rgba(217, 154, 170, 0.12);
}

/* Buttons */

button {
  width: fit-content;
  padding: 11px 18px;

  border: none;
  border-radius: 10px;

  background: var(--pink);
  color: white;

  font: inherit;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s ease;
}

form button {
  width: 100%;
}

button:hover {
  background: var(--pink-dark);
  transform: translateY(-1px);
}

/* Suchfeld */

main > input {
  margin-bottom: 28px;

  background: rgba(255, 255, 255, 0.9);
}

/* Notizen */

main > div:last-of-type {
  display: grid;
  gap: 16px;
}

/* Wenn keine Notizen vorhanden sind */

p {
  color: var(--text-light);
}
</style>