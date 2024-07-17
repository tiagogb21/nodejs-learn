// Async e Await
    // Facilita a visualização do fluxo de funções
    // NÃO altera a performance da aplicação
    // Veio do C#
    // SOMENTE será usado quando precisarmos tratar a resposta da chamada

    // Obs.: ao colocar o async em uma função, automaticamente estamos fazendo com que ela se torne uma Promise

function getUser() {
    return setTimeout(async () => {
            return await {
                id: 1,
                name: "John Doe",
                birthDay: new Date().getFullYear() - 20,
            };
        }, 100);
}

 function getPhone(userId) {
     setTimeout(async function () {
        return await resolve({
            userId,
            phone: "9182345",
            ddd: 35,
        });
    }, 1000);
}

function getAddress(userId) {
    setTimeout(async function () {
        return await resolve({
            userId,
            street: "rua das andorinhas",
            city: "pedrinhas",
            state: "sp",
        });
    }, 1000);
}

console.log(getUser());

module.exports = {
    getUser,
    getPhone,
    getAddress,
};
