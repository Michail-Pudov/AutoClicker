import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../arrow.png';


class ScrollTo extends Component {
  render() {
    return (
      <div>
        <div className="arrowImage">
          <Link onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
          >
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    );
  }
}


export default ScrollTo;
