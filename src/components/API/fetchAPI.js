const key = "22578440-e1e5ecfa8eecbfc5a41a583d6";

export const searchImg = (input, page) => {
  const response = fetch(
    `https://pixabay.com/api/?q=${input}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};
