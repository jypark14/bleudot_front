import React from 'react';
export default class Nav extends React.Component {
    render() {
        return (
            <nav style={{"position": "absolute", width: "100%", background: "#03BFED", height: "57px", left: "0px", top: "0px"}}>
            <div style= {{"position":"absolute","width":"4%","height":"100%","left":"22px","top":"11px","background":"url(bleudot.svg)"}}></div>
            <div style = {{"position": "absolute",
width: "80px",
height: "22px",
left: "113px",
top: "22px",

fontFamily: "Nunito",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "18px",
lineHeight: "25px",

color: "#E2E1E1",
}}>Discover</div>
            <div style={{"position":"absolute","width":"79px","height":"21px","left":"218px","top":"23px","fontFamily":"Comic Sans","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"25px","color":"#E2E1E1"}}>Create</div>
            <div style={{"position":"absolute","width":"125px","height":"21px","left":"324px","top":"23px","fontFamily":"Nunito","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"25px","color":"#E2E1E1"}}>My Calendar</div>
            <div style={{"position":"absolute","width":"36px","height":"35px","left":"90%","top":"16px","background":"url(user_white.svg)"}}></div>
            <div style={{"position":"absolute","width":"36px","height":"35px","left":"95%","top":"16px","background":"url(settings_White.svg)"}}></div>

            </nav>



        )
    }
}