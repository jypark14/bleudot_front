import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {

  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  };

  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  _getData = async () => {
    const data = await this._callApi();
    console.log(data);
    this.setState({
      data: data,
      loaded: true
    })
  }

  _callApi = () => {
    return fetch(this.props.endpoint)
    .then(response => {
      const json = response.json()
      return json
    })
    .catch(err => this.setState({ placeholder: `Err msg: ${err}`}))
  }

  componentDidMount() {
    this._getData();
  }

  render() {
    return this.state.loaded ? this.props.render(this.state.data) : <p>{this.state.placeholder}</p>;
  }
}
export default DataProvider;