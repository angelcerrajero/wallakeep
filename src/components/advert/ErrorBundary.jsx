import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.stack);
    console.log(errorInfo);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="notification is-danger" id="no-results">
          <p>Oh NO!!, Something went wrong</p>
          <p>{error}</p>
        </div>
      )
    }
    return this.props.children;
  }
}