
const ship = function ship(length) {
  let hits = new Array(length).fill(false);
  const hit = (index) => hits[index] = true; // refactor to not mutate?
  const isSunk = () => hits.every(h => h);
  return {
    length,
    hits,
    hit,
    isSunk
  }
}

export default ship;
