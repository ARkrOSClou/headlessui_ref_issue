import { Transition } from '@headlessui/react'
import { useEffect, useRef } from 'react'

function App() {
  const refParent = useRef(null)
  const refChild = useRef(null)

  useEffect(() => {
    console.log('refParent', refParent.current)
    console.log('refChild', refChild.current)

    refParent.current.style.color = 'tomato'
    refParent.current.style.color = 'orange'
  }, [])

  return (
    <>
      <Transition ref={refParent} show={true}>
        <h3>Parent</h3>
        <Transition.Child
          ref={refChild}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <h3>Child</h3>
        </Transition.Child>
      </Transition>
    </>
  )
}

export default App
