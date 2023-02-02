import { Link } from 'react-router-dom'
import img from '../../assets/undraw_under_construction_-46-pa.svg'
import Wrapper from './Error_wrapper'

const UnderConstruction = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Sorry this page is still Under Construction :(</h3>
        <p>hope we get this running soon</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default UnderConstruction