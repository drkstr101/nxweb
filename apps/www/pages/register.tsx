import styles from "./register.module.css"

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Register!</h1>
    </div>
  )
}

export default Register
