import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey lighten-3">
        <div className="container ">
          <div className="row">
            <div className="col l6 s12 ">
              <h5 className="grey-text text-darken-4">Какой-то полезный текст</h5>
              <p className="grey-text text-darken-4">
                Тут возможно будет описание, предоставляемого сервиса))
              </p>
            </div>
            <div className="col l4 offset-l2 s12 ">
              <b className="grey-text text-darken-4">Полезные ссылки</b>
              <ul>
                <li><a className="grey-text text-darken-4" href="https://hh.ru/">HeadHunter</a></li>
                <li><a className="grey-text text-darken-4" href="https://superjob.ru/">SuperJob</a></li>
                <li><a className="grey-text text-darken-4" href="https://ru.linkedin.com/">LinkedIn</a></li>
                <li><a className="grey-text text-darken-4" href="https://career.habr.com/">Хабр Карьера</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright ">
          <div className="container grey-text text-darken-4">
            © 2020 Copyright Text
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;
