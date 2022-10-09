import { useContext } from 'react'
import { UserContext } from './Context'
export const Children1 = (): JSX.Element => {
	const { name, age } = useContext(UserContext)
	return (
		<>
			<>
				<h5>Children1</h5>
				<ul>
					<li>name:{name}</li>
					<li>age:{age}</li>
				</ul>
			</>
		</>
	)
}
