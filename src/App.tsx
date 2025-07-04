import ProjectCard from "./components/ui/projectCard"

const projects = [
  {
    title: "WoofWatch",
    description: "Real-time GPS tracking system for pets with mobile app integration",
    imageUrl: "resources/woofwatch.PNG",
    onClickUrl: "/"
  },
  {
    title: "Bouncing Window",
    description: "Fidget toy",
    imageUrl: "resources/gifs/bw.gif",
    onClickUrl: "https://github.com/colinjbakker/BouncingWindow"
  },
  {
    title: "Raytracer",
    description: "Raytracer",
    imageUrl: "resources/raytracer.png",
    onClickUrl: "/"
  },
  {
    title: "FPS",
    description: "First-person shooter game",
    imageUrl: "resources/gifs/fps.gif",
    onClickUrl: "https://github.com/colinjbakker/FPSGame2"
  },
  {
    title: "Pong",
    description: "Pong",
    imageUrl: "resources/gifs/pong.gif",
    onClickUrl: "https://github.com/colinjbakker/Pong"
  },
  {
    title: "Wordle",
    description: "Wordle clone",
    imageUrl: "resources/gifs/wordle.gif",
    onClickUrl: "/"
  }
]

function App() {
  return (
    <div className="w-screen justify-items-center">
      <div className="w-3/4 columns-md justify-items-center">
        {projects.map((item, index) => (
          <ProjectCard key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} onClickUrl={item.onClickUrl}/>
        ))}
        
      </div>
    </div>
  )
}

export default App
