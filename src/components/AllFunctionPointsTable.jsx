export const AllFunctionPointsTable = ({ allFunctionPoints }) => {
  return (
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg overflow-hidden border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr className="text-baseColor">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-accent uppercase"
                >
                  NOMBRE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-accent uppercase"
                >
                  Valor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-accent uppercase"
                >
                  Tipo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {allFunctionPoints.map((item) => {
                return (
                  <TableRow
                    key={Math.random() + "_" + JSON.stringify(item)}
                    item={item}
                  />
                );
              })}

              {/* {values.map((item) => {
                return (
                  <TableRow
                    editable={editable}
                    key={JSON.stringify(item)}
                    item={item}
                    handleDelete={handleDelete}
                  />
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ item }) => {
  const { name, tipo, value } = item;

  return (
    <tr className="text-left text-baseColor">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">{value}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">{tipo}</td>
    </tr>
  );
};

// function depureEntries(item) {
//   if (Array.isArray(item)) {
//     const [name, value] = item;
//     return [name, value];
//   }
//   if (!Array.isArray(item)) {
//     const name = item.name;
//     const value = item.value;
//     return [name, value];
//   }
// }
