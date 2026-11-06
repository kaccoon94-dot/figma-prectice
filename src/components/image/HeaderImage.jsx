import './HeaderImage.css'
import image01 from '../../assets/images/header-image-01.jpg'
import image02 from '../../assets/images/header-image-02.jpg'

const IMAGES = {
  '01': image01,
  '02': image02,
}

/**
 * HeaderImage — Figma「헤더이미지」(node 797:1746)
 * 종류: 이미지01 / 이미지02
 *
 * @param {'01'|'02'} variant  보여줄 이미지 (기본 '01')
 * @param {string} alt         이미지 설명 (필수 — 의미 있는 이미지이므로 구체적으로 작성)
 */
function HeaderImage({ variant = '01', alt, className = '', ...rest }) {
  const classes = ['header-image', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <img className="header-image__img" src={IMAGES[variant] ?? image01} alt={alt} />
    </div>
  )
}

export default HeaderImage
