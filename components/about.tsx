hutimport { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Cpu, Search, Server, Database } from "lucide-react"

export default function About() {
  const skills = [
    { name: "Penetration Testing", category: "Security" },
    { name: "Network Security", category: "Infrastructure" },
    { name: "IoT Security", category: "Specialization" },
    { name: "Vulnerability Assessment", category: "Analysis" },
    { name: "Python", category: "Programming" },
    { name: "Ethical Hacking", category: "Security" },
    { name: "Malware Analysis", category: "Security" },
    { name: "Security Automation", category: "Development" },
    { name: "OSINT", category: "Intelligence" },
    { name: "Docker", category: "Infrastructure" },
    { name: "AWS Security", category: "Cloud" },
    { name: "Incident Response", category: "Operations" },
  ]

  const experiences = [
    {
      title: "Senior Security Analyst",
      company: "CyberGuard Solutions",
      period: "2021 - Present",
      description:
        "Leading penetration testing and security assessments for enterprise clients. Developed automated security testing frameworks.",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Security Researcher",
      company: "IoT Security Labs",
      period: "2018 - 2021",
      description:
        "Conducted research on IoT vulnerabilities and developed security protocols. Published findings in leading security conferences.",
      icon: <Search className="h-10 w-10 text-primary" />,
    },
    {
      title: "Security Engineer",
      company: "TechDefend Inc.",
      period: "2016 - 2018",
      description:
        "Implemented security measures and performed vulnerability assessments. Developed security automation tools.",
      icon: <Lock className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            With a strong foundation in technology and problem-solving, I have explored various fields, from software
            development to AI-driven solutions. My academic journey, including graduating from{" "}
            <span className="transition-all duration-150 hover:italic hover:font-bold">
              MIT in 2020
            </span>
            , has shaped my analytical thinking and approach to innovation. Over the years, I&apos;ve worked on
            projects that blend creativity with logic, always striving to build impactful solutions while collaborating
            with like-minded individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Cpu className="mr-2 h-6 w-6" /> My Background
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a Master&apos;s degree in Computer Science specializing in Security, I&apos;ve dedicated my career to
                protecting systems and data from cyber threats.
              </p>
              <p>
                I&apos;ve worked on projects ranging from penetration testing and vulnerability assessments to incident
                response and security automation.
              </p>
              <p>
                My approach combines strong theoretical foundations with practical implementation skills, allowing me to
                take security projects from research to production.
              </p>
            </div>
            <div className="hidden">@Ethan_huntx98</div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Database className="mr-2 h-6 w-6" /> Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm py-1">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
          <Server className="mr-2 h-6 w-6" /> Work Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="pt-6">
                <div className="mb-4">{exp.icon}</div>
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
