import './FooterLogo.css'
import logoEmblem from '../../assets/images/logo-emblem.png'

/**
 * FooterLogo — Figma「로고」(node 132:5380, 풋터용 — 상단배너 로고보다 큼)
 * 엠블럼은 이미지, '국립대전현충원' 글자는 HTML 텍스트
 */
function FooterLogo({ className = '', ...rest }) {
  const classes = ['footer-logo', className].filter(Boolean).join(' ')

  return (
    <p className={classes} {...rest}>
      <img className="footer-logo__emblem" src={logoEmblem} alt="" />
      <span className="footer-logo__text">국립대전현충원</span>
    </p>
  )
}

export default FooterLogo
