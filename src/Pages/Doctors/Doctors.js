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
            name:"xyz",
            age:"12",
            experience:"abvc",
            specialist:"giguu"
        },
        {
            img:"https://image.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg",
            name:"megha",
            age:"20",
            experience:"2",
            specialist:"xyz"
        },
        {
            img:"",
            name:"",
            age:"",
            experience:"",
            specialist:""
        },
        {
            img:"",
            name:"",
            age:"",
            experience:"",
            specialist:""
        },
        {
            img:"",
            name:"",
            age:"",
            experience:"",
            specialist:""
        },
        {
            img:"",
            name:"",
            age:"",
            experience:"",
            specialist:""
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