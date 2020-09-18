import * as React from 'react';
import { useRef } from 'react';
import { useOnClickOutside } from './utils/hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/global'
import { theme } from './utils/theme';
import { Burger, Menu } from './components';
import Blogs from './views/Blogs';
import Home from './views/Home';
import Mission from './views/About';
import Donate from './views/Donate';

const App: React.FC<IAppProps> = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyles />
				<div ref={node}>

					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<Mission />
					</Route>
					<Route exact path="/blogs">
						<Blogs />
					</Route>
					<Route exact path="/donate">
						<Donate />
					</Route>
				</Switch>

			</BrowserRouter>
		</ThemeProvider>
	)
}

export interface IAppProps { }

export default App;
