import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

// columnCreatorText: 'Add new column',
//   cardCreatorText: 'Add new card',
//   creator: {
//     buttonOK: 'OK',
//     buttonCancel: 'Cancel',
//     defaultText: 'Add new item',
//   },
//   defaultListDescription: '<p>I can do all the things!!!</p>',
//   defaultColumnIcon: 'list-alt',
class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }
  render(){
    return(
      <section className={styles.component}>
        {this.props.title}
      </section>
    )
  }
}

export default Card;