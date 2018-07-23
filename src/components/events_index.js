import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { readEvents } from '../actions';
import { formValueSelector } from 'redux-form';


class EventsIndex extends Component  {
  
  componentDidMount() {
    this.props.readEvents();
    //console.log(this.props.events)
  }

  renderEvents() {
    //console.log(this.props.events)
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>          
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    }
    return (
      <React.Fragment>
        <Button style={style} variant="fab" color="primary" aria-label="Add" href="/events/new" >
          <AddIcon />
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.renderEvents()}
          </TableBody>
        </Table>

      </React.Fragment>
  )
  }
};

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
