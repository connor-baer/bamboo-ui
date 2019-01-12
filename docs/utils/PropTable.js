/* eslint-disable */
import React from 'react';
import styled, { css } from 'react-emotion';
import { parse } from 'react-docgen';
import { ThemeProvider } from 'emotion-theming';
import { Table, Text } from '@sumup/circuit-ui';

import themes from '../../src/styles/themes';

const theme = themes.standard();

const TableWrapper = styled('div')`
  ${({ theme }) => css`
    overflow: scroll;
    border: 1px solid ${theme.colors.n300};
    border-radius: ${theme.borderRadius.mega};
  `};
`;

const getRows = props =>
  Object.keys(props).map(prop => [
    prop,
    props[prop].type.name,
    props[prop].required.toString(),
    props[prop].defaultValue ? props[prop].defaultValue.value.toString() : '',
    props[prop].description
  ]);

const PropTable = ({ component }) => {
  const parsed = component.__docgenInfo;

  if (!parsed) {
    return (
      <ThemeProvider theme={theme}>
        <Text italic>
          Could not render prop table for {component.displayName}.
        </Text>
      </ThemeProvider>
    );
  }

  const { props, description } = parsed;

  return (
    <ThemeProvider theme={theme}>
      <TableWrapper>
        <Table
          headers={['Name', 'Type', 'Required', 'Default Value', 'Description']}
          rows={getRows(props)}
        />
      </TableWrapper>
    </ThemeProvider>
  );
};

export default PropTable;
