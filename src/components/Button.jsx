import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ onClick, children, className }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: '',
};

export default Button;