import React from 'react'
import User from '../../entites/User';


const GridView = (props) => {
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
    
    if(genre=="male"){
    
    
    return (
      
            <div className="col s4 ">
                <div className="card">
                    <div className="card-image">
                        <img src={props.user.picture} />
              <span className="card-title"> {props.user.firstName} {props.user.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p> {emailUpper(email)}</p>
                        <p> {dateNew(dateN)}</p>
                    </div>
                  
                </div>
            </div>
        
    )}
    else{
        return (
        <div className="col s4 ">
    <div className="card">
        <div className="card-image">
            <img src={props.user.picture} />
  <span className="card-title"> {props.user.firstName} {props.user.lastName}</span>
        </div>
        <div className="card-content #ffebee red lighten-5">
            <p> {emailUpper(email)}</p>
            <p> {dateNew(dateN)}</p>
        </div>
      
    </div>
</div>
)}
}
export default GridView;