// Ensure Type with interface
interface weatherIcons {
    day: {
      [key: string]: string;
    };
    night: {
      [key: string]: string;
    };
  }

// Day Icons
import sunnyDay from './day/113.png';
import partCloudyDay from './day/116.png';
import cloudyDay from './day/119.png';
import overcastDay from './day/122.png';
import mistDay from './day/143.png';
import patchyRainDay from './day/176.png';
import patchySnowDay from './day/179.png';
import patchySleetDay from './day/182.png';
import patchyFreezingDay from './day/185.png';
import thunderyOutDay from './day/200.png';
import blowingSnowDay from './day/227.png';
import blizzardDay from './day/230.png';
import fogDay from './day/248.png';
import freezeFogDay from './day/260.png';
import patchyLightDrizzleDay from './day/263.png';
import lightDrizzleDay from './day/266.png';
import freezeDrizzleDay from './day/281.png';
import heavyFreezeDrizzleDay from './day/284.png';
import patchyLightRainDay from './day/293.png';
import lightRainDay from './day/296.png';
import moderateRainTimesDay from './day/299.png';
import moderateRainDay from './day/302.png';
import heavyRainTimesDay from './day/305.png';
import heavyRainDay from './day/308.png';
import lightFreezingRainDay from './day/311.png';
import moderateHeavyFreezingRainDay from './day/314.png';
import lightSleetDay from './day/317.png';
import moderateHeavySleetDay from './day/320.png';
import patchyLightSnowDay from './day/323.png';
import lightSnowDay from './day/326.png';
import patchyModerateSnowDay from './day/329.png';
import moderateSnowDay from './day/332.png';
import patchyHeavySnowDay from './day/335.png';
import heavySnowDay from './day/338.png';
import icePelletsDay from './day/350.png';
import lightRainShowerDay from './day/353.png';
import moderateHeavyRainShowerDay from './day/356.png';
import torrentialRainShowerDay from './day/359.png';
import lightSleetShowersDay from './day/362.png';
import moderateHeavySleetShowersDay from './day/365.png';
import lightSnowShowersDay from './day/368.png';
import ModerateHeavySnowShowersDay from './day/371.png';
import lightShowersIcePelletsDay from './day/374.png';
import moderateHeavyShowersIcePelletsDay from './day/377.png';
import patchyLightRainThunderDay from './day/386.png';
import moderateHeavyRainThunderDay from './day/389.png';
import patchyLightSnowThunderDay from './day/392.png';
import moderateHeavySnowThunderDay from './day/395.png';

// Night Icons
import clearNight from './night/113.png';
import partCloudyNight from './night/116.png';
import cloudyNight from './night/119.png';
import overcastNight from './night/122.png';
import mistNight from './night/143.png';
import patchyRainNight from './night/176.png';
import patchySnowNight from './night/179.png';
import patchySleetNight from './night/182.png';
import patchyFreezingNight from './night/185.png';
import thunderyOutNight from './night/200.png';
import blowingSnowNight from './night/227.png';
import blizzardNight from './night/230.png';
import fogNight from './night/248.png';
import freezeFogNight from './night/260.png';
import patchyLightDrizzleNight from './night/263.png';
import lightDrizzleNight from './night/266.png';
import freezeDrizzleNight from './night/281.png';
import heavyFreezeDrizzleNight from './night/284.png';
import patchyLightRainNight from './night/293.png';
import lightRainNight from './night/296.png';
import moderateRainTimesNight from './night/299.png';
import moderateRainNight from './night/302.png';
import heavyRainTimesNight from './night/305.png';
import heavyRainNight from './night/308.png';
import lightFreezingRainNight from './night/311.png';
import moderateHeavyFreezingRainNight from './night/314.png';
import lightSleetNight from './night/317.png';
import moderateHeavySleetNight from './night/320.png';
import patchyLightSnowNight from './night/323.png';
import lightSnowNight from './night/326.png';
import patchyModerateSnowNight from './night/329.png';
import moderateSnowNight from './night/332.png';
import patchyHeavySnowNight from './night/335.png';
import heavySnowNight from './night/338.png';
import icePelletsNight from './night/350.png';
import lightRainShowerNight from './night/353.png';
import moderateHeavyRainShowerNight from './night/356.png';
import torrentialRainShowerNight from './night/359.png';
import lightSleetShowersNight from './night/362.png';
import moderateHeavySleetShowersNight from './night/365.png';
import lightSnowShowersNight from './night/368.png';
import ModerateHeavySnowShowersNight from './night/371.png';
import lightShowersIcePelletsNight from './night/374.png';
import moderateHeavyShowersIcePelletsNight from './night/377.png';
import patchyLightRainThunderNight from './night/386.png';
import moderateHeavyRainThunderNight from './night/389.png';
import patchyLightSnowThunderNight from './night/392.png';
import moderateHeavySnowThunderNight from './night/395.png';

