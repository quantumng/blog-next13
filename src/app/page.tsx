import Image from 'next/image';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

    <Header />

      <div className={styles.content}>
        
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <h2 className={styles['list-item__title']}>[诗歌]何必怀念</h2>
            <p className={styles['list-item__content']}>
              我们的距离有多远<br />
              是一千公里的海岸线<br />
              还是 这一秒的思念<br /><br />

              每一次 翻开相片<br />
              习惯 给记忆充电<br />
              岁月变迁<br />
              渐远 你的滴滴点点<br /><br />

              想见无缘 相聚无言<br /><br />

              或许吧 解开这羁绊<br />
              才能遇见 故事的下一篇<br />
            </p>
          </li>
          <li className={styles['list-item']}>
            <h2 className={styles['list-item__title']}>[诗歌]手生</h2>
            <p className={styles['list-item__content']}>
              翻起老旧相片<br />
              才发觉自己 离开多远<br />
              那些我曾经的迷恋<br />
              相见 不见<br />
              那些我现在的怀念<br />
              想见 不见<br />
              迷途 忘了来时的路线<br />
              又如何向前<br /><br />

              榕城 雨夜 何处会婵娟<br />
            </p>
          </li>
          <li className={styles['list-item']}>
            <h2 className={styles['list-item__title']}>[散文]欢迎光临</h2>
            <p className={styles['list-item__content']}>这是我的全新博客网站，欢迎大家常来看看！</p>
          </li>
        </ul>

      </div>

      <Footer />

    </main>
  )
}
