import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./App.css";

import {
  addTask,
  removeTask,
  completeTask,
  undoCompleteTask,
  removeCompletedTask,
} from "./actions/taskActions";
// import { removeCompletedTask } from './actions/taskActions'; // Import the action

function App() {
  const list = useSelector((state) => state.tasks.list);
  const completedList = useSelector((state) => state.tasks.completedList);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues = {
    title: "",
    description: "",
    completed: false,
    status: "pending",
  };
  const removeCompleted = (index) => {
    dispatch(removeCompletedTask(index)); // Dispatch the removeCompletedTask action with the index of the task
  };

  const [checkboxStates, setCheckboxStates] = useState(
    new Array(list.length).fill(false)
  );

  const handleTaskCompletion = (index) => {
    const completedTask = list[index];
    dispatch(completeTask(index, completedTask));
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = true;
    setCheckboxStates(newCheckboxStates);
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newTask = { ...values, completed: false };
    dispatch(addTask(newTask));
    resetForm();
    setFormSubmitted(true);
  };

  const remove = (index) => {
    dispatch(removeTask(index));
  };

  const completeTask2 = (index) => {
    const completedTask = list[index];
    // const updatedTask = { ...completedTask, completed: true };
    dispatch(completeTask(index));
    // dispatch(addTask(updatedTask));
  };
  const task = (index) => {
    // const taskToUndo = completedList[index];
    dispatch(undoCompleteTask(index));
    // dispatch(addTask(taskToUndo));
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <>
      <div className="container">
        <div className="pt1">
          <h1>To Do</h1>
          <div>
            <Formik
              initialValues={formSubmitted ? {} : initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                onSubmit(values, { resetForm });
                resetForm();
              }}
            >
              <Form className="form">
                <>
                  <div className="formControl">
                    <p>Title</p>
                    <Field
                      type="text"
                      name="title"
                      className="formInputText input"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="errorMessage"
                    />
                  </div>

                  <div className="formControl">
                    <p>Description</p>
                    <Field
                      type="text"
                      name="description"
                      className="formInputDescription input"
                      as="textarea"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="errorMessage"
                    />
                  </div>

                  <div className="btn">
                    <button type="submit" className="btnAdd">
                      Add Task
                    </button>
                  </div>
                </>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="pt2">
          <div className="tasks">
            {list.length !== 0 ? (
              list.map((item, index) => (
                <div key={index} className="task">
                  <p>
                    <b>Title: </b>
                    {item.title}
                  </p>
                  <p>
                    <b>Description:</b> {item.description}
                  </p>
                  <p className="pending">Pending</p>
                  <div className="btn">
                    <button
                      className="btnRemove"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remove
                    </button>
                    <input
                      type="checkbox"
                      className="checkbox"
                      // onChange={() => {
                      //   handleTaskCompletion(index);
                      // }}
                     
                    />
                    <p><small>Mark as completed</small></p>
                  </div>
                </div>
              ))
            ) : (
              <p className="noItems">No items in the doing list.</p>
            )}
          </div>
          {/* <div className="tasks">
            {completedList.length !== 0 ? (
              completedList.map((item, index) => (
                <div key={index} className="task">
                  <p>
                    <b>Title: </b>
                    {item.title}
                  </p>
                  <p>
                    <b>Description:</b> {item.description}
                  </p>
                  <p className="complete">Complete</p>
                  <div className="btn">
                    <button
                      className="btnRemove"
                      onClick={() => {
                        removeCompleted(index); // Call the removeCompleted function with the index of the task
                      }}
                    >
                      Remove
                    </button>
                    <button
                      className="btnPending"
                      onClick={() => {
                        task(index);
                      }}
                    >
                      Pending
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="noItems">No items in the completed list.</p>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
