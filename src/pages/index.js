import Image from "next/image"
import Link from "next/link"


// or less ideally
import { Alert, Button, ButtonGroup, ButtonToolbar, Card, Carousel, CloseButton, PlaceholderButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function Home() {
    return (
        <>
            <div className="d-flex w-100 bg-danger p-4 justify-content-end">
                <h1 className='text-white'>Bootstrap</h1>
            </div>
            <div className="bg-dark w-100 h-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="text-white bg-primary col-item col-1">
                            1/12
                        </div>
                        <div className="text-white bg-secondary col-item col-3">
                            3/12
                        </div>
                        <div className="text-white bg-success col-item col-8">
                            8/12
                        </div>
                    </div>
                </div>
            </div>

            <main className="m-2">
                <div class="my-4 alert alert-success" role="alert">
                    Aprendendo a usar bootstrap!
                </div>

                <ButtonGroup>
                    <Button className="active">1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button className="disabled">4</Button>
                    {/* <CloseButton /> */}
                </ButtonGroup>


                <Card style={{ width: "250px", height: "200px" }} className="my-2">
                    <CloseButton className="align-self-end m-1 mb-4" />
                    <ToggleButtonGroup name="group">
                        <ToggleButton>1</ToggleButton>
                        <ToggleButton>2</ToggleButton>
                        <ToggleButton>3</ToggleButton>
                    </ToggleButtonGroup>
                </Card>

                <Carousel style={{width: "400px"}} className="border border-dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/maca.jpg"
                            alt="primeiro slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-dark"> 1 slide label</h3>
                            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/laranja.jpg"
                            alt="segundo slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">2 slide label</h3>
                            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/maca.jpg"
                            alt="terceiro slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">3 slide label</h3>
                            <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/laranja.jpg"
                            alt="quarto slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">4 slide label</h3>
                            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Alert className="mt-2">
                    Alerta padrao
                </Alert>

                <div className="d-flex">
                    <div className="card m-2" style={{ width: '300px' }}>
                        <Image
                            src="/laranja.jpg"
                            layout="responsive"
                            width={1}
                            height={1}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Laranja
                            </h5>
                            <p className="card-text">
                                Laranjas são verdadeiras fontes de vitamina C!
                            </p>
                            <Link href={"#"}>
                                <a className="btn btn-primary">
                                    Saiba mais
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: '300px' }}>
                        <Image
                            src="/maca.jpg"
                            layout="responsive"
                            width={1}
                            height={1}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Maçã
                            </h5>
                            <p className="card-text">
                                A maçã é rica em fibras, vitaminas B1, B2 e sais minerais (fósforo e ferro)
                            </p>
                            <Link href={"#"}>
                                <a className="btn btn-primary">
                                    Saiba mais
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home