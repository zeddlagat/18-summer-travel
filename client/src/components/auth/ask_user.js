import React from 'react';
import Button from '../UI/Button';


function AskUser(props)	{
	return (
		<div>
  		<p>I will ask About Your Name</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('ask_user_firstname')}/>
  	</div>
	)
}

export default AskUser;