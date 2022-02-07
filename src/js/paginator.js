import { divForUsers } from './index.js';
import { renderPushUsers } from './render.js';

function paginator(thisPage) {
    let pagination = document.getElementById('paginator');
        
    pagination.innerHTML = '';

    for (let i = 0; i < thisPage.links.length; i++) {
       
        let li = document.createElement('li');

        pagination.appendChild(li);

        li.innerHTML = thisPage.links[i].label;
        
        if (!thisPage.links[i].url && thisPage.links[i].label !== '...') {
            li.hidden = true;
        }
    }

    let items = document.querySelectorAll('li');
    
    
    items[1].classList.add('active');

    let arrLi = [...items];

    function newPage() {
        divForUsers.innerHTML = '';

        let activePage = document.querySelector('.active');

        let indexEl = arrLi.indexOf(this);
       

        let url = thisPage.links[indexEl].url;
     
        activePage.classList.remove('active');
        this.classList.add('active');
        

        let getpage = () => fetch(url)
            .then(data => data.json());

        getpage().then((page) => {
            renderPushUsers(page);
            paginator(page);

        })

    }

    for (const item of items) {
        item.addEventListener('click', newPage);
    }


}

export {paginator};