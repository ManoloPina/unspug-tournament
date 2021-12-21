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
        { label: "Blase Soul", value: ClassesEnum.BladeSoul },
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

  const getImagePathByClassId = (id: number) => {
    switch (id) {
      case ClassesEnum.ArcaneMaster:
        return "classes/ArcaneMaster.png";
      case ClassesEnum.Beggetter:
        return "classes/Beggetter.png";

      case ClassesEnum.BladeSoul:
        return "classes/BladeSoul.png";

      case ClassesEnum.Chronomancer:
        return "classes/Chronomancer.png";

      case ClassesEnum.DivineAvenger:
        return "classes/DivineAvenger.png";

      case ClassesEnum.Doram:
        return "classes/Doram.png";

      case ClassesEnum.DragonFist:
        return "classes/DragonFist.png";

      case ClassesEnum.Gunslinger:
        return "classes/Gunslinger.png";

      case ClassesEnum.Lightbringer:
        return "classes/Lightbringer.png";

      case ClassesEnum.LunaDanseuse:
        return "classes/LunaDanseuse.png";

      case ClassesEnum.Ninja:
        return "classes/Ninja.png";

      case ClassesEnum.NoviceGuardian:
        return "classes/NoviceGuardian.png";

      case ClassesEnum.PhantonDance:
        return "classes/PhantonDance.png";

      case ClassesEnum.Ronin:
        return "classes/Ronin.png";

      case ClassesEnum.Runemaster:
        return "classes/Runemaster.png";

      case ClassesEnum.Ronin:
        return "classes/Ronin.png";

      case ClassesEnum.Saint:
        return "classes/Saint.png";

      case ClassesEnum.Slayer:
        return "classes/Slayer.png";

      case ClassesEnum.SolarTrouvere:
        return "classes/SolarTrouvere.png";

      case ClassesEnum.StellarHunter:
        return "classes/StellarHunter.png";

      case ClassesEnum.Wataru:
        return "classes/Wataru.png";
    }
  };

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
    getImagePathByClassId,
  };
};
