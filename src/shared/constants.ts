export type Page = 'home' | 'about' | 'services' | 'industries' | 'contact';

export const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Industries', page: 'industries' },
  { label: 'Contact', page: 'contact' },
];

export const images = {
  warehouse: '/images/Warehouse_staff_moving_goods_for…_202607191205 (1) 1.png',
  shelves: '/images/Forklift_carrying_goods_warehouse_2K_202607101553 1 (1).png',
  loading: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (1).png',
  truck: '/images/Three_trucks_parked_warehouse_su…_202607101545 1.png',
  highway: '/images/African_professional_overlooking…_2K_202607191200 1.png',
};