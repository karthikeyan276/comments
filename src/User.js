
import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
function User() {

const [user,setUser]=useState([])
const[user_set,setUser_set]=useState([])
 const navigate=useNavigate()




console.log(user_set)





useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {

        setUser(res)
        
       
      })
  }, [])

  const check=(id)=>{

    navigate(`/User/${id}/Posts/`)  
console.log("id",id)

// user.map((x)=>{
//     return x
// }).filter((d)=>{
//    return d.id==id ,console.log("hhee",d.id==id)

// })


    // let filterarr =user.filter((d)=> d.id==id)
    // setUser_set(filterarr)
    // console.log("filterarr::",filterarr)
// user.map((x,index)=>{
//    return  x 
   
// //   console.log("dddd",x.id==id)


// }).filter((d)=>{
//     if(d.id==id){
//         return user[id] , setUser_set(user[id]),console.log("sdsd",user[id])
//     }
// })

  }
  console.log(user_set)
  return (
    <div>
     
      <Box sx={{ flexGrow: 1,mt:1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {user.map((row, index) => (
          <Grid item xs={2} sm={6} md={6} key={index}>
            <Item sx={{background:"#bcb88a",color:"white"}}><h1> Id:{row.id}</h1>
     <h2>Name:      {row.name} </h2> 
     <h3>username:     {row.username}  </h3>
            
        <h3>  Email:{row.email}    </h3>  
        <Button onClick={()=>check(row.id)} sx={{ml:3,height:"30px"}} variant='contained'>View Posts</Button> 
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
{/* <Box >
<Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{
    user.map((row,index)=>{
        <Grid item xs={2} sm={4} md={6} key={index} >
<Item style={{ backgroundColor: "lightblue" }}>{row.id}<br />
<Button onClick={()=>check(row.id)} sx={{ml:3,height:"30px"}} variant='contained'>View Posts</Button></Item>
          </Grid>


    })

}

</Grid>


</Box> */}

{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{background:"#EBDDCB"}}>Id </TableCell>
            <TableCell sx={{background:"#EBDDCB"}}>  </TableCell>
            <TableCell sx={{background:"#EBDDCB"}} align="center">Name</TableCell>
            <TableCell sx={{background:"#EBDDCB"}} align="center">Username</TableCell>
            <TableCell sx={{background:"#EBDDCB"}} align="center">Email</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{backGround:" #007BFF "}} component="th" scope="row">
                {row.id} 
              </TableCell>
              <TableCell > <Button onClick={()=>check(row.id)} sx={{ml:3,height:"30px"}} variant='contained'>View Posts</Button> </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}





    </div>
  )
}

export default User