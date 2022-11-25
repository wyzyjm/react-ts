import { useRef, useState } from 'react'
import { Children } from './Children'
import Children2 from './Children2'

export const Parent1 = (): JSX.Element => {
	const children2Ref = useRef(null)

	const [arr, setArr] = useState([1, 3])
	const [childrenValue, setChildrenValue] = useState<number>()
	const getValueFormSon = (value: number) => {
		console.log('value', value)
		setChildrenValue(value)
	}
	return (
		<div style={{ marginBottom: 30 }}>
			<div> 父组件传值 --- 子组件</div>
			<button
				style={{ marginBottom: 10 }}
				onClick={() => {
					setArr([...arr, 4, 5, 6])
				}}
			>
				父组件改变子组件的值
			</button>
			<div>父组件接收子组件 传过来的参数: {childrenValue}</div>
			<hr />
			<Children arr={arr} sendValueToParent={getValueFormSon}>
				<div>123</div>
				<Children2 />
			</Children>

			<hr />
			<button
				onClick={() => {
					if (children2Ref.current) {
						// children2Ref.current.chidlrenFn()
					}
				}}
			>
				执行子组件方法, 失败的
			</button>
			<Children2 ref={children2Ref} />
		</div>
	)
}
