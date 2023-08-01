import styles from './TechPill.module.css'

import { FC } from "react"

interface TechPillProps {
  tech: string
  id: number | string
}

const TechPill: FC<TechPillProps> = ({tech, id}) => {
  return (
    <div className={styles.tech__pill} key={id}>{tech}</div>
  )
}

export default TechPill