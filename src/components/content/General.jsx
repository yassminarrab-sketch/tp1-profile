export default function General(){
    let info={roll:'125',academic_year:'2020',gender:'male',religion:'groupe',blood:'B+'};
    return(
        <div style={{backgroundColor:'white',borderRadius:'20px',padding:'20px'}}>
            <h2>general information</h2>
        <table>
            <tr>
                <td>roll</td>
                <td>:</td>
                <td>{info.roll}</td>
            </tr>
            <tr>
                <td>academic year</td>
                <td>:</td>
                <td>{info.academic_year}</td>
            </tr>
            <tr>
                <td>gender</td>
                <td>:</td>
                <td>{info.gender}</td>
            </tr>
            <tr>
                <td>retdgion</td>
                <td>:</td>
                <td>{info.retdgion}</td>
            </tr>
            <tr>
                <td>blood</td>
                <td>:</td>
                <td>{info.blood}</td>
            </tr>
        </table>
        </div>

    );
};