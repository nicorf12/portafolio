import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box } from '@mui/material';
import './settings.css';

const Settings = ({ settings, open, onClose, setLanguage, setTheme }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <h2>{settings.title}</h2>
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Language Selection */}
          <Box className='button-box'>
            <h3>{settings.languaje}</h3>
            <Button onClick={() => setLanguage('es')} variant="outlined" className='language-button'>Español</Button>
            <Button onClick={() => setLanguage('en')} variant="outlined" className='language-button'>Inglés</Button>
          </Box>

          {/* Theme Selection */}
          <Box className='button-box'>
            <h3>{settings.theme}</h3>
            <Button onClick={() => setTheme('light')} variant="outlined" className='language-button'>Claro</Button>
            <Button onClick={() => setTheme('dark')} variant="outlined" className='language-button'>Oscuro</Button>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
