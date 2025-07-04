import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "./card"
function ProjectCard({ title, description, imageUrl, onClickUrl }: {title: String, description: String, imageUrl: string, onClickUrl: string}) {
    const handleClick = () => {
        window.open(onClickUrl, '_blank');
    }
    
    return (
        <Card onClick={handleClick} className="w-full m-5 max-w-sm break-inside-avoid-column cursor-pointer">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardContent>
              <img src={imageUrl}></img>
            </CardContent>
          </CardHeader>
        </Card>
    )
}

export default ProjectCard;