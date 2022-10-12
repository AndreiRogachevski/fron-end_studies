export function fetchUser(id) {
  return fetch('https://dummyjson.com/users/' + id);
}
