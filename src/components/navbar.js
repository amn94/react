import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} body-tertiary`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.about}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>

    </nav>

  );
}

Navbar.propTypes ={title :PropTypes.string,
                  about : PropTypes.string}

Navbar.defaultProps ={
  title:'set title here',
  about:'set about here'
}
