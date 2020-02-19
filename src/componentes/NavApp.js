import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import NotesRoundedIcon from '@material-ui/icons/NotesRounded'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'

//import useReactRouter from 'use-react-router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

function NavApp () {
    const classes = useStyles()
    //const { history } = useReactRouter()
    const [anchorElement, setAnchorElement] = useState(null)
    const handleOpenMenu = (e) => setAnchorElement(e.target)
    const handleCloseMenu = () => setAnchorElement(null)

    const handleClick = () => {
      //history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton className={classes.icon} color='inherit'>
                        <NotesRoundedIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" align="center" noWrap>
                        React App
                    </Typography>
                    <IconButton className={classes.iconAcc} color='inherit' onClick={handleOpenMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        open={!!anchorElement}
                        onClose={handleCloseMenu}
                        anchorEl={anchorElement}>
                        <MenuItem>
                            <ButtonSair onClick={handleClick}>
                                Sair
                            </ButtonSair>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
        )
}

{/* Css */}
const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    iconAcc: {
        marginRight: theme.spacing(2),
        marginLeft: "93%",
        position: "Absolute"
      },
    title: {
        marginLeft: "42%",
        marginRight: "42%",
        position: "Absolute"
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
  }))

  {/* Const */}
  const ButtonSair = styled.button`
  border: 0
  background: transparent
`

export default NavApp