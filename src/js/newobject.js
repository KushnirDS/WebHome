let post = document.getElementById('post');

import { API } from './index.js';

let clickToPost = post.addEventListener('click', function () {

    let valueName = document.getElementById('name');
    let valueComment = document.getElementById('forComments');


    let div = document.getElementById('error');

    if (valueName.value.length === 0 || valueComment.value.length === 0) {

        inValid(valueName, valueComment, div, 'Something went wrong');

    } else {
        div.innerHTML = ''
        div.classList.remove('error');
        valueName.classList.remove('input_invalid');
        valueComment.classList.remove('input_invalid');
        // div.classList.add('input_valid');
        valid(div, 'Сomment sent');



        let newComment = newObject(valueName.value, valueComment.value);


        setTimeout(function () {
            div.innerHTML = '';
            div.classList.remove('valid');

        }, 3 * 1000);

        const postMethod = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(newComment)
        }

        fetch(`${API.comments}`, postMethod)
            .then(response => response.json())
            .then(users => renderPushUsers(users))
            .catch(err => console.log(err))

        valueName.value = '';
        valueComment.value = '';
    }


});


function inValid(inp1, inp2, el, mess) {
    el.classList.add('error');
    inp1.classList.add('input_invalid');
    inp2.classList.add('input_invalid');
    el.innerHTML = mess;
}

function valid(el, mess) {
    // inp.classList.remove('input_invalid');
    el.classList.add('valid');
    el.innerHTML = mess;
}



function newObject(name, comments) {

    let data = {

        name: name,
        text: comments,

    };


    return data;

}

export { post, clickToPost, inValid, valid, newObject };