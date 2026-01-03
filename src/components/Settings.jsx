import { Dialog, DialogActions, DialogContent, Button, Box } from "@mui/material";
import "./settings.css";

const Settings = ({ settings = {}, open, onClose, setLanguage }) => {
  const languages = settings.languages ?? [];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className="settings-dialog">
        <h2 className="settings-title">{settings.title}</h2>

        <Box className="settings-section">
          <h3 className="settings-subtitle">{settings.language}</h3>

          <Box className="button-box">
            {languages.length === 0 && (
              <span style={{ color: "#999" }}>
                No languages configured
              </span>
            )}

            {languages.map((lang) => (
              <Button
                key={lang.value}
                variant="outlined"
                onClick={() => setLanguage(lang.value)}
                sx={{
                  color: "var(--button-text-color)",
                  borderColor: "var(--button-border-color)",
                  backgroundColor: "var(--button-background)",
                  "&:hover": {
                    backgroundColor: "var(--button-hover-background)",
                    color: "var(--button-hover-text-color)",
                    borderColor: "var(--button-hover-border-color)"
                  }
                }}
              >
                {lang.name}
              </Button>
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained">
          {settings.close}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
