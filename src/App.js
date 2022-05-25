import * as React from 'react';
import { ethers } from 'ethers';
import './App.css';

export default function App() {
	const wave = () => {};

	const TUlist1 = ['👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'];
	const TUlist2 = ['👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'];
	const TDlist1 = ['👎', '👎🏻', '👎🏼', '👎🏼', '👎🏽', '👎🏿'];
	const TDlist2 = ['👎', '👎🏻', '👎🏼', '👎🏼', '👎🏽', '👎🏿'];
	const thumbsUpEmoji = TUlist1[Math.floor(Math.random() * TUlist1.length)];
	const thumbsUpEmoji2 = TUlist2[Math.floor(Math.random() * TUlist2.length)];

	const thumbsDownEmoji = TDlist1[Math.floor(Math.random() * TDlist1.length)];
	const thumbsDownEmoji2 = TDlist2[Math.floor(Math.random() * TDlist2.length)];

	return (
		<div className='mainContainer'>
			<div className='dataContainer'>
				<div className='header'>
					<span role='img' aria-label='chain emoji'>
						⛓
					</span>{' '}
					Ups and Downs Rating Hub{' '}
					<span role='img' aria-label='chain emoji'>
						⛓
					</span>
				</div>

				<div className='bio'>
					How do you feel about cats?{' '}
					<span role='img' aria-label='cat emoji'>
						🐱
					</span>
				</div>

				<button className='waveButton' onClick={wave}>
					{thumbsUpEmoji} I like them (thumbs up)! {thumbsUpEmoji2}
				</button>
				<button className='waveButton' onClick={wave}>
					{thumbsDownEmoji} I don't like them (thumbs down)! {thumbsDownEmoji2}
				</button>
			</div>
		</div>
	);
}
