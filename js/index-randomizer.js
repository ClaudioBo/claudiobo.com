// Logo
const logo_list = [
    "burgerking.png",
    "corona.png",
    "dominos.png",
    "facebook.png",
    "ford.png",
    "google.png",
    "googleviejo.png",
    "heineken.png",
    "instaold.png",
    "lego.png",
    "mario.png",
    "nike.png",
    "pixeles.png",
    "pokemon.png",
    "wordart1.png",
    "wordart2.png",
    "youtube.png",
    "minecraft.png",
    "paint.png",
]

const logo_selected = logo_list[Math.floor(Math.random()*logo_list.length)]
const logo_elem = document.getElementById("random-logo")
logo_elem.src = `./img/memes/${logo_selected}`

// Claudio
const claudio_list = [
    "1.png",
    "2.jpg",
    "3.jpg",
]

const claudio_selected = claudio_list[Math.floor(Math.random()*claudio_list.length)]
const claudio_elem = document.getElementById("random-claudio")
claudio_elem.src = `./img/claudio/${claudio_selected}`

// Quote
const quote_list = [
    "🤡",
    "Solo a un idiota se le ocurre poner tontadas en su pagina web <br><sub>(que piensa usar como 'CV')</sub>",
    "Se mira perfectamente que yo no le sé al frontend",
    "Tarde una madrugada hacer esta pagina principal, pero posterge su desarrollo 6 meses",
    "Dale F5 pues",
    "Efectivamente, le sé a las computadoras",
    "code goes brr",
    "rm -rf /",
    "{{ random_quote }}",
]
const quote_selected = quote_list[Math.floor(Math.random()*quote_list.length)]
const quote_elem = document.getElementById("random-quote")
quote_elem.innerHTML = `&#10077; ${quote_selected} &#10078;`