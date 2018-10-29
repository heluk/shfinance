import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/business.jpg'
import pic03 from '../assets/images/coins.jpg'
import pic04 from '../assets/images/realestate.jpg'
import OttoHeschl from '../assets/images/profil.jpg'

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
                
                <section id="contact" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Interesse?</h2>
                        </header>
                        <p>Wir beraten Sie gerne.</p>
                        <ul className="actions uniform">
                            <li><a href="tel:+43 512 57 11 27" className="button special">+43 512 57 11 27</a></li>
                        </ul>
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