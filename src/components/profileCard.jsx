import './profileCard.css'
const ProfileCard = ({name,age,ProfilePicture,bio}) => {
  return (
    < div className="ProfileCard">
      <img src={ProfilePicture} alt="user profile" className="ProfilePicture"/>
      <h2>{name}</h2>
       <p>{age}YRS</p> 
       <p>{bio}</p>
      </div>
 
  );
};

export default ProfileCard;
