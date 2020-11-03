import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(title, myData) {
  return { title, myData };
}

const rows = [
  createData('Věk', 61),
  createData('Pohlaví', 'Žena'),
  createData('Výška', 162),
  createData('Váha', 56),
  createData('HC', 6.46),
  createData('LDL', 4.56),
  createData('HDL', 1.28),
  createData('TG', 1.37),
  createData('Aktivita', '?'),
];

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

export const MyProfileTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.paddingVertical} component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.upperCase} align='left'>
              Moje Biometrika
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
              <StyledTableCell align='right'>{row.myData}</StyledTableCell>
              <StyledTableCell align='right'></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
