import DogFile from "./DogTile";
import './App.css';
function App() {
  return (
    <section className='puppy'>
      <DogFile description="Flowers 11" text="Flower 1" image="https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7"/>
      <DogFile  description="Flowers 22" text="Flower 1" image="https://th.bing.com/th/id/OIP.mVCdJL0DY_DV_aen4hBK0wHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7"/>
      <DogFile  description="Flowers 33" text="Flower 1" image="https://th.bing.com/th/id/OIP.9CogbbDTM9qJfB3cBCYphwHaE8?w=268&h=180&c=7&r=0&o=5&pid=1.7"/>
      <DogFile  description="Flowers 44" text="Flower 1" image="https://th.bing.com/th/id/OIP.E3UNwm389l_qdOdJ6zbhCAHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7"/>
      <DogFile>
        <p>This is a chidren Prop</p>
      </DogFile>
    </section>
  );
}

export default App;
 