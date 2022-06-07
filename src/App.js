import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Comp = (props) => {
	const [isShowing, setIsShowing] = useState(false)
	return (
		<div className='flex'>
			<button
				onClick={() => setIsShowing((isShowing) => !isShowing)}
				className='bg-[orange] p-2'
			>
				Toggle
			</button>

			<div className="grow relative">
				<Transition
					show={isShowing}
					unmount={props.static}
					// appear={true}
					enter="transition duration-[1500ms]"
					enterFrom="-translate-y-full"
					enterTo="translate-y-0"
					leave="transition duration-[1500ms]"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-full"
					className="absolute inset-0 h-[200px] bg-[tomato] transition will-change-transform"
				>
					{'menu'}
				</Transition>
			</div>
		</div>
	)
}

export default function App() {
	return (
		<div className='flex'>
			<div className="grow">
				<Comp static={true} />
				works fine
			</div>
			<div className="grow">
				<Comp static={false} />
				broken
			</div>
		</div>
	);
}
