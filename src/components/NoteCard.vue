<template>
  <BaseCard>
    <template #header>
      <div class="header">
        <h3>{{ note.title }}</h3>
        <button @click="$emit('delete', note.id)">Löschen</button>
      </div>
    </template>

    <p>{{ note.content }}</p>

    <div class="tags">
      <span v-for="tag in note.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from './BaseCard.vue'

defineProps({
  note: {
    type: Object,
    required: true
  }
})

defineEmits(['delete'])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0;
}

button {
  border: none;
  background: #f3f3f3;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.tags {
  display: flex;
  gap: 6px;
  margin-top: 12px;
}

.tags span {
  background: #eee;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
}
</style>