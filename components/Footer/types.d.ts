export type BottomBarProps = {
  items: BBItem[];
};
export type BBItem = {
  id: string;
  title: string;
  text: string;
  subtext: string;
  href: string;
  icon: React.ElementType;
  color: string;
};
