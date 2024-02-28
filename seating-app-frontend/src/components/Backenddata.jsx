import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../styles/Table.css";

const BackendResponseTable = ({ data }) => {
    const tableRef = useRef(null);

    const downloadPdf = async () => {
        try {
            const canvas = await html2canvas(tableRef.current);
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF();
            const imgHeight = canvas.height * 208 / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, 208, imgHeight);
            pdf.save("table_data.pdf");
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    // Check if data is not null and has departments
    if (!data || !Object.keys(data).length) {
        return null; // If data is null or empty, do not render anything
    }

    return (
        <div>
            <table ref={tableRef}>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Room Number</th>
                        <th>Number Start</th>
                        <th>Number End</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((department) => {
                        const departmentData = data[department];
                        return Object.keys(departmentData).map((key) => {
                            const item = departmentData[key];
                            // Check if startRegisterNumber is not null
                            if (item.startRegisterNumber !== null) {
                                return (
                                    <tr key={key}>
                                        <td>{department}</td>
                                        <td>{key}</td>
                                        <td>{item.startRegisterNumber}</td>
                                        <td>{item.endRegisterNumber !== null ? item.endRegisterNumber : ''}</td>
                                    </tr>
                                );
                            }
                            // If startRegisterNumber is null, do not render the row
                            return null;
                        });
                    })}
                </tbody>
            </table>
            <button onClick={downloadPdf} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download PDF</button>

        </div>
    );
};

export default BackendResponseTable;
