import { useContext } from 'react'
import { UserContext } from './Context'

export const Children2 = (): JSX.Element => {
	const { name, age } = useContext(UserContext)
	return (
		<>
			<h5>Children2</h5>
			<ul>
				<li>name:{name}</li>
				<li>age:{age}</li>
			</ul>
		</>
	)
}
