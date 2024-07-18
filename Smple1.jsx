import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Select, 
  MenuItem, 
  Button, 
  FormControl, 
  InputLabel, 
  Box
} from '@mui/material';
import { LockOpen, CloudUpload } from '@mui/icons-material';

const DecryptorUI = () => {
  const [decryptionType, setDecryptionType] = useState('');
  const [keyFile, setKeyFile] = useState(null);
  const [dataFile, setDataFile] = useState(null);

  const handleDecryptionTypeChange = (event) => {
    setDecryptionType(event.target.value);
    setKeyFile(null);
    setDataFile(null);
  };

  const handleKeyFileUpload = (event) => {
    setKeyFile(event.target.files[0]);
  };

  const handleDataFileUpload = (event) => {
    setDataFile(event.target.files[0]);
  };

  const handleExecute = () => {
    // Here you would implement the actual decryption logic
    console.log('Executing decryption...');
    // Simulate a download
    const dummyLink = document.createElement('a');
    dummyLink.href = URL.createObjectURL(new Blob(['Decrypted content'], {type: 'text/plain'}));
    dummyLink.download = 'decrypted_file.txt';
    dummyLink.click();
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom align="center">
            File Decryptor
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="decryption-type-label">Decryption Type</InputLabel>
            <Select
              labelId="decryption-type-label"
              value={decryptionType}
              label="Decryption Type"
              onChange={handleDecryptionTypeChange}
            >
              <MenuItem value="type1">Type 1 Decryption</MenuItem>
              <MenuItem value="type2">Type 2 Decryption</MenuItem>
            </Select>
          </FormControl>
          {decryptionType && (
            <>
              <Box sx={{ mt: 2 }}>
                <InputLabel htmlFor="key-file">Upload Key File</InputLabel>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  startIcon={<CloudUpload />}
                >
                  {keyFile ? keyFile.name : 'Choose Key File'}
                  <input
                    type="file"
                    hidden
                    onChange={handleKeyFileUpload}
                  />
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <InputLabel htmlFor="data-file">Upload Data File</InputLabel>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  startIcon={<CloudUpload />}
                >
                  {dataFile ? dataFile.name : 'Choose Data File'}
                  <input
                    type="file"
                    hidden
                    onChange={handleDataFileUpload}
                  />
                </Button>
              </Box>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button 
            fullWidth 
            variant="contained" 
            color="primary"
            startIcon={<LockOpen />}
            onClick={handleExecute}
            disabled={!decryptionType || !keyFile || !dataFile}
          >
            Execute Decryption
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DecryptorUI;
