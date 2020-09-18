import * as React from 'react';
import { ImBooks} from 'react-icons/im';
import { SiGofundme } from 'react-icons/si';
import { MdLibraryBooks } from 'react-icons/md';

import Footer from '../components/Footer/Footer';

const Donate: React.FC<IDonateProps> = (props) => {

    return (
        <>
            <main className="container">
                <div className="text-center display-4 mt-5">Donate</div>
                <div className="row mt-5">
                    <div className="col-md-6 my-2">
                        <div className="card rounded-0" style={{ minHeight: "450px" }}>
                            <img
                                style={{ width: "auto", height: "200px" }}
                                src="https://i.pcmag.com/imagery/reviews/03ur1U8zMQIMSstyVKLki1j-5.1569476924.fit_scale.size_1028x578.jpg"
                                className="card-img-top mx-auto" alt="..." />
                            <div className="card-body border">
                                <h4 className="card-title text-primary text-center">Donate directly to Xolo Books Startup GoFundMe.</h4>
                                <p className="card-text text-primary"></p>
                                <div className="card-footer text-center p-5">
                                    <a
                                        target="_blank"
                                        style={{ textDecoration: 'none' }}
                                        href="https://www.gofundme.com/f/xolo-books-startup">
                                        <button type="button" className="btn btn-lg btn-outline-primary my-auto rounded-0 px-4 shadow"><SiGofundme /> Donate Funds</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className="card rounded-0" style={{ minHeight: "450px" }}>
                            <img
                                style={{ width: "auto", height: "200px" }}
                                src="https://smoothsolutions.com/wp-content/uploads/2019/06/Old-Books.jpg"
                                className="card-img-top mx-auto" alt="..." />
                            <div className="card-body border">
                                <h4 className="card-title text-primary text-center">Complete online form to coordinate shipping or pick up.</h4>
                                <p className="card-text text-primary"></p>
                                <div className="card-footer text-center p-5">
                                    <a
                                        target="_blank"
                                        style={{ textDecoration: 'none' }}
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSc-VX6BEVPo078E-Gno8WpER90izKjK2c56hxSk8ijNHJl7gA/viewform">
                                        <button type="button" className="btn btn-lg btn-outline-primary my-auto rounded-0 px-4 shadow"><MdLibraryBooks /> Donate Books</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-d-flex text-center my-4 border p-4 border-left-0 border-right-0">
                    <small>Shop Bookshop using our special link. 10% of sales go toward Xolo Books</small>
                    <div className="p-4">
                        <a
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                            href="https://bookshop.org/shop/xolobooks">
                            <button type="button" className="btn btn-lg btn-outline-warning my-auto rounded-0 p-4"><ImBooks /> Shop Now!</button>
                        </a>
                    </div>
                </div>
            </main>
            <div className="">
                <Footer />
            </div>
        </>
    )
}

export interface IDonateProps { }

export default Donate;