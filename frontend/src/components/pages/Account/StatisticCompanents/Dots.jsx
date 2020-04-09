import React from 'react';

class Dots extends React.Component {
  render() {
      const { cx, cy, stroke, payload, logoUrl } = this.props;   
      

      return (
          <image x={cx - 15} y={cy - 15} width={40} height={40} xlinkHref={logoUrl} alt="" />
      );
  }
}
export default Dots;
