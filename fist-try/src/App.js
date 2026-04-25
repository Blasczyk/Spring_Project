import { useState } from "react";
import Core_Abilities from "./components/CoreSkills";
import { applyQuestReqards, formatSkillsForRadar } from "./utils/questHelpers";
import { initialCoreSkills } from "./data/coreSkillsData";
import QuestSkillSelector from "./components/QuestSkillSelector";
import CurrentQuests from "./components/Quest";
import { FoundationQuests, PrimaryQuests, SideQuests } from "./components/Quest";
import CurrentQuests from "./components/Quest";
import { FoundationQuests, PrimaryQuests, SideQuests } from "./components/Quest";


function App(){
  const [skills, setSkills] = useState(initialCoreSkills);
  const data = formatSkillsForRadar(skills);

  const foundationQuests = quests.filter(
    (quest) => quest.category === "Foundation"
  );

  const primaryQuests = quests.filter(
    (quest) => quest.category === "Primary"
  );

  const sideQuests = quests.filter(
    (quest) => quest.category === "Side"
  );
  return(
    <>
    {/* <div>
      <QuestSkillSelector />
    </div> */}
    <div>
        <h1>Profile:</h1>
        <h2>Developing title:</h2>
        <h2>Level:0</h2>
        <h3>EXP: |=======|</h3>


        <h3>Quests:</h3>


        <h4>Foundation:</h4>
        <QuestList quests={foundationQuests} />

        <h4>Primary Arc:</h4>
        <QuestList quests={primaryQuests} />

        <h4>Side Quests:</h4>
        <QuestList quests={sideQuests} />


        <h3>Skills:</h3>
        <h3>Core Skills:</h3>
        <Core_Abilities data={data} />
        <h3>Will Power Rating:</h3>
        
    </div>
    {/* <div>
      <QuestArc />
    </div> */}
    </>
  );
}
export default App;