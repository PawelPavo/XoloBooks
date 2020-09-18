import * as React from 'react';
import Footer from '../components/Footer/Footer';
import { FaDonate } from 'react-icons/fa';
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
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="image text-center">
                            <img
                                style={{ width: '400px', height: 'auto' }}
                                src="https://news-api.s3.us-east-2.amazonaws.com/ezgif-7-1b415951e483.png"
                                alt="Xolo Books" />
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <a 
                        target="_blank"
                        style={{textDecoration: 'none'}} 
                        href="https://www.gofundme.com/f/xolo-books-startup?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">
                            <button type="button" className="btn btn-lg btn-block btn-outline-warning my-auto"><FaDonate /> Donate</button>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}

export interface IHomeProps { }

export default Home;