import logosvg from './logo.svg'
import { ReactComponent as Logo } from './logo.svg' // svg 文件 方式二
import './App.scss'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logosvg} className="App-logo" alt="logo" />
				<Logo title="logo" />
				<p>
					Edit <code>src/App.tsx</code>
					and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
