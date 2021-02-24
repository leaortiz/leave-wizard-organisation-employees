export const sortBy = {
    NAME: "lastName",
    ROLE: "role",
    WORKGROUP: "workgroupName",
    DEFAULT: "default"
}

export const sort = {  
    ASC: "asc",
    DESC: "desc"
}

export const sortHelper = (value) => {
    switch (value) {
        case "name":
            return sortBy.NAME;
        case "role":
            return sortBy.ROLE;
        case "workgroupName":
            return sortBy.WORKGROUP;
        default:
            return sortBy.DEFAULT
    }
}

export const filter = {
    LOCATION: "location",
    WORKGROUP: "workgroup",
    DEFAULT: "default"
}

export const columns = [
    { datafield: "name", caption: "Name" },
    { datafield: "role", caption: "Role" },
    { datafield: "workgroupName", caption: "Workgroup" },
    { datafield: "leaveYearStartDate", caption: "Leave Year (dd/MM)" },
    { datafield: "", caption: "Info" },
    { datafield: "employmentStartDate", caption: "Employment Dates" },
    { datafield: "bradfactor", caption: "Bradford Factor" },
    { datafield: "viewLeaveTaken", caption: "" },
]