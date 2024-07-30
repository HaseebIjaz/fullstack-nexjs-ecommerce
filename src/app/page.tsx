"use client";
import { createPost, getTodos } from "@/api/todos";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/sanity/queries/sanity.query";
import { ProductType } from "@/sanity/types";

export default function Home() {
  useEffect(() => {
    (async () => {
      const profile: ProductType[] = await getAllProducts();
    })();
  }, []);

  const [count, setCount] = useState(-3);
  const [page, setPage] = useState(-3);
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery({
    enabled: count > 0, //Dont run this query until it retrns true
    queryKey: ["todos", count],
    queryFn: () => getTodos(count),
  });
  const {
    status: mutationStatus,
    error: mutaionError,
    mutate: addTodo,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts", newPost.id], newPost);
      //navigate to new posts
    },
  });
  //for infinite scroll pagination
  // const {} = useQuery({
  //   enabled: page > 0,
  //   keepPreviousData: true, //So that the current data doesnt get diappeared from the screen
  //   queryKey: ["posts", { page }],
  //   queryFn: () => getPaginatedDate(page),
  // });
  // if (status === "loading") {
  //   return <h1>Loading</h1>;
  // } else if (status === "error") {
  //   return <div>Error</div>;
  // }
  return (
    <main className="h-full">
      <button onClick={(e) => setCount((prev) => prev + 1)}>+</button>,
      <button onClick={(e) => {}}>ClickMutations</button>
    </main>
  );
}
