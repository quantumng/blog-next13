import styles from './index.module.css';
import Image from 'next/image';
import BeianIcon from '@/assets/images/beian_icon.png';

const Footer = () => {

    return <footer className={styles.footer}>
        
        <div className={styles.beian}>

            <a href="https://beian.miit.gov.cn/">粤ICP备2023047964号</a>

            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602007628">
                <Image
                    src={BeianIcon}
                    alt={'gongan beian'}
                />
                &nbsp;
                <span>粤公网安备 44030602007628号</span>
            </a>

        </div>
        <p className={styles.copyright}>©2023 多喝热水</p>
    </footer>
};

export default Footer;