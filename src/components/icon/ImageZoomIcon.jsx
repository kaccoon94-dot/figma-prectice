import './icons.css'
import imageZoomIcon from '../../assets/icons/image-zoom-icon.png'

/**
 * ImageZoomIcon — Figma「이미지확대아이콘」(흰색, '지도확대' 버튼 안)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function ImageZoomIcon({ className = '' }) {
  const classes = ['image-zoom-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={imageZoomIcon} alt="" />
}

export default ImageZoomIcon
