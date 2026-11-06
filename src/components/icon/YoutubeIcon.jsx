import './icons.css'
import YoutubeIconSrc from '../../assets/icons/youtube-icon.png'

/**
 * YoutubeIcon — Figma「유튜브아이콘」(node 132:5378)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function YoutubeIcon({ className = '' }) {
  const classes = ['youtube-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={YoutubeIconSrc} alt="" />
}

export default YoutubeIcon
