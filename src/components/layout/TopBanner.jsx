import { useEffect, useId, useState } from 'react'
import './TopBanner.css'
import MobileMenu from '../navigation/MobileMenu.jsx'
import SearchOverlay from './SearchOverlay.jsx'
import Logo from '../image/Logo.jsx'
import IconLogin from '../navigation/IconLogin.jsx'
import DesktopTopMenu from '../navigation/DesktopTopMenu.jsx'
import BottomMenu from '../navigation/BottomMenu.jsx'
import SearchIcon from '../icon/SearchIcon.jsx'
import MenuIcon from '../icon/MenuIcon.jsx'

/* Figma 데스크탑_메인「데스크탑 상단메뉴」7개 — 주소는 실제 페이지가 생기면 바꿉니다
 * items: 마우스를 올리거나 Tab으로 들어가면 펼쳐지는 Figma「데스크탑_하단메뉴」(334:5028) — '현충원소개'만 있음 */
const DEFAULT_MENUS = [
  {
    label: '현충원소개',
    href: '#',
    items: [
      { label: '인사말', href: '#' },
      { label: '역사, 연혁', href: '#' },
      { label: '조직, 업무', href: '#' },
      { label: '찾아오시는 길, VR 지도 안내', href: '#' },
      { label: '시설 및 이용안내, 버스 운행 안내', href: '/guide' },
    ],
  },
  { label: '알림마당', href: '#' },
  { label: '안장자찾기', href: '#' },
  { label: '안장신청', href: '#' },
  { label: '신청마당', href: '#' },
  { label: '사이트안내', href: '#' },
  { label: '신청서양식', href: '#' },
]

/**
 * TopBanner — Figma「상단배너」(모바일·데스크탑 화면 공통 프레임)
 * 사용 컴포넌트: Logo(로고), IconLogin(아이콘), DesktopTopMenu(데스크탑상단메뉴), BottomMenu(하단메뉴)
 *
 * - 모바일: 로고 + 로그인 · 통합검색 · 메뉴
 * - 데스크탑(1280px 이상): 로고 + 가로 메뉴 7개 + 로그인 · 통합검색 (메뉴 버튼 없음)
 *   하위 메뉴(items)가 있는 칸에 마우스를 올리거나 Tab으로 들어가면 아래에 하단메뉴가 펼쳐짐
 *
 * 통합검색 · 메뉴 버튼은 SearchOverlay(모바일_검색화면) · MobileMenu(모바일_메뉴)를 엽니다.
 *
 * @param {Array<{label, href, items?}>} menus  데스크탑 가로 메뉴 (items: 하단메뉴)
 * @param {string} loginHref       로그인 페이지 주소 (기본 '/login')
 * @param {boolean} showLogin      로그인 버튼 표시 (로그인 화면에서는 false)
 * @param {boolean} compact        내부 화면용 낮은 높이 (Figma 내부 화면 상단배너 48px)
 * @param {function} onMenuClick   메뉴를 화면 쪽에서 직접 열 때 (있으면 상단배너 안의 메뉴는 그리지 않음)
 * @param {string} menuId          onMenuClick으로 여는 메뉴의 id (스크린리더 연결용)
 */
function TopBanner({
  menus = DEFAULT_MENUS,
  loginHref = '/login',
  showLogin = true,
  compact = false,
  onMenuClick,
  menuId: externalMenuId,
  className = '',
  ...rest
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const internalMenuId = useId()
  const menuId = externalMenuId ?? internalMenuId
  const searchId = useId()
  // 클릭으로 펼친 하단메뉴 (이때만 뒤 화면을 어둡게 — 마우스 호버로 펼칠 때는 어둡게 하지 않음)
  const [clickedLabel, setClickedLabel] = useState(null)

  // 클릭으로 펼친 상태에서 그 메뉴 칸 바깥을 누르면 닫음
  useEffect(() => {
    if (!clickedLabel) return
    const handleOutside = (event) => {
      if (!event.target.closest('.top-banner__menu-item--clicked')) setClickedLabel(null)
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [clickedLabel])
  const classes = ['top-banner', compact ? 'top-banner--compact' : '', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <Logo />

      {/* 데스크탑 상단메뉴 */}
      <nav className="top-banner__menu" aria-label="주메뉴">
        <ul className="top-banner__menu-list">
          {menus.map(({ label, href, items = [] }) => (
            <li
              key={label}
              className={['top-banner__menu-item', clickedLabel === label ? 'top-banner__menu-item--clicked' : ''].filter(Boolean).join(' ')}
            >
              <DesktopTopMenu
                href={href}
                onClick={
                  items.length > 0
                    ? (event) => {
                        // 하단메뉴가 있는 칸은 클릭하면 이동 대신 하단메뉴를 펼치고/접음
                        event.preventDefault()
                        setClickedLabel((current) => (current === label ? null : label))
                      }
                    : undefined
                }
              >
                {label}
              </DesktopTopMenu>
              {items.length > 0 && (
                <ul className="top-banner__submenu" aria-label={`${label} 하위 메뉴`}>
                  {items.map((item) => (
                    <li key={item.label}>
                      <BottomMenu href={item.href}>{item.label}</BottomMenu>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 상단오른쪽 */}
      <div className="top-banner__actions">
        {showLogin && <IconLogin href={loginHref} />}
        <IconLogin
          icon={SearchIcon}
          onClick={() => setSearchOpen(true)}
          aria-haspopup="dialog"
          aria-controls={searchId}
        >
          통합검색
        </IconLogin>
        <IconLogin
          icon={MenuIcon}
          onClick={onMenuClick ?? (() => setMenuOpen(true))}
          className="top-banner__menu-button"
          aria-haspopup="dialog"
          aria-controls={menuId}
        >
          메뉴
        </IconLogin>
      </div>

      {!onMenuClick && <MobileMenu id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} />}
      <SearchOverlay id={searchId} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

export default TopBanner
