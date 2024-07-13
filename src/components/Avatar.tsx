import styles from './Avatar.module.css'
export default function Avatar({ src, hasBorder = true }: { src: string, hasBorder?: boolean }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
  )
}
