import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, Download, Lock, Upload } from 'lucide-react';

const DecryptorUI = () => {
  const [decryptionType, setDecryptionType] = useState('');
  const [keyFile, setKeyFile] = useState(null);
  const [dataFile, setDataFile] = useState(null);

  const handleDecryptionTypeChange = (value) => {
    setDecryptionType(value);
    setKeyFile(null);
    setDataFile(null);
  };

  const handleKeyFileUpload = (e) => {
    setKeyFile(e.target.files[0]);
  };

  const handleDataFileUpload = (e) => {
    setDataFile(e.target.files[0]);
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">File Decryptor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="decryption-type">Decryption Type</Label>
              <Select onValueChange={handleDecryptionTypeChange}>
                <SelectTrigger id="decryption-type">
                  <SelectValue placeholder="Select decryption type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1 Decryption</SelectItem>
                  <SelectItem value="type2">Type 2 Decryption</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {decryptionType && (
              <>
                <div>
                  <Label htmlFor="key-file">Upload Key File</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="key-file" type="file" onChange={handleKeyFileUpload} />
                    <Upload className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="data-file">Upload Data File</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="data-file" type="file" onChange={handleDataFileUpload} />
                    <Upload className="h-4 w-4" />
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleExecute}
            disabled={!decryptionType || !keyFile || !dataFile}
            className="w-full"
          >
            <Lock className="mr-2 h-4 w-4" /> Execute Decryption
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DecryptorUI;
