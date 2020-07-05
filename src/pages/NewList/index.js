import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Button, Typography } from '@material-ui/core'
import Switch from "react-switch"

import { useStyles } from './styles'
import MainNavbar from 'pages/Navbar/Main'
import api from 'services/api'

function NewList() {
    const classes = useStyles()
    const history = useHistory()

    //devem virar vetores
    const[name, setName] = useState("")
    const[type, setType] = useState(false)
    const [error, setError] = useState('')

    const userId = localStorage.getItem('idUsuario')
    
    const [count, setCount] = useState(1)
    let rows = [1]

    function handleChangeType(checked) {
        setType(checked)
    }

    function loadRowsOnChange () {
        if(count < 6) {
            setCount(count + 1)
            rows.push(count)
        }

        //Carregar numero de inputs

    }

    async function handleRegister(e) {
        e.preventDefault()

        if(name === "") {
            alert("Ops! Por favor, informe o nome da(s) lista(s).")
        }

        else {
            try {
                api.put("/lista/salvar", {
                    nome: name,
                    publica: type
                }, {
                    headers: { 
                        'Content-Type': 'application/json'             
                    },
                    params: {
                        idUser: userId
                    }
                }, api.config)

                alert('Lista cadastrada com sucesso')

                history.goBack()
            }

            catch(err){
                setError('Houve um problema ao realizar o cadastro, tente novamente.')
                alert(error)
            }
        }
    }

    return (
        <div className={classes.content}>
            <MainNavbar />

            <form onSubmit={handleRegister}>
                <Grid container spacing={6}>

                    <Typography className={classes.hint} variant="h6">
                        Cadastre até cinco listas simultâneas!
                    </Typography>

                    <Button className={classes.addButton} onClick={loadRowsOnChange}>
                        Adicionar
                    </Button>

                </Grid>

                <Grid container spacing={6}>   
                    <div className={classes.panel}>
                        {rows.map(item => (
                            <div className={classes.inputGroup}>
                                <input 
                                    className={classes.inputListName}
                                    placeholder="Nome da Lista"
                                    value={name}
                                    onChange ={e => setName(e.target.value)}
                                />

                                <div className={classes.inputListType}>
                                    <label className={classes.typeLabel}>           
                                        <Switch onChange={handleChangeType} checked={type} />
                                        <span className={classes.typeSpan}>
                                            Compartilhada
                                        </span>
                                    </label>   
                                </div>                    
                            </div>
                        ))}
                    </div>               
                </Grid>

                <button className={classes.registerButton} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default NewList