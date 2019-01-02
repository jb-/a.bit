import ReactTable from 'react-table';
import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <ReactTable columns={
        [{ Header: 'Squat', accessor: 'squat'}, { Header: 'Call to mom', accessor: 'callToMom' }]
      } />
    );
  }
}
