import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom'
import { Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';

import { Box } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Posts() {
 const[Posts,setPosts]=useState([])
 const[pos,setPos]=useState()
 const parms=useParams()
 const navigate=useNavigate()


 console.log("dsdddd",parms)
 const user = parms.id

//  console.log(Posts)

 useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
    .then((res)=>res.json())
    .then((res)=>{
        setPosts(res)
      
    })
},[])



const view_comments =(id) =>{
navigate(`/User/${id}/Posts/Comments`)  
}


console.log(Posts)

  return (
    <div>

{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{border: 1,background:"lightyellow"}}>UserId </TableCell>
            <TableCell sx={{border: 1,background:"lightyellow"}} align="center">Id</TableCell>
            <TableCell sx={{border: 1,background:"lightyellow"}} align="center">Title</TableCell>
            <TableCell sx={{border: 1,background:"lightyellow"}} align="center">Body</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Posts.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell sx={{border: 1,background:"lightblue"}} component="th" scope="row">
                {row.userId} <Button onClick={()=>view_comments(row.id)} variant='contained' sx={{height:"25px",width:"160px"}}> View comments</Button>
              </TableCell>
              <TableCell sx={{border: 1,background:"lightblue"}} align="center">{row.id} </TableCell>
              <TableCell sx={{border: 1,background:"lightblue"}} align="center">{row.title} </TableCell>
              <TableCell sx={{border: 1,background:"lightblue"}} align="center">{row.body.slice(0,80)}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Posts.map((row, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{background:"#bcb88a",color:"white"}}> <h1> Id:{row.id}</h1>
     <h2>Title:      {row.title.slice(0,30)} </h2> 
     <h3>Body:     {row.body.slice(0,60)}  </h3><br/>
     <Button onClick={()=>view_comments(row.userId)} variant='contained' > View comments</Button>
            
       
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>

    </div>
  )
}

export default Posts