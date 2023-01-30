import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
// import AddIcon from '@mui/icons-material/Add';



function App() {

  const styles={
    MainBox:{
      backgroundColor: 'white',
      width: '35%',
      minHeight: '70vh',
      borderRadius:"5%",
      color:'black'
  },

  MainText:{
    margin: '1em'
  },

  CalculatorButton:{
    fontSize:'1em',
    width:'80px',
    height:'80px'
  }
}

  const [value, setValue] = React.useState('');
  const clickHandler = () => {
    setValue(prevValue=>eval(prevValue));
  }

  const clickAppender=(e)=>{
    setValue(prevValue=>prevValue+e.target.name)
  }

  return (
    <div className="App">
      <header className="App-header">
          <Box sx={styles.MainBox}>
              <Typography sx={styles.MainText} variant="h3" component="h1">
                 Calculator
              </Typography>
             
              <Box sx={{paddingBottom:'50px'}} >
                <TextField id="outlined-basic" disabled  InputProps={{ sx: { fontSize:'1em',height: 80,width:470 } }}  value={value}  name='New Task' variant="outlined" />
                <Button sx={styles.CalculatorButton} name='C' onClick={()=>setValue('')} variant="contained">C </Button>
              </Box>
           
              <Box sx={{margin:'80px',marginTop:'0px'}} >
                  <Grid container spacing={4}>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='1' variant="contained">1</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='2' variant="contained">2</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='3' variant="contained" >3</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='/' variant="contained">/</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='4' variant="contained">4</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='5' variant="contained" >5</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='6' variant="contained">6</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='-' variant="contained">-</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='7' variant="contained" >7</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='8' variant="contained">8</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='9' variant="contained">9</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='+' variant="contained" >+</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='.' variant="contained" >.</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='0' variant="contained">0</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button sx={styles.CalculatorButton} onClick={()=>clickHandler()} name='=' variant="contained">=</Button>
                    </Grid>
                    <Grid  item xs={3}>
                      <Button  sx={styles.CalculatorButton} onClick={(event)=>clickAppender(event)} name='*' variant="contained" >*</Button>
                    </Grid>
               
                  </Grid>

              </Box>
             
              
          </Box>
      </header>
    </div>
  );
}

export default App;
