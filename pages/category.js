import Image from 'next/image'
import Menu from '../components/menu'
import category1 from '../images/category1-img.png'
import category2 from '../images/category2-img.png'
import category1 from '../images/category1-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          Категории
        </div>
        <div>
          <h>Favorite Scare Category</h>
        </div>
        <div className="block_image">
          <Image
          src={category1}
          width = "45px"
          height = "45px"
          />
          <div>
            <a>
              Ghosts
            </a>
            <p>
              Choose the ghosts,
            </p>
            <p>
              the scariest there are.
            </p>
          </div>
        <div className="block_image">
          <Image
          src={category2}
          width="45px"
          height="45px"
          />
          <a>
            Pumpkins
          </a>
          <p>
            You look at the scariest
          </p>
          <p>
            pumpkins there it.
          </p>
        </div>
        <div className="block_image">
          <Image
          src={category3}
          width="45px"
          height="45px"
          />
          <a>
            Witch Hat
          </a>
          <p>
            Pick the most stylish
          </p>
          <p>
            witch hats out there.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
