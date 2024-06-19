import ProfileCard from './components/profileCard'
import './App.css'

const App=() =>{
  const cards=[{
    name : "Everlyn Muthoni",
    age: 22,
    ProfilePicture: "./src/assets/Everlyn.jpg",
    bio: "i am a software developer"
  },
  {
    name : "Grace Mumbi",
    age: 27,
    ProfilePicture: "./src/assets/Grace.jpg",
    bio: "i am a hair dresser"
  },{
    name : "kevin Mwangi",
    age: 17,
    ProfilePicture: "./src/assets/kevin.jpg",
    bio: "i am a nurse"
  }
    ]
 
  return (
    <div>
      <h1>Users profiles</h1>
      <div className='profiles'>
  
        {cards.map((card,index) =>(
          < ProfileCard
          key={ index}
          name={ card.name }
          age={ card.age }
          ProfilePicture={ card.ProfilePicture }
          bio={card.bio}
          />
        ))}
      </div>
   
    </div>
  )
}

export default App
