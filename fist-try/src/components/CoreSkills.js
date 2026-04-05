import { RadarChart, Radar, PolarAngleAxis, Legend, PolarGrid, PolarRadiusAxis} from 'recharts';
// import { RechartsDevtools } from "@recharts/devtools";

function CoreAbilities ({data ,isAnimationActive = true}){
        return(
            <RadarChart 
                style={{width:'100%', maxWidth:'500px',maxHeight: '70vh', aspectRatio : 1}}
                responsive data={data}>

                <PolarGrid/>
                <PolarAngleAxis dataKey="coreSkill" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                    name="Current"
                    dataKey="score"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                    isAnimationActive={isAnimationActive}
                    />
                    <Legend />
                    </RadarChart>
                    );
                }
export default Core_Abilities;
    