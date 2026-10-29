// Every external URL used on the original jumpshotzsi.com, kept in one place.
export const LINKS = {
  bookCourt: 'https://www.catchcorner.com/facility-page/embedded/rental/1432',
  shootinSchool: 'https://shootinschool.com/',
  bwcSports: 'https://bwcsports.com',
  stingrays: 'https://stingraysaau.com/',
  siAlumniLeague: 'https://sialumleague.com',
  maffeoFoundation: 'https://maffeofoundation.org/',
  islandAutoInventory: 'https://www.islandautogroup.com/new-inventory/index.htm',
  futureAthletesSingle: 'https://app.moonclerk.com/pay/79012neyghwq',
  futureAthletesMonthly: 'https://app.moonclerk.com/pay/7egyhlrh8t53',
  mapEmbed:
    'https://maps.google.com/maps?q=120%20Androvette%20Street%2C%20Staten%20Island%2C%20NY&t=m&z=15&output=embed&iwloc=near',
  mapEmbedFutureAthletes:
    'https://maps.google.com/maps?q=Jump%20Shotz%20%28120%20Androvette%20Street%29&t=m&z=10&output=embed&iwloc=near',
};

export const CONTACT = {
  street: '120 Androvette Street',
  cityLine: 'Staten Island, NY 10309',
  phoneDisplay: '(347) 212-0412',
  phoneHref: 'tel:3472120412',
  email: 'jumpshotzsi1@gmail.com',
};

export const MAIN_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us/' },
  { label: 'Affiliates', to: '/affiliates/' },
  { label: 'Sponsors', to: '/sponsors/' },
  { label: 'Contact', to: '/contact/' },
  { label: 'Book Online', href: LINKS.bookCourt },
];

export const FOOTER_NAV = [
  { label: 'About Us', to: '/about-us/' },
  { label: 'Affiliates', to: '/affiliates/' },
  { label: 'Sponsors', to: '/sponsors/' },
  { label: 'Contact', to: '/contact/' },
  { label: 'FAQ', to: '/faq/' },
];

export const MISSION =
  'The mission of Jumpshotz is to provide players of all ages the optimal basketball experience. Our staff is committed and will strive to meet the needs of all players, teams, coaches, organizations, and parents that visit our facility. Jumpshotz will be dedicated to create and maintain a sense of community that will maximize players’ passion and potential.';

export const img = (name) => `/assets/images/${name}`;
