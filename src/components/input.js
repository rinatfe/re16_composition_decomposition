

function InputSearch(props){
    return(
        <div className="input-box"> 
            <img src={props.logo} className="search-logo"></img>
            <input className="search-input"></input>
            <button className="search-button">Найти</button>
        </div>
    );
}

/**
 * Компонент основного поиска
 */

export default InputSearch;