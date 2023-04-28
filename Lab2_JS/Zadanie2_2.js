const listaZadan = [
    {
        id: 1,
        tekst: "Zrobienie zakupów",
        zrealizowano: true
    },
    {
        id: 2,
        tekst: "Przegląd techniczny samochodu",
        zrealizowano: false
    },
    {
        id: 3,
        tekst: "Wizyta u dentysty",
        zrealizowano: false
    },
]

listaZadan.forEach(element => {console.log(element.tekst)})
let lista2 = listaZadan.map(element => element.tekst)
console.log(lista2)
let lista3 = listaZadan.filter(element => element.zrealizowano === true).map(element => element.tekst)
console.log(lista3)