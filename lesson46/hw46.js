// TASK 1 TABLE

class Table extends React.Component {
  constructor(props) {
    super(props);
    const rows = [];
    for (let i = 1; i <= props.rows; i++) {
      rows.push(i);
    }
    const columns = [];
    for (let i = 1; i <= props.columns; i++) {
      columns.push(i);
    }
    this.rows = rows;
    this.columns = columns;
  }
  render() {
    return (
      <React.Fragment>
        <table className="table table-striped">
          <tbody>
            {this.rows.map((row, index) => (
              <tr key={index}>
                {this.columns.map((column, i) => (
                  <td key={i}>{i + 1 + '-' + (index + 1)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// TASK 2 MULTIPLICATION TABLE

class SingleMultiplicationTable extends React.Component {
  constructor(props) {
    super(props);
    const multiplier = [];
    for (let index = 1; index <= 10; index++) {
      multiplier.push(index);
    }
    this.multiplier = multiplier;
    this.multiplicanda = props.multiplicanda;
  }
  render() {
    const multiplicanda = this.multiplicanda;
    return (
      <React.Fragment>
        {this.multiplier.map((multiplier, i) => {
          return (
            <li key={i}>
              {multiplicanda +
                ' x ' +
                multiplier +
                ' = ' +
                multiplicanda * multiplier}
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

class MultiplicationTable extends React.Component {
  constructor(props) {
    super(props);
    const multiplicanda = [];
    for (let index = 1; index <= 10; index++) {
      multiplicanda.push(index);
    }
    this.multiplicanda = multiplicanda;
  }
  render() {
    return (
      <div className="multiplicationTable">
        {this.multiplicanda.map((multiplicanda, index) => {
          return (
            <ul key={index}>
              {<SingleMultiplicationTable multiplicanda={multiplicanda} />}
            </ul>
          );
        })}
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.Fragment>
    <Table rows={3} columns={3} />
    <MultiplicationTable />
  </React.Fragment>
);
