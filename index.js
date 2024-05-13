const plans = document.querySelector('.plans');
const btn = document.querySelector('.btn'); 
const list = document.querySelector('.list')

btn.addEventListener('click', ()=> {
    const item = document.createElement('li')
    item.innerText = plans.value; 
    item.classList.add('addedList');
    list.appendChild(item);
    plans.value = ('');

    item.addEventListener('click', ()=> {
        item.classList.add('toDoAdded')
    })
    item.addEventListener('dblclick', ()=> {
        list.removeChild(item)
    })
})
