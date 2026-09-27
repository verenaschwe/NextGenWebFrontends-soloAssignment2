<template>
  <BaseCard>
    <!-- Der Header-Slot von BaseCard enthält Titel und Löschen-Button -->
    <template #header>
      <div class="header">
        <h3>{{ note.title }}</h3>
        <!-- Beim Klicken wird ein delete-Event an die Parent-Komponente gesendet -->
        <button @click="$emit('delete', note.id)">Löschen</button>
      </div>
    </template>

    <!-- Inhalt der Notiz -->
    <p>{{ note.content }}</p>

    <!-- Alle Tags der Notiz werden angezeigt -->
    <div class="tags">
      <span v-for="tag in note.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from './BaseCard.vue'

// note wird von der Parent-Komponente an NoteCard übergeben
defineProps({
  note: {
    type: Object,
    required: true
  }
})

// Event, mit dem NoteCard das Löschen an die Parent-Komponente meldet
defineEmits(['delete'])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

h3 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 500;
  color: #30282a;
}

p {
  margin: 10px 0 0;
  line-height: 1.45;
  color: #665d60;
  font-size: 14px;
}

button {
  border: 1px solid #eadde1;
  background: #fff;
  color: #8d6670;

  padding: 5px 9px;
  border-radius: 7px;

  cursor: pointer;
  font-size: 12px;
  transition: 0.2s ease;
}

button:hover {
  background: #f8e9ed;
  border-color: #e4c1cb;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.tags span {
  padding: 3px 8px;

  background: #f8e9ed;
  color: #a36576;

  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}
</style>