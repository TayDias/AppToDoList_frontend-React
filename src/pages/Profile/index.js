import React, { useEffect } from 'react'
import { Container, Grid, Button, Typography }  from '@material-ui/core'
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"

import MainNavbar from '../Navbar/Main'
import caderno3 from '../../images/caderno3.jpg'

import api from 'services/api'

import UserDetails from '../../utils/userDetails'

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
            <Container className={classes.cardGrid} maxWidth="md">          
                <Grid container spacing={4}>
                    {data.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={caderno3}
                                title="Imagem padrao"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.nome}
                                </Typography>
                                {/*card.publica === true ? 
                                    <Typography variant="h7">Compartilhada</Typography>: 
                                    <Typography variant="h7">Particular</Typography> 
                                */}                                
                            </CardContent>
                            <CardActions>                            
                                <Button size="small" color="primary"
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

const useStyles = makeStyles(theme => ({   
    heroContent: {
        backgroundColor: theme.palette.background.paper
    }, 
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    newButton: {
        backgroundcolor: '#3d94f6',
	    color: '#ffffff'
    }
  }));

export default Profile