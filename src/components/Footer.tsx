import { MapHTMLAttributes, ReactElement, CSSProperties } from 'react'

export interface FooterPorps extends MapHTMLAttributes<ReactElement> {}

export const Footer = (props: FooterPorps): JSX.Element => {
	const style: CSSProperties = {
		display: 'flex',
		height: '50px',
		backgroundColor: 'skyblue',
	}
	return <div style={style}>{props.children}</div>
}
