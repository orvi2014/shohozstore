import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ShoppingBagIcon } from '@heroicons/react/outline'



const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin
    const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Cart', href: '/cart', current: false },
  { name: 'Login', href: '/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

    const logoutHandler = ()=>{
        dispatch(logout())
    }
    return (
         <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="XZEN"
                  />
                  <img
                    className="hidden lg:block h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="XZEN"
                  />
                  <img
                    className="hidden lg:block h-10 w-14"
                    src="\images\XZEN.png"
                    alt="XZEN"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white no-underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white no-underline',
                          'px-3 py-2 rounded-md text-sm font-medium no-underline'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <Route render={({history})=> <SearchBox history={history} />} />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                <LinkContainer to="/cart">
                    <Nav.Link>
                        <span className="sr-only">View notifications</span>
                        <ShoppingBagIcon style={{color:"white"}}className="h-6 w-6" aria-hidden="true" />
                    </Nav.Link>
                </LinkContainer>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 z-10 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <svg style={{color:"white"}}xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userInfo ?
                            <><LinkContainer to="/profile">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Nav.Link
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                                        >
                                            Your Profile
                                        </Nav.Link>
                                    )}
                                </Menu.Item>
                            </LinkContainer>
                            <LinkContainer to="/logout">
                                    <Menu.Item onClick={logoutHandler}>
                                        {({ active }) => (
                                            <Nav.Link
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                                            >
                                                Sign out
                                            </Nav.Link>
                                        )}
                                    </Menu.Item>
                                </LinkContainer></>

                         : 
                             <LinkContainer to="/login">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Nav.Link
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                                        >
                                            Login
                                        </Nav.Link>
                                    )}
                                </Menu.Item>
                            </LinkContainer>
                            }
                          
                    {userInfo  && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                        <LinkContainer to='/admin/userlist'>
                            <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/orderlist'>
                            <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                          )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        // <header>
        //     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        //         <Container>
        //             <LinkContainer to="/">
        //                 <Navbar.Brand >XZEN</Navbar.Brand>
        //             </LinkContainer>
                    
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Route render={({history})=> <SearchBox history={history} />} />
        //             <Nav className="ms-auto">
        //                 <LinkContainer to="/cart">
        //                     <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
        //                 </LinkContainer>
        //                 {userInfo ?
        //                     <NavDropdown title={userInfo.name} id='username'>
        //                         <LinkContainer to='/profile'>
        //                             <NavDropdown.Item>
        //                                 Profile
        //                             </NavDropdown.Item>
        //                         </LinkContainer>
        //                         <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

        //                     </NavDropdown>

        //                  : <LinkContainer to="/login">
        //                     <Nav.Link><i className='fas fa-user'></i> Sign-In</Nav.Link>  
        //                     </LinkContainer>
        //                   }
        //                   {userInfo  && userInfo.isAdmin && (
        //                       <NavDropdown title='Admin' id='adminmenu'>
        //                         <LinkContainer to='/admin/userlist'>
        //                             <NavDropdown.Item>Users</NavDropdown.Item>
        //                         </LinkContainer>
        //                         <LinkContainer to='/admin/productlist'>
        //                             <NavDropdown.Item>Products</NavDropdown.Item>
        //                         </LinkContainer>
        //                         <LinkContainer to='/admin/orderlist'>
        //                             <NavDropdown.Item>Orders</NavDropdown.Item>
        //                         </LinkContainer>
        //                     </NavDropdown>

        //                   )}

        //             </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </header>
    )
}

export default Header