import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FolderGit2,
  GitBranch,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react"

const stacks = [
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Globe },
  { name: "Angular", icon: Globe },
  { name: "Vite", icon: Rocket },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Bun", icon: Rocket },
  { name: "Fastify", icon: Workflow },
  { name: "Python", icon: Terminal },
  { name: "FastAPI", icon: Workflow },
  { name: "PHP", icon: Code2 },
  { name: "Laravel", icon: Globe },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Clean Architecture", icon: Layers3 },
  { name: "Shadcn UI", icon: Sparkles },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Server },
  { name: "IA Generativa", icon: Cpu },
]

const strengths = [
  {
    title: "Arquitetura de software",
    description: "Estrutura clara, manutenção mais simples e evolução sem quebrar o sistema.",
    icon: Layers3,
  },
  {
    title: "Desenvolvimento full stack",
    description: "Do front-end ao back-end, entregando soluções completas e funcionais.",
    icon: Code2,
  },
  {
    title: "Automação e produtividade",
    description: "Integro processos e APIs para reduzir esforço manual e acelerar entregas.",
    icon: Workflow,
  },
  {
    title: "Performance e qualidade",
    description: "Foco em software escalável, bem testado e pensado para uso real.",
    icon: Rocket,
  },
]

const services = [
  "Desenvolvimento de aplicações web modernas",
  "Arquitetura de sistemas e APIs",
  "Refatoração e evolução de código legado",
  "Soluções com React, Node e Python",
  "Automação de processos e integrações",
  "Consultoria técnica e boas práticas de engenharia",
]

const projects = [
  {
    title: "WhatsApp Chatbot Integrado",
    description:
      "Automação inteligente para atendimento e interação em tempo real, com foco em produtividade e experiência do cliente.",
    tags: ["Python", "WhatsApp API", "Automação"],
    link: "https://github.com/aldmiropassagem/chatbot-whatsApp",
  },
  {
    title: "Clean Architecture Hands-on",
    description:
      "Implementação prática de arquitetura limpa para manter código sustentável, organizado e pronto para evoluir.",
    tags: ["TypeScript", "Clean Architecture", "Estrutura"],
    link: "https://github.com/aldmiropassagem/clean-archtecture-handson",
  },
  {
    title: "FastAPI Hands-on",
    description:
      "Exploração de desenvolvimento backend com APIs rápidas, bem documentadas e preparadas para produção.",
    tags: ["Python", "FastAPI", "REST APIs"],
    link: "https://github.com/aldmiropassagem/fastAPI-hands-on",
  },
]

