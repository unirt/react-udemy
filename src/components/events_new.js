import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, defaultShouldValidate, formValues} from 'redux-form';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { postEvent } from '../actions';


class EventsNew extends Component  {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField 
        label={label}
        InputLabelProps={label}
        type={type}
        error={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    // 最初にpristineを渡して後にdisabledにする感じ
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>
        <Button variant="raised" label="Submit" type="submit"  style={style} disabled={pristine || submitting || invalid }>Submit</Button>
        <Button variant="raised" label="Cancel" style={style} href="/">Cancel</Button>
      </form>
  )
  }
};

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
