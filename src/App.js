import { Menu } from '@headlessui/react'
import React from "react";

const Item = () => <div>Item</div>

function App() {
  return (
	  <Menu>
		  <Menu.Items static={true}>
			  <Menu.Item>
				  <Item />
			  </Menu.Item>
		  </Menu.Items>
	  </Menu>
  )
}

export default App
