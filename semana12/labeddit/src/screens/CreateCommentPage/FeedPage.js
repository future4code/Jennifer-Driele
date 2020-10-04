import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Base_Url } from '../../constants/urls'
import NewPostForm from '../CreateCommentPage/NewPostForm'
import PostCard from '../CreateCommentPage/PostCard'

import{FeedWrapper} from './styled'


const FeedPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

 
  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/");
    }
  }, [])

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    setIsLoading(true)
    axios.get(`${Base_Url}/labEddit/posts`, axiosConfig)
    .then((response) => {
      setPosts(response.data.posts);
      setIsLoading(false)
    })
    .catch((err)=>{
      //console.log(err)
    })
  }

  const handleVotePost =  (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    axios.put(`${Base_Url}/labEddit/posts/${postId}/vote`, body, axiosConfig)
    .then((response)=>{ 
    fetchPosts();
    })
    .catch ((err)=>{  
      alert("Não foi possível votar no post, tente novamente");
      //console.error(err);
    })
  }

  const handleCreatePost = (text, title) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      text: text,
      title: title,
    }

    
      setIsLoading(true)
       axios.post(`${Base_Url}/labEddit/posts`, body, axiosConfig)
       .then((response)=>{
         setPosts(response.data.posts) 
      fetchPosts();
    }) 
    .catch((err)=>{ 
      alert("Não foi possível criar o post");
      console.error(err)
    }) 
  }

  return (
      <FeedWrapper>
        <NewPostForm
       handleCreatePost={handleCreatePost}
         />
        <hr/>
        {isLoading &&  <Loading/>}
        {posts.map(post => {
         
          return (<PostCard key={post.id}
           handleVotePost={handleVotePost} post={post}/>)
           })}
      </FeedWrapper>
  )
}
export default FeedPage;

