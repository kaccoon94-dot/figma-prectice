import './Footer.css'
import FooterLogo from '../image/FooterLogo.jsx'
import InstagramIcon from '../icon/InstagramIcon.jsx'
import YoutubeIcon from '../icon/YoutubeIcon.jsx'
import FacebookIcon from '../icon/FacebookIcon.jsx'

/* Figma「개인정보 등등」링크 — 주소는 실제 페이지가 생기면 바꿉니다 */
const LINKS = [
  { label: '개인정보처리방침', href: '#' },
  { label: '이메일집단수집거부', href: '#' },
  { label: '홈페이지 개선의견', href: '#' },
  { label: '정보마당', href: '#' },
  { label: '저작권보호정책', href: '#' },
  { label: '이용안내', href: '#' },
  { label: '찾아오시는길', href: '#' },
]

/* Figma「풋터아이콘」— 인별 / 유튭 / 페북 */
const SNS = [
  { label: '인스타그램', href: '#', Icon: InstagramIcon },
  { label: '유튜브', href: '#', Icon: YoutubeIcon },
  { label: '페이스북', href: '#', Icon: FacebookIcon },
]

/**
 * Footer — Figma「풋터」(모바일 화면 공통 프레임)
 * 사용 컴포넌트: FooterLogo(로고), InstagramIcon · YoutubeIcon · FacebookIcon
 */
function Footer({ className = '', ...rest }) {
  const classes = ['footer', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <div className="footer__content">
        <FooterLogo />

        <ul className="footer__links">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a className="footer__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer__sns">
          {SNS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a className="footer__sns-link" href={href} aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <address className="footer__address">
          <span>34151 대전광역시 유성구 현충원로 251(갑동 산 23-1)</span>
          <span>TEL : 042)718-7114</span>
          <span>FAX : 042)718-7120</span>
        </address>

        <p className="footer__copyright">COPYRIGHT © 2023 BY DAEJEON NATIONAL CEMETERY. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}

export default Footer
