function getUser(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: 'John Doe',
            birthDay: new Date().getFullYear() - 20,
        })
    }, 100)
}

function getPhone(userId, callback) {
    return setTimeout(function () {
        return callback(null, {
            userId,
            phone: '9182345',
            ddd: 35,
        })
    }, 1000)
}

function getAddress(userId, callback) {
    return setTimeout(function () {
        return callback(null, {
            userId,
            street: 'rua das andorinhas',
            city: 'pedrinhas',
            state: 'sp',
        })
    }, 1000)
}

function userResolver(error, callback) {
    if (error) {
        console.error('A problem in user has occurred!')
    }

    getPhone(callback.id, phoneResolver);
}

function phoneResolver(error, callback) {
    if (error) {
        console.error('A problem in phone has occurred!')
    }

    console.log(callback)

    getAddress(callback.id, addressResolver);
}

function addressResolver(error, callback) {
    if (error) {
        console.error('A problem in address has occurred!')
    }

    console.log(callback)
}

getUser(userResolver);
