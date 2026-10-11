import pro from './profilepic.jpeg';
export default function Detail(){
    let stg={nom: "salman balman",student_id:'12345',class:'dev102',section:'A'};
    let stylediv={textAlign:'center',backgroundColor:'white',margin:'20px',padding:'20px',borderRadius:'20px'};
    let styleinfo={textAlign:'left'};
    return(

        <div style={stylediv}>
            <img src={pro} alt="profile" style={{borderRadius:'500px',width:'200px',height:'auto'}}></img>
            <h3 style={{alignItems:'center'}}>{stg.nom}</h3>
            <div style={styleinfo}>
                <p>ID STUDENT:{stg.student_id}</p>
                <p>CLASS:{stg.class}</p>
                <p>SECTION:{stg.section}</p>
            </div>

        </div>
    );
}