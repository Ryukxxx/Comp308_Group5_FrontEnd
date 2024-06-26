import React from 'react';
import DailyInfoForm from '../components/DailyInfoForm';
import '../css/NurseDashboard.css';

const PatientDashboard = () => {
    const userId = sessionStorage.getItem('userId'); // Retrieve the user ID from sessionStorage

    // Check if the userId exists and if the user is a patient
    const userRole = sessionStorage.getItem('userRole');
    if (userRole !== 'patient') {
        return <p>Access Denied. This page is for patients only.</p>;
    }

    return (
        <div className="nurse-div text-dark">
            <h1>Patient Dashboard</h1>
            <DailyInfoForm patientId={userId} />
        </div>
    );
};

export default PatientDashboard;
