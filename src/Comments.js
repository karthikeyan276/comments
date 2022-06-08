import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Comments() {
const[comments,setComments]=useState([])
const parms=useParams()
const user = parms.id
console.log(parms)

useEffect(()=>{
    fetch( `https://jsonplaceholder.typicode.com/comments?postId=${user}`)  
    .then((res)=>res.json())
    .then((res)=>{
        setComments(res)
    })
},[])

  return (
    <div>

{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>postId </TableCell>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">body</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.postId}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.body}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {comments.map((row, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{background:"#bcb88a",color:"white"}}> <h1> Id:{row.id}</h1><br/>
     <h2 >Name:      {row.name} </h2> <br/>
     <h3>Body:     {row.body.slice(0,80)}  </h3><br/>
            
       
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default Comments