//document.addEventListener('deviceready', onDeviceReady, false);

//function onDeviceReady() {
//window.location.href='../www/pages/inicioDsesion.html';
//}

function iniciarSesion() {
    let password = document.querySelector('#password')
    let divError = document.querySelector('#error')
    let users = getUsers()
}



const login = () => {
    let users = getUsers()
    let user = document.querySelector('#user')
    let pass = document.querySelector('#password')
    let divError = document.querySelector('#error')
    const evaluate = (user.value && pass.value)
    const findUser = users.find(({ user }) => user == user.value)
    const { password } = findUser
    
    !evaluate ? divError.innerHTML = 'Insertar un valor en ambos campos' : ""
    !user ? divError.innerHTML = 'Usuario no encontrado' : ""
    
    if (evaluate && findUser) {
        if (pass.value == password) {
            window.location.href = '../pages/inicioDsesion.html'
        } else {
            divError.innerHTML = 'Contraseña incorrecta'
        }
    }
}
