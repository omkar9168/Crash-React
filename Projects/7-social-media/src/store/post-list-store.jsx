import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: " hi friends i am going to mumbai for my vacation. Hope to enjoy a lot.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "drive"],
  },
  {
    id: "2",
    title: "Watching Movie",
    body: " hi friends i am going to watch Movie",
    reactions: 8,
    userId: "user-9",
    tags: ["movie", "PVR", "Chill"],
  },
];

export default PostListProvider;
