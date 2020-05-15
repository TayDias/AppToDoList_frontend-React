import React, { useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Container, Typography } from '@material-ui/core'

import api from 'services/api'
import { login } from '../../services/auth'
import { useStyles } from './styles'

/* eslint-disable */
function Login () {
    const classes = useStyles()
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
        <Container className={classes.root}>
            <form noValidate className={classes.panel} onSubmit={handleSubmit(onSubmit)}>

                <Typography className={classes.title}>To Do App</Typography>
                <Typography className={classes.subTitle}>Logar</Typography>

                {error && 
                  <p className={classes.errorMessage}>
                    {error}
                  </p>}

                <input className={classes.credentials}
                    name='username'
                    type='text'
                    placeholder='Username'
                    ref={register}
                />
                <input className={classes.credentials}
                    name='password'
                    type='password'
                    placeholder='Password'
                    ref={register}
                />
                <button className={classes.loginButton} type="submit">Entrar</button>
                <hr />
                <Link className={classes.newAccount} to="/signup">Criar conta</Link>
                
            </form>
        </Container>
    )
}

export default withRouter(Login)