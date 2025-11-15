import Calendar from './Components/Calendar'
import './App.css'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{display: 'flex', gap: 10}}>
      <Calendar date={new Date(2020, 3, 23)} /> 
      <Calendar date={new Date(2022, 10, 3)} />
    </Box>
  )
}

export default App
