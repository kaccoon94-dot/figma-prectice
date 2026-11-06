import { Link } from 'react-router'
import './GuideTab.css'

/* Figma「안내탭」두 칸 */
const DEFAULT_TABS = [
  { label: '이용 및 시설 안내', to: '/guide' },
  { label: '버스운행', to: '/guide/bus' },
]

/**
 * GuideTab — Figma「안내탭」(이용 및 시설 안내 / 버스운행)
 * 탭마다 주소가 달라서 링크로 만들고, 지금 화면은 aria-current="page"로 표시합니다.
 *
 * @param {string} current  지금 화면 주소 (예: '/guide/bus')
 * @param {Array<{label, to}>} tabs  탭 목록
 */
function GuideTab({ current, tabs = DEFAULT_TABS, className = '', ...rest }) {
  const classes = ['guide-tab', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="이용안내 메뉴" {...rest}>
      <ul className="guide-tab__list">
        {tabs.map(({ label, to }) => (
          <li key={to} className="guide-tab__item">
            <Link className="guide-tab__link" to={to} aria-current={current === to ? 'page' : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GuideTab
