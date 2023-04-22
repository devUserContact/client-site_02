import React from 'react'
import styles from '../../styles/Main.module.scss'

const Title = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <div id='circle' style={{width: "4em", height: "8em"}}>
            <div style={{transform: "translate3d(0em, 0em, 0em)"}}>C</div>
            <div style={{transform: "translate3d(0em, 0em, 0em)"}}>R</div>
            <div style={{transform: "translate3d(0em, 0em, 0em)"}}>A</div>
            <div style={{transform: "translate3d(0em, 0em, 0em)"}}>N</div>
            <div style={{transform: "translate3d(0em, 0em, 0em)"}}>E</div>
          </div>
          <p className={styles.titleTextSmall}>a singer songwriter from CA</p>
        </div>
      </div>
    </>
  )
}

export default Title
