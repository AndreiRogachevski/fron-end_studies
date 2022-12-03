export default function fetchUsers() {
  return (async () => {
    const response = await fetch(`https://dummyjson.com/users?limit=5`);
    const data = await response.json();
    return data.users;
  })();
}
