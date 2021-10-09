/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline"
import { features, footerNavigation, metrics } from "../lib/contants"
import Header from "../components/Header"

const Footer = () => (
  <footer className="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-shark-500 hover:text-shark-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Support
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-shark-500 hover:text-shark-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-shark-500 hover:text-shark-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-shark-500 hover:text-shark-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 xl:mt-0">
          <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="mt-4 text-base text-shark-500">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-shark-900 placeholder-gray-500 focus:outline-none focus:ring-aqua-500 focus:border-aqua-500 focus:placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-aqua-400 to-aqua-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-aqua-900 hover:to-aqua-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
        <div className="flex space-x-6 md:order-2">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-shark-400 hover:text-shark-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-base text-shark-500 md:mt-0 md:order-1">
          &copy; 2021 Watheia Labs, LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

const HeroSection = () => (
  <div className="relative">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aqua-800 to-aqua-600 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Take control of your</span>
            <span className="block text-aqua-200">customer support</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-aqua-200 sm:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-aqua-700 bg-white hover:bg-aqua-50 sm:px-8"
              >
                Get started
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-aqua-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LogoCloud = () => (
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase text-shark-500 tracking-wide">
        Trusted by over 5 very average small businesses
      </p>
      <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
            alt="Mirage"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
      </div>
    </div>
  </div>
)

const AlternatingFeatureSections = () => (
  <div className="relative pt-16 pb-32 overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
    />
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-aqua-400 to-aqua-600">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-shark-900">
                Stay on top of customer support
              </h2>
              <p className="mt-4 text-lg text-shark-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus
                ornare pharetra.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex bg-gradient-to-r from-aqua-400 to-aqua-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-aqua-900 hover:to-aqua-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p className="text-base text-shark-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci
                  risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div className="text-base font-medium text-shark-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-aqua-400 to-aqua-600">
                <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-shark-900">
                Better understand your customers
              </h2>
              <p className="mt-4 text-lg text-shark-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus
                ornare pharetra.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex bg-gradient-to-r from-aqua-400 to-aqua-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-aqua-900 hover:to-aqua-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const StatsSection = () => (
  <div className="relative bg-gray-900">
    <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
      <div className="h-full w-full xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <img
            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          />
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          <span className="bg-gradient-to-r from-aqua-300 to-aqua-300 bg-clip-text text-transparent">
            Valuable Metrics
          </span>
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-white">
          Get actionable data that will help grow your business
        </p>
        <p className="mt-5 text-lg text-shark-300">
          Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
          tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
          vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate
          diam sit tellus quis at.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          {metrics.map((item) => (
            <p key={item.id}>
              <span className="block text-2xl font-bold text-white">{item.stat}</span>
              <span className="mt-1 block text-base text-shark-300">
                <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const GradientFeatureSection = () => (
  <div className="bg-gradient-to-r from-aqua-800 to-aqua-700">
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white tracking-tight">
        Inbox support built for efficiency
      </h2>
      <p className="mt-4 max-w-3xl text-lg text-purple-200">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
        lobortis. Blandit aliquam sit nisl euismod mattis in.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name}>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">{feature.name}</h3>
              <p className="mt-2 text-base text-purple-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const CTASection = () => (
  <div className="bg-white">
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-4xl font-extrabold tracking-tight text-shark-900 sm:text-4xl">
        <span className="block">Ready to get started?</span>
        <span className="block bg-gradient-to-r from-aqua-400 to-aqua-600 bg-clip-text text-transparent">
          Get in touch or create an account.
        </span>
      </h2>
      <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <a
          href="#"
          className="flex items-center justify-center bg-gradient-to-r from-aqua-400 to-aqua-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-aqua-900 hover:to-aqua-700"
        >
          Learn more
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-aqua-800 bg-aqua-50 hover:bg-aqua-100"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
)

export default function IndexPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoCloud />
        <AlternatingFeatureSections />
        <GradientFeatureSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
