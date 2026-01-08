import  {type Dispatch, type SetStateAction} from "react";

export interface UseData {
    text: string;
}

export interface UserDataContext {
  userData: undefined | UseData;
    setUserData: Dispatch<SetStateAction<undefined | UseData>>;
}