import { MapHTMLAttributes, ReactElement, CSSProperties } from 'react'

export interface HeaderPorps extends MapHTMLAttributes<ReactElement> {}

export const Header = (props: HeaderPorps): JSX.Element => {
	const style: CSSProperties = { display: 'flex', height: '50px', backgroundColor: 'skyblue' }
	return <div style={style}>{props.children}</div>
}
