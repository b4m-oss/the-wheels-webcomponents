export class TwlsCookieConcensas extends HTMLElement {

  constructor() {
    super()
  }
  connectedCallback(): void {
    const card = document.createElement('div')
    card.classList.add('twls-card')
    card.classList.add('twls-cookie-concensas')
    card.insertAdjacentHTML('beforeend',`
      <div class="twls-card-content"><p><b>サイト利用の利便性向上にご協力ください（Cookieの利用について）</b></p>
      <p>当サイトでは、ユーザーの行動や利便性向上のため、個人識別に利用可能なCookieという技術を使用しています。</p>
      <p>Cookieを利用せずこのサイトを利用することもできますが、一部機能に制限を及ぼす場合があります。</p>
      <p>詳しくは、Cookieについてのページをご覧ください</p>`)
    card.insertAdjacentHTML('beforeend', `<footer class="twls-card-footer"><a href="/about/cookie/" class="twls-button ghost">当サイトのCookieについて</a>
      <button type="button" class="twls-button twls-card-closer">
        Cookieの利用に同意
      </button></footer>`)
    this.append(card)
  }
}