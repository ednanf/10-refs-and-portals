import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

let timer;

function TimerChallenge({ title, targetTime }) {
	const timer = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);

		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return (
		<>
			{timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? 'Stop' : 'Start'} challenge
					</button>
				</p>
				<p className={timerStarted ? 'active' : ''}>
					{timerStarted ? 'Time is running...' : 'Timer nactive'}
				</p>
			</section>
		</>
	);
}

export default TimerChallenge;
