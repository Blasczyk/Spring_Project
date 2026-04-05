export function  applyQuestReqards(currentSkills, rewards){
    // User a sspread operator to clone the object. This is for React.
    const updatedSkills = { ...currentSkills }; 

    // This currently just add base points to our core skills, eventually
    // I will Change the rewared to be an addition of experience, that will go to levelups.
    for (const skill in rewards){
        updatedSkills[skill] = (updatedSkills[skill] ?? 0) + rewards[skill];
    }
    return updatedSkills;
}

export function formatSkillsForRadar(skills){
    return [
        {coreSkill: "Strength", score: skills.strength},
        {coreSkill: "Dexterity", score: skills.Dexterity},
        {coreSkill: "Constitution", score: skills.Constitution},
        {coreSkill: "Intelligence",score: skills.Intelligence},
        {coreSkill: "Wisdom", score: skills.Wisdom},
        {coreSkill: "Charisma", score: skills.Charisma}
    
    ]
}