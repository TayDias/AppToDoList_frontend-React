import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({   
    content: {
      fontFamily: "roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      alignItems: "center"
    }, 

    welcome: {
      display: "flex",
      position: "relative",
      width: "30%",
      fontSize: "20px",
      color: "#858585",
      alignItems: "center",

      marginTop: "3.6em",
      marginLeft: "17%",
    },

    newListButton: {
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
      marginRigth: "25%"
    },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      marginTop: "0.8em"
    },

    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      maxWidth: "360px",

      //marginLeft: '0.8em'
    },

    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },

    cardContent: {
      flexGrow: 1,
      alignItems: "center"
    },

    cardTitle: {
      fontsize: "24px",
      lineheight: "28px",
      textalign: "center",
      color: "#575757"
    },

    cardSubTitle: {
      fontsize: "20px",
      lineheight: "23px",
      textalign: "center",
      color: "#C2C3C3"
    },

    openButton: {

    }
  }));