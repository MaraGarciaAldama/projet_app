//se mandan a traer las etiquetas
const registro = () => {
    let user = document.getElementById('user');
    let password = document.getElementById('password');

    //condicion para los parametros
    let message = document.getElementById('message');
    if (user.value && password.value && name.value) {
        let user = getUsers();
        let obj = {
            user: user.value,
            password: password.value,
            //name: name.value,
            id: users.length + 1
        }
        users.push(obj);
        setUsers(users);
        setTimeout(() => {
            window.location.href = '../pages/inicioDsesion.html'
        }, 2000)
        message.inerHtml = 'usuario agregado';
    } else {
        message.inerHtml = 'Campos Obligatorios';

    }
}