import profileCard from './components/profileCard'
import './App.css'

const App=() =>{
  const card=[{
    name : "Everlyn Muthoni",
    age: 22,
    profilePicture: "./src/assets/Everlyn.png",
    bio: "i am a software developer"
  },
  {
    name : "Grace Mumbi",
    age: 27,
    profilePicture: "./src/assets/Grace.png",
    bio: "i am a hair dresser"
  }
    ]
 
  return (
    <div>
      <h1>Users profiles</h1>
      <div className='profiles'>
        {card.map((card,index) =>(
          <profileCard
          key={index}
          name={name}
          age={age}
          profilePicture={profilePicture}
          bio={bio}
          />
        ))}
      </div>
   
    </div>
  )
}

export default App
