import React from 'react';
import { UserContext } from './UserProvider'; // UserComponent - Step 1 - Import it

import Sidebar from './Sidebar';

function Home() {
	const { user } = React.useContext(UserContext); // UserComponent - Step 2 - destructure it

	// Note that no props are passed to Sidebar
	return (
		<div className='home'>
			<Sidebar />
			<main>
				<p>User: {user ? user.email : 'None'}</p>
				<h1>This is a placeholder for a corporate slogan</h1>
				<p>This almost looks like a real website!</p>
			</main>
		</div>
	);
}

export default Home;
