import './App.css';
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
    },
  ],
};
// function createTableRow(number) {
//   const rows = [];
//   for (let index = 1; index < number/2; index++) {
//     rows.push(index);
//   }
//   console.log(rows);
// }
console.log(Math.max(...data.datasets[0].data));
function App() {
  const max = Math.max(...data.datasets[0].data);
  return (
    <div className="App">
      {/* <div className="tableGrid" style={{}}>
        {createTableRow(Math.max(...data.datasets[0].data))}
      </div> */}
      <div className="table">
        {data.datasets[0].data.map((item, index) => (
          <div
            key={index}
            className="tableItem"
            style={{ height: (item / max) * 100 + '%' }}
          >
            <span>{data.labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
