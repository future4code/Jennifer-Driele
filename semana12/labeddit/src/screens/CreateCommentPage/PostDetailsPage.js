import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { Base_Url } from '../../constants/urls'
import CommentListItem from './CommentListItem'
import PostCard from './PostCard'
import {Arrow,Post } from './styled'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { goBack}  from '../../routes/Coordinator';

const PostDetailsPage = (props) => {
  const [postDetails, setPostDetails] = useState(null)
  const [newComment, setNewComment] = useState("")
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      history.push('/login')
    } else if (!params.postId) {
      history.push('/feed')
    }
  }, [])

  useEffect(() => {
    fetchPostDetails();
  }, [])

  const fetchPostDetails = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }

    axios.get(`${Base_Url}/labEddit/posts/${params.postId}`, axiosConfig)
    .then((response) => {
      setPostDetails(response.data.post)
    }).catch((err)=>{
        console.log(err)
    })
  }

  const handleUpdateComment = (event) => {
    setNewComment(event.target.value);
  }

  const handleCreateComment =  () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      text: newComment
    }

    axios.post(`${Base_Url}/labEddit/posts/${params.postId}/comment`, body, axiosConfig)
    .then((response) =>{
        setNewComment(response.data);
        fetchPostDetails();
    })
    .catch((err)=>{ 
      alert("Não foi possível comentar, tente novamente");
      console.error(err);
    })
  }

  const handleCommentVote =  (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

     axios.put(`${Base_Url}/labEddit/posts/${params.postId}/comment/${commentId}/vote`, body, axiosConfig)
     .then((response)=> {
        fetchPostDetails(response.data);
     })
     .catch ((err)=>{ 
      alert("Não foi possível votar no comentário, tente novamente");
      //console.error(err)
    }) 
    

  }

  return (
    <div> 
      <Arrow  onClick={() => goBack(history)}color="primary">
    < ArrowBackIcon/>
       </Arrow>
    <Post>
      {postDetails !== null && <PostCard post={postDetails} hideComment/>}
      <TextField
        placeholder={"Seu comentário"}
        value={newComment}
        onChange={handleUpdateComment}
        variant={'outlined'}
        fullWidth
        required
        autoFocus
        margin={'normal'}
      />
    
      <Button
      onClick={handleCreateComment}
      color={'primary'}
      variant={'contained'}
      type={'submit'}
      fullWidth
      margin={'normal'}
      >Enviar Comentário</Button>
      <List dense>
        {postDetails && postDetails.comments.map((comment) => {
          return (
          <CommentListItem comment={comment} handleCommentVote={handleCommentVote} />
        )})}
      </List>
    </Post>
    </div>
  )
}
export default PostDetailsPage
