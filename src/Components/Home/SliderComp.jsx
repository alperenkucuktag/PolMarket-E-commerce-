import Carousel from "react-bootstrap/Carousel";

function SliderComp() {
  return (
    <div className='allslayt'>
      <Carousel data-bs-theme='dark'>
        <Carousel.Item>
          <img
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2eaf0c0-a40d-4098-9511-d319f4be9ab9/dunk-low-ayakkab%C4%B1s%C4%B1-kDzdtX.png'
            alt='First slide'
          />
          <Carousel.Caption>
            <h5>En Kaliteli Ayakkabılar Burda</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cd4c8ff-8671-4a41-a511-da2492badefa/air-force-1-07-ayakkab%C4%B1s%C4%B1-1xp6CC.png'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h5>Markalı Ayakkabılar</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5ead919-08e9-43bf-877d-0aaab787ce96/giannis-immortality-3-basketbol-ayakkab%C4%B1s%C4%B1-LwJmHJ.png'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h5>En iyiler sizin</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SliderComp;
