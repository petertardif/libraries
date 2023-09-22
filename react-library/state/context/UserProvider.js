import React from 'react';

export const UserContext = React.createContext(); // Step 1 create context

function UserProvider({ children }) {
	// Also need to provide children as a prop when creating a context component
	const [user, setUser] = React.useState(null);

	// Step 2 - Provide the UserContext by wrapping application in a Provider and ensure it can pass children through it
	return (
		<UserContext.Provider value={{ user, setUser, logOut, editProfile }}>
			{children}
		</UserContext.Provider>
	);
}

// Step 3 - in another file/component lower down the tree, import the UserContext and then use it

export default UserProvider;
