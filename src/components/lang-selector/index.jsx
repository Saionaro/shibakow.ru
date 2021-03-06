import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LangContext } from "../../lang-context";

import "./style.less";

export default function LangSelector() {
  const locale = useContext(LangContext);

  return (
    <aside className="lang-selector">
      <ul className="lang-selector__list">
        {locale.lang !== "en" && (
          <li className="lang-selector__item">
            <a className="lang-selector__link" href="/en">
              en
            </a>
          </li>
        )}
        {locale.lang !== "ru" && (
          <li className="lang-selector__item">
            <a className="lang-selector__link" href="/">
              ru
            </a>
          </li>
        )}
      </ul>
    </aside>
  );
}

LangSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.element,
  includeGa: PropTypes.bool,
};
