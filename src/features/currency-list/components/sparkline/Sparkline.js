import React from 'react';
import { average } from '../../../../common/utils';

function Sparkline(props) {
  const { price, price_change_percentage } = props;
  const stroke = price_change_percentage > 0 ? 'green' : 'red';

  const priceAvg = average(price);

  let start = 7;
  let prev = priceAvg;
  const buildLine = price
    .map((el, i) => {
      const cur = el.toFixed(1);
      const data = `${i},${cur < prev ? start++ : start--}`;
      prev = cur;
      return data;
    })
    .join(' ');

  return (
    <svg height="1em">
      <polyline
        points={buildLine}
        style={{
          fill: 'none',
          stroke: stroke,
          strokeWidth: '1',
        }}
      />
    </svg>
  );
}

export default Sparkline;
