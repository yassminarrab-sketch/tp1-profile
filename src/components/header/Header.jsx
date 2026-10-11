import logo from "../../logo.svg";
export default function Header(){
    let styleheader={display:'flex',gap:'20px'};
    let aalignItems={alignItems:'center'};
    return(
        <div style={{...styleheader,...aalignItems}}>
            <img src={logo} alt="logo" style={{flex:1,width:"40px",height:'auto'}}></img>
            <h1 style={{flex:11,justifyContent:'center'}}>WELCOME</h1>
        </div>
    );
}