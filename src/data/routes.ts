export interface Route {
  label: string;
  path: string;
  /** Id of the home page section this route scrolls to. */
  sectionId?: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Oleksii Andrusenko',
    path: '/',
  },
  { label: 'About', path: '/#about', sectionId: 'about' },
  { label: 'Book', path: '/#book', sectionId: 'book' },
  { label: 'Experience', path: '/#experience', sectionId: 'experience' },
  { label: 'Skills', path: '/#skills', sectionId: 'skills' },
  { label: 'Projects', path: '/#projects', sectionId: 'projects' },
  { label: 'Writing', path: '/#writing', sectionId: 'writing' },
  { label: 'Contact', path: '/#contact', sectionId: 'contact' },
];

export const sectionRoutes = routes.filter((r) => r.sectionId);

export default routes;
