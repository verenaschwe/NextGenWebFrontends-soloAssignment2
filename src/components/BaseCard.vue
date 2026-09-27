<template>
  <div>
    <!-- Hier wird der Inhalt des benannten Header-Slots eingefügt -->
    <div>
      <slot name="header"></slot>
    </div>

    <!-- Hier kommt der normale Inhalt der Card hinein -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
div {
  padding: 16px 18px;

  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(180, 145, 155, 0.16);
  border-radius: 15px;

  box-shadow: 0 7px 20px rgba(70, 45, 52, 0.05);

  backdrop-filter: blur(10px);
}
</style>