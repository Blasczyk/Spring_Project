import { useState } from "react";
import Core_Abilities from "./components/CoreSkills";
import { applyQuestReqards, formatSkillsForRadar } from "./utils/questHelpers";
import { initialCoreSkills } from "./data/coreSkillsData";
import QuestSkillSelector from "./components/QuestSkillSelector";
import CurrentQuests from "./components/Quest";



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

        <h3>Current Quests:</h3>
        <h4>Foundation:</h4>
        <ul>
            <li key={quests.id}>
              <h5>{quests.name}</h5>
              <p>Category: {quests.category}</p>
            </li>
          
        </ul>
        <Core_Abilities data={data} />
    </div>
    {/* <div>
      <QuestArc />
    </div> */}
    </>
  );
}
export default App;