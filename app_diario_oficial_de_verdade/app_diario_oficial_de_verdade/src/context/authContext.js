import { useState, useCallback, createContext, useEffect } from "react";
import {
  changeLocalData,
  getLocalData,
  deleteLocalData,
} from "../storage/Storage";
import firebase from "../config/database";
const initialState = [];
 
export const authContext = createContext(initialState);

export function AuthProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState();
  const [formData, setFormData] = useState({});

  const wasThereSession = useCallback(async () => {
    const previousSession = await getLocalData("@diario");
    setSession(previousSession);
  }, []);

  useEffect(() => {
    wasThereSession();
  }, [wasThereSession]);

  const fetchAccounts = useCallback(async () => {
    const bd = firebase.database().ref("users");
    const tempVetor = [];

    bd.on("value", (snapshot) => {
      if (snapshot) {
        snapshot.forEach((child) => {
          tempVetor.push({
            data: child.val().data,
            email: child.val().email,
            nome: child.val().nome,
            senha: child.val().senha,
            sistema: child.val().sistema,
            tipo: child.val().tipo,
            id: child.key,
          });
        });
      }
    });

    setAccounts(tempVetor.reverse());
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  async function LogOut() {
    await deleteLocalData("@diario");
    setSession();
  }

  async function saveFormData(newFormData) {
    setFormData({ ...formData, ...newFormData });
  }

  async function CreateSession(Email, Pass) {
    await fetchAccounts();
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.senha === Pass ? account : false)
    );

    console.log({ Email, Pass, Login, Accounts });

    if (Login[0]) {
      setSession(Login[0]);
      await changeLocalData("@diario", Login[0]);
      return true;
    }

    return Login.length > 0 ? !Login[0] && "senha" : "email";
  }

  async function AddAccount(newData) {
    let erro = 0;
    const submitData = { ...formData, ...newData };

    await fetchAccounts();
    const Login = Accounts.filter(
      (account) => account.email === submitData.email
    );
    if (Login.length > 0) erro++;

    if (erro > 0) return "email";

    const bd = firebase.database().ref("users/");
    bd.push(submitData)
      .then(() => {
        CreateSession(submitData.email, submitData.senha);
        setFormData({});
      })
      .catch((error) => console.log(error));

    return true;
  }

  const DeleteAccount = () => {
    const bd = firebase.database().ref(`users/${session.id}`);
    bd.remove()
      .then(() => {
         LogOut();
      })
      .catch((error) => console.log(error));
   
  };

  return (
    <authContext.Provider
      value={{
        CreateSession,
        AddAccount,
        LogOut,
        session,
        saveFormData,
        DeleteAccount,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
