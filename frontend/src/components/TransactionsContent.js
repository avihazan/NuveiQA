import React from 'react';
import Moment from 'react-moment';

class TransactionsContent extends React.Component {
	state = {
		isLoading: true,
		transactions: [],
		error: null,
		totalTransactions: 0,
		totalApprovedTransactions: 0
	};
	getFetchTransactions() {
		this.setState(
			{
				loading: true
			},
			() => {
				fetch('http://localhost:8087/transactions')
					.then((res) => res.json())
					.then((result) =>
						this.setState({
							isloading: false,
							transactions: result,
							totalTransactions: Object.keys(result).length
						})
					)
					.catch(console.log);
			}
		);
	}
	getStatusColor(status) {
		return status === 'approved' ? 'green' : status === 'pending' ? 'yellow' : 'red';
	}

	componentDidMount() {
		this.getFetchTransactions();
	}
	render() {
		const { transactions, error } = this.state;

		return (
			<React.Fragment>
				{error ? <p>{error.message} </p> : null}{' '}
				{transactions.map((transaction) => {
					const {
						transactionDate,
						clientId,
						amount,
						currencyCode,
						bankName,
						status,
						dateModified,
						dateCreated
					} = transaction;

					return (
						<tr key={transactionDate}>
							<td>
								<Moment format="DD-MM-YYYY HH:mm">{transactionDate}</Moment>
							</td>
							<td>{clientId}</td>
							<td>{amount}</td>
							<td>{currencyCode}</td>
							<td>{bankName}</td>
							<td style={{ backgroundColor: this.getStatusColor(status) }}>{status}</td>
							<td>
								<Moment format="DD-MM-YYYY HH:mm">{dateModified}</Moment>
							</td>
							<td>
								<Moment format="DD-MM-YYYY HH:mm">{dateCreated}</Moment>
							</td>
						</tr>
					);
				})}{' '}
				total Transactions: {Object.keys(this.state.transactions).length}
			</React.Fragment>
		);
	}
}
export default TransactionsContent;
