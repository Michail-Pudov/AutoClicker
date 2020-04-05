import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="page-footer grey lighten-3">
        <footer className="page-footer grey lighten-3">
          <div className="container ">
            <div className="row">
              <div className="col l6 s12 ">
                <h5 className="grey-text text-darken-4">Footer Content</h5>
                <p className="grey-text text-darken-4">
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className="col l4 offset-l2 s12 ">
                <h5 className="grey-text text-darken-4">Links</h5>
                <ul>
                  <li><a className="grey-text text-darken-4" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-darken-4" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-darken-4" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-darken-4" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div >
          <div className="footer-copyright ">
            <div className="container grey-text text-darken-4">
              © 2014 Copyright Text
              <a className="grey-text text-darken-4" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


export default Footer;
