
const sectionContentName = document.querySelector('.section-content__name')
const sectionContentPhone = document.querySelector('.section-content__phone')
const sectionContentEmail = document.querySelector('.section-content__email')
const chargePrice = document.querySelector('.charge-price')



window.addEventListener('load', () => {
    const token = localStorage.getItem('user-token')
    fetch('http://localhost:9000/api/usertoken', {
      method: 'POST',
      headers: { Authorization: token }
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        dataSetter(data)
        progessBarHandler(data[0].charge)
        getActiveServicesInfo(data[0].id)
        getAndShowChartsInfo(data[0].id)
        getAndShowUserPackets(data[0].id)

        
        
  
      })
  
  })
  
  function dataSetter(data) {
    sectionContentName.innerHTML = data[0].username;
    sectionContentPhone.innerHTML = data[0].phone;
    sectionContentEmail.innerHTML = data[0].email;
    chargePrice.textContent = data[0].charge
  
  }
  
  function progessBarHandler(charge) {
    const circularProgress = document.querySelector('.charge-progress');
    let degEstimator = charge / 1000 * 3.6
    circularProgress.style.background = `conic-gradient( rgba(37, 99, 235, 1) ${degEstimator}deg, #f6f6f6 0deg)`
  
  
  }
  
  function getActiveServicesInfo(userID) {
    fetch(`http://localhost:9000/api/services/${userID}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        showActiveServicesInDom(result)
  
  
      })
  
  }
  
  function showActiveServicesInDom(activeServices) {
    const servicesContainer = document.querySelector('.services')
    activeServices.forEach(service => {
      servicesContainer.insertAdjacentHTML('beforeend', `
      <div class="service">
      <div class="service-icon flex-center">
        <svg>
          <use href="#${service.icon}"></use>
        </svg>
      </div>
      <div class="service-content">
        ${service.title} ${service.expirationDate}.
      </div>
    </div>
      
      
      `)
  
  
    });
  
  }
  