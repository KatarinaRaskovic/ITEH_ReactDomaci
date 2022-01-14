import React,{useState} from 'react'
import FormName from './FormName';
import Button from './components/Button';
import TextBox from './components/TextBox';
import './Form.css';

const FormHome = () => {
    const [name, setName] = useState("");
    const [pName, setPName]=useState("");

  
    function getName(e) {
        e.preventDefault();
        setPName(name);
    }
 
    return (
        <>
        <div className="form-container">
        <div className="form-content">
        <form className="form">
        <div className='podloga'>
         
          <div className="form-inputs">
              
              <TextBox 
                  id="name" 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
              />
          </div>
          <Button className="form-input-btn-name" text="Confirm" onClick={(e) => getName(e)}/>
          
          </div>
         
      </form>
        
            </div>
                <FormName name={pName}/>
                
            </div>
        </>
    )
}

export default FormHome