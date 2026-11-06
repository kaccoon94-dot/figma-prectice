import './MenuTab.css'
import MobileMenuMoreIcon from '../icon/MobileMenuMoreIcon.jsx'

/**
 * MenuTab — Figma「메뉴텝」(node 797:1795)
 * 상태: 기본 / 온더마우스(:hover) / 클릭(expanded=true, 펼침)
 * 사용 컴포넌트: MobileMenuMoreIcon(모바일메뉴더보기아이콘)
 *
 * - 기본: 하위 메뉴를 펼치고 접는 버튼(<button>)
 * - href가 있으면: 하위 메뉴 없이 바로 이동하는 링크(<a>) — 예: '신청서양식'
 *
 * @param {React.ReactNode} children  버튼 글자 (예: "현충원 소개")
 * @param {boolean} expanded          펼침 상태 여부 — true면 '클릭' 스타일 + ▲ 아이콘
 * @param {boolean} showIcon          오른쪽 화살표 아이콘 표시 여부 (기본 true)
 * @param {string} href               이동할 주소 (있으면 링크로 만듦)
 * @param {function} onClick          클릭 시 실행할 함수
 */
function MenuTab({ children, expanded = false, showIcon = true, href, onClick, className = '', ...rest }) {
  const classes = ['menu-tab', expanded ? 'menu-tab--expanded' : '', className].filter(Boolean).join(' ')
  const content = (
    <>
      <span className="menu-tab__label">{children}</span>
      {showIcon && <MobileMenuMoreIcon white={expanded} className="menu-tab__icon" />}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} aria-expanded={expanded} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}

export default MenuTab
