import './App.css';
import Container from './components/container';
import ListItems from './components/list';
import DateComponents from './components/date';
import NewsComponent from './components/news';
import ExchangeRates from './components/exchangeRates';
import InputSearch from './components/input';
import Banner from './components/banner';
import WeatherComponent from './components/weather';
import {title, news, list, rates, data, visited, tv, ethir} from './bigData';



function App() {
  return (
    <div className="App">
      <header>
        <div className="smi">
          <div className="top-side">
            <ListItems items={title} />
            <DateComponents />
          </div>
          <div className="news_and_rates">
            <Container>
              {news.map(i => {
                return <NewsComponent link={i.link} content={i.content} />
              })}
            </Container>
            <div className="exr-box">
              {rates.map(i => {
                return <ExchangeRates active={i.active} rates={i.rates} difference={i.difference}/>
              })}
            </div>
          </div>
        </div>
        <div className="market">
          <img src="https://www.marimedia.ru/media/contests/f1f9a0c9c1a8fd58a9062abb99578862.jpg" className="market-img"></img>
          <Container title={"Работа над ошибками"}>
              <p>Смотрите на Яндекс и запоминайте</p>
          </Container>
        </div> 
      </header>
      <main>
        <ListItems items={list} />
        <div className="input-block">
          <InputSearch logo={"https://static.rueconomics.ru/uploads/2021/04/13/orig-161-1618327702.jpeg"} />
          <Container>
            <p className="under-input">Найдется всё. Например<span>фаза луны сегодня</span></p>
          </Container>
        </div>
        <div className="banner-box">
          <Banner link={"https://yastatic.net/www/_/o1nW4f990/adaf54tUpm/Iqc_rd08M1MhhtTHiZ19ZEbplw367rrFPuGc6mbWX-dDP8YBeUKXrcYHi2ueX8b8x4ucbER7bISCI2XxxegJIX_tZ7HAYn4EZdPRlJLALidQ8tgE9-2dtBHFqppO4WKNaALLD3gZx-CaU5IwyQSplA"} />
        </div>
      </main>
      <section>
        <Container title={"Погода"}>
          <WeatherComponent link={"https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-thunder-shower-icon-image_1366072.jpg"} data={data}/>
        </Container>
        <Container title={"Посещаемое"}>
              {visited.map(i => {
                return <div className="visit">
                  <p className="visit-content"><span className="visit-title">{i.title}</span> - {i.description}</p>
                </div>
              })}
        </Container>
        <Container title={"Карта Германии"}>
              <p className="disp">Расписание</p>
        </Container>
        <Container title={`Телепрограмма`}>
          {tv.map(i => {
                return <div className="tv-show">
                  <p className="tv-time">{i.time}</p>
                  <p className="tv-program">{i.description}</p>
                  <p className="tv-channel">{i.channel}</p>
                </div>
              })}
        </Container>
        <Container title={"Эфир"}>
        {ethir.map(i => {
                return <div className="ethir">
                  <p className="ethir-img">{i.img}</p>
                  <p className="ethir-description">{i.description}</p>
                  <p className="tv-option">{i.option}</p>
                </div>
              })}
        </Container>
      </section>  
    </div>
  );
}

export default App;
