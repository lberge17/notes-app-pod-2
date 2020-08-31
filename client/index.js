const app = document.getElementById("app")

document.addEventListener("DOMContentLoaded",  () => {
    // all functions here
    fetchNotes()
})

function fetchNotes(){
    fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notesObject => renderNotes(notesObject))
}

function renderNotes(notes) {
    const main = document.getElementById('main')
    notes.forEach(note => {
        const h2 = document.createElement('h2')
        h2.innerHTML = note.title
        main.appendChild(h2)
        const p = document.createElement('p')
        p.innerHTML = note.description
        main.appendChild(p)
    })
}


