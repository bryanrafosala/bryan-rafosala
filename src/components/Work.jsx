/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/NC-NEWS.png',
    title: 'Full stack social news aggregation',
    tags: ['API', 'MVC', 'Front-end', 'Back-end', 'Development', 'React', 'PSQL'],
    projectLink: 'https://nc-news-front-end99.netlify.app/'
  },
  {
    imgSrc: '/images/prepmaster.png',
    title: 'Full stack meal planner website',
    tags: ['API', 'MVC', 'Front-end', 'Back-end','Development', 'NextJS', 'MongoDB'],
    projectLink: 'https://be-prep-master.vercel.app/'
  },
  {
    imgSrc: '/images/InProgress.jpg',   
    title: 'Bouldering app, coming soon...',
    tags: ['NextJS', 'COMING SOON...'],
    projectLink: ''
  }
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work