const removeAllActiveStates = (accordionItems) => {
  accordionItems.forEach((item) => {
    item.classList.remove('active')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item')
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

  document
    .querySelector('#more-information-button')
    .addEventListener('click', () => {
      document.querySelector('#more-information-modal').classList.add('active')
    })

  document
    .querySelector('#more-information-close')
    .addEventListener('click', () => {
      document
        .querySelector('#more-information-modal')
        .classList.remove('active')
    })

  document
    .querySelector('#get-started-button')
    .addEventListener('click', () => {
      document.querySelector('#get-started-modal').classList.add('active')
    })

  document.querySelector('#get-started-close').addEventListener('click', () => {
    document.querySelector('#get-started-modal').classList.remove('active')
  })

  document.querySelector('#add-to-cart-basic').addEventListener('click', () => {
    alert('Added Warning Red Alert Basic to cart')
  })
  document
    .querySelector('#add-to-cart-premium')
    .addEventListener('click', () => {
      alert('Added Warning Red Alert Premium to cart')
    })
})
