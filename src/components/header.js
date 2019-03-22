import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="top-bar">
                    <div className="col-6">
                        <ul className="top-bar-info">
                            <li><i className="fa fas fa-phone"></i>Telefon: +43 512 57 11 27 </li>
                            <li><i className="fa far fa-envelope"></i>info@sh-finance.at</li>
                        </ul>
                    </div>
                </div>
                <div className="inner">
                    <h1>S & H <br />Private Finanzierungs- <br /> und Vermögensberatung </h1>
                    <p>Mit über 20 Jahren Erfahrung in der Schaffung von <br />umfassenden Lösungen für Sie oder Ihr Unternehmen.</p>
                    <ul className="actions">
                        <li><a href="#angebot" className="button scrolly">Mehr erfahren</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Header
