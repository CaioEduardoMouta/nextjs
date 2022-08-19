import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam turpis,
             condimentum at posuere sit amet, laoreet at nunc.  
             Nullam lacinia lacus ac odio placerat porta.   
             Ut convallis ipsum bibendum mi auctor, fermentum hendrerit ante iaculis.   
             Nulla facilisis, augue in finibus aliquet, lectus augue sollicitudin odio, ac rhoncus nisi tortor vel ligula.</p>
            <Image src="/images/java.jpg" width="300" height="300" alt="JAVA" />
        </div>
    )
}