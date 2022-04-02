import Image from 'next/image'
import Menu from '../components/menu'
import Trick1 from '../images/trick-treat1-img.png'
import Trick2 from '../images/trick-treat2-img.png'
import Trick3 from '../images/trick-treat3-img.png'
import Trick4 from '../images/trick-treat4-img.png'
import Trick5 from '../images/trick-treat5-img.png'
import Trick6 from '../images/trick-treat6-img.png'
import discount from '../images/discount-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          Trick or Treat
        </div>
        <div className>
            <Image
            src={Trick1}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Toflee</a>
                <p>$ 4.99</p>
            </div>
            <Image
            src={Trick4}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Candy Cane</a>
                <p>$ 3.99</p>
            </div>
        </div>
        <div>
            <Image
            src={Trick2}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Bone</a>
                <p>$ 6.99</p>
            </div>
            <Image
            src={Trick5}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Pumpkin</a>
                <p>$ 12.99</p>
            </div>
        </div>
        <div>
            <Image
            src={Trick3}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Scarecrow</a>
                <p>$ 5.99</p>
            </div>
            <Image
            src={Trick6}
            width = "30px"
            height = "30px"
            />
            <div>
                <a>Ghost</a>
                <p>$ 11.99</p>
            </div>
        </div>
        <div>
            <Image
            src={discount}
            width="100px"
            height="100px"
            />
            <a>
                50% Discount
                On New Products
            </a>
        </div>
      </div>
    </div>
  )
}