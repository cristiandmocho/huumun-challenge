<template>
  <div class="avatar">
    <div class="picture" :style="`background-image: url(${getAvatarImageById(url)})`"></div>
    <h4>{{ name }}</h4>
  </div>
</template>

<script setup>
import { getIdFromUrl } from '../services/utilities.js';

defineProps({
  name: '',
  url: '',
});

function getAvatarImageById(avatarUrl) {
  const id = getIdFromUrl(avatarUrl);
  return `/assets/characters/${id}.jpg`;
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 120px;
  display: grid;
  justify-items: center;
  gap: 16px;

  .picture {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    overflow: hidden;
    background: center center no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 1px;
  }

  h4 {
    font-size: 0.9em;
    font-weight: 500;
    opacity: 0.5;
    text-align: center;
  }
}
</style>
