<template>
  <form @submit.prevent="submitNote">
    <input
      v-model="title"
      type="text"
      placeholder="Titel"
      required
    />

    <textarea
      v-model="content"
      placeholder="Text"
      required
    ></textarea>

    <input
      v-model="tags"
      type="text"
      placeholder="Tags, mit Komma trennen"
    />

    <button type="submit">Notiz hinzufügen</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const content = ref('')
const tags = ref('')

const emit = defineEmits(['add-note'])

function submitNote() {
  const note = {
    id: Date.now(),
    title: title.value,
    content: content.value,
    tags: tags.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')
  }

  emit('add-note', note)

  title.value = ''
  content.value = ''
  tags.value = ''
}
</script>

<style scoped>

</style>