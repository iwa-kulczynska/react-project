import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';

const FAQ = (props) => (
  <Container>
    <Hero titleText={props.title} url={props.image}/>
    <p>{props.content}</p>
  </Container>
);

FAQ.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default FAQ;