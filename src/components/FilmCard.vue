<template>
  <div class="film-card">
    <div class="picture" :style="`background-image: url(${getFilmImageById(film.url)})`"></div>
    <section class="info">
      <h3>{{ film.title }}</h3>
      <span class="crawling-text">{{ film.opening_crawl }}</span>
      <span class="info">Director: {{ film.director }}</span>
      <span class="info">Producer: {{ film.producer }}</span>
      <span class="info">Release date: {{ formatDate(film.release_date) }}</span>
    </section>
  </div>
</template>

<script setup>
import { getIdFromUrl } from '../services/utilities.js';

defineProps({
  film: { title: '', director: '', producer: '', release_date: '', opening_crawl: '', url: '' },
});

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString();
}

function getFilmImageById(filmUrl) {
  const id = getIdFromUrl(filmUrl);
  return `assets/films/${id}.jpg`;
}
</script>

<style lang="scss" scoped>
.film-card {
  display: grid;
  min-width: 250px;
  max-width: 275px;
  background-color: var(--vt-c-white);
  overflow: hidden;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 1px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(58, 159, 241, 0.5) 0 0 15px 3px;
  }

  .picture {
    width: 100%;
    height: 360px;
    background: top center no-repeat;
    background-size: cover;
  }

  section.info {
    display: grid;
    grid-template-rows: min-content auto min-content min-content min-content;
    padding: 8px;

    h3 {
      font-weight: 700;
    }

    .crawling-text {
      display: block;
      font-size: 0.8rem;
      opacity: 0.7;
      overflow-y: auto;
      min-height: 125px;
      max-height: 160px;
    }

    span.info {
      font-size: 0.75rem;
    }
  }
}
</style>
