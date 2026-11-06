import './CardView.css'
import MediaNewsCard from '../card/MediaNewsCard.jsx'
import koreanWarRemainsJointBurial from '../../assets/images/korean-war-remains-joint-burial.jpg'
import chiefsOfStaffMemorialTowerVisit from '../../assets/images/chiefs-of-staff-memorial-tower-visit.jpg'
import hospitalDirectorMemorialTowerVisit from '../../assets/images/hospital-director-memorial-tower-visit.jpg'
import fallenFirefightersJointBurial from '../../assets/images/fallen-firefighters-joint-burial.jpg'

/* Figma 예시 내용 (카드모음 8장) — 실제 데이터는 items로 넘겨 바꿉니다 */
const SAMPLE = [
  { title: '6.25전사자합동안장식', date: '2026.09.18', image: koreanWarRemainsJointBurial },
  { title: '육해공군참모총장 참배', date: '2026.10.07', image: chiefsOfStaffMemorialTowerVisit },
  { title: '국군대전병원장 이국종', date: '2026.10.01', image: hospitalDirectorMemorialTowerVisit },
  { title: '소방공원합동안장식', date: '2026.09.30', image: fallenFirefightersJointBurial },
]
const DEFAULT_ITEMS = [...SAMPLE, ...SAMPLE]

/**
 * CardView — Figma「카드뷰」(node 797:2595)
 * 종류: 카드뷰01~05 → 카드 줄이 한 칸(카드+간격)씩 옆으로 이동한 모습
 * 사용 컴포넌트: MediaNewsCard(미디어소식카드) × 8
 *
 * 손가락으로 옆으로 밀어(스와이프) 넘겨 봅니다. 자동으로 넘어가지 않습니다.
 * 키보드는 Tab으로 카드를 이동하면 화면이 따라 움직입니다.
 *
 * @param {Array<{title, date, image, imageAlt, href}>} items  카드 목록
 * @param {string} label  목록 이름 (스크린리더용, 기본 "미디어 소식")
 */
function CardView({ items = DEFAULT_ITEMS, label = '미디어 소식', className = '', ...rest }) {
  const classes = ['card-view', className].filter(Boolean).join(' ')

  return (
    <ul className={classes} aria-label={label} {...rest}>
      {items.map((item, i) => (
        <li key={`${i}-${item.title}`} className="card-view__item">
          <MediaNewsCard {...item} />
        </li>
      ))}
    </ul>
  )
}

export default CardView
