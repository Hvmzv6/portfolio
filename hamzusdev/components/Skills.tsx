import { Terminal } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "React",
      category: "Frontend",
      svg: (
        <svg className="w-8 h-8 text-cyan-500" viewBox="-11.5 -10.23 23 20.46">
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "NestJS",
      category: "Backend",
      svg: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      name: "Flutter",
      category: "Mobile",
      svg: (
        <svg className="w-8 h-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.3 2.3L5 11.6l4.7 4.7 9.3-9.3zM9.7 21.7l9.3-9.3h-4.7L5 17z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Language",
      svg: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h20v20H2V2zm12.3 11.6c0-1.2-.4-2-1.3-2.4-.6-.3-1.4-.4-2.5-.4h-1v5.7h1c1.2 0 2-.1 2.5-.4.8-.4 1.3-1.2 1.3-2.5zm1.5-5.2c0-.9-.3-1.6-.9-2-.6-.3-1.3-.4-2.4-.4h-2.3V10H10v-3h.5c.8 0 1.4 0 1.7.2.4.2.6.6.6 1.2 0 .6-.2.9-.6 1.1-.3.2-.9.2-1.7.2H10v2.8h.5c1.1 0 1.8-.1 2.4-.4.6-.3 1-.9 1-1.7z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Language",
      svg: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h20v20H2V2zm16.7 15.3c-.5-.8-1.2-1.2-2.1-1.2-.8 0-1.3.4-1.3 1 0 .6.4.9 1.4 1.3 1.8.7 3 1.5 3 3.5 0 2.1-1.6 3.4-4 3.4-2.3 0-3.7-1.1-4.4-2.6l1.8-1c.4.8.9 1.4 1.9 1.4 1 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.7-1.5-1.7-.7-2.7-1.6-2.7-3.2 0-1.8 1.4-3.1 3.7-3.1 1.9 0 3.2.9 3.8 2.2l-1.8 1.3z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Database",
      svg: (
        <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V10.125m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      svg: (
        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.7 5.2 6 9.1 6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.9-2.7-6.8-6-10zm0 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      category: "Frontend",
      svg: (
        <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm13.3 6.8H8.8l.2 2.2h7.1l-.6 6-3.5 1-3.5-1-.2-2.5h2.2l.1 1.2 1.4.4 1.4-.4.2-1.8H6.2L5.6 4.6h12.9l-.2 2.2z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      category: "Frontend",
      svg: (
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm13.1 7.2H9.2l-.2-2.2h7.5l-.2 2.2zm-4.1 4l-.1.9-1.9-.5-.1-1.1H4.6l.2 3.1 4.2 1.2 4.2-1.2.4-4.4H12z" />
        </svg>
      ),
    },
    {
      name: "CI/CD",
      category: "DevOps",
      svg: (
        <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      category: "DevOps",
      svg: (
        <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "Cloud Hosting",
      category: "DevOps",
      svg: (
        <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="space-y-12 py-16">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Technical Stack</h2>
        <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          System dependencies & primary technologies.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="border border-border bg-background p-6 flex flex-col items-center text-center gap-4 hover:border-accent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)] transition-all duration-300 group cursor-default"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.svg}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm text-foreground">{skill.name}</h3>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
