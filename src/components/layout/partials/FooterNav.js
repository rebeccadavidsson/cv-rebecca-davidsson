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
          <a href="#activities">Other Activities</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#hobbies">About Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;