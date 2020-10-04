import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import CommentIcon from '@material-ui/icons/Comment'
import { useHistory } from 'react-router'
import {Card3, Letter,CardPrincipal} from './styled'

const PostCard = (props) => {
  const history = useHistory();

  const handleGoToPostDetail = () => {
    history.push(`/post/${props.post.id}`);
  }

  const handleUpVote = () => {
    props.handleVotePost(props.post.id, 1)
  }

  const handleDownVote = () => {
    props.handleVotePost(props.post.id, -1)
  }

  return (
    <CardPrincipal>
      <CardContent>
        <Card3> 
      <AccountCircleIcon color="primary" fontSize="large"/> {props.post.username} 
      </Card3>
        <Letter variant="body2" color="textSecondary"  component="p">
         {props.post.text}
        </Letter>
      </CardContent>
      <CardActions >
        <IconButton onClick={handleUpVote}>
          <ArrowUpwardIcon color={props.post.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
     
        <IconButton onClick={handleDownVote}>
          <ArrowDownwardIcon color={props.post.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
         <span>{props.post.votesCount}</span>
        {!props.hideComment && (
          <Button
            color="primary"
            onClick={handleGoToPostDetail}
            startIcon={<CommentIcon />}
          >
            Comentar
          </Button>)}

      </CardActions>
    </CardPrincipal>
  )
}

export default PostCard;
