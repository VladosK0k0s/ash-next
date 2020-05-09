import React from 'react';
import Link from 'next/link';
// import logo from ;

const Header = () =>{
	return(
		<div className='Header'>
			<Link href = '/'>
				<a>
					<img src='/images/logo.png' alt="logo"/>
				</a>
			</Link>
		</div>
	)
}

export default Header;