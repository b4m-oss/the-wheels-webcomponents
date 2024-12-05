import { getSlot } from '../utils/getSlot'

export class TwlsCard extends HTMLElement {
  connectedCallback() {
    const slotHeader = getSlot(this, 'header')
    const slotContent = getSlot(this, 'content')
    const slotFooter = getSlot(this, 'footer')
    const slotCloser = getSlot(this, 'closer')

    const card = document.createElement('div')
    card.classList.add('twls-card')

    // insert header if it exist
    if (slotHeader) {
      const header = document.createElement('header')
      header.classList.add('twls-card-header')
      header.append(...slotHeader.childNodes)
      card.appendChild(header)
    }

    // insert header if it exist
    if (slotContent) {
      const content = document.createElement('div')
      content.classList.add('twls-card-content')
      content.append(...slotContent.childNodes)
      card.appendChild(content)
    }
    
    // insert header if it exist
    if (slotFooter) {
      const footer = document.createElement('footer')
      footer.classList.add('twls-card-footer')
      footer.append(...slotFooter.childNodes)
      card.appendChild(footer)
    }

    // insert closer if it exist
    if(slotCloser) {
      const closers = slotCloser.querySelectorAll('.twls-card-closer')
      card.append(...closers)
      closers.forEach(closer => {
        closer.addEventListener('click', () => {
          this.remove()
        })
      })
    }

    document.addEventListener('DOMContentLoaded', () => {
      if(!slotContent) console.error('No content found at TwlsCard.')
      if(slotHeader) slotHeader.remove()
      if(slotContent) slotContent.remove()
      if(slotFooter) slotFooter.remove()
      if(slotCloser) slotCloser.remove()
      this.append(card)
    })
  }
}