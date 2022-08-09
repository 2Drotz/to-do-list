const input = document.querySelector('#input'),
   todoItems = document.querySelector('.to-do-items'),
   trashIcon = document.querySelector('#trash'),
   btnAdd = document.querySelector('#btnAdd');

input.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      addItem();
   }
});
btnAdd.addEventListener('click', () => {
   addItem();
});
function addItem() {
   let divParent = document.createElement('div');
   let divChild = document.createElement('div');
   let checkIcon = document.createElement('i');
   let trashIcon = document.createElement('i');



   divParent.className = 'item';
   divParent.innerHTML = `<div> ${input.value} </div>`;

   checkIcon.className = "fa fa-circle-check";
   checkIcon.style.color = 'gray';
   checkIcon.addEventListener('click', () => {
      checkIcon.style.color = 'green';
   });


   divChild.appendChild(checkIcon);

   trashIcon.className = 'fa fa-trash';
   trashIcon.style.color = 'darkgray';
   trashIcon.addEventListener('click', () => {
      divParent.remove();

   });

   divChild.appendChild(trashIcon);

   divParent.appendChild(divChild);

   todoItems.appendChild(divParent);
   input.value = '';
}