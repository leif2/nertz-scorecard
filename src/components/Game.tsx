import React from 'react';
import './Game.css';

type GameProps = {
	names: string[],
	setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
}

export const Game = ({ names, setIsGameStarted }: GameProps) => {
	const handleBack = () => {
		setIsGameStarted(false);
	}

	return (
		<>
			<div className="scorecard-row">
				{names.map((name: string, index) => <div key={index} className="scorecard-column">{name}</div>)}

			</div>
			<button onClick={handleBack}>Back</button>
		</>
	)
};