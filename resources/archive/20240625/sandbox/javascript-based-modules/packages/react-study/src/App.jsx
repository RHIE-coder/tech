import {Routes, Route} from 'react-router-dom';
import ColorShow from '@/pages/ColorShow';

function App() {
  return (
    <Routes>
      <Route index element={<ColorShow />} />
    </Routes>
  )
}

export default App
