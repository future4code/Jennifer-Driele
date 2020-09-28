import React from 'react';
import { ListItemSecondaryAction } from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton';


const CandidatesItem =(props) =>{

  const approvedCandidates =()=>{
    props.decideCandidate(!true)
}
  const rejectCandidates =()=>{
    props.decideCandidate(false)
}

return (
    <ListItem>
    <ListItemText/>
    <ListItemSecondaryAction >
        <IconButton onClick={approvedCandidates} >
        <ThumbUpIcon/>
        </IconButton>
        <IconButton  onClick={rejectCandidates}>
        <ThumbDownIcon/>
        </IconButton >
    </ListItemSecondaryAction>
    </ListItem>
  );
}
export default CandidatesItem