const filt = function (data) {
  let countrys = [];

  data.map((d) => {
    let country = {
      id: "",
      name: "",
      capital: [],
      flag: "",
      landlocked: false,
      subregion: "",
    };

    country.id = d.ccn3;
    country.name = d.name.common;
    country.capital = d.capital;
    country.flag = d.flags.svg;
    country.landlocked = d.landlocked;
    country.subregion = d.subregion;
    countrys.push(country);
  });

  return countrys;
};

export default filt;
