const ctx = document.getElementById('myChart');
const tableBodyContainer = document.querySelector('#table_body')
const chartInfoArray = []


function getAndShowChartsInfo(mainUserID) {
  fetch(`http://localhost:9000/api/chartInfo/${mainUserID}`)
  .then(res=>res.json())
  .then(data=> {
    console.log('data is',data[0]);
    chartNumbersRegulator(data[0])
  })
  
}

function chartNumbersRegulator(datas) {
 const InfoGetter = Object.values(datas).splice(1 , 7)
 let currectInfo = InfoGetter.map(number=> {
  return number/10

 })
 console.log(currectInfo);
 showFinalChart(currectInfo)
 

  
}

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





function getPackets(params) {
  fetch(`http://localhost:9000/api/recommended_packets`)
    .then(res => res.json())
    .then(data => {
      console.log('recommended packets', data);
      showPacketsInDom(data)

    })

}


function showPacketsInDom(packets) {
  packets.forEach(packet => {
    tableBodyContainer.insertAdjacentHTML('afterbegin', `
    <tr>
    <th scope="row">${packet.expirationDate}</th>
    <td>${packet.name}</td>
    <td>${packet.off}%</td>
    <td>${packet.price}</td>
    <td><a href="#" onclick=textChanger(event) class="btn btn-primary">Buy</a></td>
  </tr>
    
    `)

  });

}

function textChanger(event) {
  event.target.textContent = 'Buyed'
  event.target.style.backgroundColor = '#6b7280'

}

window.addEventListener('load', () => {
  getAndShowChartsInfo()
  getPackets()

})











