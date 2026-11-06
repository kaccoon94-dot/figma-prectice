import './DesktopTopMenu.css'

/**
 * DesktopTopMenu — Figma「데스크탑상단메뉴」(node 797:1945)
 * 상태: 기본 / 호버(:hover)
 * 데스크탑 가로 메뉴바(GNB)의 한 칸. 페이지 이동이라 <a>(링크)로 만듭니다.
 *
 * @param {React.ReactNode} children  메뉴 글자 (기본 "현충원소개")
 * @param {string} href               이동할 주소
 */
function DesktopTopMenu({ children = '현충원소개', href = '#', className = '', ...rest }) {
  const classes = ['desktop-top-menu', className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  )
}

export default DesktopTopMenu
