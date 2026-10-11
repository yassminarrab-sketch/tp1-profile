export default function Navigation(){
    let stylevertical={display:'flex',flexDirection:'column',gap:'20px',marginLeft:'20px'};
    return(
        <div style={stylevertical}>
            <a href='#'>acceuil</a>
            <a href='#Profile'>profile</a>
            <a href='#'>contact</a>

        </div>
        
    );
}