export const CheckEmpty = (data) => {
  if (data === "") {
    return true;
  } else {
    return false;
  }
};

export const senderValidation = (sname, saddress, stele, semail) => {
  if (CheckEmpty(sname)) {
    return { textField: "Name", Error: "Name is required" };
  } else if (CheckEmpty(stele)) {
    return { textField: "Telephone", Error: "Telephone number is required" };
  } else if (CheckEmpty(semail)) {
    return { textField: "email", Error: "Email number is required" };
  } else if (CheckEmpty(saddress)) {
    return { textField: "Address", Error: "HomeTown is required" };
  } else if (
    !stele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return { textField: "Telephone", Error: "Invalid Telephone number" };
  } else if (
    !semail.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
  ) {
    return { textField: "email", Error: "Invalid Email" };
  } else return 0;
};

export const RecieverValidation = (
  rname,
  rdistrict,
  rhometown,
  rtele,
  rprovince,
  remail
) => {
  if (CheckEmpty(rname)) {
    return { textField: "Name", Error: "Name is required" };
  } else if (CheckEmpty(rtele)) {
    return { textField: "Telephone", Error: "Telephone is required" };
  } else if (CheckEmpty(remail)) {
    return { textField: "Telephone", Error: "Email is required" };
  } else if (CheckEmpty(rprovince)) {
    return { textField: "rprovince", Error: "Province is Compulsory" };
  } else if (CheckEmpty(rdistrict)) {
    return { textField: "District", Error: "District is required" };
  } else if (CheckEmpty(rhometown)) {
    return { textField: "HomeTown", Error: "Hometown is required" };
  } else if (
    !rtele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return { textField: "Telephone", Error: "Invalid Telephone number" };
  } else if (
    !remail.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
  ) {
    return { textField: "Telephone", Error: "Invalid Telephone number" };
  } else return 0;
};
export const PickupValidation = (
  phometown,
  pPayment,
  ptele,
  pdistric,
  pbranch,
  plevel,
  pcost,
  pvehical
) => {
  if (CheckEmpty(phometown)) {
    return { textField: "HomeTown", Error: "Hometown is required" };
  } else if (CheckEmpty(pbranch)) {
    return { textField: "branch", Error: "Branch is required" };
  } else if (CheckEmpty(pdistric)) {
    return { textField: "Distric", Error: "Distric is required" };
  } else if (CheckEmpty(ptele)) {
    return { textField: "Telephone", Error: "Telephone is required" };
  } else if (CheckEmpty(pPayment)) {
    return { textField: "payment", Error: "Payment is required" };
  } else if (CheckEmpty(pvehical)) {
    return { textField: "vehical", Error: "Vehical is required" };
  } else if (CheckEmpty(plevel)) {
    return { textField: "level", Error: "Priority Level is required" };
  } else if (CheckEmpty(pcost)) {
    return { textField: "Address", Error: "Distance Cost is  is required" };
  } else if (CheckEmpty(ptele)) {
    return { textField: "Telephone", Error: "Telephone Error" };
  } else if (
    !ptele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return { textField: "Telephone", Error: "Invalid Telephone number" };
  } else return 0;
};

export const branchValidation = (bprvovince, bdis, blocation) => {
  if (CheckEmpty(bprvovince)) {
    return { textField: "province", Error: "Province is required" };
  } else if (CheckEmpty(bdis)) {
    return { textField: "District", Error: "District is required" };
  } else if (CheckEmpty(blocation)) {
    return { textField: "Location", Error: "Location is required" };
  } else return 0;
};

export const pendinSenderValidation = (sfname, slname, scity, stele) => {
  if (CheckEmpty(sfname)) {
    return { textField: "First Name", Error: "First Name is required" };
  } else if (CheckEmpty(slname)) {
    return { textField: "Last Name", Error: "Last Name is required" };
  } else if (CheckEmpty(scity)) {
    return { textField: "City", Error: "City is required" };
  } else if (CheckEmpty(stele)) {
    return { textField: "Telephone", Error: "Telephone Number is required" };
  } else if (
    !stele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return { textField: "Telephone", Error: "Invalid Telephone number" };
  } else return 0;
};
