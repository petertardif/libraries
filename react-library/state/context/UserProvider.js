import React from 'react';
import useSWR from 'swr';

export const UserContext = React.createContext(); // Step 1 create context

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-current-user';

async function fetcher(endpoint) {
	const response = await fetch(endpoint);
	const json = await response.json();

	if (!json.ok) {
		throw json;
	}

	return json.user;
}

function UserProvider({ children }) {
	// Need to provide children as a prop
	const {
		data: user,
		error: userError,
		mutate: mutateUser,
	} = useSWR(ENDPOINT, fetcher);

	const logOut = React.useCallback(() => {
		mutateUser({
			user: null,
		});
	}, [mutateUser]);

	const editProfile = React.useCallback(
		(newData) => {
			mutateUser({
				user: {
					...user,
					...newData,
				},
			});
		},
		[user, mutateUser]
	);

	// Step 2 - Provide the UserContext by wrapping application in a Provider and ensure it can pass children through it
	return (
		<UserContext.Provider value={{ user, logOut, editProfile }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
