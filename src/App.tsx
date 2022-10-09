import logosvg from './logo.svg'
import { ReactComponent as Logo } from './logo.svg' // svg 文件 方式二
import './App.scss'
import { Parent1 } from './modules/parent'
import { Entry } from './modules/context'

function App() {
	return (
		<div>
			{/* <header className="App-header">
				<Logo title="logo" className="App-logo" />
			</header> */}
			<h1>组件传参</h1>
			<ul>
				<li>父传子: 子接收value</li>
				<li>子传父: 子接收回调函数</li>
				<li> 父 触发 子函数: forwardRef包裹子组件, useImperativeHandle</li>
			</ul>
			<div style={{ background: 'skyblue', height: '100vh' }}>
				<Parent1 />
				<hr />
				<Entry />
			</div>
		</div>
	)
}

export default App
