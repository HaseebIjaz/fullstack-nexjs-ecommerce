export const getTodos = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const createPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    return response.json();
  });
};
