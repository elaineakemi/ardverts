import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const Search = () => (
  <TextField
    id="input-with-icon-textfield"
    placeholder="Search for items, members..."
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    variant="outlined"
    fullWidth
    sx={{ p: '10px 32px' }}
  />
)

export { Search }
