import React from 'react'

export const Footer = () => {
  return (
    <section className="section" id="view-contactus">
        <footer className="c-footer" id="footer">
        <div className="c-container">
            <div className="c-footer__wrap">
                <h1 className="footerTitle">Contact us for more information.</h1>

            </div>
            <div className="c-footer__wrap2">
                <div className='adressDropButton'>
                    <a href="https://iamx.id/contact/" target="_blank"><button className="contactButton">Drop us a line</button></a>
                    <p className="address">
                        <b>IAMX AG</b><br />
                        Dammstrasse 16<br />
                        CH-6300 Zug<br />
                        Switzerland
                    </p>
                </div>
                <div className="footer-social">
                    <div className="holder">
                        <a href="https://ch.linkedin.com/company/iamx-ag">
                            <img className="icon-linkedin" src="images/footer/footer_icon_linkedin.png" />
                        </a>
                    </div>
                    <div className="holder">
                        <a href="https://medium.com/@IAMX-AG">
                            <img className="icon-2" src="images/footer/footer_icon_2.png" />
                        </a>
                    </div>
                    <div className="holder">
                        <a href="https://twitter.com/iam_x_identity">
                            <img className="icon-twitter" src="images/footer/footer_icon_twitter.png" />
                        </a>
                    </div>
                    <div className="holder">
                        <a href="https://t.me/+aVdKFy7xPmsxMzky">
                            <img className="icon-telegram" src="images/footer/footer_icon_telegram.png" />
                        </a>
                    </div>
                    <div className="holder">
                        <a href="https://discord.com/invite/GhXnsRYRuJ">
                            <img className="icon-discord" src="images/footer/footer_icon_discord.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="c-footer__wrap">
                <a href="https://iamx.id/imprint/" target="_blank">Imprint </a>
                <a href="https://iamx.id/privacypolicy/" target="_blank">Privacy Policy</a>
                <p>Copyright 2022 IAMX AG</p>
            </div>
        </div>
    </footer>
    </section>
  )
}


export default Footer;