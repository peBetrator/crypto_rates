import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list.css';

import { getAllCurrenciesMarket } from '../../../../actions/rates';
import Sparkline from '../sparkline/Sparkline';

class List extends Component {
  componentDidMount() {
    const { target_curreny, getAllCurrenciesMarket } = this.props;
    getAllCurrenciesMarket(target_curreny);
  }

  componentDidUpdate(prevProps) {
    const { target_curreny, getAllCurrenciesMarket } = this.props;

    if (prevProps.target_curreny !== target_curreny) {
      getAllCurrenciesMarket(target_curreny);
    }
  }

  render() {
    const { error, list, loading, target_curreny } = this.props;

    if (error) return <h3>{error}</h3>;
    if (loading) return <h3>Fetching currencies ...</h3>;

    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>currency</th>
            <th>symbol</th>
            <th>name</th>
            <th>price ({target_curreny})</th>
            <td>sparkline</td>
          </tr>
        </thead>
        <tbody>
          {list.map((data, i) => {
            console.log(data);
            const {
              id,
              symbol,
              name,
              image,
              current_price,
              sparkline_in_7d,
              price_change_percentage_7d_in_currency,
            } = data;
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{id}</td>
                <td>
                  {symbol} <img src={image} height="15px" />
                </td>
                <td>{name}</td>
                <td>{current_price}</td>
                <td>
                  <Sparkline
                    price={sparkline_in_7d.price}
                    price_change_percentage={
                      price_change_percentage_7d_in_currency
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ rates, assets }) => {
  return {
    target_curreny: assets.current_cur,

    list: rates.currencyList,
    loading: rates.loading,
    error: rates.error,
  };
};

const mapDispatchToProps = {
  getAllCurrenciesMarket,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
