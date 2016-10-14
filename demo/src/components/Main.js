import React, { Component } from 'react';
import { defaultRanges, Calendar, DateRange } from '../../../lib';
import Section from 'components/Section';

import 'normalize.css';
import 'styles/global'
import styles from 'styles/main';

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      'rangePicker' : {},
      'linked' : {},
      'datePicker' : null,
      'firstDayOfWeek' : null,
      'predefined' : {},
      'defineRange': null
    }
  }

  handleChange(event) {
    this.setState({ 'defineRange': event.target.value });
  }

  render() {
    const { rangePicker, linked, datePicker, firstDayOfWeek, predefined} = this.state;
    const format = 'dddd, D MMMM YYYY';

    return (
      <main className={styles['Main']}>

        <h1 className={styles['Title']}>React-date-range</h1>

        <Section title='Range Picker'>
          <div>
            <input type="radio" name="rage" value="4" onChange={ this.handleChange.bind(this) } /> 4 days
            <input type="radio" name="rage" value="8" onChange={ this.handleChange.bind(this) } /> 8 days
          </div>

          <DateRange defineRange={ this.state.defineRange }/>
        </Section>

      </main>
    )
  }
}
