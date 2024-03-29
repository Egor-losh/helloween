import logo from '../images/logo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
    return (
        <>
            <div className="menu__logo">
                <Image
                    src={logo}
                    width="48px"
                    height="48px"
                />
                <div className="logo__text">
                    Helloween
                </div>
            </div>
            <div className="menu__list">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/category">
                    <a>Category</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/candy">
                    <a>Candy</a>
                </Link>
                <Link href="/new">
                    <a>new</a>
                </Link>
                <Link href="/support">
                    <a>support</a>
                </Link>
            </div>
        </>
    )
}