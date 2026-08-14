export type Page = 'home' | 'about' | 'services' | 'industries' | 'contact';

export const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Industries', page: 'industries' },
  { label: 'Contact', page: 'contact' },
];

export const images = {
  warehouse: 'https://images.pexels.com/photos/4483556/pexels-photo-4483556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  shelves: 'https://images.pexels.com/photos/4481528/pexels-photo-4481528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  loading: 'https://images.pexels.com/photos/4487484/pexels-photo-4487484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  truck: 'https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  highway: 'https://images.pexels.com/photos/11087830/pexels-photo-11087830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
