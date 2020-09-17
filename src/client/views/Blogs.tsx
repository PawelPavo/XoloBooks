import * as React from 'react';

const Blogs: React.FC<IBlogsProps> = (props) => {

    return (
        <>
            <main className="container my-3">
                <div className="text-primary text-center display-2">Blogs</div>
            </main>

        </>
    )
}

export interface IBlogsProps {}

export default Blogs;