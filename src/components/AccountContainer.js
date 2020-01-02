import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import Transaction from './Transaction

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      transactions: []
      // filter: []
    }
  }




  componentDidMount = () => {
    fetch ('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({transactions: data}))
  }

  handleChange(event) {
    // going to use the filter method with the toLowerCase()
    //use setState to update the state
    // filterList = (event) => {
    //   let items = this.state.filter;
    //   items = items.filter((item) => {
    //     return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    //   });
    //   this.setState({filter: items});
    // }
  }

  render() {

    return (
      <div>
        <Search />
        <TransactionsList transaction={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
