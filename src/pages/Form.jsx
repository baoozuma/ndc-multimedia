import React from "react";
import { inputData } from "../contentDatabase/inputData";
import "../style/Form.css";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
const Form = () => {
  const renderInputField = (item) => {
    if (item.type === "select") {
      return (
        <>
            
            <select>
          {item.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </>

      );
    } else if (item.type === "datalist") {
      return (
        <div>
            <p>{`${item.question}:`}</p>
          <input list={`datalist-${item.id}`} />
          <datalist id={`datalist-${item.id}`}>
            {item.options.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </div>
      );
    } else if (item.type === "textarea") {
      return (
        <div>
            <p>{`${item.question}:`}</p>
            <textarea rows={item.rows} columns={item.columns}></textarea>
        </div>
        
      )
    } else if (item.type === "radio") {
      return (
        <div className="radio-container">
            <p>{`${item.question}:`}</p>
            <RadioGroup className="radio-group">

                {item.options.map((option) => (
                    <FormControlLabel value={option} className="radio" control={<Radio />} label={option} />
                ))}
            </RadioGroup>
            
        </div>

      );
    } else if (item.type === "checkbox") {
      return (
        <div className="checkbox">
            <p>{`${item.question}:`}</p>
            <FormGroup>
            {item.options.map((option) => (
            <FormControlLabel control={<Checkbox defaultChecked />} label={option} />
            ))}
            </FormGroup>
        </div>
        );
       

    } else if (item.type === "submit") {
        return <Button variant="contained" className="submit-button">Gửi</Button>
    } 
    else {
      return (
      <>
        <p>{`${item.question}:`}</p>
        <input type={item.type} />
      </>
      )
    }
  };

  return (
    <div className="outground">
    <div className="inground">
    <h1>ĐĂNG KÍ ỨNG TUYỂN</h1>
    <form>
        
        {inputData.map((item) => (
          <label key={item.id}>
            
            {renderInputField(item)}
            <br />
          </label>
        ))}
      </form>
    </div>

    </div>
  );
};

export default Form;