class ToDoItem {
    constructor(item) {
        const { id, isDone, text, isFavorite} = item;
        this.id = id;
        this.isDone = isDone;
        this.text = text;
        this.isFavorite = isFavorite;
        this.item = null
    }

 delete () {
    this.item.remove()
 }

 addListener () {
    const delBtn = document.getElementById('delete' + this.id)
    delBtn.addEventListener('click', () => {
        this.delete()
    })
 }

    render() {
        const listItemHTML = `
       <input id='${this.id}' type="checkbox" ${this.isDone ? "checked" : ''
            } class="list__item__checkbox">
       <input id='input${this.id}' class="form-control form-control-lg list__item__input ${this.isDone ? 'list__item__input--done' : ''}" type="text" ${this.text ? "disabled" : ''
            }
           placeholder="Що треба зробити..." value = '${this.text}'>
       <button id='favorite${this.id
            }' type="button" class="btn btn-secondary list__item__favorite">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${this.isFavorite ? "red" : "white"
            }"
               class="bi bi-heart-fill" viewBox="0 0 16 16">
               <path fill-rule="evenodd"
                   d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
           </svg>
       </button>
       <button id='save${this.id
            }' ${this.text ? 'disabled' : ''} type="button" class="btn btn-primary list__item__save">Зберегти</button> 
       <button id='delete${this.id
            }' type="button" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
         </svg>
              </button>
       `;
       const listComponent = document.querySelector(".list");
        const listItemEl = document.createElement("div");
        listItemEl.classList.add("list__item");
        listItemEl.innerHTML = listItemHTML;
        listComponent.appendChild(listItemEl);
        this.item = listItemEl
        this.addListener()
    }
}
export default ToDoItem;
