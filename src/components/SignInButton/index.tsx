import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { session, signin,signout, useSession } from 'next-auth/client'


import styles from './styles.module.scss';

export function SignInButton() {

    const [ session ] = useSession()

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signout()}
    >
      <FaGithub color="#04d361" />
      
      {session.user.name}

      <FiX color="#04d361" className={styles.closeIcon} />
    </button>
  ) : (
<button
      type="button"
      className={styles.signInButton}
      onClick={() => signin('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
      
    </button>

  )
}