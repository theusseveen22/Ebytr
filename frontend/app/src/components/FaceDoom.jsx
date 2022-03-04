import React, { useContext } from 'react'
import Context from '../context/Context';
import frame1 from '../images/frame1.gif';
import frame2 from '../images/frame2.gif';
import frame3 from '../images/frame3.gif';
import frame4 from '../images/frame4.png';

export default function FaceDoom({data}) {

   // Pegando dados do data no Context
   const { dataTasks } = useContext(Context)

      // Função para controlar as expressões do personagem
  const faceDoom = () => {
    const num = dataTasks ? dataTasks.length : 0
    console.log('data', data);
    if (num <= 2) {
      return <img src={frame1} width="150px" height="150px" alt="Frame" />
    }
    if (num <= 6) {
      return <img src={frame2} width="150px" height="150px" alt="Frame" />
    }
    if (num <= 10) {
      return <img src={frame3} width="150px" height="150px" alt="Frame" />
    }
    return <img src={frame4} width="150px" height="150px" alt="Frame" />
  }
  return (
     <div className='face'>{faceDoom()}</div>
  )
}
