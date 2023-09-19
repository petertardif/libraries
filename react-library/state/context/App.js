import react from 'react';
import UserProvider from './UserProvider';

import Home from './Home';

// Step 1 - Create the FavouriteColorContext
export const FavouriteColorContext = React.createContext();

function App() {
	const [favouriteColor, setFavouriteColor] = React.useState('#AA3300');

	const value = React.useMemo(() => {
		return { favouriteColor, setFavouriteColor };
	}, [favouriteColor]); // when passing an object through context, always wrap the object in useMemo to allow regeneration of the object only when the values in the object change. This will avoid performance issues and unnecesary re-renders of the component.

	// Provider Component Step 2 - wrap application in the UserProvider Component
	return (
		// Step 2 - Provide the FavouriteColorContext by wrapping application in a Provider
		<FavouriteColorContext.Provider value={value}>
			<UserProvider>
				<Home />
			</UserProvider>
		</FavouriteColorContext.Provider>
	);
}