export default function App() {
  const isEnglish = !window.location.pathname.startsWith("/pt")
  const copy = isEnglish
    ? {
      navAbout: "About",
      navServices: "Services",
      navProjects: "Projects",
      navContact: "Contact",
      availability: "Available for new projects and collaborations",
      intro: "I build digital solutions focused on architecture, technical quality, and meaningful business impact.",
      projectsCta: "View projects",
      contactCta: "Get in touch",
      about: "About",
      profile: "Professional profile",
      services: "Services",
      offer: "What I offer",
      stackFrontend: "Modern, responsive interfaces focused on usability and clarity.",
      stackData: "Data modeling and integration for real-world business environments.",
      stackBackend: "APIs, integrations, and robust services built to scale.",
      stackAi: "Intelligent applications and automation that improve productivity and efficiency.",
      technologies: "Technologies I work with",
      projects: "Projects",
      openProject: "Open project",
      contact: "Contact",
      contactTitle: "Let’s build the next digital solution together.",
      contactDescription: "I can support web development, software architecture, automation, and digital transformation projects.",
      footer: "Systems Analyst · Software Engineering · Solution Development",
    }
    : {
      navAbout: "Sobre",
      navServices: "Serviços",
      navProjects: "Projetos",
      navContact: "Contato",
      availability: "Disponível para novos projetos e colaborações",
      intro: "Desenvolvo soluções digitais com foco em arquitetura, qualidade técnica e impacto real para o negócio.",
      projectsCta: "Ver projetos",
      contactCta: "Entrar em contacto",
      about: "Sobre",
      profile: "Perfil profissional",
      services: "Serviços",
      offer: "O que ofereço",
      stackFrontend: "Interfaces modernas, responsivas e com foco em experiência e clareza.",
      stackData: "Modelagem e integração de dados em ambientes reais de negócio.",
      stackBackend: "APIs, integrações e serviços robustos com foco em escalabilidade.",
      stackAi: "Aplicações inteligentes e automações que elevam produtividade e eficiência.",
      technologies: "Tecnologias que domino",
      projects: "Projetos",
      openProject: "Abrir projeto",
      contact: "Contato",
      contactTitle: "Vamos criar a próxima solução digital?",
      contactDescription: "Posso apoiar projetos em desenvolvimento web, arquitetura de software, automação e transformação digital.",
      footer: "Analista de Sistemas · Engenharia de Software · Desenvolvimento de Soluções",
    }

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt"
  }, [isEnglish])

  const localizedStrengths = isEnglish
    ? [
      { title: "Software architecture", description: "Clear structure, simpler maintenance, and room to evolve without breaking the system.", icon: Layers3 },
      { title: "Full-stack development", description: "From frontend to backend, delivering complete and functional solutions.", icon: Code2 },
      { title: "Automation and productivity", description: "I connect processes and APIs to reduce manual work and accelerate delivery.", icon: Workflow },
      { title: "Performance and quality", description: "Scalable, well-tested software designed for real-world use.", icon: Rocket },
    ]
    : strengths
  const localizedServices = isEnglish
    ? [
      "Modern web application development",
      "System and API architecture",
      "Legacy code refactoring and modernization",
      "Solutions with React, Node.js, and Python",
      "Process automation and integrations",
      "Technical consulting and engineering best practices",
    ]
    : services
  const localizedProjects = isEnglish
    ? [
      {
        title: "Integrated WhatsApp Chatbot",
        description: "Intelligent automation for real-time support and engagement, focused on productivity and customer experience.",
        tags: ["Python", "WhatsApp API", "Automation"],
        link: "https://github.com/aldmiropassagem/chatbot-whatsApp",
      },
      {
        title: "Clean Architecture Hands-on",
        description: "A practical implementation of clean architecture to keep code maintainable, organized, and ready to evolve.",
        tags: ["TypeScript", "Clean Architecture", "Structure"],
        link: "https://github.com/aldmiropassagem/clean-archtecture-handson",
      },
      {
        title: "FastAPI Hands-on",
        description: "An exploration of backend development with fast, well-documented APIs built for production.",
        tags: ["Python", "FastAPI", "REST APIs"],
        link: "https://github.com/aldmiropassagem/fastAPI-hands-on",
      },
    ]
    : projects

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-400/30">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="text-cyan-400">{'<'}</span>
            <span>Aldmiro Passagem</span>
            <span className="text-cyan-400">{'/>'}</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">{copy.navAbout}</a>
            <a href="#services" className="transition hover:text-white">{copy.navServices}</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#projects" className="transition hover:text-white">{copy.navProjects}</a>
            <a href="#contact" className="transition hover:text-white">{copy.navContact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <label className="relative">
              <span className="sr-only">Select language</span>
              <select
                value={isEnglish ? "en" : "pt"}
                onChange={(event) => {
                  const path = event.target.value === "en" ? "/" : "/pt"
                  window.location.assign(`${path}${window.location.hash}`)
                }}
                className="h-9 appearance-none rounded-md border border-white/15 bg-slate-900 px-3 pr-8 text-sm text-slate-100 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <option value="en">🇬🇧 EN</option>
                <option value="pt">🇵🇹 PT</option>
              </select>
              <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">⌄</span>
            </label>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:aldmiropassagem@outlook.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/aldmiropassagem" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" /></svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/aldmiropassagem" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 432"><path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z" /></svg>              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pt-16">
        <section className="grid items-center gap-10 pb-16 pt-8 md:grid-cols-[1.2fr_0.8fr] md:pt-12">
          <div>
            <Badge className="mb-6 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {copy.availability}
            </Badge>

            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Aldmiro Passagem
            </h1>

            <p className="mt-4 text-xl font-medium text-cyan-300 md:text-2xl">
              System Analyst · Software Engineer
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {copy.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-cyan-400 px-7 text-slate-950 hover:bg-cyan-300" asChild>
                <a href="#projects">
                  {copy.projectsCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
                <a href="#contact">{copy.contactCta}</a>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex h-[440px] w-[440px] items-center justify-center">
              <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-violet-500/20 blur-3xl" />

              <div className="absolute left-2 top-10 h-16 w-16 rounded-full border border-cyan-400/30 bg-cyan-400/5" />
              <div className="absolute right-8 top-16 h-20 w-20 rounded-full border border-violet-400/25 bg-violet-400/5" />
              <div className="absolute bottom-8 left-10 h-14 w-14 rounded-full border border-cyan-300/20 bg-cyan-300/5" />
              <div className="absolute right-3 bottom-12 h-18 w-18 rounded-full border border-white/10 bg-white/5" />

              <div className="relative h-[360px] w-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_100px_rgba(14,165,233,0.18)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-500/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" />
                <img
                  src="https://avatars.githubusercontent.com/u/40764201?v=4"
                  alt="Aldmiro Passagem"
                  className="h-full w-full object-cover opacity-95 contrast-110 saturate-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">{copy.about}</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">{copy.profile}</h2>
              <p className="mt-4 text-slate-300">
                {isEnglish
                  ? "I am a Systems Analyst with a postgraduate degree in Software Engineering. My approach combines technical rigor, architecture, and the ability to turn ideas into useful, reliable solutions that are ready to grow with the business."
                  : "Sou Analista de Sistemas com pós-graduação em Engenharia de Software. A minha forma de trabalhar combina rigor técnico, arquitetura e capacidade de transformar ideias em soluções úteis, estáveis e prontas para crescer com o negócio."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {localizedStrengths.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="border-white/10 bg-slate-900/70 shadow-lg shadow-slate-950/30">
                  <CardHeader>
                    <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-2 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-white">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-7 text-slate-300">{description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">{copy.services}</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-8">
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-white">{copy.offer}</h3>
              <p className="mt-4 text-slate-300">
                {isEnglish
                  ? "I help businesses and teams turn ideas into digital solutions with technical clarity, a focus on outcomes, and high quality standards. My work goes beyond code: I connect technology, process, and business."
                  : "Ajudo empresas e projetos a transformar ideias em soluções digitais com clareza técnica, foco em resultados e alto padrão de qualidade. A minha atuação vai além do código: conecto tecnologia, processo e negócio."}
              </p>
            </div>

            <div className="space-y-4">
              {localizedServices.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <p className="text-slate-200">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="py-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">Stack</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-cyan-400/20 bg-slate-900/80">
              <CardHeader>
                <Code2 className="mb-3 h-8 w-8 text-cyan-300" />
                <CardTitle className="text-xl text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">{copy.stackFrontend}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-cyan-400/20 bg-slate-900/80">
              <CardHeader>
                <Database className="mb-3 h-8 w-8 text-cyan-300" />
                <CardTitle className="text-xl text-white">{isEnglish ? "Data" : "Dados"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">{copy.stackData}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-cyan-400/20 bg-slate-900/80">
              <CardHeader>
                <Terminal className="mb-3 h-8 w-8 text-cyan-300" />
                <CardTitle className="text-xl text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  {copy.stackBackend}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-cyan-400/20 bg-slate-900/80">
              <CardHeader>
                <Cpu className="mb-3 h-8 w-8 text-cyan-300" />
                <CardTitle className="text-xl text-white">{isEnglish ? "AI & Automation" : "IA & Automação"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  {copy.stackAi}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-6 flex items-center gap-3 text-white">
              <Globe className="h-5 w-5 text-cyan-300" />
              <h3 className="text-2xl font-bold">{copy.technologies}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {stacks.map(({ name, icon: Icon }) => (
                <Badge key={name} variant="secondary" className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <Icon className="h-4 w-4 text-cyan-300" />
                  {name === "IA Generativa" && isEnglish ? "Generative AI" : name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">{copy.projects}</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {localizedProjects.map((project) => (
              <Card key={project.title} className="border-white/10 bg-slate-900/80 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-300">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${copy.openProject} ${project.title}`}>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <CardDescription className="text-base leading-7 text-slate-300">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-slate-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 text-center md:p-12">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300">
              <Mail className="h-5 w-5" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{copy.contact}</p>
            <h3 className="mt-4 text-3xl font-bold text-white md:text-5xl">{copy.contactTitle}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              {copy.contactDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-full bg-cyan-400 px-7 text-slate-950 hover:bg-cyan-300" asChild>
                <a href="mailto:aldmiropassagem@outlook.com">
                  <Mail />
                  aldmiropassagem@outlook.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
                <a href="https://linkedin.com/in/aldmiropassagem" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 432"><path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z" /></svg>
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
                <a href="https://github.com/aldmiropassagem" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" /></svg>
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Aldmiro Passagem</p>
          <p>{copy.footer}</p>
        </div>
      </footer>
    </div>
  )
}

