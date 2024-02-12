import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttomType, ...otherProps }) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttomType]}`} {...otherProps}>{children}</button>;
};

export default Button;