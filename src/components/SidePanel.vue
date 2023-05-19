<template>
  <div :class="`side-panel ${open ? 'open' : ''}`">
    <button
      @click="
        () => {
          open = false;
        }
      "
    >
      &times;
    </button>
    <h3>{{ title }}</h3>
    <section class="avatar-list">
      <Spinner :visible="chars.length === 0"></Spinner>
      <Avatar v-for="char in chars" :key="char.url" :url="char.url" :name="char.name"></Avatar>
    </section>
  </div>
</template>

<script setup>
import Avatar from './Avatar.vue';
import Spinner from './Spinner.vue';

defineProps({
  open: Boolean,
  title: '',
  chars: [],
});
</script>

<style lang="scss" scoped>
.side-panel {
  display: grid;
  grid-template-rows: min-content auto;
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

  button {
    position: absolute;
    border: none;
    background: none;
    font-size: 2em;
    margin-left: calc(100% - 40px);
    margin-top: 10px;
    cursor: pointer;
  }
  &.open {
    left: 0;
  }

  h3 {
    font-size: 1.6em;
    font-weight: 700;
    padding-bottom: 20px;
    text-align: center;
  }
  .avatar-list {
    padding-top: 18px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-grow: 2;
    gap: 14px;
    justify-content: space-between;
    align-content: start;
  }
}
</style>
