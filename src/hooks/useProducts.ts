export type ProductInfo = {
  imgSrc: string;
  title: string;
  catagoery: string;
  delivery: string;
  price: number;
};
export const useProducts = () => {
  const getProductInfo: (id: string) => ProductInfo = (id: string) => {
    return {
      imgSrc:
        "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
      title: "Joggers",
      catagoery: "Joggers",
      delivery: "2 Days",
      price: 123,
    };
  };
  return { getProductInfo };
};
