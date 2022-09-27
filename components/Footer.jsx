import Icon from '@mdi/react'
import {
  mdiGithub,
  mdiCodepen,
  mdiWeb,
  mdiMailboxOutline,
  mdiRss,
} from '@mdi/js'
import styles from '../styles/Home.module.scss'
function Footer() {
  return (
    <footer className={styles.footer}>
      <Icon path={mdiGithub} size={1.5} color="black " />

      <Icon path={mdiMailboxOutline} size={1.5} color="black " />

      <Icon path={mdiCodepen} size={1.5} color="black " />
      {/* //https://codepen.io/bfox2 */}
      <Icon path={mdiRss} size={1.5} color="black " />

      <Icon path={mdiWeb} size={1.5} color="black " />
      {/* https://bfox.dev */}
      <p>| bfox © 2022</p>
    </footer>
  )
}

export default Footer
