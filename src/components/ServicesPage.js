import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      title: 'Physiotherapy',
      description:
        'Physiotherapy focuses on restoring movement and function when someone is affected by injury, illness, or disability. It uses various techniques such as exercises, manual therapy, and modalities like heat or cold treatments.',
      benefits: [
        'Helps improve mobility and physical function.',
        'Reduces pain and inflammation.',
        'Aids in recovery from surgeries or injuries.',
        'Enhances strength and coordination, allowing patients to regain independence.',
      ],
      image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732964925/pexels-rdne-8312866_og7hwd.jpg',
    },
    {
      title: 'Occupational Therapy',
      description:
        ' Occupational therapy assists individuals in developing, recovering, or maintaining daily living and work skills. It focuses on enabling patients to participate in meaningful activities, from self-care to vocational tasks.',
      benefits: [
        'Improves fine motor skills and coordination.',
        'Enhances the ability to perform daily tasks independently.',
        'Provides strategies for managing disabilities and promoting adaptation.',
        'Encourages participation in social and recreational activities, improving overall quality of life.',
      ],
      image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732965418/pexels-pavel-danilyuk-6812458_nzkkp5.jpg',
    },
    {
      title: 'Speech Therapy',
      description:
        'Speech therapy addresses communication disorders and difficulties with speech, language, and swallowing. Therapists use tailored exercises and techniques to improve articulation, language comprehension, and fluency.',
      benefits: [
        'Enhances verbal communication skills, aiding in social interactions.',
        'Assists in improving language comprehension and expression.',
        'Provides strategies for effective communication.',
        'Supports patients with swallowing difficulties, ensuring safe eating and drinking.',
      ],
      image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732965470/pexels-cottonbro-7578803_g209da.jpg',
    },

    {
        title: 'Behaviour Therapy',
        description:
          'Behaviour therapy focuses on modifying harmful behaviours through various techniques, including reinforcement, punishment, and modeling. It is particularly beneficial for children and individuals with behavioral challenges or developmental disorders',
        benefits: [
          'Reduces challenging behaviours and promotes positive actions.',
          'Helps develop social skills and improve emotional regulation.',
          'Enhances coping strategies for managing stress and anxiety.',
          'Provides parents and caregivers with tools to support behaviour management at home.',
        ],
        image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732967562/pexels-cottonbro-4101143_fhouhx.jpg',
      },
      {
        title: 'Special Education',
        description:
          'Special education provides tailored learning experiences for children with disabilities or special needs. It focuses on individual learning plans that accommodate each students unique abilities and challenges.',
        benefits: [
          'Enhances academic skills through personalized teaching strategies.',
          'Fosters social skills and peer interactions in a supportive environment.',
          'Prepares students for future educational and vocational opportunities.',
          'Empowers children to reach their full potential and develop self-confidence.',
        ],
        image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732967561/pexels-tima-miroshnichenko-6606231_gznstl.jpg',
      },
      {
        title: 'Mental Health Counselling',
        description:
          'Counselling offers psychological support to individuals dealing with emotional, psychological, or social challenges. Professional therapists use various techniques to help patients explore their feelings and develop coping strategies.',
        benefits: [
          'Provides a safe space for individuals to express their thoughts and feelings.',
          'Helps in addressing mental health issues such as anxiety and depression.',
          'Aids in developing coping mechanisms and problem-solving skills.',
          'Supports personal growth and enhances emotional well-being.',
        ],
        image: 'https://res.cloudinary.com/cloud0310/image/upload/v1732967606/pexels-cottonbro-4101188_v0cyvn.jpg',
      },
  ];

  return (
    <div className="servicePage_mainContainer">
        <div className="services-page">
            {services.map((service, index) => (
                <div key={index} className="servicePage-container">
                <img src={service.image} alt={service.title} className="servicePage-image" />
                <div className="servicePage-content">
                    <h2 className="servicePage-title">{service.title}</h2>
                    <p className="servicePage-description">{service.description}</p>
                    <h3 className="benefits-title">Benefits:</h3>
                    <ul className="benefits-list">
                    {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>
    </div>
  );
};

export default ServicesPage;
