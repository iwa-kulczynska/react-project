import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
      <header className={styles.component}>
        <img className={styles.title} src={props.url}/> 
        <h2 className={styles.title}>{props.titleText}</h2>
      </header>
 
);

Hero.propTypes = {
  titleText: PropTypes.node,
  url: PropTypes.string
};

export default Hero;
