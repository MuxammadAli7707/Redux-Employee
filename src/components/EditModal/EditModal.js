import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../../store/EployeeSlice";

const EditModal = ({ id, setId}) => {
  const dispatch = useDispatch();


  const editHandler = (e) => {
    e.preventDefault();
    dispatch(
      editEmployee({obj : tempObj})
    )
  }
  const employee = useSelector((state) => state.employee);

  let [tempObj, setTempObj] = useState([]);

  useEffect(() => {
    employee.filter((item) => {
      if (+item.id === +id) {
        setTempObj({
          id: item.id,
          name: item.name,
          email: item.email,
          number: item.number,
          department: item.department,
        });
      }
    });
  }, [id]);



  return (
    <div
      className="modal fade"
      id="staticBackdropEdit"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="smth d-lg-flex w-100 align-items-center justify-content-between">
              <h5 className="modal-title" id="staticBackdropLabel">
                Employee Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
          </div>
          <div className="modal-body">
            <form className="inner-edit-form d-flex">
              <div className="hero__modal-box col-6">
                <div className="hero__modal-input-box">
                  <input
                    type="text"
                    className="form-control edit-name"
                    name="full name"
                    placeholder="Full Name"
                    required
                    value={tempObj.name}
                    onChange={(e) =>
                      setTempObj({ ...tempObj, name: e.target.value })
                    }
                  />
                </div>
                <div className="hero__modal-input-box">
                  <input
                    type="email"
                    className="form-control edit-email"
                    name="email"
                    placeholder="Email"
                    value={tempObj.email}
                    required
                    onChange={(e) =>
                      setTempObj({ ...tempObj, email: e.target.value })
                    }
                  />
                </div>
                <div className="hero__modal-input-box">
                  <input
                    type="tel"
                    className="form-control edit-phone"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={tempObj.number}
                    onChange={(e) =>
                      setTempObj({ ...tempObj, number: e.target.value })
                    }
                  />
                </div>
                <div className="hero__modal-input-box">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="hero__modal-radio col-6">
                <div>
                  <p className="gender">Gender</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Other
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    className="form-control input-department edit-department"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Department"
                    required
                    value={tempObj.department}
                    onChange={(e) =>
                      setTempObj({ ...tempObj, department: e.target.value })
                    }
                  />
                  <datalist id="datalistOptions">
                    <option value="None"></option>
                    <option value="Development"></option>
                    <option value="Marketing"></option>
                    <option value="Accounting"></option>
                    <option value="HR"></option>
                  </datalist>
                </div>
                <div className="date-class">
                  <input className="form-control" type="date" defaultValue="2017-06-01" />
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Permanent Employee
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="edit-submit"
                    data-bs-dismiss="modal"
                    onClick={editHandler}
                  >
                    Submit
                  </button>
                  <button type="submit" className="modal-reset-btn" disabled>
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
