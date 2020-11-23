
import React from 'react'
import User from '../../entites/User'


const UserCardItem = (props) => {
    const genre = props.user.gender;
    const email = props.user.email;
    const dateN = props.user.date;
    const dateNew = (date) => {
        const newD = new Date(date);
        const yearD = newD.getFullYear();
        const monthD = newD.getMonth();
        const dayD = newD.getDay();

        return dayD + "-" + monthD + "-" + yearD;


    }
    const emailUpper = (mail) => {

        const slicedEmail = mail.slice(3, mail.indexOf("@") - 3);
        const slicedOutput = mail.replace(slicedEmail, "...");
        return slicedOutput;
    }
    if(genre=='male'){
    return (
        <div>

            <li className="collection-item avatar">
                <img src={props.user.picture} alt="" className="circle" />
                <span className="title">Name: {props.user.firstName} {props.user.lastName}</span>
                <p>     <i className="material-icons " >email</i> Email: {emailUpper(email)}<br />
                    Date Of Birth: {dateNew(dateN)}
                </p>
            </li>
        </div>
    )
}else{
    return(
        <div>

        <li className="collection-item avatar #ffebee red lighten-5">
            <img src={props.user.picture} alt="" className="circle" />
            <span className="title">Name: {props.user.firstName} {props.user.lastName}</span>
            <p>     <i className="material-icons " >email</i> Email: {emailUpper(email)}<br />
                Date Of Birth: {dateNew(dateN)}
            </p>
        </li>
    </div>
    )
}
}

export default UserCardItem;

