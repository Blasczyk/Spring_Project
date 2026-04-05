import { RadarChart, Radar, PolarAngleAxis, Legend, PolarGrid, PolarRadiusAxis} from 'recharts';
import { RechartsDevtools } from "@recharts/devtools";

const data = [
    {coreSkill: "Strength", A:20, B:31},
    {coreSkill: "Dexterity", A:20, B:31},
    {coreSkill: "Constitution", A:20, B:31},
    {coreSkill: "Intelligence", A:20, B:31},
    {coreSkill: "Wisdom", A:20, B:31},
    {coreSkill: "Charisma", A:20, B:31}

]
function Core_Abilities ({isAnimationActive = true}){
        return(
            <RadarChart 
                style={{width:'100%', maxWidth:'500px',maxHeight: '70vh', aspectRatio : 1}}
                responsive data={data}>

                <PolarGrid/>
                <PolarAngleAxis dataKey="coreSkill" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                    name="Current"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                    isAnimationActive={isAnimationActive}
                    />
                    <Radar
                        name="Historic"
                        dataKey="B"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                        isAnimationActive={isAnimationActive}
                        />
                        <Legend />
                        <RechartsDevtools />
                    </RadarChart>
                    );
                }
export default Core_Abilities;
    