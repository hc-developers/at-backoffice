import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import fontSizes from '../../../Theme/fontSize';
import { theme } from '../../../Theme/Colors';

export const SelectShow = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedOption, setSelectedOption] = useState(15);
  const [selectorSize, setSelectorSize] = useState(fontSizes.backOffice.h3.md);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setExpanded(null); // Fecha o seletor após selecionar uma opção

    // Define o tamanho do seletor de acordo com a opção selecionada
    if (option === 15) {
      setSelectorSize(fontSizes.backOffice.h3.md);
    } else if (option === 30) {
      setSelectorSize(fontSizes.backOffice.h3.sm);
    } else {
      setSelectorSize(fontSizes.backOffice.h3.xs);
    }
  };

  return (
    <>
      <Box
        onClick={() => setExpanded((prevExpanded) => (prevExpanded === 'panel1' ? null : 'panel1'))}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Typography sx={{ fontSize: fontSizes.backOffice.h3.md, color: theme.palette.purple[400] }}>
          {expanded === 'panel1' ? 'Fechar ▼' : 'Mostrar ▲'}
        </Typography>
        {expanded === 'panel1' && (
          <Box
            sx={{
              position: 'absolute',
              top: 'calc(100% + 5px)', // Posiciona o seletor abaixo do texto "Mostrar"
              left: '50%', // Centraliza horizontalmente
              transform: 'translateX(-50%)', // Centraliza horizontalmente
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              padding: '5px',
              borderRadius: '5px',
              zIndex: 1,
            }}
          >
            <div onClick={() => handleOptionClick(15)} style={{ cursor: 'pointer', padding: '5px' }}>
              <Typography sx={{ fontSize: selectorSize }}>
                {selectedOption === 15 ? '✔ ' : '○ '}
                15
              </Typography>
            </div>
            <div onClick={() => handleOptionClick(30)} style={{ cursor: 'pointer', padding: '5px' }}>
              <Typography sx={{ fontSize: selectorSize }}>
                {selectedOption === 30 ? '✔ ' : '○ '}
                30
              </Typography>
            </div>
            <div onClick={() => handleOptionClick(50)} style={{ cursor: 'pointer', padding: '5px' }}>
              <Typography sx={{ fontSize: selectorSize }}>
                {selectedOption === 50 ? '✔ ' : '○ '}
                50
              </Typography>
            </div>
            <div onClick={() => handleOptionClick('Todos')} style={{ cursor: 'pointer', padding: '5px' }}>
              <Typography sx={{ fontSize: selectorSize }}>
                {selectedOption === 'Todos' ? '✔ ' : '○ '}
                Todos
              </Typography>
            </div>
          </Box>
        )}
      </Box>
    </>
  );
};
