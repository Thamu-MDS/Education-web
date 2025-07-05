import { useState } from 'react';
import { ProgramData } from '../data/programData';
import ProgramSelector from '../components/ProgramSelector';
import SemesterSection from '../components/SemesterSection';
import ElectiveSection from '../components/ElectiveSection';

function Pricedata() {
  const [selectedProgram, setSelectedProgram] = useState<keyof typeof ProgramData>('MBA');

  return (
    <div className="min-h-screen bg-[#0B1C39] text-white">
    
      <ProgramSelector 
        selectedProgram={selectedProgram} 
        onProgramChange={setSelectedProgram} 
      />
      <SemesterSection programData={ProgramData[selectedProgram]} />
      {ProgramData[selectedProgram].electives && (
        <ElectiveSection electives={ProgramData[selectedProgram].electives!} />
      )}
     
    </div>
  );
}


export default Pricedata;