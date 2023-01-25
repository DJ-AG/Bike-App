import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'About', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'All Stations', path: 'all-stations', icon: <MdQueryStats /> },
  { id: 3, text: 'Add Station', path: 'add-station', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

export default links