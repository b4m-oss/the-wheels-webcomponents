import { getSlot } from '../utils/getSlot'

export class TwlsAccordion extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    const tab = getSlot(this, 'tab')
    const content = getSlot(this, 'content')

    if (tab) {
      if (tab.childNodes.length === 0) {
        console.error('Accordion tab is nothing set.')
        return false
      }
    } else {
      console.error('Accordion tab is nothing set.')
      return false
    }

    if (content) {
      if (content.childNodes.length === 0) {
        console.error('Accordion content is nothing set.')
        return false
      }
    } else {
      console.error('Accordion content is nothing set.')
      return false
    }

    // Create accordion container
    const accordionContainer = document.createElement('details')
    accordionContainer.classList.add('twls-accordion')

    // Create accordion tab
    const summary = document.createElement('summary')
    summary.classList.add('accordion-tab')
    summary.append(...(tab as HTMLElement)?.childNodes)

    // Create accrdion content
    const contentElement = document.createElement('div')
    contentElement.classList.add('accordion-detail')
    contentElement.append(...(content as HTMLElement)?.childNodes)

    // construct up
    accordionContainer.append(summary)
    accordionContainer.append(contentElement)

    tab?.remove()
    content?.remove()

    this.append(accordionContainer)
  }
}
