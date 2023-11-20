import React from 'react'
import { createContext , useState} from 'react'



export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [notes,setNotes] =useState([]);
    const [archiveNotes,setArchiveNotes] =useState([]);
    const[showDelete,setShowDelete]=useState(false);
  return (
    <DataContext.Provider value = {{
       notes,
       setNotes,
       archiveNotes,
       setArchiveNotes,
        showDelete,
        setShowDelete

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;

