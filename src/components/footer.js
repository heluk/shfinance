import React from 'react'
import Link from 'gatsby-link'


import SecondPage from '../pages/impressum.js'
import rlb from '../assets/images/rlb.png'
import btv from '../assets/images/btv.png'
import standardlife from '../assets/images/Standard_Life.png'
import unicredit from '../assets/images/unicredit.png'


class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <h4 className="partner">Unsere Partner</h4>
                <ul className="icons">
                    <li><img className="partner__icons partner__icons-rlb" src={rlb} alt="" /><a href="#" className=""><p className="label">Raiffeisen Landesbank Tirol</p></a></li>
                    <li><img className="partner__icons" src={btv} alt="" /><a href="#" className=""><p className="label">BTV</p></a></li>
                    <li><img className="partner__icons" src={standardlife} alt="" /><a href="#" className=""><p className="label">Standard Life</p></a></li>
                    <li><img className="partner__icons" src={unicredit} alt="" /><a href="#" className=""><p className="label">Bank Austria</p></a></li>
                </ul>
                <ul className="icons">
                    <li><i className="fa fas fa-map-pin"/>Stiftgasse 11, 6020 Innsbruck, Österreich</li>
                    <li><i className="fa fas fa-phone"/>Telefon: +43 512 57 11 27</li>
                    <li><i className="fa far fa-envelope"></i>info@sh-finance.at</li>
                </ul>

                <div className="copyright">
                    <div>
                        <Link to="/impressum">Impressum</Link>
                    </div>
                    <div>
                        <p>Copyright © S & H Finanzberatung GmbH 2019</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer
