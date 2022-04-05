'user strict';
```json
    {
    "id": "16396904232462016",
    "owner": "adalabdigital",
    "url": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    "name": "Anastacio",
    "desc": "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    "race": "British Shorthair",
    },
```
const GITHUB_USER = 'tu_usuario_de_github_aqui';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then();
  //Completa el código;

