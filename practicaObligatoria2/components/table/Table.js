const Table = ({ data }) => {
  return (
    <table>
      <tr>
        <th>Marca</th>
        <th>Ingresos</th>
      </tr>
      {data.map((company) => (
        <tr>
          <td>{company.brand}</td>
          <td>{company.income}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
