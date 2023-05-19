const BaseURL = 'https://swapi.dev/api';

export async function GetFilms() {
  const data = await fetch(`${BaseURL}/films`);
  const json = await data.json();

  return json.results;
}

export async function GetPeopleByUrl(url) {
  const data = await fetch(url);
  const json = await data.json();

  return json;
}

export async function GetPeopleByFilm(filmId) {
  const data = await fetch(`${BaseURL}/films/${filmId}`);
  const json = await data.json();
  const chars = json.characters;
  const result = [];

  for (let i = 0; i < chars.length; i++) {
    const char = await GetPeopleByUrl(chars[i]);
    result.push(char);
  }

  return result;
}
