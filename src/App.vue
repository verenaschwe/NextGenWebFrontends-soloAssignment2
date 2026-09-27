<template>
  <main>
    <h1>QuickNotes</h1>

    <NoteForm @add-note="addNote" />

    <SearchBar v-model="searchTerm" />

    <div>
      <NoteCard
        v-for="note in filteredNotes"
        :key="note.id"
        :note="note"
        @delete="deleteNote"
      />
    </div>

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

const {
  searchTerm,
  filteredNotes,
  addNote,
  deleteNote
} = useNotes()
</script>

<style>

</style>