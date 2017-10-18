

const ToggleButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');//we can use this are the bubble handler since
//it is the ancestor of li
const ul_list = document.querySelector('ul');// we can use this as wekk since it is parent of li
const ul_list_children = ul_list.children; //we can use this to get the elements collection from ul

const DescriptionButton = document.querySelector('button.description');
const DescriptionInput = document.querySelector('input.description');
const DescriptionHeading = document.querySelector('p.description');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const firstListItem = ul_list.firstElementChild;
const lastListItem =  ul_list.lastElementChild;
// firstListItem.style.background = 'gold';
// lastListItem.style.background = 'blue';


//VERY IMPORTANT FUNCTION TO CREATE BUTTONS
const attachListItemButtons = (li)=>{
  let up = document.createElement('button');
  up.className = "up";
  up.textContent = "up";
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = "down";
  down.textContent = "down";
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);

};


//This for loop will attach buttons for the default li
for(let i = 0;i < ul_list_children.length;i+=1){
  /*notice only ul_list_children has length property, and ul_list length is undefined*/
  attachListItemButtons(ul_list_children[i]);
}





ToggleButton.addEventListener('click',()=>{
    if(listDiv.style.display !=='none'){
       ToggleButton.innerHTML = 'Show List';
       listDiv.style.display = 'none';
     }else{
       ToggleButton.innerHTML = 'Hide List';
       listDiv.style.display = 'block';
     }
});
DescriptionButton.addEventListener('click',()=>{
    DescriptionHeading.innerHTML = DescriptionInput.value;
    DescriptionInput.value = '';
});

//This is very important as the function creates a new element li and append it to the ul
addItemButton.addEventListener('click',()=>{
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = addItemInput.value;
      attachListItemButtons(li);
      ul.appendChild(li);
      addItemInput.value = '';
});


//Place the handler on listDiv instead or narrow range on the ul_list
//Notice that the tagName property returns a tag name in ALL CAPS
  //add the mouse over event that will CAP list item
  ul_list.addEventListener('click',(event)=>{
    if(event.target.className ==='remove'){
       let li = event.target.parentNode;
       let ul = li.parentNode;
       ul.removeChild(li);
    }else if(event.target.className ==='up'){
       let li = event.target.parentNode;
       let ul = li.parentNode;
       let prev_sib = li.previousElementSibling;//actual element sibs
       if(prev_sib !==null){//this is to make sure that the node isnt at the top
         ul.insertBefore(li,prev_sib);//ultilize the insertBefore method
       }
    }else if(event.target.className ==='down'){
       let li = event.target.parentNode;
       let ul = li.parentNode;
       let next_sib = li.nextElementSibling;
       if(next_sib !==null){//this is to make sure that the node isnt at the bottom
          ul.insertBefore(next_sib,li);
       }
    }
  });




//this event listener will fire when user click on any elements within the document
document.addEventListener('click',()=>{
                console.log(event.target);
});
