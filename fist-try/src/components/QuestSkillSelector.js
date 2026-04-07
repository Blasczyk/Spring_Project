import { useState } from "react";

const availableSkills = [
    "Strength",
    "Dexterity",
    "Consitution",
    "Intelligence",
    "Wisdom",
    "Charisma"
];

function QuestSkillSelector() {
    const [allocations, setAllocations] = useState({
      Strength: 0,
      Dexterity: 0,
      Consitution: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0
    });
  const totalUsed = Object.values(allocations).reduce((sum, val) => sum + val, 0);
  const remaining = 100 - totalUsed;

  function handleChange(skill, newValue) {
    const value = Number(newValue);
    const currentValue = allocations[skill];
    const usedByOthers = totalUsed - currentValue;
    const maxAllowed = 100 - usedByOthers;
    const safeValue = Math.min(value, maxAllowed);

    setAllocations((prev) => ({
      ...prev,
      [skill]: safeValue,
    }));
  }

  return (
    <div>
      <h2>Quest Skill Selector</h2>
      <p>Remaining: {remaining}%</p>

      {availableSkills.map((skill) => (
        <div key={skill} style={{ marginBottom: "16px" }}>
          <label>
            {skill}: {allocations[skill]}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={allocations[skill]}
            onChange={(e) => handleChange(skill, e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}

export default QuestSkillSelector;