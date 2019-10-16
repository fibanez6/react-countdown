import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Countdown from '../components/countdown';
import { fetchCalendar } from '../actions/index';

class CountdownList extends Component {

    componentDidMount() {
        this.props.fetchCalendar();
    }

    renderCountdown() {
        return _.map(this.props.calendarEvent, (event,index) => {
            console.log(event);
            return (
                <li key={index} className="list-group-item">
                    {event.summary}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Countdown date="2019-11-08T20:10:00" title="Flight to Japan (11th Nov, at 20:10 UTC time):"/>
                <Countdown date="2019-12-13T21:35:00" title="Flight to Budapest (13th Nov, at 21:35 UTC time):"/>
                <Countdown date="2019-12-22T07:35:00" title="Flight to Madrid (22nd Nov, at 07:35 UTC time):"/>

                <ul className="list-group">
                    {this.renderCountdown()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps({ calendarEvent }) {     // { calendarEvent } === state.calendarEvent
    // console.log(calendarEvent);
    return { calendarEvent };                     // { calendarEvent } === { calendarEvent: calendarEvent }
}

export default connect(mapStateToProps, { fetchCalendar })(CountdownList);