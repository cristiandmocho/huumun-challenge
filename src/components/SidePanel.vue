<template>
  <div :class="`side-panel ${open ? 'open' : ''}`">
    <h3>{{ film != null ? film.url : '' }}</h3>
  </div>
</template>

<script setup>
defineProps({
  open: Boolean,
  film: { title: '', director: '', producer: '', release_date: '', opening_crawl: '', url: '' },
});
</script>

<style lang="scss" scoped>
.side-panel {
  display: grid;
  position: absolute;
  height: 100%;
  width: 600px;
  top: 0;
  left: -610px;
  z-index: 2;
  background-color: #ddd;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 12px 3px;
  padding: 2em;
  transition: all 0.5s ease-out;

  &.open {
    left: 0;
  }
}
</style>
