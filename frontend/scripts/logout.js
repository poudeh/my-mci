const logOutLink = document.querySelector('a[href="./Login.html"]')

logOutLink.addEventListener('click' ,  (event)=> {
    event.preventDefault()
    localStorage.removeItem('user-token')
    location.href = './Login.html'
    


})