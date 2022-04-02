import Image from 'next/image'
import Menu from '../components/menu'
import home1 from '../images/home1-img.png'

export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="site__slider">
            <div className="slider__list">
              <div className="slider__block">
                <div className="block__image">
                  <Image
                    src={home1}
                    width="460px"
                    height="500px"
                  />
                </div>
                <div className="block__info">
                  <h1 class="info__title">
                    UOOOO
                    <br />
                    TRICK OR
                    <br />
                    TREAT!!
                  </h1>
                  <p class="info__description">
                    Hi, I'm Reiza, people call me "El Labu". I am currently trying
                    to learn something new, building my own bike with parts made
                    only in Malaysia.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider__menu">
              <div className="menu__mark"></div>
              <div className="menu__mark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
