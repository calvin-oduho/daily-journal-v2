exports.currentYear = () => {
    const today = new Date();
    const options = {
      year: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  /**
 * @param {*} userInput 
 * @returns capitalized version of user's input.
 */
exports.capitalize = (userInput) => {
  const splitWords = userInput.split(' ');
  const capitalizedWords = splitWords.map( (eachWord) => {
      return eachWord[0].toUpperCase() + eachWord.substring(1);
  } );
  return capitalizedWords.join(' ');
};


exports.toRtf = (plain) => {
  plain = plain.replace(/\n/g, "\\par\n");
  return "{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang2057{\\fonttbl{\\f0\\fnil\\fcharset0 Microsoft Sans Serif;}}\n\\viewkind4\\uc1\\pard\\f0\\fs17 " + plain + "\\par\n}";
};
  