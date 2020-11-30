import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import AutocompleteText from './AutocompleteText';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, input1, input2) {
  return { name, input1, input2 };
}


const rows = [
  createData('List 2 Drain', <input type="text"/>, <input type="text"/>),
  createData('\'N\' rectifier Amps', <input type="text"></input>, <input type="text"></input>),
  createData('Recharge Amps', <input type="text"></input>, <input type="text"></input>),
  createData('Spare Rectifier Amps', <input type="text"></input>, <input type="text"></input>),
  createData('Maint & Rechg Rectifiers', <input type="text"></input>, <input type="text"></input>),
  createData('', '3 Hr Based', ''),
  createData('Battery Reserve Hours', <input type="text"></input>, <input type="text"></input>),
  createData('Total Battery Amps', <input type="text"></input>, <input type="text"></input>),
  createData('Spare Battery Amps', <input type="text"></input>, <input type="text"></input>),
  createData('Shunt Spare Cap', <input type="text"></input>, <input type="text"></input>),
  createData('Discharge Spare Cap', <input type="text"></input>, <input type="text"></input>),
];


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="SearchBoxes">
      <div className="App-Component">
        Site
        <div className="spacing">
         <AutocompleteText/>
         </div>
        </div>

        <div className="App-Component">
        PowerPlant
        <div className="spacing">
         <AutocompleteText/>
         </div>
        </div>
      </div>
      <br/>
    <div className="flex-container">
      <Table className={classes.table}>
        <TableHead>
        <TableRow>
            <TableCell align="center" colSpan={3}>
              Current Conditions
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Load(amps)</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Usage % of 'N'</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => 
          (<TableRow key={row.name}>
            <TableCell scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.input1} </TableCell>
              <TableCell align="right">{row.input2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className={classes.table}>
        <TableHead>
        <TableRow>
            <TableCell align="center" colSpan={3}>
              Anticipated Conditions
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Anticipated Amps</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Usage % of 'N'</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => 
          (<TableRow key={row.name}>
            <TableCell scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.input1}</TableCell>
              <TableCell align="right">{row.input2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </div>
  </div>
  );
}
export default App;
