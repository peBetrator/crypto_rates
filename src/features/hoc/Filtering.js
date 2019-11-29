import React, { Component, useState } from 'react';
import './filtering.css';

const DisplayFiltering = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        show: false,
      };
    }

    handleDisplay = () => {
      this.setState({ show: true });
    };

    handleHide = () => {
      this.setState({ show: false });
    };

    render() {
      const { show, handleDisplay, handleHide } = this.state;

      return (
        <div className={show ? 'filtering__show' : 'filtering__hide'}>
          <WrappedComponent
            display={handleDisplay}
            hide={handleHide}
            {...this.props}
          />
        </div>
      );
    }
  };
};

export default DisplayFiltering;
