export const sort = {
    NAME: "lastName",
    ROLE: "role",
    WORKGROUP: "workgroupName",
    DEFAULT: "default"
}

export const sortHelper = (value) => {
    switch (value) {
        case "name":
            return sort.NAME;
        case "role":
            return sort.ROLE;
        case "workgroupName":
            return sort.WORKGROUP;
        default:
            return sort.DEFAULT
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