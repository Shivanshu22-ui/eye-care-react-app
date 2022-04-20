import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctors.JSON')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])

    const docDetails=[
        {
            img:"https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg",
            name:"Dr.Jeeven Singh",
            age:"42",
            experience:"8 yrs.",
            specialist:"Oththalmologist"
        },
        {
            img:"https://image.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg",
            name:"Dr. Meetu Bansal",
            age:"45",
            experience:"9 yrs.",
            specialist:"Oththalmologist"
        },
        {
            img:"https://image.freepik.com/free-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-enthusiastic-smiling-male-doctor-glad-help-patients-physician-white-coat-happy-working-clinic-hospital_1258-57450.jpg",
            name:"Dr. Surabhi Gupta",
            age:"42",
            experience:"8 yrs.",
            specialist:"Optometrist"
        },
        {
            img:"https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
            name:"Dr. Anup Gulati",
            age:"40",
            experience:"6 yrs.",
            specialist:"Optometrist"
        },
        {
            img:"https://image.freepik.com/free-photo/front-view-covid-recovery-center-female-doctor-with-posing-with-stethoscope_23-2148847898.jpg",
            name:"Dr. Neetu Kumari",
            age:"41",
            experience:"7 yrs.",
            specialist:"Optician"
        },
        {
            img:"https://image.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg",
            name:"Dr. Subhash Betharia",
            age:"39",
            experience:"6 yrs.",
            specialist:"Optician"
        }
    ]
    return (
        <div className="m-4" style={{width:'90%'}}>
            <h2 className=" my-3 text-success fw-bold fs-1">Lets Get Introduce With Our Doctors </h2>
            <Row xs={1} md={2} >
                {
                    docDetails.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;