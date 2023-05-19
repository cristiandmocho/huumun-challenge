<template>
  <div class="spinner" :style="`display: ${visible ? 'block' : 'none'}`"></div>
</template>

<script setup>
defineProps({ visible: Boolean });
</script>

<style lang="scss" scoped>
.spinner {
  margin: auto;
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
