import Image from 'next/image'
import Menu from '../components/menu'
import New1 from '../images/new1-img.png'
import New2 from '../images/new2-img.png'
import New3 from '../images/new3-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="block__info">
          New Arrivals
        </div>
        <div className="block_image">
            <Image
            src={New1}
            width = "50px"
            height = "50px"
            />
            <div>
                <a>hounted house</a>
                <p>
                    $29.99
                </p>
            </div>
            <Image
            src={New2}
            width = "50px"
            height = "50px"
            />
            <div>
                <a>hounted house</a>
                <p>
                    $29.99
                </p>
            </div>
            <Image
            src={New3}
            width = "50px"
            height = "50px"
            />
            <div>
                <a>halloween candle</a>
                <p>
                    $21.99
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}