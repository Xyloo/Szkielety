const firmy = [
    {nazwa:"Abasco", kategoria:"IT", poczatek:1999, koniec:2010},
    {nazwa:"Redis", kategoria:"IT", poczatek:1993, koniec:1998},
    {nazwa:"Komp", kategoria:"IT", poczatek:2003, koniec:2018},
    {nazwa:"Bosco", kategoria:"Technologie", poczatek:2011, koniec: 2014},
    {nazwa:"CCA", kategoria:"IT", poczatek:1991, koniec:1995},
    {nazwa:"Autosan", kategoria:"Auto", poczatek:2009, koniec: 2018},
    {nazwa:"Broke", kategoria:"Finanse", poczatek:1990, koniec: 1992},
    {nazwa:"Funds", kategoria:"Finanse", poczatek:2000, koniec: 2021}
]

firmy.filter(element => element.kategoria === "IT").forEach(element => {console.log(element.nazwa)})
console.log("")
firmy.filter(element => element.koniec <= 1999 && element.poczatek >= 1990).forEach(element => {console.log(element.nazwa)})
console.log("")
firmy.filter(element => element.koniec - element.poczatek > 10).forEach(element => {console.log(element.nazwa)})