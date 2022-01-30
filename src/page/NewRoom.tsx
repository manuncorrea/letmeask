import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {

  const { user } = useContext(AuthContext)

  return(
    <div id="page-auth">

      <aside>
        <img src={ilustrationImg} alt='Ilustação simbolizando perguntas e resposta' />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo-real.</p>
      </aside>

      <main>
        <div className='main-content'>
          <h1>{user?.name}</h1>
          <img src={logoImg} alt='Letmeask' />
          <h2>Criar uma nova sala</h2>
          
          <form>
            <input type='text' placeholder='Nome da sala' />
            <Button type="submit" >Criar sala</Button >
          </form>

          <p>Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link></p>

        </div>
      </main>
    </div>
  )
}