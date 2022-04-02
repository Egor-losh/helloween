import Image from 'next/image'
import Menu from '../components/menu'
import About from '../images/about-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="block__info">
          About Halloween Night
        </div>
        <div className="block_image">
            <Image
            src={About}
            width = "50px"
            height = "50px"
            />
            <div className="info__description">
                Night of all the scairts, or all the clead, is 
                celebrated on october 31 and it is a very fun 
                International celebration, the celebration cames 
                from ancient origins, and  is already celebrated 
                by everyone.
            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}