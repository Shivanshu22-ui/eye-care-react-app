import React from 'react';

const About = () => {
    return (
        <div className="p-3" style={{backgroundColor:'lightgray'}} > 
            <h1 className="pt-5 fw-bold">About US</h1>
            <div  className="row p-5">
            <div className="col-lg-6 my-5">
                <img className='rounded-3 img-fluid' src="https://image.freepik.com/free-vector/hospital-clinic-building-with-ambulance-car-truck_107791-2645.jpg" alt="" />
            </div> 
            <div className="col-lg-6 my-5">
                <h2>Who We are ?</h2>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque, ducimus eius cupiditate praesentium nobis, dolorum saepe harum perferendis, reiciendis ad accusantium voluptate alias magnam.Lorem25 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat temporibus quam ullam earum unde? Quod ipsum illo assumenda enim. Accusantium quidem earum, quasi velit aliquam incidunt voluptatum hic possimus sint! 

</p>
            </div>
            </div> 

            <div className="row p-5 ">
                <div className="col-lg-6 my-5">
                    <h2>Our History</h2>
                    <p> 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum aliquam in obcaecati nostrum ipsam aut ab optio molestias a architecto consectetur ratione repudiandae numquam, quaerat id aspernatur mollitia quidem? Id aperiam, modi, ea fugiat maxime cupiditate accusantium odio dolore minima nisi, aliquam aut tenetur. Odio repellat aliquam optio accusantium.</p>
                </div>
                <div className="col-lg-6 my-5">
                     <img className='rounded-3 img-fluid' src="https://image.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;