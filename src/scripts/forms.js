import './forms.css';
import {useState} from 'react';

function Form(){
    const fields = ["Personal Information","Education","Experience",""]
    const heading = "Personal Information";
    const placeholders_pi = ["First name" ,"Second name", "Title", "Address","Email", "Contact" ];
    const placeholders_ed = [""];
    
    function addEd(){
        
        
    }
    const [data, setdata] = useState({
        fname:" ",
        lname: " ",
        Title: " ",
        Address: " ",
        Email:" ",
        Contact: " ",

    });
    
    function getData(val){
        console.log(val.target.name);
        //console.log(val.target.value);
        setdata((prevValue)=>{
            
            
            if(val.target.name =="First name"){
                return{
                    fname: val.target.value,
                    lname: prevValue.lname,
                    Title: prevValue.Title,
                    Address: prevValue.Address,
                    Email: prevValue.Email,
                    Contact: prevValue.Contact,

                }
            }
            if(val.target.name == "Second name"){
                return{
                    fname: prevValue.fname,
                    lname: val.target.value,
                    Title: prevValue.Title,
                    Address: prevValue.Address,
                    Email: prevValue.Email,
                    Contact: prevValue.Contact,
                }


            }
            if(val.target.name == "Title"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    Title: val.target.value,
                    Address: prevValue.Address,
                    Email: prevValue.Email,
                    Contact: prevValue.Contact,
                }


            }
            if(val.target.name == "Address"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    Title: prevValue.Title,
                    Address: val.target.value,
                    Email: prevValue.Email,
                    Contact: prevValue.Contact,
                }


            }
            if(val.target.name == "Email"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    Title: prevValue.Title,
                    Address: prevValue.Address,
                    Email: val.target.value,
                    Contact: prevValue.Contact,
                }


            }
            if(val.target.name == "Contact"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    Title: prevValue.Title,
                    Address: prevValue.Address,
                    Email: prevValue.Email,
                    Contact: val.target.value,
                }


            }
            
            /*if else{
                return {fname: prevValue,
                    lname: prevValue,
                    Title: prevValue,
                    Address: prevValue,
                    Email: prevValue,
                    Contact: prevValue,
                }

            }*/
            
        
        })
        

       
        


    }

    

    

    return(
        <>
        <div className = "main-content">
            <div className = "box">
            <h1 className = "heading">{heading}</h1>
            {
                placeholders_pi.map(inputText =>{
                    return(
                        <div className="input_box" >
                             <input type = "text" className = "labels" placeholder={inputText} name = {inputText} onChange ={getData}>             

                             </input>
                          <br></br>
                          
                        </div>
                    )

                })
            }
           
            
            </div>




            
            <div className = "box">
            <h1 className = "heading">Education</h1>
            <button className= "addButton" onClick ={addEd}>
                Add +
            </button>
                 
                            
                </div>



                
            <div className="CVbox">
                <div className="cv-header">
                    <h1>{data.fname} {data.lname} </h1> <h2>{data.Title}</h2>
                    <p>{data.Address}</p>
                    <p>{data.Email} </p>
                    <p>{data.Contact}</p>
                </div>

                <div className="EdBox">


                </div>
            </div>
            
    
        </div>
        
        
        </>

    );

}

export default Form;