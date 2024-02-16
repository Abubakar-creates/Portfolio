import { Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';

import image1 from '../assets/express.png'
import image2 from '../assets/graphql.png'
import image3 from '../assets/html.png'


const CarousalModal = ({ open, handleClose, project }) => {

    const [data, setData] = useState()

    const crm = [{ src: image1 }, { src: image2 }, { src: image3 }]
    const jobs = [{ src: image3 }, { src: image2 }]

    useEffect(() => {
        if (project === 'crm') {
            setData(crm)
        } else if (project === 'jobs') {
            setData(jobs)
        }
    }, [project])

    console.log('data', data);

    console.log('project', project);


    return (
        <div>
            {/* <Button variant="contained" onClick={handleOpen}>Open Modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: '80vw', maxWidth: 900 }}>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Carousel stopAutoPlayOnHover={true} navButtonsAlwaysVisible autoPlay={false}>
                            {data?.map((value) => (
                                <img src={value?.src} alt="image3" className='w-[100%]' />
                            ))}
                            {/* <ReactPlayer controls={true} url={'https://www.youtube.com/watch?v=iu-LBY7NXD4'} width={'100%'} /> */}
                        </Carousel>

                    </Typography>
                    {/* <Button onClick={handleClose}>Close Modal</Button> */}
                </div>
            </Modal>
        </div>
    );
};

export default CarousalModal;
