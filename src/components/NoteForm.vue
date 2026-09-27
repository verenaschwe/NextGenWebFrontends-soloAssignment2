<template>
  <!-- prevent verhindert, dass die Seite beim Absenden neu geladen wird -->
  <form @submit.prevent="submitNote">
    <!-- v-model verbindet das Input-Feld mit der title-Variable -->
    <input
      v-model="title"
      type="text"
      placeholder="Titel"
      required
    />

    <!-- v-model verbindet die Textarea mit der content-Variable -->
    <textarea
      v-model="content"
      placeholder="Text"
      required
    ></textarea>

    <!-- Tags werden als Text eingegeben und später durch Kommas getrennt -->
    <input
      v-model="tags"
      type="text"
      placeholder="Tags, mit Komma trennen"
    />

    <button type="submit">Notiz hinzufügen</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from '../types/note'

// Reaktive Variablen für die Eingabefelder
const title = ref('')
const content = ref('')
const tags = ref('')

// Event, mit dem die neue Notiz an App.vue gesendet wird
const emit = defineEmits(['add-note'])

function submitNote() {
  // Neue Notiz aus den Eingaben erstellen
  const note = {
    id: Date.now(),
    title: title.value,
    content: content.value,
    // Tags werden am Komma getrennt und von Leerzeichen bereinigt
    tags: tags.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')
  }

  // Neue Notiz an die Parent-Komponente senden
  emit('add-note', note)

  // Eingabefelder nach dem Erstellen wieder leeren
  title.value = ''
  content.value = ''
  tags.value = ''
}
</script>

<style scoped>

</style>