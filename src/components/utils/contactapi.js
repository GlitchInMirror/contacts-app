const api = "http://localhost:5000";



export const getAll = () => {
  fetch(`${api}/users`)
  .then(res => res.json())
  .then(res => res.users);
}