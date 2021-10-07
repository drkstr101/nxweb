import React from "react"
import clsx from "clsx"
import styles from "./button.module.css"
import { HtmlHTMLAttributes } from "react"

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.primary, className)} {...props}>
      {children}
    </button>
  )
}
