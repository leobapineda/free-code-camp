import Card from './componenets/Card';
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Card 
        name = 'Shawn Wang'
        city = 'Singapore'
        job = 'Software Engineer'
        company = 'Amazon'
        text = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
    </div>
  );
}

export default App;
