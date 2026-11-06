import './MobileLoginMethod.css'
import VerifyIcon from '../icon/VerifyIcon.jsx'

/**
 * MobileLoginMethod — Figma「모바일로그인방식」(node 797:1927)
 * 상태: 기본 / 호버(:hover)
 * 사용 컴포넌트: VerifyIcon(본인인증아이콘)
 * 로그인 방식을 고르는 카드라서 <button>으로 만듭니다.
 *
 * @param {React.ReactNode} title        큰 제목 (예: "간편인증")
 * @param {React.ReactNode} description  설명 글
 * @param {React.ComponentType} icon     아이콘 컴포넌트 (기본 VerifyIcon, 예: IpinIcon)
 * @param {function} onClick             클릭 시 실행할 함수
 */
function MobileLoginMethod({ title = '제목변경', description = '본문변경', icon: Icon = VerifyIcon, onClick, className = '', ...rest }) {
  const classes = ['mobile-login-method', className].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      <span className="mobile-login-method__title">
        <span className="mobile-login-method__icon">
          <Icon />
        </span>
        {title}
      </span>
      <span className="mobile-login-method__desc">{description}</span>
    </button>
  )
}

export default MobileLoginMethod
