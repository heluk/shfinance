import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/business.jpg'
import pic03 from '../assets/images/investment2.jpg'
import pic04 from '../assets/images/realestate.jpg'
import OttoHeschl from '../assets/images/OttoHeschl.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div class="main">
                <Helmet title={siteTitle} />

                <section id="angebot" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Wir erfüllen Ihre Finanzierungswünsche.</h2>
                            </header>
                            <p>Unser Angebot...</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Finanzierung</h3>
                            <p>Wir haben die beste Lösung für Ihre Finanzierungswünsche.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Veranlagung & Vorsorge</h3>
                            <p>Wir haben optimale Lösungen, wenn es um Ihre Vorsorge oder Geldanlage geht.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Immobilien</h3>
                            <p>Wir haben die beste Lösung, wenn Sie eine Immobilie (Wohnung, Haus, Grundstück, etc.) suchen oder verkaufen wollen.</p>
                        </div>

                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="unternehmen" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Mit professioneller Beratung zum nachhaltigen Unternehmenserfolg</h2>
                            </header>
                            <p>Wählen Sie einen Partner an Ihre Seite, der nicht den Produkten seiner Bankengruppe verpflichtet ist. Denn als unabhängiger Finanzdienstleister ist unsere Beratung nur Ihnen und Ihren Zielen verpflichtet.</p>
                            <p>Durch unseren Marktüberblick und unsere langjährige Erfahrung liefern wir Ihnen die kostengünstigste Möglichkeit Ihre Wünsche zu realisieren.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={OttoHeschl} alt="" /></span>
                        </div>
                    </div>
                </section>
                
                <section id="Kontakt" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;