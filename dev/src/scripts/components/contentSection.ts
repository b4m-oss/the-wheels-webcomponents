import { getSlot } from '../utils/getSlot'
type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'dt' | 'b' | null

export class TwlsContentSection extends HTMLElement {
  constructor() {
    super()
    // titleTag = this.getAttribute("titleTag")
  }

  connectedCallback() {
    // get attributes
    const headingTitle = this.getAttribute('headingTitle')
    const headingTag = (this.getAttribute('headingTag') as HeadingTagType) || 'h2'

    // get slot
    const content = getSlot(this, 'content')
    this.insertAdjacentHTML('beforeend', `<${headingTag}>${headingTitle}</${headingTag}>`)
    if (content) {
      this.append(...(content as HTMLElement).childNodes)
      content?.remove()
    } else {
      console.error("Content section's content is not found")
    }
  }
}
