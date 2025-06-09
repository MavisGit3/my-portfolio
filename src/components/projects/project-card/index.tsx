import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  projectLink: string
  demoLink: string
}

export function ProjectCard({ image, title, description, projectLink, demoLink }: ProjectCardProps) {
  return (
    <div className="mx-3 bg-transparent shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative h-56">
        <Image
          className="h-full w-full object-cover rounded-md  hover:scale-105 transition-transform duration-300"
          src={image || "/placeholder.svg"}
          alt={`${title} image`}
          fill
         sizes="(max-width: 768px) 100vw, 33vw"  
        />
      </div>
      <div className="p-6 flex flex-col flex-grow ">
        <h2 className="text-xl font-medium text-white">{title}</h2>
        <p className="mt-2 text-white flex-grow">{description}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="bg-orange-100 text-gray-900 border border-gray-800 hover:bg-orange-200 transition duration-300"
          >
            <Link href={projectLink} target="_blank">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className=" bg-gray-900 text-white  border border-gray-800 hover: transition duration-300"
          >
            <Link href={demoLink} target="_blank">
              Live Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
