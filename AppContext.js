import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [fecha, setFecha] = useState('');
  const [horaAgendada, setHoraAgendada] = useState('');
  const [virtualPresecial, setVirtualPresecial] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const value = {
    fecha,
    setFecha,
    horaAgendada,
    setHoraAgendada,
    virtualPresecial,
    setVirtualPresecial,
    selectedCard,
    setSelectedCard
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext debe usarse dentro de un AppContextProvider');
  }
  return context;
};
