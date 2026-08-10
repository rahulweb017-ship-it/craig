import React, { createContext, useState, useContext } from 'react';

const OfficeContext = createContext();

export const officeData = {
  NZ: {
    countryName: 'New Zealand',
    phone: '+64 9889 1202',
    phoneRaw: 'tel:+6498891202',
    email: 'jobs@thejobfactory.co.nz',
    whatsapp: '',
    whatsappRaw: '',
    bankAccount: '06-0730-0322300-00 (ANZ Bank)',
    bankName: 'ANZ Bank New Zealand',
    abn: '',
    website: 'thejobfactory.co.nz',
    costs: {
      search: '$160',
      resume: '$140',
      training: '$90',
      admin: '$10'
    }
  },
  AU: {
    countryName: 'Australia',
    phone: '+61 433 114 847',
    phoneRaw: 'tel:+61433114847',
    email: 'jobs@thejobfactory.com.au',
    whatsapp: '+61 433 114 847',
    whatsappRaw: 'https://wa.me/61433114847',
    bankAccount: 'Please contact us for Australian payment options.',
    bankName: 'Commonwealth Bank of Australia',
    abn: '94 165 350 710',
    website: 'thejobfactory.com.au',
    costs: {
      search: '$160 AUD',
      resume: '$140 AUD',
      training: '$90 AUD',
      admin: '$10 AUD'
    }
  }
};

export const OfficeProvider = ({ children }) => {
  const [country, setCountry] = useState('NZ'); // Default to New Zealand

  const value = {
    country,
    setCountry,
    details: officeData[country],
    allDetails: officeData
  };

  return (
    <OfficeContext.Provider value={value}>
      {children}
    </OfficeContext.Provider>
  );
};

export const useOffice = () => useContext(OfficeContext);
