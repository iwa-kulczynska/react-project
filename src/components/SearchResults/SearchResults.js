import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';


class SearchResults extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, searchString} = this.props;
    this.props.changeSearchString(searchString);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div  className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
