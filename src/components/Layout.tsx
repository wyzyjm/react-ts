import { useMemo, useCallback, MapHTMLAttributes, ReactElement, CSSProperties } from 'react'
export interface LayoutProps extends MapHTMLAttributes<ReactElement> {
	hassider?: boolean
}
type LayoutChildrenName = 'Header' | 'Content' | 'Footer'

export const Layout = (props: LayoutProps): JSX.Element => {
	const { hassider } = props
	const layOutStyle: CSSProperties = { height: '100vh', display: 'flex', flexDirection: 'column' }
	const siderStyle: CSSProperties = { flexBasis: '50px', flexGrow: 0, backgroundColor: 'green' }

	const renderDom = useCallback(
		(type: LayoutChildrenName) => {
			if (!props.children) return 'Empty'
			if (Array.isArray(props.children)) return props.children.find(v => v.type.name === type)
			if (typeof props.children === 'object' && (props.children as any).type.name === type) return props.children
			return null
		},
		[props.children]
	)
	const renderSider = useMemo(
		() =>
			hassider ? (
				<div className="sider" style={siderStyle}>
					sider
				</div>
			) : null,
		[hassider, siderStyle]
	)
	return (
		<div style={layOutStyle}>
			{renderDom('Header')}
			<div style={{ display: 'flex', flexGrow: 1 }}>
				{renderSider}
				{renderDom('Content')}
			</div>
			{renderDom('Footer')}
		</div>
	)
}
