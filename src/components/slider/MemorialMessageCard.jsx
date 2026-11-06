import { useRef, useState } from 'react'
import './MemorialMessageCard.css'
import Icon11 from '../icon/Icon11.jsx'
import Icon12 from '../icon/Icon12.jsx'

/*
 * 예시 내용 (추모카드01~05) — Figma 문구를 바탕으로, 사람 이름은 가상의 이름으로 바꿈
 * 실제 데이터는 items로 넘겨 바꿉니다. 줄바꿈은 '\n'
 */
const DEFAULT_ITEMS = [
  '아버님 가을이에요\n\n딱 전형적인 가을날씨네요\n하늘은 높고 푸르른게...\n\n이런날 함께 계시다면 모시고 나들이 갔을건데...',
  '평안을 누리소서\n\n외숙모님^^\n오늘 외삼춘 만나셨겠지요?\n고생 많으셨어요..\n평안을 누리소서..\n오늘 함께 못가 죄송합니다..',
  '할머니 할아버지 보고싶어요\n\n할머니 할아버지 길동이에요.\n\n꿈에 할머니 할아버지가 나와 보고싶어 찾아왔어요..',
  '아버지... 연휴 끝나고 한주의 시작이네요\n\n우리 아버님... 아버지...\n연휴가 끝나고 한주의 시작인데 피로감도 있지만\n높고 맑은 가을하늘을 보고 있자면\n아버님이 늘 웃어주시는거같아서 상쾌해져요',
  '할머니 생신 축하드려요💗\n\n할매!\n할매가 보고싶어하는 이뿌이 왔데이~\n할아버지는 잘 만났나?\n며칠 전에 추석 겸 할머니 49재라꼬 할머니 할아버지 좋아하는거 사서 엄마아빠랑 삼촌이랑 길순이랑 길남이랑 갔는데',
]

/**
 * MemorialMessageCard — Figma「추모의글 카드」(node 797:2564)
 * 종류: 추모카드01~05 → 보고 있는 순서
 * 사용 컴포넌트: Icon11(이전, 흰색), Icon12(다음, 흰색)
 *
 * 이전·다음 버튼으로 글을 한 개씩 넘겨 봅니다.
 * 처음에는 이전 버튼, 마지막에는 다음 버튼이 보이지 않습니다 (Figma: 투명도 0).
 * 버튼이 사라질 때 키보드 초점이 없어지지 않도록 반대쪽 버튼으로 초점을 옮깁니다.
 *
 * @param {string[]} items  추모의 글 목록 (첫 줄 = 제목)
 * @param {string} label    영역 이름 (스크린리더용, 기본 "추모의 글")
 */
function MemorialMessageCard({ items = DEFAULT_ITEMS, label = '추모의 글', className = '', ...rest }) {
  const [index, setIndex] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const classes = ['memorial-message-card', className].filter(Boolean).join(' ')
  const isFirst = index === 0
  const isLast = index === items.length - 1

  if (!items[index]) return null

  const goPrev = () => {
    const nextIndex = index - 1
    setIndex(nextIndex)
    if (nextIndex === 0) nextRef.current?.focus()
  }

  const goNext = () => {
    const nextIndex = index + 1
    setIndex(nextIndex)
    if (nextIndex === items.length - 1) prevRef.current?.focus()
  }

  return (
    <section className={classes} aria-label={label} {...rest}>
      {/* 글 영역 — 넘길 때 바뀐 내용을 스크린리더가 읽어 줌 */}
      <div className="memorial-message-card__box" aria-live="polite">
        <span className="sr-only">{`${items.length}개 중 ${index + 1}번째`}</span>
        <p className="memorial-message-card__text">{items[index]}</p>
      </div>
      {/* 추모이동 */}
      <div className="memorial-message-card__buttons">
        <button
          ref={prevRef}
          type="button"
          className="memorial-message-card__button"
          aria-label={`이전 ${label}`}
          hidden={isFirst}
          onClick={goPrev}
        >
          <Icon11 white />
        </button>
        <button
          ref={nextRef}
          type="button"
          className="memorial-message-card__button"
          aria-label={`다음 ${label}`}
          hidden={isLast}
          onClick={goNext}
        >
          <Icon12 white />
        </button>
      </div>
    </section>
  )
}

export default MemorialMessageCard
