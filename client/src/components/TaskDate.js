import React from "react";
import moment from "moment";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li className="task-date__li">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            data-testid="task-date-overlay"
            role="button"
            aria-label="Select today as the task date"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li className="task-date__li" data-testid="task-date-tomorrow">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(
                moment()
                  .add(1, "day")
                  .format("DD/MM/YYYY")
              );
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(
                moment()
                  .add(1, "day")
                  .format("DD/MM/YYYY")
              );
            }}
            role="button"
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li className="task-date__li" data-testid="task-date-next-week">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(
                moment()
                  .add(7, "days")
                  .format("DD/MM/YYYY")
              );
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(
                moment()
                  .add(7, "days")
                  .format("DD/MM/YYYY")
              );
            }}
            role="button"
            aria-label="Select next week as the task date"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </div>
        </li>
      </ul>
    </div>
  );

export default React.memo(TaskDate);

TaskDate.propTypes = {
  setTaskDate: PropTypes.func.isRequired,
  showTaskDate: PropTypes.bool.isRequired,
  setShowTaskDate: PropTypes.func.isRequired
};
