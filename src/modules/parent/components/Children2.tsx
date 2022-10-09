/* eslint-disable @typescript-eslint/no-unused-expressions */

import { forwardRef, useImperativeHandle } from 'react'

const Children2 = (_props: any, ref: any): JSX.Element => {
	const chidlrenFn = () => {
		console.log('children fn')
	}
	// 暴露出的方法
	useImperativeHandle(ref, () => {
		return { chidlrenFn }
	})
	return <div>children2</div>
}

export default forwardRef(Children2)
