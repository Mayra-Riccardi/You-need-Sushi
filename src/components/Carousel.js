import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import sushi from '../assets/sushi2.webp'
import sushi2 from '../assets/sushi3.webp'

const carousel = () =>{     
        
  return (
    <>
    <h3 className='titulo'>Insumos para preparar Sushi</h3>
        <h5 className='titulo'>Venta por mayor y menor</h5>
        <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sushi}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sushi2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}


export default carousel;