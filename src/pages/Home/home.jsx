import { useState } from 'react'
import Topfilmes from '../../components/topfilmes';
import Topseries from '../../components/topseries';
import { Container } from './style';


function Home() {
  let [load, setload] = useState(false);

  if (load) {
    return (
      <div className='load'>
        <h1>carregando.....</h1>
      </div>
    )
  }




  return (
    <Container>
      <Topfilmes/>
      <Topseries/>
    </Container>
  )
}

export default Home
