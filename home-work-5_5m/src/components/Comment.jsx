import { useSelector } from "react-redux"

const Comment = () => {
  const comments = useSelector(state => state.comments.comments)
  return (
    <div style={{border: "1px solid", padding: '5px', width: '20vw', margin: 'auto'}}>
      {comments && <p>{comments[0].body}</p>}
    </div>
  )
}

export default Comment