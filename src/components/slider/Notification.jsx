import { useState } from 'react'
import './Notification.css'
import NoticeNotification from '../card/NoticeNotification.jsx'
import Icon11 from '../icon/Icon11.jsx'
import Icon12 from '../icon/Icon12.jsx'
import image02 from '../../assets/images/header-image-02.jpg' // Figma 이미지02 = 헤더이미지02와 같은 파일
import image03 from '../../assets/images/image-03.jpg'
import image04 from '../../assets/images/image-04.jpg'

/* Figma 예시 내용 (알림01~03) — 실제 데이터는 items로 넘겨 바꿉니다 */
const DEFAULT_ITEMS = [
  { title: '공모전', description: '나라사랑 체험소감 공모전\n2026.04.20-2026.10.31', image: image02 },
  { title: '[보훈둘레길]', description: '호우특보 해제에 따른 보훈 둘레길 개방 알림', image: image04 },
  {
    title: '사진 받아보기 서비스',
    description: '안장자 묘소/혼충당 (실내 봉안시설) 사진 받아보기 서비스',
    image: image03,
  },
]

/**
 * Notification — Figma「알림」(node 797:2437)
 * 종류: 알림01 / 알림02 / 알림03 → 보고 있는 순서(첫째/가운데/마지막)
 * 사용 컴포넌트: NoticeNotification(공지,알림), Icon11(이전), Icon12(다음)
 *
 * 이전·다음 버튼으로 한 장씩 넘겨 봅니다. 처음/마지막에서는 해당 버튼이 비활성(배경 없음).
 * 비활성은 disabled 대신 aria-disabled를 써서 키보드 초점이 사라지지 않게 합니다.
 *
 * @param {Array<{title, description, image, imageAlt, href}>} items  알림 목록
 * @param {string} label  영역 이름 (스크린리더용, 기본 "알림")
 * @param {Array} desktopItems  데스크탑(1280px 이상)에서 한 줄로 보여줄 카드 (기본 = items)
 *
 * 데스크탑(1280px 이상): 이전·다음 버튼 없이 카드를 한 줄에 모두 보여줌 (Figma 데스크탑_메인)
 */
function Notification({ items = DEFAULT_ITEMS, desktopItems = items, label = '알림', className = '', ...rest }) {
  const [index, setIndex] = useState(0)
  const classes = ['notification', className].filter(Boolean).join(' ')
  const item = items[index]
  const isFirst = index === 0
  const isLast = index === items.length - 1

  if (!item) return null

  return (
    <section className={classes} aria-label={label} {...rest}>
      {/* 모바일 — 한 장씩 넘겨 보기 */}
      <div className="notification__slider">
        {/* 넘길 때 바뀐 내용을 스크린리더가 읽어 줌 */}
        <div className="notification__card" aria-live="polite">
          <span className="sr-only">{`${items.length}개 중 ${index + 1}번째`}</span>
          <NoticeNotification {...item} />
        </div>
        <div className="notification__buttons">
          <button
            type="button"
            className="notification__button"
            aria-label={`이전 ${label}`}
            aria-disabled={isFirst}
            onClick={() => !isFirst && setIndex(index - 1)}
          >
            <Icon11 />
          </button>
          <button
            type="button"
            className="notification__button"
            aria-label={`다음 ${label}`}
            aria-disabled={isLast}
            onClick={() => !isLast && setIndex(index + 1)}
          >
            <Icon12 />
          </button>
        </div>
      </div>

      {/* 데스크탑 — 카드 한 줄 */}
      <ul className="notification__list">
        {desktopItems.map((desktopItem, i) => (
          <li key={`${i}-${desktopItem.title}`} className="notification__list-item">
            <NoticeNotification {...desktopItem} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notification
