import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#activities">Other activities</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#hobbies">About me</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;