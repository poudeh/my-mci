const packetsContainer = document.querySelector('table')



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

async function getAndShowUserPackets(userID) {
   const data= await fetch(`http://localhost:9000/api/purchases/${userID}`)
   const buyPackets = await data.json()
   console.log(buyPackets);
   buyPackets.forEach(packet => {
    packetsContainer.insertAdjacentHTML('beforeend' , `
    <tr>
    <th scope="row">Jully 2024</th>
    <td>Mark</td>
    <td>30%</td>
    <td>${packet.off == 0 ? 'No discount' : packet.off + '%' }</td>
    <td>${packet.price}T</td>
    </tr>
`)
    
   });





    
}

getUserID()



