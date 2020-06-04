import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center" ,
        width: "100%",
        maxHeight: "100%"
    },

    content: {
        display: "flex",
        padding: "40px",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "80%",
        height: "85%",
        marginTop: "1.3em",
        marginBottom: "2.0em",
        background: "#FFFFFF",
        fontFamily: "roboto"
    },

    title: {
        position: "relative",
        width: "100%",
        marginTop: "30px",
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
        fontSize: "20px",
        lineHeight: "40px",
        marginTop: "5px",
        marginBottom: "35px",
        textAlign: "center",
        color: "#575757"
    },

    input: {
        flex: 1,
        fontSize: "15px",
        marginBottom: "25px",
        padding: "15px 10px",
        width: "67%",
        minWidth: "346px",
        maxHeight: "12%",  
        minHeight: "50px",
        space: "15px",
        background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #F2F1F1",
        border: "2px solid #F2F1F1",
        boxSizing: "border-box",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
    },

    inputGroup: {
        display: "inline-grid",
        gridTemplateColumns: "repeat(2, 48%)",
        gridGap: "0px 20px"
    },

    button: {
        display: "block",
        fontSize: "18px",
        borderRadius: "5px",
        color: "#FFFFFF",
        fontWeight: "light",
        position: "relative",
        width: "30%",
        alignItems: "center",
        height: "56px",
        marginTop: "22px",
        marginLeft: "35%",
        marginRigth: "35%",
        background: "linear-gradient(0deg, #27B4B4, #27B4B4), #35F0F0",
        border: "2px solid #F2F1F1"
    },

    login: {
        display: "block",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#575757",
        textDecoration: "none",
        fontStyle: "normal",
        lineHeight: "30px",
        marginTop: "10px",
        textAlign: "center",
        textDecorationLine: "underline"
    }
}))