import './profileCard.css'
const profileCard = ({name,age,profilePicture,bio}) => {
  return (
    < div className="profile-card">
      <img src={profilePicture} alt="user profile" className="profile-picture"/>
      <h2>{name}</h2>
       <p>{age}YRS</p> 
       <p>{bio}</p>
      </div>
 
  );
};

export default profileCard;
