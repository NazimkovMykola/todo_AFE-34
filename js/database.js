import ToDoItem from "./item";
const records = {
  val: [
    {
      id: "2547",
      isDone: false,
      text: "",
      isFavorite: false,
    }
  ],

  set(newData, isDeleting) {
    switch (isDeleting) {
      case true: {
        this.val.splice(newData, 1) // видаляэмо елемент з бази данних
        break
      }
      default: {
        if (this.val.findIndex((el) => el.id === newData.id) > -1) {
          // оновлюэмо елемент
          this.val.map((el) => {
            if (el.id === newData.id) {
              return (el.text = newData.text)
            } else return el
          })
        } else this.val.push(newData) // додаэмо новий елемент
      }
    }

    //оновлюємо список на екрані
    const clear = () => {
      document.querySelectorAll(".list__item").forEach((el) => el.remove())
    }
    clear() // видаляємо всі елементи зі списку
    this.val.forEach((el) => {
      // наново малюэмо список
      new ToDoItem(el).render()
    })
  },
}

export default records;
