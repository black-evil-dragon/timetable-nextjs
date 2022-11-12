import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '../state/store'

import '../styles/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="app">
			<div className="app__content">
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</div>

			<div className="app__transition"></div>
		</div>
	)
}
