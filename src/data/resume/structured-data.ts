export default {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: 'Antoine Milochau',
  givenName: 'Antoine',
  familyName: 'Milochau',
  jobTitle: 'Software Architect',
  nationality: {
    '@type': 'Country',
    name: 'France',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Ecole Centrale de Nantes',
  },
  worksFor: {
    '@type': 'Corporation',
    name: 'SPVIE Technology',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amilochau',
  },
  hasOccupation: [{
    '@type': 'Role',
    roleName: 'Software Architect',
    startDate: '2020-05-04',
  }, {
    '@type': 'Role',
    roleName: 'Lead Developer',
    startDate: '2019-07-01',
    endDate: '2020-04-30',
  }],
  homeLocation: {
    '@type': 'Place',
    name: 'Paris, FR',
  },
  knowsLanguage: ['fr', 'en'],
}
