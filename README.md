# my-mci
Description of the project:
کاربرانی که در mysql هستند نام کاربری و رمز عبورشون میزنن وارد سایت میشن
با نمودار میزان شارژی که دارن و بسته هایی  که خریدن کاملا مشخصه و بسته های پیشنهادی سایت کاملا مشخصه.
همچنین یه نمودار دایره ای دیگم هست که بسته به میزان شارژ یه دایره پر میشه. و ....
قسمت ارسال نظرات داره که هر نظری شخص مینویسه تو دیتا بیس ذخیره میشه
با Json web token کار میکنه.




## use rechart library :
```javascript
function showFinalChart(datas) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Saturday', 'Sunday', 'Monday', 'Teuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [{
        label: '# of Votes',
        data: [datas[0], datas[1], datas[2], datas[3], datas[4], datas[5], datas[6]],
        borderWidth: 1,
        fill: true,
        tension: 0.45,
        borderWidth: 4,
        pointRadius: 0
      }]
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
}


```
## use Regex for email validation  :
```javascript
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


```

## use JWT Token
```javascript
function getUserID() {
   const Token =  localStorage.getItem('user-token');
   fetch('http://localhost:9000/api/usertoken' , {
    method:'POST',
    headers:{ Authorization: Token }
   }).then(res=>res.json())
   .then(data=> {
    getAndShowUserPackets(data[0].id)
   })

    
}
```

## use mySql database
```javascript
const mysql = require('mysql');

const mymciDB = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"simcard_data"
})

module.exports = mymciDB


```




## Technology used:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) \
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)\
![express js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
<img src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'>
