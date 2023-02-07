import { useBreadCrumbItem } from "../BreadCrumbItem/hooks/useBreadCrumbItem";

type ItemProps = {
  id: number;
  url: string;
  title: string;
};

function GetUrlTitle(url: string) {
  console.log(url);

  const breadCrumbItems = useBreadCrumbItem();

  let x = breadCrumbItems.breadCrumbItem.filter((item) => {
    return item.url === url;
  });

  return x;
}

export default GetUrlTitle;
