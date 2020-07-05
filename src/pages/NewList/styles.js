import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    content: {
        fontFamily: "roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        alignItems: "center"
    },

    hint: {
        display: "flex",
        position: "relative",
        width: "30%",       
        fontSize: "20px",    
        color: "#858585",
        alignItems: "center",

        marginTop: "3.6em",
        marginLeft: "16%",
    },

    addButton: {
        display: "flex",
        backgroundcolor: '#ADACAC',
        color: '#ffffff',
        fontSize: "16px",
        position: "relative",
        width: "250px",
        height: "50px",
        maxWidth: "50%",
        maxHeight: "10%",
        border: "none", 
        background: "linear-gradient(0deg, #ADACAC, #ADACAC), #F2F1F1",
        borderRadius: "5px",   

        marginTop: "4.8em",
        marginLeft: "18%",
        marginRigth: "25%",
        //visibility: "hidden",
    },

    panel: {
        marginLeft: "16%",
        marginRigth: "25%",
        marginTop: "0.8em",
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(8),
        width: "80%",
        height: "85%",
    },

    inputGroup: {       
        display: "flex",
        flexDirection: "line",
        alignItems: "center",
        position: "relative", 
        fontFamily: "roboto"  
    },

    inputListName: {
        flex: 5,
        fontSize: "15px",
        marginBottom: "25px",
        padding: "15px 10px",
        width: "58%",
        minWidth: "346px",
        maxHeight: "12%",  
        minHeight: "50px",
        space: "15px",
        background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #F2F1F1",
        border: "2px solid #F2F1F1",
        boxSizing: "border-box",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"
    },

    inputListType: {
        display: "block",
        flex: 3,
        marginBottom: "25px",
        padding: "15px 0px",
        width: "60px",
        minWidth: "26px",
        maxHeight: "12%",  
        minHeight: "36px",       
    },

    typeLabel: {
        display: "block",
        position: "relative",
        width: "10%",       
        fontSize: "18px",    
        color: "#858585",
        alignItems: "center",
        marginLeft: "25%",
    },

    typeSpan: {
        marginLeft: "-20px",
        //paddingTop: "10px",
    },

    registerButton: {
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
    }
}))