
function Container(props) {
    console.log(props.title);
    return(
        <div className="box">
            <div className="title">{props.title}</div>    
            {props.children}
        </div>
    );
}

/**
 * Компонент "коробка" для однотипных блоков
 */

export default Container;