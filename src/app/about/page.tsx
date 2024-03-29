import dynamic from 'next/dynamic';
import Header from '@/Components/Header';

import styles from './index.module.css';


const Footer = dynamic(() => import('@/Components/Footer'), { ssr: false });

const About = () => {

    return <div className={styles.main}>
        <Header />
        <div className={styles.content}>
            <h2>关于我</h2>
            <p className={styles.descr}>90后前端开发工程师一枚, 现居深圳，就职于一家科技公司。</p>
        </div>
        <Footer />
    </div>
}


export default About;