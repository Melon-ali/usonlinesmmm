import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import './style/nav.css'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavLinks = () => {
  return (
    <Menu as="div" className="relative inline-block text-left nav m-2">
      <Link>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Home
        </Menu.Button>
      </Link>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 px-10">
            
              {({ active }) => (
                <Link
                  to={`/`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-5 py-2 text-sm'
                  )}
                >
                  Home
                </Link>
              )}
        
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavLinks