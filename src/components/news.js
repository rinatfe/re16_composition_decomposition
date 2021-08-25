function NewsComponent(props) {
    return(
        <div className="news-item">
            <img src={props.link} className="img-news"></img>
            <div className="contentNews">{props.content}</div>
        </div>  
    );
}

/**
 * Компонент формирования новостей
 */

export default NewsComponent;