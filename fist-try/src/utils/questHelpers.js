import function  applyQuestReqards(currentSkills, rewards){
    // User a sspread operator to clone the object. This is for React.
    const updatedSkills = { ...currentSkills }; 

    // This currently just add base points to our core skills, eventually
    // I will Change the rewared to be an addition of experience, that will go to levelups.
    for (const skill in rewards){
        updatedSkills[skill] = (updatedSkills[skill] ?? 0) + rewards[skill];
    }
    return updatedSkills;
}