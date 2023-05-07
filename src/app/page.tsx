import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <header className={styles.header}>
        <h1>多喝热水</h1>
        <nav>
          <a href="/">首页</a>
        </nav>
      </header>

      <div className={styles.content}>
        这是一个全新的个人博客网站,内容正在不断更新中。
      </div>

      <footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/">粤ICP备2023047964号-1</a> ©2023 多喝热水
      </footer>

    </main>
  )
}
