import { useState, useEffect } from 'react'

export interface ChildrenProps {
	arr: number[]
	sendValueToParent: (value: number) => void
}

export const Children = ({ arr, sendValueToParent }: ChildrenProps): JSX.Element => {
	/**
	 * 子组件使用父组件的值
	 * 1. 直接使用
	 * 2. useState 暂存一下, 需配合useEffect 一起使用
	 */
	const [childrenValue, setChildrenValue] = useState<number>(0)
	const [newArr, setArr] = useState(arr)
	useEffect(() => setArr(arr), [arr])
	return (
		<div style={{ background: 'yellow' }}>
			Children 子组件收到的父组件传过来的值:
			<ul>
				{newArr.map(v => (
					<li key={v}>{v}</li>
				))}
			</ul>
			<button
				onClick={() => {
					setChildrenValue(pre => pre + 100)
					sendValueToParent(childrenValue)
				}}
			>
				Send value to parent
			</button>
		</div>
	)
}
