import { renderPushUsers } from './render.js';
// import { newObject } from './newobject.js';



const API = {
    users: 'https://jordan.ashton.fashion/api/goods/30/comments'

}

let getMetod = () => fetch(API.users).then(data => data.json());

getMetod().then((users) => {
    renderPushUsers(users);
})

let divForUsers = document.getElementById('commentsUsers');

export { renderPushUsers };