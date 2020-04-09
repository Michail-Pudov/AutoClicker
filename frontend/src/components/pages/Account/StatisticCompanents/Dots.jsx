import React from 'react';

class Dots extends React.Component {
  render() {
      const { cx, cy } = this.props;

      return (
          <image x={cx - 15} y={cy - 15} width={30} height={30} xlinkHref='https://png2.cleanpng.com/sh/b634578dcd7e8ab7789828f3179784e1/L0KzQYm3VMAyN5lofZH0aYP2gLBuTf1wdpZAReJqeX3ofsW0hfxma6V3h9DyYz3phbBrk711epJzi9hucj3mf773lgRmel5uRd94bnX8PbPoh702aZQ1fKcDNEfmQYLsUr4yQWE7UKs7MkG4QoO8WMcxOWM6SKo7LoDxd1==/kisspng-money-payment-electronic-funds-transfer-computer-i-money-bag-5ac0d5847c11e2.1906892215225870125082.png' alt={this.props.data} />
      );
  }
}
export default Dots;
