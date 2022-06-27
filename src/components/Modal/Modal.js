import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../store/EployeeSlice";
const Modal = () => {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.employee);

  // input
  let [fnames, setfnames] = useState('afd')
  let [emails, setEmails] = useState('@')
  let [phones, setPhones] = useState('45464460')
  let [citys, setCitys] = useState('ewe')


  // validation
  let [fname, setfname] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let [city, setCity] = useState('')


  console.log(fnames);

  let [tempObj, setTempObj] = useState({
    id: employee.length + 1,
    name: "",
    email: "",
    number: "",
    department: "",
  });

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ obj: tempObj }));
  };

  const nameHandler = (e) => {
    setfnames(e.target.value)
    setTempObj({ ...tempObj, name: e.target.value });
  };

  const cityHandler = (e) => {
    setCitys(e.target.value)
    setTempObj({ ...tempObj, city: e.target.value });
  };

  const emailHandler = (e) => {
    setEmails(e.target.value)
    setTempObj({ ...tempObj, email: e.target.value });
  };

  const departHandler = (e) => {
    setTempObj({ ...tempObj, department: e.target.value });
  };

  const phoneHandler = (e) => {
    setPhones(e.target.value)
    setTempObj({ ...tempObj, number: e.target.value });
  };

  useEffect(() => {
    if(fnames === "" || fnames.match(/[0-9]/) || fnames.match(/[!@#&%*$^]/) || fnames.includes("  ") || fnames.length < 2) {
      setfname(true)
    }else {
      setfname(false)
    }
    if(! emails.includes('@') && ! emails.includes('.')) {
      setEmail(true)
    }else {
      setEmail(false)
    }
    if(phones.length === "" || phones.length < 8 || Number.isInteger(phones)) {
      setPhone(true)
    }else {
      setPhone(false)
    }
    if(citys === "" || citys.match(/[0-9]/) || citys.match(/[!@#&%*$^]/) || citys.includes("  ") || citys.length < 2) {
      setCity(true)
    }else {
      setCity(false)
    }
  }, [fnames, emails, phones, citys]);

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
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
              <form className="inner-modal-form d-flex">
                <div className="hero__modal-box col-6">
                  <div className="hero__modal-input-box">
                    <input
                      type="text"
                      className="input-name form-control"
                      name="full name"
                      placeholder="Full Name"
                      required
                      onChange={nameHandler}
                    />
                    <p className={`name-hint hint ${fname ? 'block' : "none"}`}>This field is required.</p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="email"
                      className=" form-control input-email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={emailHandler}
                    />
                    <p className={`name-hint hint ${email ? 'block' : "none"}`}>Email is not valid.</p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="number"
                      className=" form-control input-phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      onChange={phoneHandler}
                    />
                    <p className={`name-hint hint ${phone ? 'block' : "none"}`}>Minimum 8 numbers required.</p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="text"
                      className=" form-control city-input"
                      name="city"
                      placeholder="City"
                      onChange={cityHandler}
                    />
                    <p className={`name-hint hint ${city ? 'block' : "none"}`}>This field is required.</p>
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={departHandler}
                      className="form-control input-department"
                      list="datalistOptions"
                      id="exampleDataList"
                      placeholder="Department"
                      required
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
                    <input className="form-control" type="date" defaultValue="2022-06-24" />
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
                      onClick={addHandler}
                      type="submit"
                      className="modal-submit-btn"
                      data-bs-dismiss="modal"
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
    </div>
  );
};

export default Modal;
