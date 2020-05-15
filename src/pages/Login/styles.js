import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"        
    },

    panel: {
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "464px",
        height: "464px",
        marginTop: "3.6em",
        background: "#FFFFFF",
        fontFamily: "roboto"
    },

    title: {
        position: "relative",
        width: "100%",
        marginTop: "40px",
        marginBottom: "10px",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "30px",
        textAlign: "center",
        color: "#27B4B4"
    },

    subTitle: {
        position: "relative",
        width: "100%",
        fontStyle: "normal",
        fontWeight: "light",
        fontSize: "22px",
        lineHeight: "40px",
        marginTop: "5px",
        marginBottom: "35px",
        textAlign: "center",
        color: "#575757"
    },

    credentials: {
        flex: 1,
        marginBottom: "15px",
        padding: "20px 10px",
        fontSize: "15px",
        width: "70%",
        maxHeight: "12%",
        background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #F2F1F1",
        border: "2px solid #F2F1F1",
        boxSizing: "border-box",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
    },

    loginButton: {
        fontSize: "18px",
        borderRadius: "5px",
        color: "#FFFFFF",
        fontWeight: "light",
        position: "relative",
        width: "71%",
        height: "62px",
        marginTop: "10px",
        background: "linear-gradient(0deg, #27B4B4, #27B4B4), #35F0F0",
        border: "2px solid #F2F1F1",

    },

    newAccount: {
        fontSize: "17px",
        fontWeight: "bold",
        color: "#575757",
        textDecoration: "none",
        fontStyle: "normal",
        lineHeight: "30px",
        textAlign: "center",
        textDecorationLine: "underline",      
    },

    errorMessage: {
        color: "#ff3333",
        marginTop: "-30px",
        marginBottom: "5px",
        //border: "1px solid #ff3333",
        textDecorationLine: "underline",
        padding: "5px",
        width: "80%",
        textAlign: "center",
        fontSize: "14px"
    }
}))