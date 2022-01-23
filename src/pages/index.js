import Image from "next/image"
import Link from "next/link"

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

            <div class="m-5 alert alert-success" role="alert">
                Aprendendo a usar bootstrap!
            </div>

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
        </>
    )
}

export default Home