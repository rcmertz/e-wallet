import Input from "../input/Input";
import Button from "../button/Button";
import "./Expense.css"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { TextField, InputLabel, FormControl, Select, MenuItem } from "@mui/material";


export default function NewExpense() {
    return (
      <div className="expense">
        <div className="expenseAction">
          <div className="actTitulo">
            <h1>Nova Despesa</h1>
          </div>
          <div className="actAction">
          <IconButton aria-label="delete">
          <AddIcon />
       </IconButton>          </div>
        </div>
        <div className="expenseContent">
         
        </div>
        <div className="box">
          <div className="item">
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
          </div>
          <div className="item">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
      </div>
    )
  }
  function handleChange (){
  }
  var age = '';