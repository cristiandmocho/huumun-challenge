<script setup>
import { ref, onMounted } from 'vue';
import { GetFilms, GetPeopleByFilm, GetPeopleByUrl } from './services/api-fetch.js';
import { getIdFromUrl } from './services/utilities.js';
import FilmCard from './components/FilmCard.vue';
import Spinner from './components/Spinner.vue';
import SidePanel from './components/SidePanel.vue';

const films = ref([]);
const film = ref(null);
const chars = ref([]);
const panelState = ref(false);

onMounted(async () => {
  films.value = await GetFilms();
});

async function onCardClick(selected) {
  film.value = selected;
  panelState.value = true;
  chars.value = [];
  chars.value = await GetPeopleByFilm(getIdFromUrl(selected.url));
}
</script>

<template>
  <header>
    <h2>Star Wars Film Database</h2>
  </header>
  <section class="main">
    <Spinner :visible="films.length === 0"></Spinner>
    <FilmCard v-for="film in films" :film="film" :id="film.episode_id" @click="onCardClick(film)"></FilmCard>
    <SidePanel :open="panelState" :chars="chars" :title="film?.title"></SidePanel>
  </section>
  <footer>
    <span> Cristian Mocho (<a href="mailto:cristian.mocho@ezsystems.net">cristian.mocho@ezsystems.net</a>) </span>
    <a href="https://github.com/cristiandmocho/huumun-challenge"
      ><svg
        width="16"
        height="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        version="1.1"
        data-view-component="true"
        class="octicon octicon-mark-github v-align-middle"
      >
        <path
          d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
        ></path></svg
      >&nbsp;&nbsp;Get the project here!</a
    >
  </footer>
</template>

<style lang="scss" scoped>
header {
  padding: 1em;
  text-align: center;

  h2 {
    font-size: 2em;
    font-weight: 700;
  }
}

footer {
  padding: 1em;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
}

section.main {
  padding: 2em;
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
  overflow-x: auto;
}
</style>
