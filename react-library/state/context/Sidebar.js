import React from 'react';

import FavouriteColorContext from './App.js';

function Sidebar() {
	// Step 3 - Use the FavouriteColorContext
	const favouriteColor = React.useContext(FavouriteColorContext);

	return (
		<aside style={{ backgroundColor: favouriteColor }}>
			<a href='/'>Logo Here</a>
			<nav>
				<ol>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Gallery</a>
					</li>
					<li>
						<a href='/'>Other Stuff</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</ol>
			</nav>
		</aside>
	);
}

export default React.memo(Sidebar); // Step 4 - memoizing the component will make it a pure component, which will re-render only if a prop, state variable, or context value changes.
