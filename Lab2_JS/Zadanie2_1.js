function sumator(...args)
{
    return "Suma liczb: " + args + " wynosi " + args.reduce((a, b) => a + b, 0);
}

console.log(sumator(1, 2, 3, 4, 5))