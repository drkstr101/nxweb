import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon, ChartBarIcon, CursorClickIcon, ViewGridIcon, ShieldCheckIcon } from "@heroicons/react/outline"
import { ChevronDownIcon, PlayIcon, CheckCircleIcon, PhoneIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import Link from "next/link"
import { Fragment } from "react"


const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]


const SolutionsMenu = () => <Popover className="z-0 relative">
  {({ open }) => (
    <>
      <div className="relative z-10 bg-white shadow">
        <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
          <Popover.Button
            className={clsx(
              open ? 'text-gray-900' : 'text-gray-500',
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            )}
          >
            <span>Solutions</span>
            <ChevronDownIcon
              className={clsx(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        Learn more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
              {callsToAction.map((item) => (
                <div key={item.name} className="flow-root">
                  <a
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">{item.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )}
</Popover>

const CloseButton = () => <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
  <span className="sr-only">Close menu</span>
  <XIcon className="h-6 w-6" aria-hidden="true" />
</Popover.Button>

export const Header = () => (
  <header>
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">Watheia Labs</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://cdn.watheia.org/assets/icon.svg"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <SolutionsMenu />
          <Link href="/blog">
            <a className="text-base font-medium text-shark-500 hover:text-shark-900">
              Blog
            </a>
          </Link>
          <Link href="/partners">
            <a className="text-base font-medium text-shark-500 hover:text-shark-900">
              Partners
            </a>
          </Link>
          <Link href="/corporate">
            <a className="text-base font-medium text-shark-500 hover:text-shark-900">
              Corporate
            </a>
          </Link>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link href="/auth">
            <a className="whitespace-nowrap text-base font-medium text-shark-500 hover:text-shark-900">
              Sign in
            </a>
          </Link>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.watheia.org/assets/icon.svg"
                    alt="Watheia Labs"
                  />
                </div>
                <div className="-mr-2">
                  <CloseButton />
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-aqua-400 to-aqua-600 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-shark-900">
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/blog">
                  <a className="text-base font-medium text-shark-900 hover:text-shark-700">
                    Blog
                  </a>
                </Link>
                <Link href="/partners">
                  <a className="text-base font-medium text-shark-900 hover:text-shark-700">
                    Partners
                  </a>
                </Link>
                <Link href="/corporate">
                  <a className="text-base font-medium text-shark-900 hover:text-shark-700">
                    Corporate
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/register">
                  <a className="w-full flex items-center justify-center bg-gradient-to-r from-aqua-400 to-aqua-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-aqua-900 hover:to-aqua-700">
                    Sign up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-shark-500">
                  Existing customer?
                  <Link href="/auth">
                    <a className="text-shark-900">Sign in</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </header>
)

export default Header
