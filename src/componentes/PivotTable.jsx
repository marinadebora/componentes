import Loading from './Loading';

const PivotTable = () =>
{
  //para craer un tabla dinamica necesitas crear un array como el siguiente:
  // este array "SampleArray" tiene la extructura de la cabecera de la tabla
  let SampleArray = [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }]
  //este array "data" simula lo que llegaria desde  (db) por medio de una peticion al backend
  let data = [{ name: "producto 1", description: "descripcion del producto 1", price: "6.500" }, { name: "producto 2", description: "descripcion del producto 2", price: "8.000" }, { name: "producto 3", description: "descripcion del producto 3", price: "9.200" }]

  return (
    <main>
      <div className="overflow-x-auto w-full flex items-center justify-center ">
        {
          SampleArray ?
            <table className="min-w-full  bg-[#f9eae6] border border-[#f2d0c7] ">
              <thead className="bg-[#f2d0c7]">
                {/* este bloque pinta la cabecera de la tabla | nombre | Descripcion | Precio | */}
                <tr>
                  { SampleArray?.map((column) => (
                    <th
                      key={column.Header}
                      className="py-1 px-2 border-b border-[#f2d0c7] text-left "
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* este bloque pinta todos los productos en cada  columna correspondiente */}
                { data && data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border border-[#000]">
                    {SampleArray.map((column) => (
                      <td
                        key={column.accessor}
                        className="py-1 px-2 text-sm"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <Loading />
        }

      </div>
    </main>
  );
};

PivotTable.propTypes = {};

export default PivotTable;