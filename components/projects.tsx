import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "CyberSec IoT Research",
      description:
        "Conducted in-depth research on cybersecurity threats targeting IoT devices, focusing on identifying vulnerabilities and strengthening network security.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DGl6Jj1x5VJbQYW9uziQrv9uyrQH9g.png",
      tags: ["IoT Security", "Vulnerability Analysis", "Network Security"],
      demoLink: "/research/iot-vulnerability",
      repoLink: "#",
    },
    {
      title: "Network Penetration Testing Framework",
      description: "Developed a comprehensive framework for identifying and exploiting network vulnerabilities.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fCH8MRCGZVwS1DjVMlDpUVIt7TYSWV.png",
      tags: ["Penetration Testing", "Network Security", "Security Analysis"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Smart Home Security Audit Tool",
      description: "Created an automated security assessment tool for smart home devices and networks.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1qyZwOdnIdZ6csjLHeGprLT62MVweB.png",
      tags: ["IoT", "Security Automation", "Risk Assessment"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Secure Communication Protocol",
      description: "Designed and implemented an encrypted communication protocol for IoT devices.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qosz8FfTIV8GvKo8xT1mLaFl98Iygr.png",
      tags: ["Encryption", "Protocol Design", "IoT Security"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            A selection of my cybersecurity projects and research work. Each project demonstrates different aspects of
            my expertise in penetration testing and security analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

