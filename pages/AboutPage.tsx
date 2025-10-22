
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary">About Serenity Spa</h1>
        <p className="text-lg text-text-secondary mt-2">Your Sanctuary for Wellness and Rejuvenation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Philosophy</h2>
          <p className="text-text-secondary leading-relaxed">
            At Serenity Spa, we believe that true wellness is a harmonious balance of mind, body, and spirit. Our philosophy is rooted in providing a peaceful and luxurious environment where you can escape the stresses of daily life. We combine ancient healing traditions with modern therapeutic techniques to create personalized experiences that cater to your unique needs, promoting deep relaxation and lasting well-being.
          </p>
        </div>
        <img src="https://picsum.photos/500/350?random=16" alt="Peaceful spa environment" className="rounded-lg shadow-md"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
         <img src="https://picsum.photos/500/350?random=17" alt="Spa treatment" className="rounded-lg shadow-md md:order-2"/>
        <div className="md:order-1">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-text-secondary leading-relaxed">
            Our mission is to be a sanctuary of tranquility and a leader in wellness. We are committed to delivering exceptional service and treatments that exceed our clients' expectations. Through our team of dedicated professionals, serene ambiance, and premium, natural products, we aim to inspire a lifestyle of wellness and help you achieve a state of complete serenity and revitalization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
