import React, { PureComponent } from 'react';

import Heading from '../../doit-ui/Heading';
import InlineList from '../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="4216000" />
          <CoinDashlet name="이더리움" priceLabel="216000" />
          <CoinDashlet name="두잇코인" priceLabel="25000" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
