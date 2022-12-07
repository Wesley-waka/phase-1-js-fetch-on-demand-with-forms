const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title
            summary.innerText = data.summary
        })
    });
  
}

document.addEventListener('DOMContentLoaded', init);

// let form =document.querySelector("form")

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     movie(e.target.searchByID.value)
//     form.reset
// })

// function movie(id) {
//     let li = document.createElement('li')
//     let button = document.createElement('button')
//     button.addEventListener('click', handleDelete)
//     button.textContent = 'Delete'
//     li.appendChild(button)
//     console.log(li)
//     document.querySelector('#tasks').appendChild(li)
// }

// function handleDelete(e) {
//     e.target.parentNode.remove()
// }