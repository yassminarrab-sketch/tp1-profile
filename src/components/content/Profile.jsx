import Detail from './Detail.jsx';
import General from './General.jsx';
import Other from './Other.jsx';
export default function profile(){
    let style_parent_h={display :'flex', gap:'20px'};
    let style_child1={flex:1};
    let style_child2={flex:2};
    let centerit={textAlign:'center'};
    let style_parent_v={display :'flex',flexDirection:'column', gap:'20px'};
    let style={backgroundColor:'aqua',padding:'20px'};
    return(
        

        <div style={style}>
            <h1 style={centerit}>student profile page design example</h1>
            <h6 style={centerit}> responsive student profile page design</h6>
            <div style={style_parent_h}>
                <div style={style_child1}><Detail/></div>
                <div style={{...style_child2,...style_parent_v}}>
                    <div style={style_child2}><General/></div>
                    <div style={style_child1}><Other/></div>
                </div>
            </div>
        </div>
    )
}


