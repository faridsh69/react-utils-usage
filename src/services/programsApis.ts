// listApi: ,
// singleApi: getProgramApi,
// createApi: createProgramApi,
// updateApi: updateProgramApi,
// deleteApi: deleteProgramApi,

import { getLs, getUniqueId, setLs } from "@faridsh69/react-utils";

const APP_NAME = "gym-app";
const LS_KEY = "programs";
const TIMEOUT = 100;

export const getProgramsApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const programs = getLs(LS_KEY, [], APP_NAME);

      resolve({ data: programs });
    }, TIMEOUT);
  });
};

export const getProgramApi = (programId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const programs = getLs(LS_KEY, [], APP_NAME);
      const program = programs.find((p: any) => p.id === programId);

      resolve(program);
    }, TIMEOUT);
  });
};

export const createProgramApi = (program: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const programs = getLs<any>(LS_KEY, [], APP_NAME);
      const id = getUniqueId();
      const savedProgram = { ...program, id };
      programs.push(savedProgram);
      setLs(LS_KEY, programs, APP_NAME);

      resolve({ data: savedProgram });
    }, TIMEOUT);
  });
};

export const updateProgramApi = (program: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const programs = getLs<any>(LS_KEY, [], APP_NAME);
      const updatedPrograms = programs.map((p) =>
        p.id !== program.id ? p : program
      );
      console.log("1 updatedPrograms", updatedPrograms);
      setLs(LS_KEY, updatedPrograms, APP_NAME);

      resolve({ data: updatedPrograms });
    }, TIMEOUT);
  });
};

export const deleteProgramApi = (programId: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const programs = getLs<any>(LS_KEY, [], APP_NAME);
      const filteredPrograms = programs.filter((p) => p.id !== programId);
      console.log("1 filteredPrograms", filteredPrograms);
      setLs(LS_KEY, filteredPrograms, APP_NAME);

      resolve({ data: filteredPrograms });
    }, TIMEOUT);
  });
};
