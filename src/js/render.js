import { divForUsers } from './index.js';

function renderPushUsers(arr) {
  
    function getAmountDays(date) {

        let commentSend = new Date(date);
        let toDay = new Date();
        
        let differentDate = toDay - commentSend;
        let day = 86400000;
        let hour = 3600000;

        if (differentDate > day) {
            return `(${Math.floor(differentDate / day)} Days ago)`;
        } 
        return `(${Math.ceil(differentDate / hour)} Hours ago)`;
        
    }
   
    arr.data.forEach((el) => {
        
        let contentId = el.id;
        let contentName = el.name;
        let contentComment = el.text;
        let created = el.created_at;
      
        let divForTargetUsers = document.createElement('div');
        divForUsers.appendChild(divForTargetUsers);
        divForTargetUsers.className = 'border info indent';  
        
        let users = document.createElement('div');
        divForTargetUsers.appendChild(users);
        users.className = 'info indent';

        let addWraperForId = document.createElement('div');
        users.appendChild(addWraperForId);
        addWraperForId.innerText = 'id:';
        addWraperForId.className = 'inline';
        
        let addSpanForId = document.createElement('span');
        addWraperForId.appendChild(addSpanForId);
        addSpanForId.innerText = contentId;
      
        
        let addWraperForliked = document.createElement('div');
        users.appendChild(addWraperForliked);
        addWraperForliked.innerHTML = '&#9825;';
        addWraperForliked.className = 'inline';
        
        let addWraperForComment = document.createElement('div');
        users.appendChild(addWraperForComment);
        addWraperForComment.className = 'inline';


        let addWraperForName = document.createElement('p');
        addWraperForComment.appendChild(addWraperForName);
        addWraperForName.innerText = `${contentName}`;
        addWraperForName.className = 'inline';
        let addBr = document.createElement('br');
        addWraperForComment.appendChild(addBr);

        let addWraperForNewComment = document.createElement('p');
        addWraperForComment.appendChild(addWraperForNewComment);
        addWraperForNewComment.innerText = `${contentComment}`;
        addWraperForNewComment.className = 'inline';
        
        let addWraperForAgo = document.createElement('div');
        divForTargetUsers.appendChild(addWraperForAgo);
        addWraperForAgo.innerText = `${getAmountDays(created)}`;
        addWraperForAgo.className = 'inline';

    })

}

export { renderPushUsers };