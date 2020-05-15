import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography, Button, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { useHistory } from "react-router-dom"
import { Menu, MenuItem } from '@material-ui/core'

import { useStyles } from './mainStyles'

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
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <IconButton className={classes.icon} onClick={() => history.push('/profile')}>
                        <HomeIcon />
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
                            <h5 className={classes.userText}>{userName}</h5>
                        </MenuItem>
                        <MenuItem>
                            <Button className={classes.button} onClick={handleClick}>
                                Sair
                            </Button>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
        )
}

export default MainNavbar