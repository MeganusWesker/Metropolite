import { React, useEffect, useState } from "react";
import { sendInquiryFunc } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import "./SendInquiry.css";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from "../../constants/productConstants";

const SendInquiry = () => {

  const dispatch = useDispatch();
  const alert = useAlert();


  const { loading, error, message } = useSelector((state) => state.inquiry);



  const [email, setEmail] = useState("");

  const [queryTextarea, setQueryTextArea] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [images, setImages] = useState([]);
  const [role, setRole] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  


  const sendInquiryHanlder= (e)=>{
      e.preventDefault();
      const myImages=[]

      images.forEach((image)=>{
        myImages.push(image)
      });

      dispatch(sendInquiryFunc(email,queryTextarea,countryCode,role,myImages))
  }



  useEffect(() => {

    if(message){
      alert.success(message);
      dispatch({type:CLEAR_MESSAGE})
    }

    if(error){
      alert.success(error);
      dispatch({type:CLEAR_ERRORS})
    }

  }, [dispatch, alert, error,message])
  

  return (
    <div className="send-inquiry">
      <form className="send-inquiry-form" onSubmit={sendInquiryHanlder}>
        <h2 className="send-inquiry-heading">Send Inquiry</h2>
        <textarea
          name="send-inquiry-textarea"
          id="send-inquiry-textarea"
          cols="30"
          rows="10"
          placeholder="I am interested your products. please contact me back on Email/Phone"
          value={queryTextarea}
          onChange={(e)=>setQueryTextArea(e.target.value)}
        ></textarea>
        <input
          multiple
          type="file"
          accept="image/*"
          name="attachfile"
          onChange={createProductImagesChange}
          className="send-inquiry-child"
        />

                       <div id="createProductFormImage">
                        {imagesPreview.map((image, index) => (
                        <img key={index} src={image} alt="Product Preview" />
                        ))}
                    </div>
        <input
          type="email"
          placeholder="email"
          className="send-inquiry-child send-inquiry-text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone no. with country code"
          className="send-inquiry-child send-inquiry-text"
          value={countryCode}
          onChange={(e)=>setCountryCode(e.target.value)}
        />
  
        <label htmlFor="user"> Who Are You?</label>
        <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="Supplier">Supplier</option>
        </select>
        <input type="submit" disabled={loading} className="send-inquiry-submit" />
      </form>
    </div>
  );
};

export default SendInquiry;
