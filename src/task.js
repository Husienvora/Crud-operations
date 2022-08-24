import React, { useState, useContext, useEffect, useRef } from "react";
import { useGlobalContext } from "./context.js";
function Task() {
  const [Currtask, setCurrtask] = useState("");
  const [Upadting, setUpdating] = useState(false);
  const [Updatedoc, setUpdateddoc] = useState({
    name: null,
    completed: false,
  });
  const [UpdateID, setUpdateID] = useState();
  const { getAllTask, createTask, UpdateTask, deleteTask, Tasks } =
    useGlobalContext();
  const [CurrStatus, setCurrStatus] = useState();
  const [Refresh, setRefresh] = useState(false);
  useEffect(() => {
    getAllTask();
  }, [Refresh]);

  const button = useRef();
  const handleSubmit = () => {
    createTask(Currtask);
  };
  const Updatetask = () => {
    UpdateTask(UpdateID, Updatedoc.name, Updatedoc.completed);
  };
  return (
    <>
      <div>
        <form className="task-form" onSubmit={handleSubmit}>
          <h3>Task Manager</h3>
          <div className="form-control">
            <input
              type="text"
              className="task"
              placeholder="e.g. Cycling"
              value={Currtask}
              onChange={(e) => setCurrtask(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Create
            </button>
          </div>
        </form>
        <div>
          {Tasks ? (
            Tasks["tasks"].map((task) => {
              return (
                // <>
                //   <div>{task.name}</div>
                //   <div>{String(task.completed)}</div>
                // </>
                <>
                  <table>
                    <tr>
                      <td>{task.name}</td>
                      <td>{String(task.completed)}</td>
                    </tr>
                  </table>
                  <button
                    onClick={async () => {
                      await deleteTask(task._id);
                      setRefresh(!Refresh);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setUpdating(true);
                      setUpdateID(task._id);
                    }}
                  >
                    Update
                  </button>
                </>
              );
            })
          ) : (
            <div></div>
          )}
          {Upadting ? (
            <div>
              <form className="task-form" onSubmit={Updatetask}>
                <div className="form-control">
                  <input
                    type="text"
                    className="task"
                    placeholder="e.g. Cycling"
                    value={Updatedoc.name}
                    onChange={(e) =>
                      setUpdateddoc({
                        ...Updatedoc,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="taskstatus"
                    placeholder="Status"
                    value={Updatedoc.completed}
                    onChange={(e) =>
                      setUpdateddoc({
                        ...Updatedoc,
                        completed: e.target.value,
                      })
                    }
                  />

                  <button type="submit" className="submit-btn">
                    Update
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
export default Task;
