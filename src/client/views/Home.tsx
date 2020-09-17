import * as React from 'react';

const Home: React.FC<IHomeProps> = (props) => {
    const [name, setName] = React.useState<string>('')

    React.useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setName(data))
    }, [])
    return (
        <>
            <main className="container my-3">
                <div className="text-primary text-center display-2">Xolo Books</div>
            </main>

        </>
    )
}

export interface IHomeProps { }

export default Home;