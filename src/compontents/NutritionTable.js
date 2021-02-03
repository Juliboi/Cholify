import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useFoodStateValue } from '../context/food-state';
import { createTableData } from '../helpers/createTableData';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';
import { ALL_NUTRIENTS } from '../constants/nutrients';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    maxWidth: 389,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tableColumn: {
    flex: 1,
  },
  upperCase: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paddingVertical: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

export const NutritionTable = () => {
  const classes = useStyles();
  const [nutrientState, setNutrientState] = useState([]);

  const { foodState } = useFoodStateValue();
  const { calculateFoodValue } = useFoodStateHelpers();

  useEffect(() => {
    const nutritionTableData = ALL_NUTRIENTS.map(({ title, name, unit }) =>
      createTableData(title, calculateFoodValue(name), unit)
    );

    setNutrientState(nutritionTableData);
  }, []);

  return (
    <TableContainer className='table' component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead className='table__head'>
          <TableRow>
            <TableCell className={classes.upperCase} align='left'>
              Moje Živiny
            </TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table__body'>
          {nutrientState.map((row) => (
            <TableRow key={row.title}>
              <TableCell component='th' scope='row'>
                {row.title}
              </TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'>{row.value}</TableCell>
              <TableCell align='right'>{row.secondaryValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
