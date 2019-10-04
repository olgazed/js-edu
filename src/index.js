/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming = true, config) {
  const learnBasics = 500;
  const learnToMaster = 800;
  const learnFromScratch = learnBasics + learnToMaster;
  let weeks = 0;

  if(knowsProgramming) {
    weeks = Math.ceil(learnToMaster / config[focus]);
  }
  else
    weeks = Math.ceil(learnFromScratch / config[focus]);
  return weeks;
};