import styles from './Registro.module.css'

import {useState, useEffect} from 'react'

const Registro = () => {
  return (
    <div>
        <h1>Cadastre-se</h1>
        <p>Crie seu usuário e compartilhe seus momentos!</p>
        <form >
          <label>
            <span>Nome:</span>
            <input 
            type="text" 
            name='displayName' 
            required placeholder='Nome do usuário' />
          </label>
          <label>
            <span>E-mail:</span>
            <input 
            type="email" 
            name='email' 
            required placeholder='E-mail do usuário' />
          </label>
          <label>
            <span>Senha:</span>
            <input 
            type="password" 
            name='password' 
            required placeholder='Insira sua senha' />
          </label>
          <label>
            <span>Confirmação de senha:</span>
            <input 
            type="password" 
            name='confirmPassword' 
            required placeholder='Confirme sua senha' />
          </label>
          <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Registro