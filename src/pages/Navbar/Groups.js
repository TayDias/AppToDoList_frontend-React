// import React, { useState, useEffect } from 'react'
// import { AppBar, Toolbar, IconButton } from '@material-ui/core'
// import { Menu, MenuItem, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

// import GroupIcon from '@material-ui/icons/Group'
// import PersonAddIcon from '@material-ui/icons/PersonAdd'
// import AddIcon from '@material-ui/icons/Add'
// import ClearIcon from '@material-ui/icons/Clear'

// import api from '../../services/api'

// function GroupsNavbar ({idLista}) {
//     const idL = idLista

//     const classes = useStyles()

//     const [anchorElement, setAnchorElement] = useState(null)
//     const handleOpenMenuAdd = (e) => setAnchorElement(e.target)
//     const handleCloseMenuAdd = () => setAnchorElement(null)

//     const [anchorElementGroup, setAnchorElementGroup] = useState(null)
//     const handleOpenMenuGroup = (e) => setAnchorElementGroup(e.target)
//     const handleCloseMenuGroup = () => setAnchorElementGroup(null)
    
//     const [dataP, setDataP] = React.useState([])
//     const [dataU, setDataU] = React.useState([])

//     useEffect(() =>{
//         async function retornaParticipantes () {
//             try {
//                 const result = await api.get('/part', { params: { idLista: idL } }, api.config)
//                 setDataP(result.data)
//             } catch (e) {
//                 console.log(e)
//             }          
//         }
//         retornaParticipantes()

//         async function retornaUsuarios () {
//             try {
//                 const result = await api.get('/usuario/outList', { params: { idList: idL } }, api.config)
//                 setDataU(result.data)
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//         retornaUsuarios()
//     })

//     return(
//         <div className={classes.root}>
//             <AppBar className={classes.nav}>
//                 <Toolbar>
//                     <Typography className={classes.title}>Participantes </Typography>
//                     <IconButton className={classes.iconAdd} onClick={handleOpenMenuAdd}>
//                         <PersonAddIcon />
//                     </IconButton>
//                     <Menu
//                         open={!!anchorElement}
//                         onClose={handleCloseMenuAdd}
//                         anchorEl={anchorElement}>
//                             {dataU.map(user => (
//                                 <MenuItem value={user.id}>
//                                     {user.nome}
//                                     <IconButton>
//                                         <AddIcon/>
//                                     </IconButton>
//                                 </MenuItem>
//                             ))}          
//                     </Menu>                   
//                     <IconButton className={classes.iconGroup} onClick={handleOpenMenuGroup}>
//                         <GroupIcon />
//                     </IconButton>
//                     <Menu
//                         open={!!anchorElementGroup}
//                         onClose={handleCloseMenuGroup}
//                         anchorEl={anchorElementGroup}>
//                             {dataP.map(part => (
//                                 <MenuItem>
//                                     {part.usuario.nome} 
//                                     <IconButton>
//                                         <ClearIcon/>
//                                     </IconButton>
//                                 </MenuItem>
//                             ))}              
//                     </Menu>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// /* Css */
// const useStyles = makeStyles(theme => ({
//     iconGroup: {
//         marginRight: theme.spacing(3),
//         position: "Absolute",
//         color: "inherit"
//       },
//     iconAdd: {
//         marginRight: theme.spacing(2),
//         marginLeft: "92%",
//         position: "Absolute",
//         color: "inherit"
//     },
//     nav: {
//         backgroundColor: "WhiteSmoke",
//         color: "Gray",
//         position: "relative"
//     },
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.paper
//     },
//     title: {
//         variant: "h6",
//         marginLeft: theme.spacing(8)        
//     }
//   }))

//   export default GroupsNavbar
