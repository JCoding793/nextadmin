import styles from './Rightbar.module.css';
import Image from "next/image" ;
import astro from '../../../../public/astronaut.png'
import { MdPlayCircleFilled } from 'react-icons/md';
const Rightbar = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src={astro} alt='astro..' fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Availabel Now</span>
                <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere dolorem sapiente quae qui expedita debitis, at aliquam dolor id.</p>
                <button className={styles.button}>
                    <MdPlayCircleFilled />
                    Watch
                </button>
                </div>
                
            </div>
            <div className={styles.item}>
                
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Availabel Now</span>
                <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere dolorem sapiente quae qui expedita debitis, at aliquam dolor id.</p>
                <button className={styles.button}>
                    <MdPlayCircleFilled />
                    Watch
                </button>
                </div>
                
            </div>
        </div>
    )
}
export default Rightbar;