import React from 'react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-gray-700 text-white"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-gray-700 text-white"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full p-3 rounded-lg bg-gray-700 text-white"></textarea>
            </div>
            <div className="text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p>or email me at <a href="mailto:learnerstudent2020@gmail.com" className="text-blue-400">learnerstudent2020@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
