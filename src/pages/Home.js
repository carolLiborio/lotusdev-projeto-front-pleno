import React from 'react';
import Search from '../Components/SearchComponent';
import MediaCard from '../Components/OtherPlaces';

const Home = () => {
  const forr = [

    {
      img: process.env.PUBLIC_URL + '/images/praia.jpg',
      titulo: 'América do Sul',
      descricao: 'Parque Estadual do Jalapão'
    },
    {

      img: process.env.PUBLIC_URL + '/images/orlando.jpg',
      titulo: 'Norte-americano',
      descricao: 'Disney'
    },
    {

      img: process.env.PUBLIC_URL + '/images/paris.jpg',
      titulo: 'Europa Ocidental',
      descricao: 'Paris'
    }
  ]

  return (

    <div>
      <Search />
      {
        forr.map((i, index) => (
          <MediaCard
            key={index}
            img={i.img}
            titulo={i.titulo}
            descricao={i.descricao} />
        ))
      }
    </div>




  );
};

export default Home;
