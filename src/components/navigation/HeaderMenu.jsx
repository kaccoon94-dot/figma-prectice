import './HeaderMenu.css'
import BurialRequestIcon from '../icon/BurialRequestIcon.jsx'

/**
 * HeaderMenu — Figma「헤더메뉴」(node 797:1751)
 * 상태: 기본 / 호버(:hover)
 * 사용 컴포넌트: 아이콘 (기본 BurialRequestIcon = 안장신청아이콘)
 * 다른 페이지로 이동하는 바로가기라서 <a>(링크)로 만듭니다.
 *
 * @param {React.ReactNode} children  메뉴 글자 (기본 "안장신청")
 * @param {string} href               이동할 주소
 * @param {React.ComponentType} icon  아이콘 컴포넌트 (white 값을 받는 아이콘, 예: RelocationRequestIcon)
 */
function HeaderMenu({ children = '안장신청', href = '#', icon: Icon = BurialRequestIcon, className = '', ...rest }) {
  const classes = ['header-menu', className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} {...rest}>
      <span className="header-menu__inner">
        {/* 기본 아이콘 / 호버 아이콘(흰색) — CSS로 하나만 보여줌 */}
        <Icon className="header-menu__icon header-menu__icon--default" />
        <Icon white className="header-menu__icon header-menu__icon--hover" />
        <span className="header-menu__label">{children}</span>
      </span>
    </a>
  )
}

export default HeaderMenu
