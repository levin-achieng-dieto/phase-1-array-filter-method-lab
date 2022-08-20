function findMatching(names, drivers){
  return names.filter(
    (matchingNames) => matchingNames.toLowerCase() === drivers.toLowerCase()
  )
}

function fuzzyMatch(name, firstLatter){
  return name.filter(
    (matchingNames) = matchingNames.indexOf(firstLatter.toLowerCase()) === "sa"
  )
}


function matchName (person, propertiesByName){
  return person.filter(
    details => details.name === propertiesByName
  )
}

