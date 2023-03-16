var login = () => {
    let users = getUsers();
    let email = document.querySelector("correo");
    let password = document.querySelector("contraseña");
    let divError = document.querySelector("error");
    if (email.value && password.value) {
        let findUser = users.find(e => e.email == email.value);
        if (findUser) {
            if (password.value == findUser.password) {
                actUser(findUser);
                window.location.href = "../pages/inicioDsesion.html";
            } else {
                divError.innerHTML = "Contraseña incorrecta";
            }
        } else {
            divError.innerHTML = "Ususario no encontrado";
        }
    } else {
        divError.innerHTML = "Insertar un valor en ambos lados";
    }
}