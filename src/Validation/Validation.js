export const CheckEmpty = (data) => {
  if (data == null) {
    return true;
  } else if (data === "") {
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
  //console.log(rdistrict);

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

export const pendinSenderValidation = (
  sfname,
  slname,
  scity,
  stele,
  rpro,
  rdis,
  rstno,
  rstreet,
  rcity,
  rtele,
  pstno,
  pstreet,
  pcity,
  pdis,
  ptype
) => {
  if (CheckEmpty(sfname)) {
    return { textField: "First Name", Error: "Sender First Name is required" };
  } else if (CheckEmpty(slname)) {
    return { textField: "Last Name", Error: "Sender Last Name is required" };
  } else if (CheckEmpty(scity)) {
    return { textField: "City", Error: "Sender City is required" };
  } else if (CheckEmpty(stele)) {
    return {
      textField: "Telephone",
      Error: "Sender Telephone Number is required",
    };
  } else if (CheckEmpty(rpro)) {
    return { textField: "Province", Error: "Reciver province is required" };
  } else if (CheckEmpty(rdis)) {
    return { textField: "District", Error: "Reciver District is required" };
  } else if (CheckEmpty(rstno)) {
    return {
      textField: "Street NO",
      Error: "Reciver Street No Number is required",
    };
  } else if (CheckEmpty(rstreet)) {
    return { textField: "Street", Error: "Reciver Street is required" };
  } else if (CheckEmpty(rcity)) {
    return { textField: "City", Error: "Reciver City is required" };
  } else if (CheckEmpty(rtele)) {
    return {
      textField: "Telephone",
      Error: "Reciver Telephone Number is required",
    };
  } else if (CheckEmpty(pstno)) {
    return { textField: "Street No", Error: "Pickup Street No is required" };
  } else if (CheckEmpty(pstreet)) {
    return { textField: "Street", Error: "Pickup Street is required" };
  } else if (CheckEmpty(pcity)) {
    return { textField: "City", Error: "Pickup City is required" };
  } else if (CheckEmpty(pdis)) {
    return { textField: "District", Error: "Pickup District is required" };
  } else if (CheckEmpty(ptype)) {
    return { textField: "Order_type", Error: "Order type is required" };
  } else if (
    !stele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return { textField: "Telephone", Error: "Invalid Sender Telephone number" };
  } else if (
    !rtele.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    return {
      textField: "Telephone",
      Error: "Invalid Reciver Telephone number",
    };
  } else return 0;
};
