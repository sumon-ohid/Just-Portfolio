import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import axios from 'axios';
import { useAuth } from '../../../AuthContext';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface EmailAccount {
  id: number;
  email: string;
  provider: string;
}

export default function GetConnectedEmails() {
  const { user } = useAuth();
  const [connectedEmails, setConnectedEmails] = React.useState<EmailAccount[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState<string>('');

  const fetchConnectedEmails = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiBaseUrl}/api/emails/connected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const emails = (response.data as EmailAccount[]).map((email: EmailAccount, index: number) => ({ ...email, id: index }));
      setConnectedEmails(emails);
    } catch (error) {
      console.error('Error fetching connected emails:', error);
      setError('Error fetching connected emails');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEmail = async (email: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      await axios.delete(`${apiBaseUrl}/api/emails/connected/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setConnectedEmails(connectedEmails.filter(account => account.email !== email));
    } catch (error) {
      console.error('Error deleting email:', error);
      setError('Error deleting email');
    }
  };

  React.useEffect(() => {
    fetchConnectedEmails();
  }, []);

  const filteredEmails = connectedEmails.filter(emailAccount =>
    emailAccount.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', flex: 1 },
    // { field: 'provider', headerName: 'Provider', flex: 1 },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEmail(params.row.email)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600', overflow: 'auto' }}
        >
          Connected Emails
        </Typography>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField
            placeholder='Search'
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 1, p: .5 }}>
            <SearchIcon />
          </Box>
        </Box>
        {connectedEmails.length > 0 ? (
          <Box sx={{ height: 400, width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
            <DataGrid
              rows={filteredEmails}
              columns={columns}
              pagination
              paginationMode="server"
              rowCount={100}
              disableRowSelectionOnClick
            />
          </Box>
        ) : (
          <Typography>No connected accounts</Typography>
        )}
      </CardContent>
    </Card>
  );
}
