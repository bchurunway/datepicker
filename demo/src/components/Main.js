import React, { Component } from 'react';
import { defaultRanges, Calendar, DateRange } from '../../../lib';
import Section from 'components/Section';
import moment from 'moment';

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
      'defineRange': 4
    }
  }

  handleChange(event) {
    this.setState({ 'defineRange': event.target.value });
  }

  render() {
    const { rangePicker, linked, datePicker, firstDayOfWeek, predefined} = this.state;
    const format = 'dddd, D MMMM YYYY';
    const disableDate = [
      moment("Nov 14 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 15 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 16 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 17 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 23 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 24 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 25 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 26 00:00:00", "MMM DD hh:mm:ss")
    ];

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
