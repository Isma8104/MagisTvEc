import React from 'react';
import styles from"./Button.module.css"; // Importa el archivo CSS
class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { to } = this.props;
    window.location.href = to; // Redireccionar a la URL especificada
  }

  render() {
    const { children } = this.props;

    return (
      <button className={styles.button} onClick={this.handleClick}>
        {children}
      </button>
    );
  }
}

export default Button2;