import { Carousel, Image, Container } from "react-bootstrap"

export default function SliderPanner() {
  return (
    <Container className="m-0 p-0" fluid >
      <Carousel className="" controls={false} pause={false}>
        <Carousel.Item>
          <Image src="img-5.jpg" fluid className="vh-100 vw-100" alt="pic-slider" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="img-4.jpg" fluid className="vh-100 vw-100" alt="pic-slider" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="img-3.jpg" fluid className="vh-100 vw-100" alt="pic-slider" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="img-1.jpg" fluid className="vh-100 vw-100" alt="pic-slider" />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}