export const weatherIcons: weatherIcons = {
    day: {
        1000: sunnyDay,
    1003: partCloudyDay,
    1006: cloudyDay,
    1009: overcastDay,
    1030: mistDay,
    1063: patchyRainDay,
    1066: patchySnowDay,
    1069: patchySleetDay,
    1072: patchyFreezingDay,
    1087: thunderyOutDay,
    1114: blowingSnowDay,
    1117: blizzardDay,
    1135: fogDay,
    1147: freezeFogDay,
    1150: patchyLightDrizzleDay,
    1153: lightDrizzleDay,
    1168: freezeDrizzleDay,
    1171: heavyFreezeDrizzleDay,
    1180: patchyLightRainDay,
    1183: lightRainDay,
    1186: moderateRainTimesDay,
    1189: moderateRainDay,
    1192: heavyRainTimesDay,
    1195: heavyRainDay,
    1198: lightFreezingRainDay,
    1201: moderateHeavyFreezingRainDay,
    1204: lightSleetDay,
    1207: moderateHeavySleetDay,
    1210: patchyLightSnowDay,
    1213: lightSnowDay,
    1216: patchyModerateSnowDay,
    1219: moderateSnowDay,
    1222: patchyHeavySnowDay,
    1225: heavySnowDay,
    1237: icePelletsDay,
    1240: lightRainShowerDay,
    1243: moderateHeavyRainShowerDay,
    1246: torrentialRainShowerDay,
    1249: lightSleetShowersDay,
    1252: moderateHeavySleetShowersDay,
    1255: lightSnowShowersDay,
    1258: ModerateHeavySnowShowersDay,
    1261: lightShowersIcePelletsDay,
    1264: moderateHeavyShowersIcePelletsDay,
    1273: patchyLightRainThunderDay,
    1276: moderateHeavyRainThunderDay,
    1279: patchyLightSnowThunderDay,
    1282: moderateHeavySnowThunderDay
    },
    night: {
        1000: clearNight,
    1003: partCloudyNight,
    1006: cloudyNight,
    1009: overcastNight,
    1030: mistNight,
    1063: patchyRainNight,
    1066: patchySnowNight,
    1069: patchySleetNight,
    1072: patchyFreezingNight,
    1087: thunderyOutNight,
    1114: blowingSnowNight,
    1117: blizzardNight,
    1135: fogNight,
    1147: freezeFogNight,
    1150: patchyLightDrizzleNight,
    1153: lightDrizzleNight,
    1168: freezeDrizzleNight,
    1171: heavyFreezeDrizzleNight,
    1180: patchyLightRainNight,
    1183: lightRainNight,
    1186: moderateRainTimesNight,
    1189: moderateRainNight,
    1192: heavyRainTimesNight,
    1195: heavyRainNight,
    1198: lightFreezingRainNight,
    1201: moderateHeavyFreezingRainNight,
    1204: lightSleetNight,
    1207: moderateHeavySleetNight,
    1210: patchyLightSnowNight,
    1213: lightSnowNight,
    1216: patchyModerateSnowNight,
    1219: moderateSnowNight,
    1222: patchyHeavySnowNight,
    1225: heavySnowNight,
    1237: icePelletsNight,
    1240: lightRainShowerNight,
    1243: moderateHeavyRainShowerNight,
    1246: torrentialRainShowerNight,
    1249: lightSleetShowersNight,
    1252: moderateHeavySleetShowersNight,
    1255: lightSnowShowersNight,
    1258: ModerateHeavySnowShowersNight,
    1261: lightShowersIcePelletsNight,
    1264: moderateHeavyShowersIcePelletsNight,
    1273: patchyLightRainThunderNight,
    1276: moderateHeavyRainThunderNight,
    1279: patchyLightSnowThunderNight,
    1282: moderateHeavySnowThunderNight
    }
    
}