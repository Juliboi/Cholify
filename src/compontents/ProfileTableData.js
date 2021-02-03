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
import { BIOMETRICS } from '../constants/biometrics';
import { createTableData } from '../helpers';

export const ProfileTableData = () => {
  const [biometricState, setBiometricState] = useState([]);

  useEffect(() => {
    const biometricTableData = BIOMETRICS.map((data) =>
      createTableData(data.type, data.value)
    );

    setBiometricState(biometricTableData);
  }, []);

  return (
    <TableContainer className='table' component={Paper}>
      <Table aria-label='customized table'>
        <TableHead className='table__head'>
          <TableRow>
            <TableCell>Moje Biometrika</TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table__body'>
          {biometricState.map((bio) => (
            <TableRow key={bio.title}>
              <TableCell component='th' scope='row'>
                {bio.title}
              </TableCell>
              <TableCell align='right'>{bio.value}</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
