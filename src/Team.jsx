import React from 'react';
import './styles.css';

const teamMembers = [
    {
        img: "assets/img/team-01.jpg",
        name: 'Daffa Surya Pramudya',
        position: 'Ketua Kelompok'
    },
    {
        img: "assets/img/team-02.jpg",
        name: 'Muhammad Rahadian',
        position: 'Anggota Kelompok'
    },
    {
        img: "assets/img/team-03.jpg",
        name: 'Brian',
        position: 'Anggota Kelompok'
    },
    {
        img: "assets/img/team-04.jpg",
        name: 'Ignasius Denni',
        position: 'Anggota Kelompok'
    }
];

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h3 className='subtitle'>Our Team</h3>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {teamMembers.map((item, index) => (
                        <div className='team__item' key={index}>
                            <div className='team__img'>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className='team__details'>
                                <h4>{item.name}</h4>
                                <p className='description'>{item.position}</p>
                                <div className='team__member-social'>
                                    <span><i className='ri-linkedin-line'></i></span>
                                    <span><i className='ri-twitter-line'></i></span>
                                    <span><i className='ri-facebook-line'></i></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;