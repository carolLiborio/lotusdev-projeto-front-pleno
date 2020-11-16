import React from 'react';
import { Carousel } from 'react-responsive-carousel';




const Slider = () => {

  return (
    <div>
      <div className="cont" style={{display: 'flex', alignItems: 'center'}}>
        Melhores lugares para viajar no Mundo</div>


      <Carousel autoPlay>

        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/tulum.jpg'} />
          <p className="legend">Tulum - México </p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/tailandia.jpg'} />
          <p className="legend">Tailândia - Ásia</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/seminyak.jpg'} />
          <p className="legend">Semiyak - Bali </p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/mykos.jpg'} />
          <p className="legend">Ilhas Gregas - Grécia</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/veneza.jpg'} />
          <p className="legend">Veneza - Itàlia</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/espanha.jpg'} />
          <p className="legend"> Catedral Da Sagrada Família - Barcelona</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/fernando.jpg'} />
          <p className="legend">Fernando de Noronha - Pernambuco</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/india.jpg'} />
          <p className="legend">Índia</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/sanfrancisco.jpg'} />
          <p className="legend">San Francisco - Califórnia</p>
        </div>
        <div>
          <img alt="" src={process.env.PUBLIC_URL + '/images/londres.jpg'} />
          <p className="legend">Londres - Inglaterra</p>
        </div>

      </Carousel>
    </div>
  );
}

export default Slider;
