import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function FirstPage() {
  return (
    <Carousel slide={true}>
      <Carousel.Item>
        <Image src="assets/images/car-1.png" className="img-fluid" alt="carousel img-1" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="assets/images/car-2.png" className="img-fluid" alt="carousel img-2" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="assets/images/car-3.png" className="img-fluid" alt="carousel img-3" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstPage;
