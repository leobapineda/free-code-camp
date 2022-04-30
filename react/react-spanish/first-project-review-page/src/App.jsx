import { Testimonio } from "./componentes/Testimonio"
import './App.css'

function App() {
  return (
    <div className="App" >
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
        img = 'shawn'
        name = 'Shawn Wang'
        country = 'Singapore'
        job = 'Software Engineer'
        company = 'Amazon'
        testimonyBefore = 'It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.'
        testimonyBold = ' freeCodeCamp changed my life'
        testimonyAfter = '.'
        testimony = " freeCodeCamp changed my life." 
        />

        <Testimonio
          img = 'sarah'
          name = 'Sarah Chima'
          country = 'Nigeria'
          job = 'Software Engineer'
          company = 'ChatDesk'
          testimony = " "
          testimonyBefore = ''
          testimonyBold = 'freeCodeCamp was the gateway to my career'
          testimonyAfter = ' as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
           />

        <Testimonio
          img = 'emma'
          name = 'Emma Bostian'
          country = 'Sweden'
          job = 'Software Engineer'
          company = 'Spotify'
          testimony = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          testimonyBefore = 'I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp is course was the one which stuck. Studying JavaScript as well as data structures and algorithms on '
          testimonyBold = 'freeCodeCamp gave me the skills '
          testimonyAfter = 'and confidence I needed to land my dream job as a software engineer at Spotify.' />
      </div>
    </div>
  )
}

export default App

