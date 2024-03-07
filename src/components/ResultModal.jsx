import React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
	{ targetTime, remainingTime, onReset },
	ref
) {
	const dialog = useRef();
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

	const userLost = remainingTime <= 0;

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return (
		<dialog ref={dialog} className="result-modal">
			{userLost && <h2>You lost!</h2>}
			<p>
				The target time was <strong>{targetTime}s</strong>
			</p>
			<p>
				You stopped the timer with{' '}
				<strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
