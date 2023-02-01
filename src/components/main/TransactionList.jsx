import React, { PureComponent } from 'react';
import Heading from '../../doit-ui/Heading';
import Card from '../../doit-ui/Card';

/*
8장 참조 코드
import TransactionSearchFilter from './TransactionSearchFilter';
*/
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    this.props.requestTransactionList();
  }

  render() {
    /* 8, 9장 참조 코드
    const { transactions } = this.state;
    */
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
