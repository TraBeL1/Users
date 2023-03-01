function Users (props){
    // firstName, lastName, age, phone, email, imageUrl, gender
    return (
        <div style={{border: "1px solid black", margin: "20px", textAlign: "center", }}>
            <div style={props.gender === 'Male' ? {color: "blue"} : {color: "pink"}}>
                <h1>{props.firstName + ' ' + props.lastName}</h1>
                <img src={props.imageUrl} alt={props.firstName + ' ' + props.lastName + ' photo'}/>
                <h2>{props.age}</h2>
                <p>
                    <ul>
                        <li>{props.phone}</li>
                        <li>{props.email}</li>
                    </ul>
                </p>
            </div>
        </div>

    )
}
export default Users;