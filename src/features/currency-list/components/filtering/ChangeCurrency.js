import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './filtering.css';

import {
  changeTargetCurrency,
  getAllSupportedCurrencies,
} from '../../../../actions';

function ChangeCurrency(props) {
  const [show, setShow] = useState(false);
  const { list, target_curreny, getAllSupportedCurrencies } = props;

  useEffect(() => {
    getAllSupportedCurrencies();
  }, []);

  const changeCurrency = e => {
    const { changeTargetCurrency } = props;
    changeTargetCurrency(e.target.getAttribute('data-value'));
    setShow(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleShow}>{target_curreny}</button>
      <div className={`currencies ${!show && 'hide'}`}>
        {list.map((cur, i) => (
          <div
            key={i}
            data-value={cur}
            className="currency"
            onClick={changeCurrency}
          >
            {cur}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ assets }) => {
  return {
    target_curreny: assets.current_cur,
    list: assets.supported_cur,
    loading: assets.loading,
    error: assets.error,
  };
};

const mapDispatchToProps = {
  changeTargetCurrency,
  getAllSupportedCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCurrency);
