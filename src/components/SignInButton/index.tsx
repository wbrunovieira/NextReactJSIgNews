import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


import styles from './styles.module.scss';

export function SignInButton() {

    const isLoggedIn = false

  return isLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
      
    >
      <FaGithub color="#04d361" />
      
      
      Bruno Vieira
      <FiX color="#04d361" className={styles.closeIcon} />
    </button>
  ) : (
<button
      type="button"
      className={styles.signInButton}
      
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
      
    </button>

  )
}