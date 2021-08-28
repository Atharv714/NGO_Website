
const images = [
    { 'id': '1', 'url': 'assests/Artboard 2.png'},
    { 'id': '2', 'url': 'assests/Artboard 1.png' },
    { 'id': '3', 'url': 'assests/Artboard_3.png' },
]

const container = document.querySelector('.items')

const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages(images, container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const next = () =>{
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next)


setInterval(previous, 5000)

// += concatena