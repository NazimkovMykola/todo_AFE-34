import ToDoItem from './item.js'
import records from './database.js'

records.val.forEach(el => {
    new ToDoItem(el).render()
})

document.querySelector('.add_new_item').addEventListener('click', () => {
    const newItemRecord = {
        id: records.val.length + 1,
        isDone: false,
        text: '',
        isFavorite: false,
    }
    records.set(newItemRecord, false)
})

