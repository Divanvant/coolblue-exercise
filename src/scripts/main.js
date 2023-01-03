const removeAllActiveStates = (items) => {
  items.forEach((item) => {
    item.classList.remove('active')
  })
}

document
  .querySelector('#more-information-modal')
  .addEventListener('click', () => {
    document.querySelector('#more-information-modal').classList.remove('active')
  })

document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item')
  const modalWrappers = document.querySelectorAll('.modal-wrapper')

  const moreInfoModal = document.querySelector('#more-information-modal')
  const moreInfoButton = document.querySelector('#more-information-button')
  const moreInformationClose = document.querySelector('#more-information-close')

  const getStartedModal = document.querySelector('#get-started-modal')
  const getStartedButton = document.querySelector('#get-started-button')
  const getStartedClose = document.querySelector('#get-started-close')

  accordionItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const currentAccordionItem = event.target.closest('.accordion-item')
      if (currentAccordionItem.classList.contains('active')) {
        removeAllActiveStates(accordionItems)
      } else {
        removeAllActiveStates(accordionItems)
        currentAccordionItem.classList.add('active')
      }
    })
  })

  modalWrappers.forEach((item) => {
    item.addEventListener('click', () => {
      removeAllActiveStates(modalWrappers)
    })
  })

  moreInfoButton.addEventListener('click', () => {
    moreInfoModal.classList.add('active')
  })
  moreInformationClose.addEventListener('click', () => {
    moreInfoModal.classList.remove('active')
  })

  getStartedButton.addEventListener('click', () => {
    getStartedModal.classList.add('active')
  })
  getStartedClose.addEventListener('click', () => {
    getStartedModal.classList.remove('active')
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
