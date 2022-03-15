import React from 'react';
import Header from './components/Header/Header';
import ProducsList from './components/SectionList/ProducsList';
import Footer from './components/Footer/Footer';

const App = () => {

  let logo = "https://i.pinimg.com/600x315/dd/39/6a/dd396aa73c2d5f140d899dccdecebbbd.jpg"
  let flower = [
    {
      selary: "3000 som",
      name: "Pink roses seasonal bouquet",
      image:
        "https://f-mans.com/data/goods/1/2020/06/_tmp_b51028da24e0b26eaf09911a33f759f64006view.jpg",
      id: 1,
    },
    {
      selary: "2600 som",
      name: "Stalk",
      image:
        "https://f-mans.com/data/goods/1/2020/06/72_2020061708405517.jpg",
      id: 2,
    },
    {
      selary: "3100 som",
      name: "Sincerity (Hydrangea Bouquet)",
      image: "https://f-mans.com/data/goods/1/2022/01/674_2022012811372315.jpg",
      id: 3,
    },
    {
      selary: "2800 som",
      name: "Freesia seasonal bouquet",
      image:
        "https://f-mans.com/data/goods/1/2020/11/506_2020110911572013.jpg",
      id: 4,
    },
  ];

  return (
    <div>
      <Header logo={logo} flower={flower} />
      <ProducsList flower={flower} />
      <Footer />


    </div>
  );
};

export default App;