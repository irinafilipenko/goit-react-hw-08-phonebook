import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import s from './Loader.module.css'

export const GalleryLoader = () => (
  <div className={s.loader}>
    <Loader type="Circles" color="#3f51b5" height={300} width={300} />
  </div>
)

export const ContactLoader = () => (
  <div className={s.loader}>
    <Loader type="Audio" color="#3f51b5" height={80} width={80} />
  </div>
)
