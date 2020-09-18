import * as React from 'react';
import Footer from '../components/Footer/Footer';

const Blogs: React.FC<IBlogsProps> = (props) => {

    return (
        <>
            <main className="container my-3">
                <div className="text-center display-2">Blogs</div>
            </main>
            <Footer />
        </>
    )
}

export interface IBlogsProps { }

export default Blogs;