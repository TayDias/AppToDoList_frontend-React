import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {       
        flexGrow: 1,
        width: '100%',
        fontFamily: "roboto",
        fontStyle: "normal"
    },

    navbar: {
        backgroundColor: "#27B4B4",
        position: "relative"
    },

    icon: {
        marginRight: theme.spacing(2),
        color: "inherit",
        fontSize: "large"
    },

    iconAcc: {
        marginRight: theme.spacing(2),
        marginLeft: "93%",
        position: "Absolute",
        color: "inherit",
        fontSize: "large"
    },

    title: {
        marginLeft: "42%",
        position: "Absolute",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF"
    },

    button: {
        background: "linear-gradient(0deg, #C2C3C3, #C2C3C3), #F2F1F1",
        color: "#FFFFFF",
        position: "relative",
        width: "180px",
        height: "40px",
        borderRadius: "5px",
        border: "none"
    },
    
    userText: {
        position: "relative",
        fontSize: "16px",
        textAlign: "center"
    }
  }))