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
})
