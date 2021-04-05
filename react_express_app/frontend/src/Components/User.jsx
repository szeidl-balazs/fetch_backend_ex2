import React from 'react';

const User = (props) => {

	return(
		<div>
			<div>{props.id}</div>
			<div>{props.username}</div>
		</div>
	)
}

export default User;