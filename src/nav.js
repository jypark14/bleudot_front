import React from 'react';
export default class Nav extends React.Component {
    render() {
        return (
            <nav style={{"position": "absolute", width: "1440px", height: "57px", left: "0px", top: "0px"}}>
            <div style= {{"position":"absolute", "height":"40%", "left":"2.22%", "right":"86.67%", "bottom":"4.75%", "top":"44%","background":"url(bleudot_new.svg)", "borderRadius":"10px"}}></div>
            <div style = {{"position": "absolute",
width: "80px",
height: "22px",
left: "200px",
top: "25px",

fontFamily: "Nunito",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "18px",
lineHeight: "25px",

color: "#646464",
}}>Discover</div>
            <div style={{"position":"absolute","width":"79px","height":"21px","left":"284px","top":"25px","fontFamily":"Nunito","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"25px","color":"#646464"}}>Create</div>
            <div style={{"position":"absolute","width":"125px","height":"21px","left":"360px","top":"25px","fontFamily":"Nunito","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"25px","color":"#646464"}}>My Calendar</div>
            <div style={{"position":"absolute","width":"36px","height":"35px","left":"90%","top":"13px","background":"url(user_white.png)", "color":"blue"}}></div>
            <div style={{"position":"absolute","width":"36px","height":"35px","left":"95%","top":"13px","background":"url(settings_white.svg)"}}></div>

            </nav>



        )
    }
}