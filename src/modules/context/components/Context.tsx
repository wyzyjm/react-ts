import { useEffect, createContext, ReactFragment, ReactPortal, useState } from 'react'

export interface ContextProps {
	name: string
	age: number
}
export const UserContext = createContext({
	name: '',
	age: 0,
})

export const UserContextProvider = (props: { children: boolean | ReactFragment | ReactPortal | null | undefined }) => {
	const [useInfo, setUserInfo] = useState<ContextProps>({
		name: '小明',
		age: 18,
	})
	return <UserContext.Provider value={useInfo}>{props.children}</UserContext.Provider>
}
