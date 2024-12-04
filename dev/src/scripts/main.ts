import { TwlsModal } from './components/modal'
import { TwlsAccordion } from './components/accordion'
import { TwlsContentSection } from './components/contentSection'
import { TwlsIconArrow } from './components/icons/directions/arrow'
import { cookieConcent } from './cookieConcent'

customElements.define('twls-modal', TwlsModal)
customElements.define('twls-accordion', TwlsAccordion)
customElements.define('twls-content-section', TwlsContentSection)
customElements.define('twls-icon-arrow', TwlsIconArrow)

cookieConcent()