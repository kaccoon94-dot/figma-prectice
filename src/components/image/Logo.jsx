import { Link } from 'react-router'
import './Logo.css'
import logoEmblem from '../../assets/images/logo-emblem.png'

/**
 * Logo — Figma「로고」(node 18:7730, 상단배너용)
 * 엠블럼은 이미지, '국립대전현충원' 글자는 HTML 텍스트 (화면 확대 시 깨지지 않도록)
 * 누르면 홈으로 이동하는 링크입니다.
 *
 * @param {string} href  이동할 주소 (기본 홈 '/')
 */
function Logo({ href = '/', className = '', ...rest }) {
  const classes = ['logo', className].filter(Boolean).join(' ')

  return (
    <Link className={classes} to={href} {...rest}>
      <img className="logo__emblem" src={logoEmblem} alt="" />
      <span className="logo__text">국립대전현충원</span>
    </Link>
  )
}

export default Logo
