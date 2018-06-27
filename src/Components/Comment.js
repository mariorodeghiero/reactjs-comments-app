import React from "react";

const Comment = props => {
  return (
    <div className="card">
      <h6 className="comment-user">{props.comment.user.name} :</h6>
      <p className="card-body"> {props.comment.comment} </p>
      {console.log(props.comment)}
    </div>
  );
};

export default Comment;
