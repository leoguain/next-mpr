export type BreadcrumbProps = {
  //breadcrumbItems: Array<BreadcrumbItemProps>;
  url: string;
  oldSeparator: string;
  newSeparator: string;
};

export type BreadcrumbItemProps = {
  id: number;
  url: string;
  name: string;
  index?: number;
  isLast?: boolean;
};
