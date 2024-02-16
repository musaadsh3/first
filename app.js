const but = document.querySelector('button')
let count = 0
const colors = ['red', 'grey', 'black']
but.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[count % colors.length]
    count++
})