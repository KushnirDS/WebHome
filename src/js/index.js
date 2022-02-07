
// import { newObject } from './newobject.js';
import { renderPushUsers } from './render.js';
import { paginator } from './paginator.js';
import {post, clickToPost, inValid, valid, newObject  } from './newobject.js';

let divForUsers = document.getElementById('commentsUsers');
export { divForUsers };

const API = {
    comments: 'https://jordan.ashton.fashion/api/goods/30/comments'

}

export { API };

let getMetod = () => fetch(API.comments).then(data => data.json());



getMetod().then((users) => {
    renderPushUsers(users);
    paginator(users);
})


