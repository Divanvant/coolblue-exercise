document
  .querySelector('#more-information-modal')
  .addEventListener('click', () => {
    document.querySelector('#more-information-modal').classList.toggle('active')
  })

document.addEventListener('DOMContentLoaded', () => {
  const modalWrappers = document.querySelectorAll('.modal-wrapper')

  const moreInfoModal = document.querySelector('#more-information-modal')
  const moreInfoButton = document.querySelector('#more-information-button')
  const moreInformationClose = document.querySelector('#more-information-close')

  const getStartedModal = document.querySelector('#get-started-modal')
  const getStartedButton = document.querySelector('#get-started-button')
  const getStartedClose = document.querySelector('#get-started-close')

  const details = document.querySelectorAll('details')

  details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })

  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 27) {
      modalWrappers.forEach((item) => {
        item.classList.remove('active')
      })
    }
  })

  modalWrappers.forEach((item) => {
    item.addEventListener('click', () => {
      modalWrappers.forEach((item) => {
        item.classList.remove('active')
      })
    })
  })

  moreInfoButton.addEventListener('click', () => {
    moreInfoModal.classList.toggle('active')
  })
  moreInformationClose.addEventListener('click', () => {
    moreInfoModal.classList.toggle('active')
  })

  getStartedButton.addEventListener('click', () => {
    getStartedModal.classList.toggle('active')
  })
  getStartedClose.addEventListener('click', () => {
    getStartedModal.classList.toggle('active')
  })

  document
    .querySelector('#add-to-cart-basic')
    .addEventListener('click', (event) => {
      event.stopPropagation()
      alert('Added Warning Red Alert Basic to cart')
    })
  document
    .querySelector('#add-to-cart-premium')
    .addEventListener('click', (event) => {
      event.stopPropagation()
      alert('Added Warning Red Alert Premium to cart')
    })
})
