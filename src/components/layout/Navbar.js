import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const Navbar = ({ logo, title }) => {
    return (
        <Fragment>
        <nav className="navbar bg-primary">
            <h1><i className={logo} /> {title}</h1>
        </nav>
        </Fragment>
    );
};

Navbar.defaultProps = {
    title: "GitHub Finder",
    logo: "fab fa-github"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};

export default Navbar;