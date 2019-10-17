import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Countdown from '../components/countdown';
import { fetchCalendar } from '../actions/index';

class CountdownList extends Component {

    componentDidMount() {
        this.props.fetchCalendar(20);
    }

    renderCountdown() {
        return _.chain(this.props.calendarEvent)
            .filter( event => event.summary.toLocaleLowerCase().includes("flight"))
            .map((event,index) => {
                const datetime = moment(event.start.dateTime).format('llll');
                const title = `From ${event.location} -> ${event.summary}  (${datetime})`;
                return (
                    <div key={index}>
                        <Countdown date={event.start.dateTime} title={title}/>
                    </div>
                );
            }).value();
    }

    render() {
        return (
            <div>
                {this.renderCountdown()}
            </div>
        );
    }

}

function mapStateToProps({ calendarEvent }) {     // { calendarEvent } === state.calendarEvent
    return { calendarEvent };                     // { calendarEvent } === { calendarEvent: calendarEvent }
}

export default connect(mapStateToProps, { fetchCalendar })(CountdownList);