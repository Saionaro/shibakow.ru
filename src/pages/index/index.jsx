import React, { useContext } from "react";
import SVG from "svg-inline-react";

import { LangContext } from "../../lang-context";

import "./style.less";

const ICONS = {
  mail: require("../../imgs/gmail.svg"),
  telegram: require("../../imgs/telegram.svg"),
  github: require("../../imgs/github.svg"),
  location: require("../../imgs/location.svg"),
  vk: require("../../imgs/vk.svg"),
  facebook: require("../../imgs/facebook.svg")
};

export default function Index() {
  const locale = useContext(LangContext);

  return (
    <div className="person" itemScope itemType="http://schema.org/Person">
      <header className="person__head">
        <img
          className="person__photo"
          itemProp="image"
          src="/img/photo.jpg"
          alt={locale.imageAlt}
          height="200"
          width="200"
        />
        <h1 className="person__name" itemProp="name" title={locale.name}>
          {locale.name}
        </h1>
      </header>

      <main className="contacts">
        <a
          className="contacts__item"
          itemProp="email"
          href="mailto:shibakow@gmail.com"
        >
          <span className="contacts__icon">
            <SVG src={ICONS.mail} />
          </span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.email}</h2>
            <p className="contacts__text">shibakow@gmail.com</p>
          </div>
        </a>
        <a
          className="contacts__item contacts__item--fav"
          itemProp="sameAs"
          href="https://t.me/shibakow"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon">
            <SVG src={ICONS.telegram} />
          </span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.telegram}</h2>
            <p className="contacts__text">shibakow</p>
          </div>
        </a>
        <a
          className="contacts__item"
          itemProp="sameAs"
          href="https://github.com/saionaro"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon">
            <SVG src={ICONS.github} />
          </span>
          <div className="contacts__body">
            <h2 className="contacts__title">Github</h2>
            <p className="contacts__text">Saionaro</p>
          </div>
        </a>
        <a
          className="contacts__item"
          itemProp="sameAs"
          href={locale.socnetRef}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon">
            <SVG src={ICONS[locale.socnetIcon]} />
          </span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.socnetTitle}</h2>
            <p className="contacts__text">{locale.socnetVal}</p>
          </div>
        </a>
        <a
          className="contacts__item"
          href={locale.locationRef}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon">
            <SVG src={ICONS.location} />
          </span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.locationTitle}</h2>
            <p className="contacts__text">{locale.locationVal}</p>
          </div>
        </a>
      </main>
    </div>
  );
}
