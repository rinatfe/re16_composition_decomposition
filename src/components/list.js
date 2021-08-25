function ListItems(props) {
    return(
        <ul className="list-items">
            {props.items.map(i=> {
                return <li key={props.items.indexOf(i)} className="list-item">{i}</li>
            })}
        </ul>
    );
}

/**
 * Компонент формирования списков
 */

export default ListItems;