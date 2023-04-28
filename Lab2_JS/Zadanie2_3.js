const poniedzialek = [
    {
        'nazwa': 'Przygotowania do zajęć z AI',
        'czas': 180
    },
    {
        'nazwa': 'Realizacja projektu z AI',
        'czas': 120
    }
]
const wtorek = [
    {
        'nazwa': 'Rozbudowa swojego bloga',
        'czas': 240
    },
    {
        'nazwa': 'Administrowanie serwisem szkoly',
        'czas': 180
    },
    {
        'nazwa': 'Sluchanie koncertu online',
        'czas': 240
    }]

let lista = [poniedzialek, wtorek]
lista = lista.reduce((a, b) => a.concat(b), []).map(element => {return {'nazwa': element.nazwa, 'czas': element.czas / 60}}).filter(element => element.czas > 2).map(element => {return {'nazwa': element.nazwa, 'czas': element.czas*35}}).reduce((a, b) => a + b.czas, 0).toFixed(2) + " zł"
console.log(lista)