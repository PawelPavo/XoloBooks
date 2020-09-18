import * as React from 'react';
import Footer from '../components/Footer/Footer';
import { FaDonate } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

import { Link } from 'react-router-dom';


const Home: React.FC<IHomeProps> = (props) => {
    const [name, setName] = React.useState<string>('')

    React.useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setName(data))
    }, [])
    return (
        <>
            <main className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="image text-center">
                            <img
                                style={{ width: '350px', height: 'auto' }}
                                src="https://news-api.s3.us-east-2.amazonaws.com/smallXolo.jpeg"
                                alt="Xolo Books" />
                        </div>
                    </div>
                </div>
                <div className="row-d-flex text-center my-4 border p-4 border-left-0 border-right-0">
                    <div className="">
                        <a
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                            href="https://bookshop.org/shop/xolobooks">
                            <button type="button" className="btn btn-lg btn-outline-warning my-auto rounded-0 p-4"><ImBooks /> Shop Now!</button>
                        </a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="mb-1">
                            <small className="font-weight-bold">
                                We need your help!
                            </small>
                        </div>
                        <div>
                            <small>Xolo Books’ goal is to raise $5,000 in seed money to cover costs related to inventory, branding, and shipping. Donations will help kickstart the online store and offer a wider catalog of decolonized readings. There are plenty of ways to support Xolo Books. Please click the button below to learn more.</small>
                        </div>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    <a
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        href="https://www.gofundme.com/f/xolo-books-startup?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">
                        <button type="button" className="btn btn-sm btn-outline-warning rounded-0"><FaDonate /> Donate</button>
                    </a>
                </div>
                <hr className="mb-2" />

            </main>
            <div className="row d-flex justify-content-center mt-5">
                <Footer />
            </div>


        </>
    )
}

export interface IHomeProps { }

export default Home;