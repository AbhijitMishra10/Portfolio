let dark = document.querySelector("#dark")
let bright = document.querySelector("#bright")
let body = document.querySelector('body')

// dark.addEventListener('click', () => {
//     body.style.backgroundColor === 'black'
// })
bright.addEventListener('click', () => {
    body.classList.add('bg-pink-100', 'text-black')
    body.classList.remove('bg-black', 'text-white')
})
dark.addEventListener('click', () => {
    body.classList.add('bg-black', 'text-white')
    body.classList.remove('bg-pink','bg-white', 'text-black')
})