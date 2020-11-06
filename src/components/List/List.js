import React from 'react';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import styles from './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero url={this.props.url} titleText={this.props.title} />
        <div className={styles.description}>
           {this.props.children}
        </div>
        <div  className={styles.columns}>
          <Column title={'Pierwsza kolumna'}/>
          <Column title={'Druga kolumna'}/>
          <Column title={'Trzecia kolumna'}/>
        </div>
      </section>
    )
  }
}

export default List;
