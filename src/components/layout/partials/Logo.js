import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h2 className="m-0">
        <Link to="/">
          <span className={""}>R</span><span className={"text-color-primary"} style={{opacity: 0.4}}>D</span>
        </Link>
      </h2>
    </div>
  );
}

export default Logo;