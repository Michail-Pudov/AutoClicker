import React, { Component } from 'react';
import arrow from '../../up.png';

class ScrollTo extends Component {
  render() {
    return (
      <div>
        <div className="arrowImage">
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })}
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
    );
  }
}

export default ScrollTo;
