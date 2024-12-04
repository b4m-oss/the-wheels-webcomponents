export class TwlsReactive extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const wrapper = document.createElement('form')
    const input =  document.createElement('input')
    const output = document.createElement('p')
    input.setAttribute('type', 'number')
    wrapper.appendChild(input)
    wrapper.appendChild(output)

    input.addEventListener('input', () => {
      output.textContent = input.value
    })
    
    const shadowRoot = this.shadowRoot || this.attachShadow({ mode: 'open'})
    shadowRoot.append(wrapper)
  }
}