import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { Projects } from "../Projects";
import AddProject from "../AddProject";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
        >
          <div
            data-testid="inbox-action"
            onClick={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            onKeyDown={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            aria-label="Show tasks for Inbox"
          >
            <span>
              <FaInbox />
            </span>

            <span>Inbox</span>
          </div>
        </li>

        <li
          data-testid="inbox"
          className={active === "today" ? "active" : undefined}
        >
          <div
            data-testid="inbox-action"
            onClick={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            onKeyDown={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            aria-label="Show tasks for today"
          >
            <span>
              <FaRegCalendar />
            </span>

            <span>Today</span>
          </div>
        </li>

        <li
          data-testid="inbox"
          className={active === "next_7" ? "active" : undefined}
        >
          <div
            data-testid="inbox-action"
            onClick={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            onKeyDown={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            aria-label="Show tasks for next 7 Days"
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        aria-label="show projects"
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects"> {showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;
