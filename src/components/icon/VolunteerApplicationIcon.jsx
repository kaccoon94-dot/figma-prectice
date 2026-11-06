import './icons.css'
import VolunteerApplicationIconSrc from '../../assets/icons/volunteer-application-icon.png'

/**
 * VolunteerApplicationIcon — Figma「봉사활동신청아이콘」(node 132:5384)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경·사진 위)
 */
function VolunteerApplicationIcon({ white = false, className = '' }) {
  const classes = ['volunteer-application-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={VolunteerApplicationIconSrc} alt="" />
}

export default VolunteerApplicationIcon
