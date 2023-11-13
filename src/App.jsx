import './App.css'
import {useState} from 'react'
import {puppyList} from './data.js'

function App() {
	const [puppies, setPuppies] = useState(puppyList);
	const [featuredPupID, setFeaturedPupID] = useState(null);

	const featuredPup = puppies.find((pup) => pup.id === featuredPupID);

	return (
		<div>
			{featuredPupID && (
				<>
					<h2>{featuredPup.name}</h2>
					<ul>
						<li>Age: {featuredPup.age}</li>
						<li>Email: {featuredPup.email}</li>
					</ul>
				</>
			)}
			{
				puppies.map((puppy) => {
					return <p key={puppy.id} onClick={()=>{setFeaturedPupID(puppy.id)}}>{puppy.name}</p>
				})
			}
		</div>
	)
}

export default App
