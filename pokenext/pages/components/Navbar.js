import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav>
            <div>
                <Image src="/images/front.png" width="30" height="30" alt="PokeNext"/>
                <h1>Pokenext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>Sobre</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
            </ul>
        </nav>
    )
}