import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const charbyApi = '/api/charbeez/1';

function CharbyHeader() {
  const [name, setName] = useState('');

  const getCharbyData = async () => {
    // Create the request path
    const path = charbyApi;

    // Make the request to the Java API
    const response = await fetch(path);

    // Parse the response from a string into json.
    const data = await response.json();

    // Set the greeting value.
    setName(data.name);
  };

  useEffect(() => {
    getCharbyData();
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharbyHeader;
