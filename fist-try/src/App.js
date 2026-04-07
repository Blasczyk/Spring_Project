import { useState } from "react";
import Core_Abilities from "./components/CoreSkills";
import { applyQuestReqards, formatSkillsForRadar } from "./utils/questHelpers";
import { initialCoreSkills } from "./data/coreSkillsData";
import QuestSkillSelector from "./components/QuestSkillSelector";




function App(){
  const [skills, setSkills] = useState(initialCoreSkills);
  const data = formatSkillsForRadar(skills);
  return(
    <>
    {/* <div>
      <QuestSkillSelector />
    </div> */}
    <div>
        <h1>Profile:</h1>
        <h2>Developing title:</h2>
        
        <Core_Abilities data={data} />
    </div>
    {/* <div>
      <QuestArc />
    </div> */}
    </>
  );
}
export default App;