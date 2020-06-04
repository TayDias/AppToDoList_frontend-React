import React, { useEffect } from 'react'
import { Container, Grid, Button, Typography }  from '@material-ui/core'
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { useStyles } from './styles'

import api from 'services/api'

import MainNavbar from '../Navbar/Main'
import UserDetails from '../../utils/userDetails'

//import caderno3 from '../../images/caderno3.jpg'
import logo from '../../images/logo1.png'

function Profile () {
    const classes = useStyles()
    const history = useHistory()
    
    const userName = localStorage.getItem('username')
    const usuario = UserDetails(userName)

    localStorage.setItem('name', usuario.nome)

    // Array [ valor, funçãoDeAtualização]
    const [data, setData] = React.useState([])

    useEffect(() => {
        async function retornaListas () {
            try {
                const result = await api.get('/lista', { 
                    params: { 
                        idUser: usuario.id 
                    } 
                }, api.config)

                setData(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        retornaListas()
    
    }, [usuario])

    return (
        <div className={classes.heroContent}>
            <MainNavbar />

            <Grid container spacing={6}>
                <Typography className={classes.welcome} variant="h6">Bem Vindo, {userName}</Typography>
                <Button className={classes.newListButton} onClick={() => history.push({
                    pathname: '/newList'
                })}>
                    Nova Lista
                </Button>
            </Grid>   

            <Container className={classes.cardGrid} maxWidth="md">          
                <Grid container spacing={6}>
                    {data.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={logo}
                                title="Imagem padrao"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardTitle} variant="h5" gutterBottom>
                                    {card.nome}
                                </Typography>
                                {card.publica === true ? 
                                    <Typography className={classes.cardSubTitle}>Compartilhada</Typography>: 
                                    <Typography className={classes.cardSubTitle}>Particular</Typography> 
                                }                              
                            </CardContent>
                            <CardActions>                            
                                <Button size="small" className={classes.openButton}
                                    onClick={() => history.push({
                                        pathname: '/lista',
                                        state: { idL: (card.id), nome: (card.nome), publica: (card.publica) }
                                      })}>
                                    Abrir
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Profile