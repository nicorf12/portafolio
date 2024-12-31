import React from 'react';
import { Dialog, DialogActions, DialogContent, Button, Box } from '@mui/material';
import './settings.css';

const Settings = ({ settings, open, onClose, setLanguage, setTheme }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className='settings-dialog'>
        <h2>{settings.title}</h2>
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Language Selection */}
          <Box className='button-box'>
            <h3>{settings.languaje}</h3>
            {settings.languajes.map((lang) => (
              <Button
                key={lang.value}
                onClick={() => setLanguage(lang.value)}
                variant="outlined"
                className='language-button'
              >
                {lang.name}
              </Button>
            ))}
          </Box>

          {/* Theme Selection */}
          <Box className='button-box'>
            <h3>{settings.theme}</h3>
            {settings.themes.map((theme) => (
              <Button
                key={theme.value}
                onClick={() => setTheme(theme.value)}
                variant="outlined"
                className='language-button'
              >
                {theme.name}
              </Button>
            ))}
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
