import React from 'react'
import Link from 'gatsby-link'

const Impressum = () => (
  <div class="main">
    <section id="angebot" className="main style1">
    <div className="grid-wrapper">
      <div className="col-12">
        <h1>Impressum</h1>
        <p>Für alle Unternehmen, die eine Website betreiben, gelten die Informationspflichten nach E-Commerce Gesetz (ECG) und die Offenlegungspflicht gemäß Mediengesetz.</p>
        <ul >
          <li>Firmenname: S & H Finanzberatung GmbH</li>
          <li>Straße: Stiftgasse 11</li>
          <li>PLZ / Ort: 6020 Innsbruck</li>
          <li>Telefon: +43 512 57 11 27</li>
          <li>Telefax: +43 512 57 11 27 27</li>
          <li>Homepage: www.sh-finance.at, www.sh-finanzierungsberatung.at</li>
          <li>E-Mail: info@sh-finance.at</li>
          <li>Firmenbuchnummer: 211023d</li>
          <li>Firmenbuchgericht: Handelsgericht Innsbruck</li>
        </ul>
      <Link to="/">Zurück zur Startseite</Link>
      </div>
    </div>
    </section>
  </div>
)

export default Impressum
