import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faHamburger,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { HashLink as Link } from "react-router-hash-link";

export interface PageItem {
  To: string;
  Text: string;
}

export interface NavbarProps {
  Title?: string;
  Logo?: string;
  Pages: PageItem[];
  Socials: {
    Instagram?: string;
    Linkedin?: string;
    Twitter?: string;
    Opensea?: string;
    Discord?: string;
    Facebook?: string;
    Telegram?: string;
    Tiktok?: string;
  };
  StartTransparent?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(typeof props.StartTransparent !== "undefined" && true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const onLinkClick = () => {
    setPopupOpen(false);
  };

  const pages = (
    <ul className="nav-pages">
      {props.Pages.map((page, i) => (
        <li className="nav-page" key={i}>
          <Link to={page.To} onClick={onLinkClick}>
            {page.Text}
          </Link>
        </li>
      ))}
    </ul>
  );

  const links = (
    <div className="nav-links">
      {props.Socials.Facebook && (
        <div className="nav-link">
          <a href={props.Socials.Facebook} target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      )}
      {props.Socials.Discord && (
        <div className="nav-link">
          <a href={props.Socials.Discord} target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      )}

      {props.Socials.Instagram && (
        <div className="nav-link">
          <a href={props.Socials.Instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      )}

      {props.Socials.Twitter && (
        <div className="nav-link">
          <a href={props.Socials.Twitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      )}
      {props.Socials.Telegram && (
        <div className="nav-link">
          <a href={props.Socials.Telegram} target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      )}
      {props.Socials.Tiktok && (
        <div className="nav-link">
          <a href={props.Socials.Tiktok} target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      )}
      {props.Socials.Linkedin && (
        <div className="nav-link">
          <a href={props.Socials.Linkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      )}
      {props.Socials.Opensea && (
        <div className="nav-link">
          <a href={props.Socials.Opensea} target="_blank">
            <img src="/build/images/opensea-logo.svg" alt="" />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <nav className={colorChange ? "navbar" : "navbar transparent"}>
      <div className="navbar-content">
        <div className="nav-logo-wrapper">
          {props.Logo && (
            <Link to="/">
              <img src={props.Logo} alt="" className="nav-logo" />
            </Link>
          )}
          {props.Title && (
            <h2 className="nav-title">
              <Link to="/" onClick={onLinkClick}>
                {props.Title}
              </Link>
            </h2>
          )}
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="icon navbar-expand"
          onClick={() => {
            setPopupOpen(true);
          }}
        />
        {pages}
        {links}
      </div>
      <div
        className="navbar-popup"
        style={{ display: popupOpen ? "block" : "none" }}
      >
        <div className="popup-toolbar">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              setPopupOpen(false);
            }}
          />
        </div>
        {pages}
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
