import React, { useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import logo from '../../images/logo1.png'

import api from 'services/api'
import { login } from '../../services/auth'

/* eslint-disable */
function Login () {
    const history = useHistory()
    const [error, setError] = useState(null)
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        const { username, password } = data
        try {
            const response = await api.post('/login', { username, password })
            
            login(response.headers.authorization)
            
            localStorage.setItem('username', username)

            history.push('/profile')
        } 
        catch (err) {
            setError('Houve um problema ao realizar o login, verifique suas credenciais.')
        }
    }

    return (
        <Container>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} alt='Logotipo'/>
                {error && <p>{error}</p>}
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    ref={register}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    ref={register}
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup">Criar conta</Link>
            </Form>
        </Container>
    )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 350px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    margin-bottom: 15px;
    padding: 20px 2px;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #3f51b5;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
 `

export default withRouter(Login)