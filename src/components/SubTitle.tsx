import React from 'react'

interface Props {
	value: string
}

export const SubTitle = ({ value }: Props) => {
	return (
		<div className="flex gap-5">
			<h3 className="flex-initial text-4xl font-mono font-semibold text-yellow-400">
				{value}
			</h3>
			<span className="flex-1 self-center h-px bg-gray-600"></span>
		</div>
	)
}
