import React, { useState } from "react";
import "./index.css";
import "./modules.css"
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  // const modulesList = modules.filter((module) => module.course === courseId);
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [selectedModule, setModule] = useState({
  //   _id: "0",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });
  // const addModule = (module: any) => {
  //   const newModule = {
  //     ...module,
  //     _id: new Date().getTime().toString()
  //   };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId);
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === selectedModule._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const selectedModule = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();



  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="d-flex flex-column flex-lg-row w-100">
        <div className="flex-fill">
          <ul className="list-group wd-modules">

            <div className="wd-align-right wd-div-mb">
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10">Collapse all</button>
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10">View progress</button>
              <div className="dropdown wd-pr">
                <button className="btn wd-btn-gray dropdown-toggle wd-btn-p-5 wd-mr wd-border-rad-10" type="button"
                  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-check-circle-o text-success"></i> Publish all
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#"><i
                    className="fa fa-check-circle text-success wd-border-rad-10"></i>
                    Publish all</a></li>
                  <li><a className="dropdown-item" href="#">Publish all modules and items</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Unpublish</a></li>
                </ul>
              </div>
              <button className="btn btn-danger wd-mr wd-btn-p-5 wd-border-rad-10"><i className="fa fa-plus"
                aria-hidden="true"></i>
                Module</button>
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10"><i
                className="fa fa-ellipsis-v ms-2 wd-icon-pr-8"></i></button>
            </div>

            <hr />

            <ul className="list-group wd-modules">
              <li className="list-group-item" >
                {/* <button onClick={() => { addModule(selectedModule) }}>Add</button> */}

                {/* <button onClick={updateModule}>
                  Update
                </button> */}


                {/* <input value={selectedModule.name}
                  onChange={(e) => setModule({
                    ...selectedModule, name: e.target.value
                  })}
                /> */}
                {/* <input
                  value={selectedModule.name}
                  onChange={(e) =>
                    dispatch(setModule({ ...selectedModule, name: e.target.value }))
                  } /> */}
                {/* <textarea value={selectedModule.description}
                  onChange={(e) => setModule({
                    ...selectedModule, description: e.target.value
                  })}
                /> */}
                {/* <textarea
                  value={selectedModule.description}
                  onChange={(e) =>
                    dispatch(setModule({ ...selectedModule, description: e.target.value }))
                  } /> */}
                <div className="mb-3">
                  <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                  <input value={selectedModule.name}
                    onChange={(e) => dispatch(setModule({ ...selectedModule, name: e.target.value }))}
                    type="text" className="form-control" id="assignment-name" />
                </div>
                <div className="mb-3">
                  <textarea
                    value={selectedModule.description}
                    onChange={(e) => dispatch(setModule({ ...selectedModule, description: e.target.value }))}
                    className="form-control" id="exampleFormControlTextarea1" rows={4}>
                  </textarea>
                </div>
                <div>
                  <button className="btn btn-danger m-1 btn-style"
                    onClick={() => dispatch(addModule({ ...selectedModule, course: courseId }))}>
                    Add
                  </button>
                  <button className="btn btn-success m-1 btn-style"
                    onClick={() => dispatch(updateModule(selectedModule))}>
                    Update
                  </button>
                </div>

              </li>

              {moduleList.filter((module) => module.course === courseId)
                .map((module, index) => (
                  <li
                    className="list-group-item"
                    onClick={() => dispatch(setModule(module))}
                  >
                    {/* <button
                      onClick={(event) => { setModule(module); }}>
                      Edit
                    </button> */}
                    {/* <button className="btn btn-success m-1"
                      onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button> */}

                    {/* <button
                      onClick={() => deleteModule(module._id)}>
                      Delete
                    </button> */}
                    {/* <button className="btn btn-danger m-1"
                      onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button> */}

                    <div>
                      <FaEllipsisV className="me-2 wd-mr-n" />
                      <FaEllipsisV className="me-2" />
                      <button className="btn dropdown-toggle me-2"></button>

                      {module.name}
                      <span className="float-end">
                        <button className="btn btn-success m-1 btn-style"
                          onClick={() => dispatch(setModule(module))}>
                          Edit
                        </button>
                        <button className="btn btn-danger m-1 btn-style"
                          onClick={() => dispatch(deleteModule(module._id))}>
                          Delete
                        </button>
                        <FaCheckCircle className="text-success" style={{ marginRight: "5px" }} />
                        <button className="btn dropdown-toggle me-2" style={{ marginRight: "5px" }}></button>
                        <FaPlusCircle className="ms-2" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </div>
                    {selectedModule._id === module._id && (
                      <ul className="list-group">
                        {module.lessons?.map((lesson: { name: string }) => (
                          <li className="list-group-item">
                            <FaEllipsisV className="me-2 wd-mr-n" />
                            <FaEllipsisV className="me-2" />
                            {lesson.name}
                            <span className="float-end">
                              <FaCheckCircle className="text-success" />
                              <FaEllipsisV className="ms-2" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </ul>
        </div>
      </div>

    </>
  );
}
export default ModuleList;