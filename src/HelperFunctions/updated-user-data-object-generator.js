// USED TO GET AN UPDATED USERDATAOBJECT FOR PUT REQUEST.

const updatedUserDataObjGenerator = (
  userDataObject,
  idOfSingleObject,
  whichKeyToUpdate,
  updationValue
) => {
  const customUserDataObject = { ...userDataObject };

  for (let key in customUserDataObject) {
    customUserDataObject[key] = { ...customUserDataObject[key] };
  }
  customUserDataObject[idOfSingleObject][whichKeyToUpdate] = updationValue;
  return customUserDataObject;
};

export default updatedUserDataObjGenerator;
