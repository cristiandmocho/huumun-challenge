export function getIdFromUrl(url) {
  return url
    .split('/')
    .filter(s => s != '')
    .pop();
}
