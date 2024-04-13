const emailInput = document.querySelector('input[type=email]')
const textAreaInput = document.querySelector('textarea')
const submitBtn = document.querySelector('#submit-form__btn')

submitBtn.addEventListener('click', () => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let isEmailValid = emailPattern.test(emailInput.value)

    if (isEmailValid && textAreaInput.value !== 0) {
        const mainUserInfo = {
            email: emailInput.value,
            comment: textAreaInput.value
        }

        fetch('http://localhost:9000/api/comments', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(mainUserInfo)

        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Your message is sent!')
                clearInputs()
            })


    } else {
        alert('Something goes wrong!')
    }



})

function clearInputs() {
    emailInput.value = ""
    textAreaInput.value = ""

}