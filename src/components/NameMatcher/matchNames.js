export const matchNames = (nameToBeAttributedList, nameToAttributeList) => {
  let attributions = [];

  nameToBeAttributedList.forEach((nameToBeAttributed) => {
    let detectednameToAttributeId = null;

    nameToAttributeList.forEach((nameToAttribute) => {
      if (nameToBeAttributed.lastName) {
        if (
          nameToBeAttributed.firstName.toLowerCase() ===
            nameToAttribute.firstName.toLowerCase() &&
          nameToBeAttributed.lastName.toLowerCase() ===
            nameToAttribute.lastName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        } else if (
          nameToBeAttributed.firstName.toLowerCase() ===
            nameToAttribute.lastName.toLowerCase() &&
          nameToBeAttributed.lastName.toLowerCase() ===
            nameToAttribute.firstName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        } else if (
          nameToBeAttributed.firstName.charAt(0).toLowerCase() ===
            nameToAttribute.firstName.charAt(0).toLowerCase() &&
          nameToBeAttributed.lastName.toLowerCase() ===
            nameToAttribute.lastName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        } else if (
          nameToBeAttributed.firstName.charAt(0).toLowerCase() ===
            nameToAttribute.lastName.charAt(0).toLowerCase() &&
          nameToBeAttributed.lastName.toLowerCase() ===
            nameToAttribute.firstName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        } else if (
          nameToBeAttributed.lastName.charAt(0).toLowerCase() ===
            nameToAttribute.firstName.charAt(0).toLowerCase() &&
          nameToBeAttributed.firstName.toLowerCase() ===
            nameToAttribute.lastName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        } else if (
          nameToBeAttributed.lastName.charAt(0).toLowerCase() ===
            nameToAttribute.lastName.charAt(0).toLowerCase() &&
          nameToBeAttributed.firstName.toLowerCase() ===
            nameToAttribute.firstName.toLowerCase()
        ) {
          detectednameToAttributeId = nameToAttribute.id;
        }
      }
    });

    attributions.push([nameToBeAttributed.id, detectednameToAttributeId]);
  });
  return attributions;
};
