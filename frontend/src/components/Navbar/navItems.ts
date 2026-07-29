export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'products', label: 'Products', href: '#' },
  { id: 'about', label: 'About', href: '#' },
  { id: 'contact', label: 'Contact', href: '#' },
];
