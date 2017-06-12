import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
  super(props);
  //Initial term is empty
  this.state = { term : ''};
  //binding the class SearchBar to the method onInputChange
  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //this method changes the props 'term' and sets it into the state
  onInputChange(event) {
    this.setState( { term : event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term : ''});
  }

  render() {
    return (
      <form onSubmit = {this.onFormSubmit} className = "input-group">
      <input
        placeholder = "Get a five-day forecast of your favorite city"
        className = "form-control"
        value = {this.state.term}
        onChange = {this.onInputChange} />
        <span className = "input-group-btn">
        <button type = "submit" className = "btn btn-secondary">Search</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
