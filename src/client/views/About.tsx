import * as React from 'react';
import Footer from '../components/Footer/Footer';

const About: React.FC<IAboutProps> = (props) => {

    return (
        <>
            <div className="container">
                <div className="text-center display-4 mt-5 mb-5">About</div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="border p-5 shadow">
                            "Xolo Books will amplify intersectional and anti-colonialist literature written by Black, Indigenous, and People of Color through the selling, promotion, and celebration of books from around the world"
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-4 my-auto">
                        <div
                            className="image text-center">
                            <img
                                style={{ width: '300px', height: 'auto', borderRadius: '50%', opacity: '0.8' }}
                                src="https://static.wixstatic.com/media/00ff32_d1fc3b0f4f2d4437b6c9217a63dab79c~mv2.jpg/v1/fill/w_982,h_1048,al_c,q_85,usm_0.66_1.00_0.01/00ff32_d1fc3b0f4f2d4437b6c9217a63dab79c~mv2.webp"
                                alt="Xolo Books" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-5">
                            <h4>Oriana Peñaranda</h4>
                            <p>
                                My name is Oriana Peñaranda, and I am a Venezuelan immigrant. I grew up in Miami and currently live outside Washington, D.C. I love books.
                            </p>
                            <p>
                                My family used to call me a “come libros” because I was always trying to satiate an endless appetite for literature. Howeverm I seldomly saw my experiences as a Latina immigrant represented in the stories I read.
                            </p>
                            <p>
                                I founded Xolo Books because I want to help people decolonize their reading habits and support BIPOC stories so diversity can become prominent. I want to challenge myself and the Xolo Books ommunity to use our power in uplifting BIPOC voices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export interface IAboutProps { }

export default About;