import './HeaderTimeGuide.css'
import ClockIcon from '../icon/ClockIcon.jsx'

/**
 * HeaderTimeGuide — Figma「헤더시간안내」(데스크탑_메인, node 334:5114)
 * 헤더이미지 위에 올리는 '국립대전현충원 개방시간 안내' (흰 글자 + 그림자)
 * 사용 컴포넌트: ClockIcon(시계아이콘, 흰색)
 *
 * 시간표는 이름-값 목록이라 <dl>(설명 목록)으로 만듭니다.
 */
function HeaderTimeGuide({ className = '', ...rest }) {
  const classes = ['header-time-guide', className].filter(Boolean).join(' ')

  return (
    <section className={classes} aria-labelledby="header-time-guide-title" {...rest}>
      <ClockIcon white className="header-time-guide__icon" />
      <div className="header-time-guide__body">
        <h2 id="header-time-guide-title" className="header-time-guide__title">
          국립대전현충원 개방시간 안내
        </h2>
        <dl className="header-time-guide__list">
          {/* 업무시설 이용시간 */}
          <div className="header-time-guide__row">
            <dt>
              현충원 내 업무시설 <small>(민원 안내실)</small>
            </dt>
            <dd>
              09:00~18:00 <small>(연중무휴)</small>
            </dd>
          </div>
          {/* 정문개방시간 */}
          <div className="header-time-guide__row header-time-guide__row--gate">
            <dt>현충원 정문</dt>
            <dd className="header-time-guide__times">
              <span>
                하절기 - 06:00~18:00 <small>(03 ~ 10월)</small>
              </span>
              <span>
                동절기 - 07:00~18:00 <small>(11 ~ 02월)</small>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default HeaderTimeGuide
