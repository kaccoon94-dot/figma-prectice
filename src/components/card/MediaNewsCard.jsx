import { Link } from 'react-router'
import './MediaNewsCard.css'
import chiefsOfStaffMemorialTowerVisit from '../../assets/images/chiefs-of-staff-memorial-tower-visit.jpg'

/**
 * MediaNewsCard — Figma「미디어소식카드」(node 797:2548)
 * 상태: 기본 / 호버(:hover, 이미지 그림자)
 * 사용 이미지: 기본은 '육해공군참모총장 현충탑 참배' 사진 (image 값으로 바꿀 수 있음)
 * 소식 상세로 이동하는 카드라서 <a>(링크)로 만듭니다.
 *
 * @param {React.ReactNode} title  사진 이름 (기본 "사진이름")
 * @param {string} date            날짜 (예: "2026.10.07")
 * @param {string} image           이미지 주소
 * @param {string} imageAlt        이미지 설명 — 사진 이름과 같은 내용이면 ''(꾸밈용)로 둡니다
 * @param {string} href            이동할 주소
 */
function MediaNewsCard({
  title = '사진이름',
  date = '날짜',
  image = chiefsOfStaffMemorialTowerVisit,
  imageAlt = '',
  href = '#',
  className = '',
  ...rest
}) {
  const classes = ['media-news-card', className].filter(Boolean).join(' ')

  const content = (
    <>
      <img className="media-news-card__image" src={image} alt={imageAlt} />
      {/* 미디어소식텍스트 */}
      <span className="media-news-card__text">
        <span className="media-news-card__title">{title}</span>
        <span className="media-news-card__date">{date}</span>
      </span>
    </>
  )

  // 사이트 안 주소('/'로 시작)는 Link로 — 배포 경로(base)가 자동으로 붙음
  if (href.startsWith('/')) {
    return (
      <Link className={classes} to={href} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} {...rest}>
      {content}
    </a>
  )
}

export default MediaNewsCard
