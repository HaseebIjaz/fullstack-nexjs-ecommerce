import { groq } from "next-sanity";
import client from "@/sanity/client/sanity.client";

export type SanityProductType = {
  _id: string;
  price: string;
  sex: string;
  slug: string;
  title: string;
  categoery: string;
  image: { alt?: string; imgSrc: string };
};
export async function getAllProducts(): Promise<SanityProductType[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      price,
      sex,
      slug,
      title,
      categoery,
      image {alt, "imgSrc": asset->url}
    }`,
    undefined,
    {
      cache: "no-store",
    }
  );
}
//

export async function getFemaleProducts(): Promise<SanityProductType[]> {
  return client.fetch(
    groq`*[_type == "product" && sex == "female"]{
            _id,
            price,
            sex,
            slug,
            title,
            categoery,
            image {alt, "imgSrc": asset->url}
          }`
  );
}

export async function getMaleProducts(): Promise<SanityProductType[]> {
  return client.fetch(
    groq`*[_type == "product" && sex == "male"]{
              _id,
              price,
              sex,
              slug,
              title,
              categoery,
              image {alt, "imgSrc": asset->url}
            }`
  );
}

export async function getChildrenProducts(): Promise<SanityProductType[]> {
  return client.fetch(
    groq`*[_type == "product" && sex == "children"]{
                _id,
                price,
                sex,
                slug,
                title,
                categoery,
                image {alt, "imgSrc": asset->url}
              }`
  );
}

export async function getProductBySlug(
  productSlug: string
): Promise<SanityProductType[]> {
  return client.fetch(
    groq`*[_type == "product" && slug == $productSlug]{
                _id,
                price,
                sex,
                slug,
                title,
                categoery,
                image {alt, "imgSrc": asset->url}
              }`,
    { productSlug }
  );
}
