import axios, { AxiosResponse } from "axios";
import { useMemo } from "react";
import { useSnackbar } from "notistack";
//types
import { BASE_URL } from "const";
import { ClassesEnum, IPlayer } from "types/Player";
import { IRes } from "types/Http";
import { IFormOption } from "types";

export const usePlayer = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classesOpts = useMemo(
    () =>
      [
        { label: "Arcane Master", value: ClassesEnum.ArcaneMaster },
        { label: "Beggetter", value: ClassesEnum.Beggetter },
        { label: "Blase Soul", value: ClassesEnum.BlaseSoul },
        { label: "Chronomancer", value: ClassesEnum.Chronomancer },
        { label: "Divine Avenger", value: ClassesEnum.DivineAvenger },
        { label: "Doram", value: ClassesEnum.Doram },
        { label: "Dragon Fist", value: ClassesEnum.DragonFist },
        { label: "Gunslinger", value: ClassesEnum.Gunslinger },
        { label: "Lightbringer", value: ClassesEnum.Lightbringer },
        { label: "Luna Danseuse", value: ClassesEnum.LunaDanseuse },
        { label: "Ninja", value: ClassesEnum.Ninja },
        { label: "Novice Guardian", value: ClassesEnum.NoviceGuardian },
        { label: "Phanton Dance", value: ClassesEnum.PhantonDance },
        { label: "Ronin", value: ClassesEnum.Ronin },
        { label: "Runemaster", value: ClassesEnum.Runemaster },
        { label: "Slayer", value: ClassesEnum.Slayer },
        { label: "Solar Trouvere", value: ClassesEnum.SolarTrouvere },
        { label: "Stellar Hunter", value: ClassesEnum.StellarHunter },
        { label: "Wataru", value: ClassesEnum.Wataru },
      ] as IFormOption[],
    []
  );
  const requests = {
    register: async (payload: IPlayer): Promise<IPlayer | null> => {
      try {
        const {
          data: { success, content, error },
        }: AxiosResponse<IRes<IPlayer>> = await axios.post(
          `${BASE_URL}/users/registration`,
          payload
        );
        if (!!success) {
          // enqueueSnackbar("Player successfully registered", {
          //   variant: "success",
          //   anchorOrigin: { vertical: "top", horizontal: "right" },
          // });
          return content;
        } else {
          // enqueueSnackbar(error, {
          //   variant: "warning",
          //   anchorOrigin: { vertical: "top", horizontal: "right" },
          // });
          return null;
        }
      } catch (error) {
        // enqueueSnackbar(error, {
        //   variant: "error",
        //   anchorOrigin: { vertical: "top", horizontal: "right" },
        // });
        return null;
      }
    },
  };

  return {
    requests,
    classesOpts,
  };
};
