import styles from "./blog.module.css"

/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Blog!</h1>
    </div>
  )
}

export default Blog
