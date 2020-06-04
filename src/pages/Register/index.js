import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import { useStyles } from './styles'

function Register() {
    const classes = useStyles()
    const history = useHistory()
    const [error, setError] = useState('')

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function handleRegister(e) {
        e.preventDefault()
        
        if (name === '' || user === '' || email === '' || password === '' || confirmPassword === '') {
            alert("Ops! Por favor, preencha todos os campos para realizar o cadastro.")
        }

        else if(password !== confirmPassword) {
            alert("Ops! A senha e a confirmação da senha não correspondem. Por favor, digite-as novamente.")
        }

        else {
            try {
                await api.post('/usuario/save', { 
                    nome: name,
                    email: email,
                    usuario: user,
                    senha: password
                }, {
                    headers: { 
                        'Content-Type': 'application/json'             
                    }
                }, api.config)
    
                alert('Usuário cadastrado com sucesso')
    
                history.push("/")
            }
            catch(err){
                setError('Houve um problema ao realizar o cadastro, tente novamente.')
                alert(error)
            }
        }

    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <section>
                    <Typography className={classes.title}>To Do App</Typography>
                    <Typography className={classes.subTitle}>Cadastre-se</Typography>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        className={classes.input} 
                        placeholder="Nome Completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <div className={classes.inputGroup}>
                        <input 
                            className={classes.input}
                            placeholder="Nome de Usuário"
                            value={user}
                            onChange ={e => setUser(e.target.value)}
                        />
                        <input
                            className={classes.input}
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            className={classes.input}
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            className={classes.input} 
                            placeholder="Repita a Senha"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button className={classes.button} type="submit">Cadastrar</button>
                    <Link className={classes.login} to="/">Tenho Cadastro</Link>
                </form>
            </div>
        </div>
    )
}

export default Register