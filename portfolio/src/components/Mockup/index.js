import Image from 'next/image'
import styles from './style.module.scss'

const Mockup = () => {
  return (
    <div className={styles.mockup}>
      <div className={styles.scene3D}>
        <div className={styles.phone}>
          <div className={styles.front}>
            <div className={styles.screen}>
              <div className={styles.screen_notch}></div>
              <Image
                src="/app1.png"
                id="placeholder"
                width="350"
                height="787"
                alt="Imagem"
              />
            </div>
            <div className={styles.front_full}></div>
          </div>

          <div className={styles.middle}>
            <div className={styles.middle_top}></div>
            <div className={styles.middle_right}></div>
            <div className={styles.middle_bottom}></div>
            <div className={styles.middle_left}></div>
            <div className={styles.middle_front}></div>
            <div className={styles.middle_back}></div>
          </div>

          <div className={styles.back}>
            <div className={styles.back_front}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mockup
