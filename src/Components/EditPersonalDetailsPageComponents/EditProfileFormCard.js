import Card from "../../UI/Card";
import SingleInputHttpForm from "../../UI/SingleInputHttpForm/SingleInputHttpForm";
import styles from "./EditProfileFormCard.module.css";
import updatedUserDataObjGenerator from "../../HelperFunctions/updated-user-data-object-generator";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userDataObjectSliceThunk from "../../ReduxStore/user-data-object-thunk";
import { useCallback, useEffect } from "react";
import { modalSliceActions } from "../../ReduxStore/modal-slice";

const url = "https://ifvs-8e70a-default-rtdb.firebaseio.com/user-data.json";

//PATTERNS
const fullNamePattern = /^[a-zA-Z]{4,}\s([a-zA-Z]{4,}\s)?[a-zA-Z]{4,}$/;
const contactPattern = /^[0-9]{10,11}$/;
const EditProfileFormCard = () => {
  const [userDataObject, activeStudentId, dataIsPresent, currentUserObject] =
    useSelector((state) => [
      state.userData.userDataObj,
      state.userData.activeStudentId,
      state.userData.dataIsPresent,
      state.userData.currentUserObject,
    ]);
  const dispatch = useDispatch();

  const userDataObjectSliceThunkHandler = useCallback(() => {
    dispatch(userDataObjectSliceThunk());
  }, [dispatch]);

  useEffect(() => {
    if (dataIsPresent === false) {
      userDataObjectSliceThunkHandler();
    }
  }, [dataIsPresent, userDataObjectSliceThunkHandler]);

  const detailEditedSucessHandler = (whatDetailIsChanged) => {
    dispatch(
      modalSliceActions.displayModal({
        identifier: "profile-edit-sucessfully",
        whatIsChanged: whatDetailIsChanged,
      })
    );
  };

  const errorOnFailureHandler = () => {
    dispatch(
      modalSliceActions.displayModal({
        identifier: "detail-change-failed",
      })
    );
  };

  const contactChangeObjectGenerator = (newContact) => {
    const countryCode = currentUserObject.countryCode;
    const newContactToUpdate = `${countryCode}${newContact}`;
    const contactChangePayloadObject = updatedUserDataObjGenerator(
      userDataObject,
      activeStudentId,
      "contact",
      newContactToUpdate
    );
    return contactChangePayloadObject;
  };

  return (
    <Card className={styles.formCard}>
      <SingleInputHttpForm
        formType="Change Student Name"
        id="STD_NEW_FULLNAME"
        placeholder="Enter new full name."
        errorMsg="Enter full name with only one space in between."
        url={url}
        pattern={fullNamePattern}
        inputType="text"
        requestType="PUT"
        payloadObjectGenerator={(studentNewName) =>
          updatedUserDataObjGenerator(
            userDataObject,
            activeStudentId,
            "studentName",
            studentNewName
          )
        }
        addtionalFunctionalityOnSucess={detailEditedSucessHandler.bind(
          null,
          "Student Name"
        )}
        addtionalFunctionalityOnError={errorOnFailureHandler}
      />

      <hr />

      <SingleInputHttpForm
        formType="Change Father Name"
        id="FTR_NEW_FULLNAME"
        placeholder="Enter new full name."
        errorMsg="Enter full name with only one space in between."
        url={url}
        pattern={fullNamePattern}
        inputType="text"
        requestType="PUT"
        payloadObjectGenerator={(fatherNewName) =>
          updatedUserDataObjGenerator(
            userDataObject,
            activeStudentId,
            "fatherName",
            fatherNewName
          )
        }
        addtionalFunctionalityOnSucess={detailEditedSucessHandler.bind(
          null,
          "Father Name"
        )}
        addtionalFunctionalityOnError={errorOnFailureHandler}
      />

      <hr />

      <SingleInputHttpForm
        formType="Change Mother Name"
        id="MTR_NEW_FULLNAME"
        placeholder="Enter new full name."
        errorMsg="Enter full name with only one space in between."
        url={url}
        pattern={fullNamePattern}
        inputType="text"
        requestType="PUT"
        payloadObjectGenerator={(motherNewName) =>
          updatedUserDataObjGenerator(
            userDataObject,
            activeStudentId,
            "motherName",
            motherNewName
          )
        }
        addtionalFunctionalityOnSucess={detailEditedSucessHandler.bind(
          null,
          "Mother Name"
        )}
        addtionalFunctionalityOnError={errorOnFailureHandler}
      />

      <hr />

      <SingleInputHttpForm
        formType="Change Contact number"
        id="STD_NEW_CONTACT"
        placeholder="Enter new contact."
        errorMsg="Enter contact without country code."
        url={url}
        pattern={contactPattern}
        inputType="text"
        requestType="PUT"
        payloadObjectGenerator={(newContact) =>
          contactChangeObjectGenerator(newContact)
        }
        addtionalFunctionalityOnSucess={detailEditedSucessHandler.bind(
          null,
          "Contact Number"
        )}
        addtionalFunctionalityOnError={errorOnFailureHandler}
      />
    </Card>
  );
};
export default EditProfileFormCard;
