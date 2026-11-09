import { Link } from 'react-router'
import './NoticeNotification.css'
import image03 from '../../assets/images/image-03.jpg'

/**
 * NoticeNotification — Figma「공지,알림」(node 797:2384)
 * 상태: 기본 / 호버(:hover)
 * 사용 이미지: 이미지03 (image 값으로 바꿀 수 있음)
 * 글 상세로 이동하는 카드라서 <a>(링크)로 만듭니다.
 *
 * @param {React.ReactNode} title        제목 (모바일/카드타이틀)
 * @param {React.ReactNode} description  본문 — 줄바꿈은 '\n'으로 넣으면 그대로 표시
 * @param {string} image                 오른쪽 이미지 주소 (기본 이미지03)
 * @param {string} imageAlt              이미지 설명 — 제목과 같은 내용이면 ''(꾸밈용)로 둡니다
 * @param {string} href                  이동할 주소
 */
function NoticeNotification({
  title = '현충원 방문시 유의사항',
  description = '우리 현충원은 다음과 같은 사항들을 금지하고 있습니다.',
  image = image03,
  imageAlt = '',
  href = '#',
  className = '',
  ...rest
}) {
  const classes = ['notice-notification', className].filter(Boolean).join(' ')

  const content = (
    <>
      <span className="notice-notification__text">
        <span className="notice-notification__title">{title}</span>
        <span className="notice-notification__desc">{description}</span>
      </span>
      <img className="notice-notification__image" src={image} alt={imageAlt} />
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

export default NoticeNotification
