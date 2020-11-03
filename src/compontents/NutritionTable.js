import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useFoodStateValue } from '../context/food-state';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#43a047',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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

  const { foodState, setFoodState } = useFoodStateValue();

  //! Helpers

  function createData(title, myData) {
    return { title, myData };
  }

  const calculateValue = (nutritionType) => {
    let totalValue = 0;
    if (foodState.length > 0) {
      foodState.forEach(({ nutrition }) => {
        totalValue = totalValue + nutrition[nutritionType];
      });

      return totalValue.toFixed(2);
    }
  };

  const rows = [
    createData('Kalorie', calculateValue('calories')),
    createData('Proteiny', calculateValue('protein')),
    createData('Sacharidy', calculateValue('carbohydrate')),
    createData('Cukry', calculateValue('sugar')),
    createData('Celkové Tuky', calculateValue('totalFat')),
    createData('Nasycené Mastné Kyseliny', calculateValue('saturatedFat')),
    createData('Trans Mastné Kyseliny', calculateValue('monosaturatedFat')),
    createData('Polynenasycené', calculateValue('polysaturatedFat')),
    createData('Cholesterol', calculateValue('cholesterol')),
    createData('Vláknina', calculateValue('fiber')),
    createData('Železo', calculateValue('iron')),
    createData('Sůl', calculateValue('sodium')),
    createData('Vápník', calculateValue('calcium')),
    createData('PHE', calculateValue('phe')),
  ];

  return (
    <TableContainer className={classes.paddingVertical} component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.upperCase} align='left'>
              Moje Živiny
            </StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='right'></StyledTableCell>
              <StyledTableCell align='right'>{row.myData}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
