import { json } from "react-router-dom";
import * as yup from "yup";

export const CheckEmpty = (data) => {
  if (data.trim() === "" || data.trim() === "") {
    return true;
  } else {
    return false;
  }
};



export const senderValidation = (sname,saddress,stele) => {
if(CheckEmpty(sname)){ 
    return ({textField:"Name", Error:"Name is Compulsary"})
  }else if(CheckEmpty(stele)){
    return ({textField:"Telephone", Error:"Telephone number is Compulsary"})
  }else if(CheckEmpty(saddress)){
    return ({textField:"Address", Error:"Address is Compulsary"}) 
  }else if(!stele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
    return ({textField:"Telephone", Error:"Invalid Telephone number"})
  }else
  return 0
};

export const RecieverValidation = (rname,rdistrict,rhometown,rtele) => {
if(CheckEmpty(rname)){ 
    return ({textField:"Name", Error:"Name Error"})
  }else if(CheckEmpty(rdistrict)){
    return ({textField:"District", Error:"District Error"})
  }else if(CheckEmpty(rhometown)){
    return ({textField:"HomeTown", Error:"Hometown Error"})
  }else if(CheckEmpty(rtele)){
    return ({textField:"Telephone", Error:"Telephone Error"})
  }else if(!rtele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
    return ({textField:"Telephone", Error:"Invalid Telephone number"})
  }else
  return 0
};
export const PickupValidation = (pvehical,paddress,phometown,pPayment,ptele,pdistric) => {
if(CheckEmpty(pvehical)){ 
    return ({textField:"vehical", Error:"Vehical Error"})
  }else if(CheckEmpty(paddress)){
    return ({textField:"Address", Error:"Address Error"})
  }else if(CheckEmpty(phometown)){
    return ({textField:"HomeTown", Error:"Hometown Error"})
  }else if(CheckEmpty(pPayment)){
    return ({textField:"payment", Error:"Payment Error"})
  }else if(CheckEmpty(ptele)){
    return ({textField:"Telephone", Error:"Telephone Error"})
  }else if(CheckEmpty(pdistric)){
    return ({textField:"Distric", Error:"Distric Error"})
  }else if(!ptele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
    return ({textField:"Telephone", Error:"Invalid Telephone number"})
  }else
  return 0
};



