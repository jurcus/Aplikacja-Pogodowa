export const mockWeatherData = {
    Warszawa: {
      currentWeather: {
        main: { temp: 21.5 },
        weather: [{ description: "słonecznie", icon: "01d" }],
        wind: { speed: 3.5, deg: 120 },
        clouds: { all: 10 },
        rainChance: 15,
      },
      forecast: {
        list: [
          { dt: 1698451200, main: { temp: 20.1 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 10 },
          { dt: 1698537600, main: { temp: 18.5 }, weather: [{ description: "pochmurno", icon: "04d" }], rain: { "3h": 0.5 }, rainChance: 40 },
          { dt: 1698624000, main: { temp: 17 }, weather: [{ description: "deszcz", icon: "09d" }], rain: { "3h": 3.2 }, rainChance: 80 },
          { dt: 1698710400, main: { temp: 16.2 }, weather: [{ description: "burza z deszczem", icon: "11d" }], rain: { "3h": 8 }, rainChance: 70 },
          { dt: 1698796800, main: { temp: 15.3 }, weather: [{ description: "mgła", icon: "50d" }], rain: null, rainChance: 20 },
        ],
      },
    },
    Kraków: {
      currentWeather: {
        main: { temp: 19.2 },
        weather: [{ description: "pochmurno", icon: "04d" }],
        wind: { speed: 2.8, deg: 90 },
        clouds: { all: 70 },
        rainChance: 25,
      },
      forecast: {
        list: [
          { dt: 1698451200, main: { temp: 18.0 }, weather: [{ description: "deszcz", icon: "09d" }], rain: { "3h": 1.0 }, rainChance: 60 },
          { dt: 1698537600, main: { temp: 17.4 }, weather: [{ description: "pochmurno", icon: "04d" }], rain: null, rainChance: 30 },
          { dt: 1698624000, main: { temp: 16.5 }, weather: [{ description: "mgła", icon: "50d" }], rain: null, rainChance: 20 },
          { dt: 1698710400, main: { temp: 15.8 }, weather: [{ description: "deszcz", icon: "10d" }], rain: { "3h": 2.0 }, rainChance: 50 },
          { dt: 1698796800, main: { temp: 14.3 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 10 },
        ],
      },
    },
    Gdańsk: {
      currentWeather: {
        main: { temp: 15.3 },
        weather: [{ description: "wiatr", icon: "50d" }],
        wind: { speed: 5.0, deg: 200 },
        clouds: { all: 20 },
        rainChance: 5,
      },
      forecast: {
        list: [
          { dt: 1698451200, main: { temp: 14.5 }, weather: [{ description: "słonecznie", icon: "01d" }], rain: null, rainChance: 5 },
          { dt: 1698537600, main: { temp: 13.2 }, weather: [{ description: "deszcz", icon: "09d" }], rain: { "3h": 1.2 }, rainChance: 70 },
          { dt: 1698624000, main: { temp: 12.9 }, weather: [{ description: "burza", icon: "11d" }], rain: { "3h": 4.5 }, rainChance: 90 },
          { dt: 1698710400, main: { temp: 14.0 }, weather: [{ description: "pochmurno", icon: "04d" }], rain: null, rainChance: 30 },
          { dt: 1698796800, main: { temp: 13.3 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 10 },
        ],
      },
    },
    Wrocław: {
      currentWeather: {
        main: { temp: 22.5 },
        weather: [{ description: "słonecznie", icon: "01d" }],
        wind: { speed: 3.0, deg: 100 },
        clouds: { all: 0 },
        rainChance: 0,
      },
      forecast: {
        list: [
          { dt: 1698451200, main: { temp: 21.0 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 0 },
          { dt: 1698537600, main: { temp: 19.5 }, weather: [{ description: "pochmurno", icon: "04d" }], rain: null, rainChance: 10 },
          { dt: 1698624000, main: { temp: 18.2 }, weather: [{ description: "deszcz", icon: "09d" }], rain: { "3h": 2.0 }, rainChance: 50 },
          { dt: 1698710400, main: { temp: 17.8 }, weather: [{ description: "burza", icon: "11d" }], rain: { "3h": 6.0 }, rainChance: 70 },
          { dt: 1698796800, main: { temp: 16.3 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 5 },
        ],
      },
    },
    Poznań: {
      currentWeather: {
        main: { temp: 17.8 },
        weather: [{ description: "pochmurno", icon: "04d" }],
        wind: { speed: 4.0, deg: 150 },
        clouds: { all: 60 },
        rainChance: 35,
      },
      forecast: {
        list: [
          { dt: 1698451200, main: { temp: 17.0 }, weather: [{ description: "częściowo słonecznie", icon: "02d" }], rain: null, rainChance: 20 },
          { dt: 1698537600, main: { temp: 16.5 }, weather: [{ description: "deszcz", icon: "09d" }], rain: { "3h": 1.0 }, rainChance: 50 },
          { dt: 1698624000, main: { temp: 15.8 }, weather: [{ description: "burza", icon: "11d" }], rain: { "3h": 3.0 }, rainChance: 80 },
          { dt: 1698710400, main: { temp: 15.3 }, weather: [{ description: "mgła", icon: "50d" }], rain: null, rainChance: 20 },
          { dt: 1698796800, main: { temp: 14.0 }, weather: [{ description: "pochmurno", icon: "04d" }], rain: null, rainChance: 10 },
        ],
      },
    },
  };
  