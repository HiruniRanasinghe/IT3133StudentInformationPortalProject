export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                <img className="profile" src={require('../assests/img/1.png')} alt="profile picture" />
                </td>
                <td>ID {props.studentId}</td>
            </tr>
        </table>
        </>
    );
}