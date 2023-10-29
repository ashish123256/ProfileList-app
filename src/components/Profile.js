import "./Profile.css";

const Profile = ({userDetails}) => {
    const {imageUrl, name, role} = userDetails;

    return(
        <li className="profile-card-container">
            <img src={imageUrl} className="profile-pic" alt="avatar"/>
            <div>
                <h1 className="profile-name" >{name} </h1>
           <p className="profile-role">{role}</p>
            </div>
        </li>
    )
}


export default Profile;