import { commitLocalUpdate } from "react-relay";
import relayEnvironment from "./RelayEnvironment";

export const createUserInfo = () => {
  commitLocalUpdate(relayEnvironment, store => {
    const root = store.getRoot();

    const testId = "client:SavedUserInfo:0";
    const userInfoRecord = store.create(testId, "UserInfo");
    userInfoRecord.setValue("Initial userInfo.userName", "userName");
    userInfoRecord.setValue(0, "age");
    root.setLinkedRecord(userInfoRecord, "savedUserInfo");
  });
};

export const updateDivisionIsDeleted = (divisionId: any, newValue: boolean) => {
  commitLocalUpdate(relayEnvironment, store => {
    const divisionToUpdate = store.get(divisionId);

    if (divisionToUpdate) {
      divisionToUpdate.setValue(newValue, "isDeleted");
    } else {
      console.log("divisionToUpdate is null or undefined");
    }
  });
};

export const updateGlobalState = () => {
  // Example updating a single value on the root
  commitLocalUpdate(relayEnvironment, store => {
    store.getRoot().setValue("New Simple Name", "savedUserName");
  });

  // Example updating an "object" in the root
  commitLocalUpdate(relayEnvironment, store => {
    const savedUserInfo = store.getRoot().getLinkedRecord("savedUserInfo");
    if (savedUserInfo) {
      savedUserInfo.setValue("New name in savedUserInfo", "userName");
      const oldAge = savedUserInfo.getValue("age");
      if (typeof oldAge === "number") {
        savedUserInfo.setValue(oldAge + 1, "age");
      }
      store.getRoot().setLinkedRecord(savedUserInfo, "savedUserInfo");
    }
  });
};
