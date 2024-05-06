import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useAlumnos } from "../context/AlumnoContext";
import { useNavigate } from "react-router-dom";

const TablaDatosAlumnos = () => {
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

  const handleChange = (e) => {
    const filter = e.target.value.toLowerCase();
    if (alumnos && alumnos.length > 0) {
      const filteredRecords = alumnos.map((grupo) => {
        const alumnosFiltered = grupo.alumnos.filter((alumno) =>
          alumno["Nombre y Apellido del Alumno:"].toLowerCase().includes(filter) ||
          alumno["Curso al que asiste:"].toLowerCase().includes(filter)
        );
        return { ...grupo, alumnos: alumnosFiltered };
      }).filter((grupo) => grupo.alumnos.length > 0);
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
    navigate("/datos-alumnos", { state: { selectedAlumnos: selectedRows } });
  };

  const columns = [
    {
      name: "Curso",
      selector: (row) => row["Curso al que asiste:"],
      grow: 2,
    },
    {
      name: "Nombre y Apellido",
      selector: (row) => row["Nombre y Apellido del Alumno:"],
      grow: 3,
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
        data={filteredAlumnos.flatMap((item) => item.alumnos)}
        selectableRows
        selectableRowsNoSelectAll
        pagination
        onSelectedRowsChange={handleRowSelected}
        fixedHeader
        progressPending={loading}
        responsive
      />
      
      <button onClick={handleDetalleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Ver Datos
      </button>
    </div>
  );
};

export default TablaDatosAlumnos;
