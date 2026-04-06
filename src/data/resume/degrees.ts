export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Kyiv Polytechnic Institute',
    degree: 'M.S. Information Technologies and Computer Engineering',
    link: 'https://kpi.ua',
    year: 2014,
  },
  {
    school: 'Kyiv Polytechnic Institute',
    degree: 'B.S. Computer Science',
    link: 'https://kpi.ua',
    year: 2012,
  },
];

export default degrees;
