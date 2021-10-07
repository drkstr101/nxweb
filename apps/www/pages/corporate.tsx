import styles from "./corporate.module.css"

/* eslint-disable-next-line */
export interface CorporateProps {}

export function Corporate(props: CorporateProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Corporate!</h1>
    </div>
  )
}

export default Corporate
