
import { quests } from "../data/questData";
/**
 * The Quests needs to have three types of Quests.
 * Daily: Things you should do Daily.
 * Short-terrm: Small Goals required to achieve the primary.
 * Primary: the Main goal
 */
function CurrentQuests(){
    // First thing is primary quest.
    const listItem = quests.map( quest =>
        <li key={quests.id}>
            <b>quests.name</b>
        </li>
    )
}


export  default CurrentQuests;