
import { quests } from "../data/questData";
/**
 * The Quests needs to have three types of Quests.
 * Daily: Things you should do Daily.
 * Short-terrm: Small Goals required to achieve the primary.
 * Primary: the Main goal
 */
import { quests } from "../data/questData";

export function FoundationQuests() {
  const listItems = quests
    .filter((quest) => quest.category === "Foundation")
    .map((quest) => (
      <li key={quest.id}>
        <b>{quest.name}</b>
      </li>
    ));

  return <ul>{listItems}</ul>;
}

export function PrimaryQuests() {
  const listItems = quests
    .filter((quest) => quest.category === "Primary")
    .map((quest) => (
      <li key={quest.id}>
        <b>{quest.name}</b>
      </li>
    ));

  return <ul>{listItems}</ul>;
}

export function SideQuests() {
  const listItems = quests
    .filter((quest) => quest.category === "Side")
    .map((quest) => (
      <li key={quest.id}>
        <b>{quest.name}</b>
      </li>
    ));

  return <ul>{listItems}</ul>;
}