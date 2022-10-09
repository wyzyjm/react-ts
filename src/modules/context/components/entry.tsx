import { UserContextProvider } from './Context'

import { Children1 } from './Children1'
import { Children2 } from './Children2'

export const Entry = (): JSX.Element => {
	return (
		<UserContextProvider>
			<Children1 />
			<br />
			<Children2 />
		</UserContextProvider>
	)
}
