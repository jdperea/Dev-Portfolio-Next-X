import Bar from "../components/Bar";
import { languages, studies, experiences, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educación</h5>
          <div className="">
          {studies.map((study, i) => (
            <>
            { i > 0 && (
              <hr />
            )}
            <div className={i>0 ? 'pb-2 pt-1 pb-1' : 'pb-2'} key={i} id={`${i}`}>
            <h5 className="text-xl font-bold text-red-400">
              {study.title}
            </h5>
            <p className="font-semibold">{study.institution}<br />(<span className="text-blue-400">{study.years}</span>)</p>
            </div>
            </>
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiencia</h5>
          {experiences.map((experience, i) => (
            <div className="pb-2">
              <h5 className="my-2 text-xl font-bold text-red-400">{experience.position}</h5>
              <p className="font-semibold">
                <>
                {experience.company}
                {experience.phone ?
                  <>
                  , <a href={`tel:+57${experience.phone}`} className="text-blue-500">
                    {experience.phone}
                  </a>
                  </>
                  : null
                }
                </>
              </p>
              <p className="my-3 hidden">{experience.description}</p>
              <p className="my-3">{experience.languages.join(', ')}</p>
              <p className="w-11/12 px-5 py-2 text-center text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-700 to-blue-900 hover:scale-100 focus:outline-none">
                {experience.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Lenguajes y Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Software y Herramientas</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
