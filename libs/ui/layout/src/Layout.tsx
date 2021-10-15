import { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./Layout.module.css"

/* eslint-disable-next-line */
export type LayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
