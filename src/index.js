

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault() 
   let newTaskDescription = document.querySelector('#new-task-description').value
   let list = document.createElement('li')
   let btn = document.createElement('button')
   btn.textContent = 'x'
   list.textContent = `${newTaskDescription}`
   list.appendChild(btn)
   document.querySelector('#tasks').appendChild(list)
   btn.addEventListener('click' , () => list.remove())
  })
})

