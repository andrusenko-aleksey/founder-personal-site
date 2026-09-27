import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        {data.faculty && (
          <p className="school">
            {data.facultyLink ? (
              <a href={data.facultyLink}>{data.faculty}</a>
            ) : (
              data.faculty
            )}
          </p>
        )}
        <p className="school">
          <a href={data.link}>{data.school}</a>
          {data.schoolFormerName && ` (then ${data.schoolFormerName})`},{' '}
          {data.startYear && (
            <>
              <time dateTime={String(data.startYear)}>{data.startYear}</time>–
            </>
          )}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
