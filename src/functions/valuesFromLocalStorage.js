import { TIPOS_FUNCIONES } from "../constants/puntos_funcion";

export function getAllValues() {
    const { averagePF, title } = JSON.parse(localStorage.getItem("averagePF"));
    const allValues = {
      VPFSA: localStorage.getItem("vpfsa-value"),
      TDI: localStorage.getItem("influencepoints-value"),
      VPFA: localStorage.getItem("adjusted-influence-value"),
      "Horas PF Promedio": averagePF,
      "Horas diarias": localStorage.getItem("dailyHours"),
      Desarrolladores: localStorage.getItem("developersNumber"),
    };
    return allValues;
  }

export function getAllFunctionPoints () {
  let arrayWithAllFunctionPoints = [];

  TIPOS_FUNCIONES.forEach(element => {
    const keyName = 'All_' + element.key
    const elementoDeLocalStorage = JSON.parse(localStorage.getItem(keyName))
    if (elementoDeLocalStorage !== null){
      elementoDeLocalStorage.forEach(fp => {
        const object = {
          tipo: element.key,
          name: fp.name,
          value: fp.value
        }
        arrayWithAllFunctionPoints.push(object)
      })
    }
  });
  return arrayWithAllFunctionPoints
}