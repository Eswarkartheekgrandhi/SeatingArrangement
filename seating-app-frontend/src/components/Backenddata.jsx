import React from 'react';
import "../styles/Table.css";

const BackendResponseTable = ({ data }) => {
    // Check if data is not null and has departments
    if (!data || !Object.keys(data).length) {
        return null; // If data is null or empty, do not render anything
    }

    return (
        <table>
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
    );
};

export default BackendResponseTable;
