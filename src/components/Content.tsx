import { MapHTMLAttributes, ReactElement, CSSProperties } from 'react'

export interface ContentPorps extends MapHTMLAttributes<ReactElement> {}

export const Content = (props: ContentPorps): JSX.Element => {
	const style: CSSProperties = {
		display: 'flex',
		flexGrow: 1,
		backgroundColor: '#ccc',
	}
	return <div style={style}>{props.children}</div>
}
