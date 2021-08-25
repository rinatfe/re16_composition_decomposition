function DateComponents() {
    let now = new Date();
    const result = ()=> {
        let months = ["января", "февраля", "марта", "апреля", 
        "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let weekdays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
        let date = now.getDate();
        let month = ()=>{  return months[now.getMonth() - 1]}
        let hour = now.getHours() < 10 ? '0' + now.getHours()  : now.getHours();
        let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes()  : now.getMinutes();
        let weekday = ()=> { return weekdays[now.getDay() - 1]}

        

        return `${now.getDate()} ${month()}, ${weekday()} ${hour}:${minutes}`

    }



    return(
        <div className="date-box">
            {result()}
        </div>
    );
}

/**
 * Компонент отображающий дату
 */

export default DateComponents;