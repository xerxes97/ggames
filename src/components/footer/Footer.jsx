import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(<div className={styles.footer}>
        <div className={styles.footer__info}>
            <div>
                <span className={styles.divTitle}>ABOUT US</span>
                <span className={styles.div__Item}>Know us</span>
                <span className={styles.div__Item}>Suscribe to the Newsletter</span>
                <input className={styles.emailInput} placeholder='email...' type="text" />
                <span><FontAwesomeIcon className={styles.icon} icon={faFeatherAlt}/></span>
            </div>
            <div>
                <span className={styles.divTitle}>CONTACT US</span><br />
                <div className={styles.contact}>
                    <a href='https://www.linkedin.com/in/cristian-quevedo/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className={styles.contact__icon} icon={faLinkedin}/>
                        <span className={styles.Item}>Linkendin</span>
                        </a>
                    <a href="https://github.com/xerxes97" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className={styles.contact__icon} icon={faGithubSquare}/>
                        <span className={styles.Item}>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
        <hr />
        <div className={styles.develop}>
            <h6>Developed by Cristian Quevedo</h6>
        </div>

    </div>)
}