const $ = document
const emailInput = $.querySelector('#typeEmailX')
const passwordInput = $.querySelector('#typePasswordX')
const loginBtn = $.querySelector('#loginBtn')

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click');
    let mainUserInfo = {
        email: emailInput.value,
        password: passwordInput.value
    }
    fetch('http://localhost:9000/api/users', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(mainUserInfo)
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            let userToken = data[0].token
            console.log(userToken);
            if (userToken) {
                alert('you are logged in successfully.')
                localStorage.setItem('user-token', userToken)
                location.href = './index.html'

            } else {
                alert('username or password can not be found')
            }
        })

})