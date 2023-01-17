import { Link } from 'react-router-dom'
import img from '../../assets/undraw_page_not_found_re_e9o6.svg'
import Wrapper from './Error_wrapper'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error