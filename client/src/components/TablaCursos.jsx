import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useAlumnos } from "../context/AlumnoContext";
import { useNavigate } from "react-router-dom";

const TablaCursos = () => {
  const { alumnos, obtenerAlumnos } = useAlumnos();
  const [filteredAlumnos, setFilteredAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerAlumnos();
    
  }, []);

  useEffect(() => {
    setFilteredAlumnos(alumnos);
    setLoading(false);
  }, [alumnos]);
  //console.log(alumnos);

  const handleChange = (e) => {
    const filter = e.target.value.toLowerCase();
    if (alumnos && alumnos.length > 0) {
      const filteredRecords = alumnos.filter((curso) =>
        curso["nombre"].toLowerCase().includes(filter)
      );
      setFilteredAlumnos(filteredRecords);
    } else {
      setFilteredAlumnos([]);
    }
  };
  
  

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
    
  };

  const handleDetalleClick = () => {
    // Navegamos a la página de detalles con los alumnos seleccionados
    navigate("/send-cursos", { state: { selectedAlumnos: selectedRows } });
  };

  const columns = [
    {
      name: "Curso",
      selector: (row) => row["nombre"],
      grow: 2,
    },
   
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <input
        type="text"
        placeholder="Buscar por Apellido"
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        onChange={handleChange}
      />

      <DataTable
        title="Búsqueda por alumno"
        columns={columns}
        data={filteredAlumnos}
        selectableRows
        selectableRowsNoSelectAll
        pagination
        onSelectedRowsChange={handleRowSelected}
        fixedHeader
        progressPending={loading}
        responsive
      />
      
      <button onClick={handleDetalleClick} className="bg-gray-100 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-gray-500 w-full mt-4">
        Enviar Mensaje
      </button>
    </div>
  );
};

export default TablaCursos;
