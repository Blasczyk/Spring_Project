import { useState } from "react";
import CoreAbilities from "./components/CoreSkills";
import { applyQuestReqards, formatSkillsForRadar } from "./utils/questHelpers";
import { initialCoreSkills } from "./data/coreSkillsData";




function App(){
  const [skills, setSkills] = useState(initialCoreSkills);
  const data = formatSkillsForRadar(skills);
  return(
    <div>
        <h1>Profile:</h1>
        <h2>Developing title:</h2>
        
        <Core_Abilities data={data} />
    </div>
  );
}
export default App;