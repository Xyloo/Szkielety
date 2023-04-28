const getDate = () =>
{
    return new Date().toISOString().replace(/T/, ' ').replace(/Z/, '') + " "
}

module.exports = getDate;