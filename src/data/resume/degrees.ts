export interface Degree {
  school: string;
  /** Name the school had while the degree was earned, if it has changed. */
  schoolFormerName?: string;
  faculty?: string;
  facultyLink?: string;
  degree: string;
  link: string;
  startYear?: number;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Oles Honchar Dnipro National University',
    schoolFormerName: 'Dnipropetrovsk National University',
    faculty: 'Faculty of Physics, Electronics and Computer Systems',
    facultyLink:
      'https://www.dnu.dp.ua/en/department_of_physics_electronics_and_computer_sys',
    degree: 'Master’s degree, Physics and Electronics (microelectronics)',
    link: 'https://www.dnu.dp.ua',
    startYear: 2004,
    year: 2009,
  },
];

export default degrees;
