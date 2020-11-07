import React from 'react';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';
import styles from './List.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero url={this.props.image} titleText={this.props.title} />
        <div className={styles.description}>
        {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.creator}>
           <Creator text={settings.columnCreatorText} action={title => {this.addColumn(title)}}/>
        </div>
        <div  className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default List;
