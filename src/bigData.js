const title = ["Сейчас в СМИ", "в России", "Рекомендуем"];
const news = [
  {
    link:"https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square",
    content: "Президент РФ Путин подписал указ о единовременной выплате пенсионерам в 10 тысяч рублей"
  },
  {
    link:"https://avatars.mds.yandex.net/get-ynews-logo/28627/254083361-1516267195536-square/logo-square",
    content: "В Кремле рассказали о работе кабмина по мониторингу ситуации с ценами на продукты"
  },
  {
    link:"https://avatars.mds.yandex.net/get-ynews-logo/135513/1040-1478692902361-square/logo-square",
    content: "Украинский МИД опроверг информацию об угоне самолета в аэропорту Кабула"
  },
  {
    link:"https://avatars.mds.yandex.net/get-ynews-logo/135513/1014-1627575534690-square/logo-square",
    content: "Жителей Германии возмутили гарантии Украине из-за «Северного потока — 2»"
  },
  {
    link:"https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square",
    content: "Минздрав обновил временные методические рекомендации по порядку проведения вакцинации"
  },

];

const list = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "еще"];

const rates = [
  {
    active: "USD MOEX",
    rates: 73.97,
    difference: "-0,19"
  },
  {
    active: "EUR MOEX",
    rates: 86.81,
    difference: "-0,27"
  }, 
  {
    active: "НЕФТЬ",
    rates: 69.94,
    difference: "+1,52%"
  }
];

const data = {
  weatherNow: "+30",
  morning: "+20",
  evening: "+25"
};

const visited = [
  {
    title: "Недвижимость",
    description: "о сталинках"
  },
  {
    title: "Маркет",
    description: "люстры и светильники"
  },
  {
    title: "Авто.ру",
    description: "4х4 до 500 000"
  }
];

const tv = [
  {
    time: "02:00",
    description: "THT.Best",
    channel: "THT International"
  },
  {
    time: "02:15",
    description: "Джинглики",
    channel: "Карусель INT"
  },
  {
    time: "02:25",
    description: "Наедине со всеми",
    channel: "Первый"
  }
];

const ethir = [
  {
    img: "⏯",
    description:"Управление как искусство",
    option: "Успех"
  },
  {
    img: "⏯",
    description:"Ночь.Мир в это время",
    option: "earthTV"
  },
  {
    img: "⏯",
    description:"Андрей Возн...",
    option: "Совершенно секретно"
  }
];

export {title, news, list, rates, data, visited, tv, ethir};