// const callback = require('./01-callback');
const promise = require('./02-promise');

// console.log(callback)
promise
    // Para manipular a função sucesso
    .then((user) => console.log(user))
    // Para manipular a função erro
    .catch((err) => console.error(`An error has occurred: ${err}`))