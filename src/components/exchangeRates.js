function ExchangeRates(props) {
    return(
        <div className="rates-container">
            <h3 className="active">{props.active}</h3>
            <h5 className="rates">{props.rates}</h5>
            <h5 className="difference">{props.difference}</h5>
        </div>
    );
}

/**
 * Компонент формирующий курс валют
 */

export default ExchangeRates;