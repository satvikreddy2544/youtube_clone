import React, { useState } from "react";

const commentsList = [
  {
    name: "sathvik",
    comment: "hello world",
    replies: [
      {
        name: "ravi",
        comment: "good hello world",
      },
      {
        name: "nithin",
        comment: "not good world",
      },
    ],
  },
  {
    name: "sai",
    comment: "hello world",
    replies: [
      {
        name: "ravi",
        comment: "good hello world",
        replies: [
            {
                name: "nithin",
                comment: "not good world",
            },
            {
                name: "nithin",
                comment: "not good world",
            }
        ],
      },
      {
        name: "nithin",
        comment: "not good world",
        replies: [
            {
                name: "nithin",
                comment: "not good world",
                replies:[
                    {
                        name: "nithin",
                        comment: "not good world",
                    },
                    {
                        name: "nithin",
                        comment: "not good world",
                    }
                ]
            },
            {
                name: "nithin",
                comment: "not good world",
            }
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className="bg-gray-50 shadow-md my-2 ">
      <p className="font-semibold">{name}:</p>
      <p>{comment}</p>
    </div>
  );
};

const DisplayCommentList = ({ commentList }) => {
  console.log(commentList);
  return commentList.map((comment, index) => (
    <div className="pl-4">
      <Comment data={comment} />
      <div className="pl-4 border border-l-black">
        {comment.replies && comment.replies.length !== 0 && (
          <DisplayCommentList commentList={comment.replies} />
        )}
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
const [isShowComments, setIsShowComments] = useState(false);
  return (
    <div>
      <div className="m-y-2 cursor-pointer" onClick={()=>setIsShowComments(!isShowComments)}> {commentsList.length} Comments :</div>
     { isShowComments && <DisplayCommentList commentList={commentsList} /> }
    </div>
  );
};

export default CommentsContainer;
