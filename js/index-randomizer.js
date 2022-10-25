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