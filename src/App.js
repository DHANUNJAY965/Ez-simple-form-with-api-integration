import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

const App = () => (
  <div>
    
    <div className="hidden xl:flex min-h-screen items-center justify-center">
      <div>
        <Header />
        <ContactForm />
      </div>
      <Services />
    </div>

    <div className="block xl:hidden container m-auto">
      <Header />
      <Services />
      <ContactForm />
    </div>
  </div>
);

export default App;
