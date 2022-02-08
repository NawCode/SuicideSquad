import PopUp from './PopUp';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row1">
          <div className="col">
            <h3 className="footer-cat">RÉSEAUX SOCIAUX</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/?lang=fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div class="vertical"></div>
          <div className="col">
            <h3 className="footer-cat">PARTENAIRES</h3>
            <ul>
              <li>
                <a
                  href="https://www.marvel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Marvel
                </a>
              </li>
              <li>
                <a
                  href="https://www.dccomics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DC Comics
                </a>
              </li>
              <li>
                <a
                  href="https://www.starwars.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Star Wars
                </a>
              </li>
            </ul>
          </div>
          <div class="vertical"></div>
          <div className="col">
            <h3 className="footer-cat">NOUS CONTACTER</h3>
            <form class="contactForm">
              <div class="mailForm">
                <label for="mail"> Email</label>
                <input
                  type="text"
                  name="user_mail"
                  placeholder="exemple@gmail.com"
                />
              </div>
              <div class="messageForm">
                <label for="message">Message</label>
                <textarea
                  type="text"
                  name="user_message"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="button"
                className="buttonSend"
                onClick={() => setButtonPopUp(true)}
              >
                ENVOYER
              </button>
              <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p className="innerMsg">Message envoyé</p>
              </PopUp>
            </form>
          </div>
        </div>
        <div>
          <hr className="line" />
        </div>
        <div className="row2">
          <p className="copyright">© 2021 Tous droits réservés Suicide Squad</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
