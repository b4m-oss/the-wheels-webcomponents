import { getSlot } from '../utils/getSlot'
import "../../styles/the-wheels/partials/organisms/_modal.scss"

export class TwlsModal extends HTMLElement {
  constructor() {
    super()
  }
  addStyle() {
    const styleModal =`
    --fz: 16;
    .twls-modal-container {
      font-size: calc(var(--fz) / 10 * 1rem);
    }
    .twls-modal {
      --fz: 16;
      font-size: calc(var(--fz) / 10 * 1rem);
      padding: 0;
      &[open] {
        position: fixed;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        max-width: 80dvw;
        min-width: 48rem;
        min-height: 32rem;
        height: fit-content;
        max-height: 80dvh;
        border: 0;
        border-radius: calc(var(--global-radius) * 1px);
        background-color: var(--bg-page);

        @media (width < 840px) {
          min-width: 90dvw;
        }
      }

    &::backdrop {
      position: fixed;
      background-color: var(--bg-button-main);
      opacity: 0.8;
    }`


    const styleHeader = `.twls-modal-header {
      --fz: 24;
      font-size: 
      position: sticky;
      top: 0;
      width: 100%;
      background: var(--bg-page);
      font-size: 2.2rem;
      padding-top: 0.95em;
      padding-bottom: 0.95em;
      padding-left: 0.95em;
      padding-right: 0.95em;
      border-bottom: 1px solid var(--text-caption);
      font-weight: 600;
      color: var(--text-main);
    }`

    const styleFooter = `
    .twls-modal-footer {
      display: sticky;
      bottom: 0;
      width: 100%;
      background: var(--bg-page);
      font-size: 1.6rem;
      padding-top: 0.8em;
      padding-bottom: 0.8em;
      padding-left: 1.306em;
      padding-right: 1.306em;
      border-top: 1px solid var(--text-caption);
      text-align: right;

      & .twls-button {
        --fz: 13;
        padding-top: calc(var(--fz) * 0.1rem * 0.95);
        padding-bottom: calc(var(--fz) * 0.1rem * 0.95);
        &:hover {
          padding-top: calc(var(--fz) * 0.1rem * 0.95 - 1px);
          padding-bottom: calc(var(--fz) * 0.1rem * 0.95 - 1px);
        }
      }
    }`


    const styleContent = `
    .twls-modal-content {
      flex: 1;
      font-size: 1.6rem;
      padding: 1.306em;
      overflow: scroll;
      margin-bottom: 0;
      display: inline-flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      max-width: 40em;
      `

    const styleInitiater = `
    .twls-modal-initiater {
      --fz: 16;
    }
    `
    
  
    return { styleModal, styleHeader, styleContent, styleFooter, styleInitiater }
  }
  connectedCallback() {

    // Define slots
    const slotHeader = getSlot(this, 'header')
    const slotContent = getSlot(this, 'content')
    const slotFooter = getSlot(this, 'footer')
    const slotInitiater = getSlot(this, 'initiater')

    // get initiate button
    const initiateButton = slotInitiater?.querySelector('.twls-modal-opener')

    // create container
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('twls-modal-container')

    // create dialog
    const dialog = document.createElement('dialog')
    dialog.classList.add('twls-modal')

    // insert header if it exist
    if (slotHeader) {
      const header = document.createElement('header')
      header.classList.add('twls-modal-header')
      header.append(...slotHeader.childNodes)
      dialog.append(header)
    }

    // insert content. content is required.
    if (slotContent) {
      const content = document.createElement('div')
      content.classList.add('twls-modal-content')
      content.append(...slotContent.childNodes)
      dialog.append(content)
    }

    // insert foter if it exist
    if (slotFooter) {
      const footer = document.createElement('footer')
      footer.classList.add('twls-modal-footer')
      footer.append(...slotFooter.childNodes)
      dialog.append(footer)
    }

    // insert initiater, initiater is exist.
    if (slotInitiater) {
      const initiater = document.createElement('div')
      initiater.classList.add('twls-modal-initiater')
      initiater.append(...slotInitiater.childNodes)
      modalContainer.append(initiater)
    }

    // Add dialog into container.
    modalContainer.append(dialog)

    if (initiateButton) {
      initiateButton.addEventListener('click', () => dialog.showModal())
    }
    // get close element, this is required.
    const closers = modalContainer.querySelectorAll('.twls-modal-closer')

    if (closers.length > 0) {
      closers.forEach((closer) => {
        closer.addEventListener('click', () => {
          console.log('closer is pushed.')
          dialog.close()
        })
      })
    }

    dialog.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        event.stopPropagation()
        dialog.close()
      }
    })

    // Remove Slots
    slotHeader?.remove()
    slotContent?.remove()
    slotFooter?.remove()
    slotInitiater?.remove()

    const styleElement = document.createElement('style');
    styleElement.textContent = `${this.addStyle().styleModal}
    ${this.addStyle().styleHeader}
    ${this.addStyle().styleContent}
    ${this.addStyle().styleFooter}
    ${this.addStyle().styleInitiater}
    `
    const shadowRoot = this.shadowRoot || this.attachShadow({ mode: 'open'})
    shadowRoot.appendChild(styleElement)
    shadowRoot.appendChild(modalContainer)
  }
}
