import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import NotesRoundedIcon from '@material-ui/icons/NotesRounded'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'

import { useHistory } from "react-router-dom"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

function MainNavbar () {
    const classes = useStyles()
    const history = useHistory()

    const userName = localStorage.getItem('name')

    const [anchorElement, setAnchorElement] = useState(null)
    const handleOpenMenu = (e) => setAnchorElement(e.target)
    const handleCloseMenu = () => setAnchorElement(null)

    const handleClick = () => {
      history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton className={classes.icon} onClick={() => history.push('/profile')}>
                        <NotesRoundedIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" align="center" noWrap>
                        To Do Lists
                    </Typography>
                    <IconButton className={classes.iconAcc} onClick={handleOpenMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        open={!!anchorElement}
                        onClose={handleCloseMenu}
                        anchorEl={anchorElement}>
                        <MenuItem>
                            <h5 className="userText">Bem vindo {userName}</h5>
                        </MenuItem>
                        <MenuItem>
                            <ButtonSair className="button" onClick={handleClick}>
                                Sair
                            </ButtonSair>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
        )
}

/* Css */
const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: "inherit"
    },
    iconAcc: {
        marginRight: theme.spacing(2),
        marginLeft: "93%",
        position: "Absolute",
        color: "inherit"
      },
    title: {
        marginLeft: "45%",
        position: "Absolute"
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    button: {

    },
    userText: {

    }
  }))

  /* Const */
  const ButtonSair = styled.button`
  border: 0
  background: transparent
`

export default MainNavbar