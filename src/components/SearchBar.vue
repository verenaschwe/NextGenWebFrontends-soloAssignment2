<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    placeholder="Notizen suchen..."
  />
</template>

<script setup>
defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>