import _ from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Countdown from '../components/countdown';
import Weather from '../components/weather';
import {fetchCalendar} from '../actions/index';
import { Accordion, Card, Button } from 'react-bootstrap';

class CountdownList extends Component {

    componentDidMount() {
        let maxResult = process.env.REACT_APP_JOURNEY_MAX_RESULTS || 20;
        this.props.fetchCalendar(maxResult);
    }

    renderJourney(event) {
        return _.map(event, (flight, index) => {
            const datetime = moment(flight.start.dateTime).format('llll');
            const title = `From ${flight.location} -> ${flight.summary}  (${datetime})`;
            return (
                <div key={index}>
                    <Countdown date={flight.start.dateTime} title={title}/>
                    { this.renderWeatherAccordion(flight.to) }
                </div>
            );
        });
    }

    renderWeatherAccordion(city) {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            City Info
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Weather city={ city }/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }

    renderAccommodations(accommodations) {
        return _.map(accommodations, (accommodation, index) => {
            return (
                <ul className="list-group" key={index}>
                    <li className="list-group-item">
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
    renderAccommodationsAccordion(accommodations) {
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
                     { this.renderJourney(oneWayTrips) }
                     { event.accommodations.length > 0  && this.renderAccommodationsAccordion(event.accommodations) }
                 </div>
            );
        });
    }

}

function mapStateToProps({calendarEvent}) {     // { calendarEvent } === state.calendarEvent
    return {calendarEvent};                     // { calendarEvent } === { calendarEvent: calendarEvent }
}

export default connect(mapStateToProps, {fetchCalendar})(CountdownList);