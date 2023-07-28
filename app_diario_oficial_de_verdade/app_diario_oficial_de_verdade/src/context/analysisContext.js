import { useState, useCallback, createContext, useEffect } from 'react';
import {
  changeLocalData,
  getLocalData,
  deleteLocalData,
} from '../storage/Storage';
import { useAuth } from '../hooks/useAuth';
import firebase from '../config/database';
const initialState = [];

export const analysisContext = createContext(initialState);

export function AnalysisProvider({ children }) {
  const { session } = useAuth();
  const userId = session?.id;
  const [userEnergy, setUserEnergy] = useState([]);
  const [updatableEnergy, setUpdatableEnergy] = useState(true);

  const handleUpdatableEnergy = async (data) => {
    const savedLimit = await getLocalData('@diario:energia');
    const date = new Date();
    const currentDate = date.toLocaleDateString('pt-BR');
    if (!data && savedLimit) {
      currentDate !== savedLimit.data
        ? setUpdatableEnergy(true)
        : setUpdatableEnergy(false);
      return;
    }
    if (savedLimit) {
      if (currentDate !== savedLimit.data) {
        setUpdatableEnergy(false);
        await changeLocalData('@diario:energia', data);
        return;
      } else return;
    }
    setUpdatableEnergy(false);
    await changeLocalData('@diario:energia', data);
  };

  const fetchEnergy = useCallback(async () => {
    const bd = firebase.database().ref('energia');
    const tempVetor = [];

    bd.on('value', (snapshot) => {
      if (snapshot) {
        snapshot.forEach((child) => {
          tempVetor.push({
            data: child.val().data,
            energia: child.val().energia,
            hora: child.val().hora,
            user_id: child.val().user_id,
          });
        });
      }
    });

    const filtered = tempVetor.filter(({ user_id }) => user_id === userId);
    const sorted = filtered?.sort(
      (a, b) => new Date(b.data) - new Date(a.data)
    );
    handleUpdatableEnergy(sorted[0]);
    setUserEnergy(sorted);
  }, [userId]);

  useEffect(() => {
    if (userId) fetchEnergy();
  }, [userId, fetchEnergy]);

  console.log(userEnergy);

  const saveEnergy = ( energia, data, hora ) => {
    if (updatableEnergy) {
      const submitData = { energia, data, hora, user_id: userId };
      var bd = firebase.database().ref('energia/');
      bd.push(submitData)
        .then(() => {
          const newData = [...userEnergy, submitData]?.sort(
            (a, b) => new Date(b.data) - new Date(a.data)
          );

          setUserEnergy(newData);
        })
        .catch((error) => console.log(error));

      handleUpdatableEnergy(submitData);
    }
  };

  return (
    <analysisContext.Provider
      value={{
        fetchEnergy,
        updatableEnergy,
        saveEnergy,
        userEnergy
      }}>
      {children}
    </analysisContext.Provider>
  );
}
