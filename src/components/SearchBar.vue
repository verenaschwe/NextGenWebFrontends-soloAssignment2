<template>
  <!-- Bei jeder Eingabe wird der neue Wert an die Parent-Komponente gesendet. Dadurch funktioniert v-model mit der eigenen Komponente. -->
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    placeholder="Notizen suchen..."
  />
</template>

<script setup>
// Aktueller Suchwert wird von der Parent-Komponente übergeben
defineProps(['modelValue'])

// Event, mit dem der neue Suchwert zurückgegeben wird
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>