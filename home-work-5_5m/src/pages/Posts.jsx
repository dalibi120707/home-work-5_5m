import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "../store/postsReducer";
import Comment from "../components/Comment";

const Posts = () => {
  const [selectedPostId, setSelectedPostId] = useState(0);
  const [activeComment, setActiveComment] = useState(false);
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleGetCommentsClick = async (id) => {
    try {
      await dispatch(fetchComments(id));
      setSelectedPostId(id);
      setActiveComment(prev => !prev);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Posts</h1>
      <ul>
        {posts ? posts.map(post => (
          <li
            key={post.id}
            onClick={() => handleGetCommentsClick(post.id)}
            style={{ marginBottom: '10px', cursor: 'pointer' }}
          >
            <h3>{post.title}</h3>
            {activeComment && post.id === selectedPostId && <Comment />}
          </li>
        )) : <h1>Loading</h1>}
      </ul>
    </div>
  );
}

export default Posts;
