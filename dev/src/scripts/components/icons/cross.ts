export class TwlsIconCross extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const icon = document.createElement('div')
    const width = this.getAttribute('width') || "74"
    const height = this.getAttribute('height') || "74"
    const fill = this.getAttribute('fill') || 'var(--text-caption)'
    const degree = this.getAttribute('type') || '0'

    const iconSvg = `<svg width="${width}" height="${height}" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.76611 3.76599L70.2341 70.234" stroke="${fill}" stroke-width="7" stroke-linecap="round"/>
<path d="M70.2339 3.76599L3.76584 70.234" stroke="${fill}" stroke-width="7" stroke-linecap="round"/>
</svg>
`

    icon.insertAdjacentHTML('beforeend', iconSvg)

    if(degree) {
      (icon.querySelector('svg') as SVGElement).style.transform = `rotate(${degree})`
    }
    
    console.log(icon)
    this.append(icon)
  }
}

