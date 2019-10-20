import _ from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Countdown from '../components/countdown';
import {fetchCalendar} from '../actions/index';
import { Accordion, Card, Button } from 'react-bootstrap';

class CountdownList extends Component {

    componentDidMount() {
        this.props.fetchCalendar(20);
    }

    renderJourney(event) {
        return _.map(event, (flight, index) => {
            const datetime = moment(flight.start.dateTime).format('llll');
            const title = `From ${flight.location} -> ${flight.summary}  (${datetime})`;
            return (
                <div key={index}>
                    <Countdown date={flight.start.dateTime} title={title}/>
                </div>
            );
        });
    }

    renderAccommodations(accommodations) {
        return _.map(accommodations, (accommodation, index) => {
            return (
                <ul class="list-group" key={index}>
                    <li class="list-group-item">
                        <div>
                            <p>{accommodation.summary}<br/>
                            <strong>Location: </strong>{accommodation.location}<br/>
                            <strong>Start: </strong>{accommodation.start.date}<br/>
                            <strong>End: </strong>{accommodation.end.date}</p>
                        </div>
                    </li>
                </ul>

            );
        });
    }

    renderAccordion(accommodations) {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Accommodations
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {this.renderAccommodations(accommodations)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }

    render() {
        return _.map(this.props.calendarEvent, (event, index) => {
            const half = Math.round(event.flights.length / 2);
            const oneWayTrips = event.flights.slice(0, half);
            return (
                 <div key={index}>
                     {this.renderJourney(oneWayTrips)}
                     {event.accommodations.length > 0  && this.renderAccordion(event.accommodations)}
                 </div>
            );
        });
    }

}

function mapStateToProps({calendarEvent}) {     // { calendarEvent } === state.calendarEvent
    return {calendarEvent};                     // { calendarEvent } === { calendarEvent: calendarEvent }
}

export default connect(mapStateToProps, {fetchCalendar})(CountdownList);