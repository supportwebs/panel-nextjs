import axios from 'axios';

const SERVER_URL = "http://localhost/admin/api";
//@desc Get All User
//@route Get http://localhost/admin/api/indexusers
export const getAllUsers = () => {
    const url = `${SERVER_URL}/indexusers`;
    return axios.get(url);
}

export const getUsersfortask = () => {
    const url = `${SERVER_URL}/getusers`;
    return axios.get(url);
}
export const getUsersAndStaff = () => {
    const url = `${SERVER_URL}/getusersstaff`;
    return axios.get(url);
}

export const getInheritforrole = () => {
    const url = `${SERVER_URL}/getinherit`;
    return axios.get(url);
}
export const getCustomersforcustomerdata = () => {
    const url = `${SERVER_URL}/getcustomers`;
    return axios.get(url);
}
export const getAllPreorders = () => {
    const url = `${SERVER_URL}/indexpreorders`;
    return axios.get(url);
}
export const getAllContracts = () => {
    const url = `${SERVER_URL}/indexcontracts`;
    return axios.get(url);
}
export const getAllCustomerdatas = () => {
    const url = `${SERVER_URL}/indexcustomerdata`;
    return axios.get(url);
}
export const getAllRoles = () => {
    const url = `${SERVER_URL}/indexroles`;
    return axios.get(url);
}
export const getAllDepartments = () => {
    const url = `${SERVER_URL}/indexdepartments`;
    return axios.get(url);
}
export const getAllProjects = () => {
    const url = `${SERVER_URL}/indexprojects`;
    return axios.get(url);
}

export const getAllInvoices = () => {
    const url = `${SERVER_URL}/indexinvoices`;
    return axios.get(url);
}
export const getAllProformaInvoices = () => {
    const url = `${SERVER_URL}/indexproformainvoices`;
    return axios.get(url);
}
export const getAllTasks = () => {
    const url = `${SERVER_URL}/indextasks`;
    return axios.get(url);
}
export const getAllTickets = () => {
    const url = `${SERVER_URL}/indextickets`;
    return axios.get(url);
}
//@desc Get User with Contact Id
//@route Get http://localhost/admin/api/viewuser/:userId
export const getUser = (userId) => {
    const url = `${SERVER_URL}/viewuser?id=${userId}`;
    return axios.get(url);
}
export const getCustomerdata = (customerdataId) => {
    const url = `${SERVER_URL}/viewcustomerdata?id=${customerdataId}`;
    return axios.get(url);
}
export const getTicket = (ticketId) => {
    const url = `${SERVER_URL}/viewticket?id=${ticketId}`;
    return axios.get(url);
}

export const getDepartment = (departmentId) => {
    const url = `${SERVER_URL}/viewdepartment?id=${departmentId}`;
    return axios.get(url);
}
export const getRole = (roleId) => {
    const url = `${SERVER_URL}/viewrole?id=${roleId}`;
    return axios.get(url);
}
export const getPreorder = (preorderId) => {
    const url = `${SERVER_URL}/viewpreorder?id=${preorderId}`;
    return axios.get(url);
}
export const getProject = (projectId) => {
    const url = `${SERVER_URL}/viewproject?id=${projectId}`;
    return axios.get(url);
}
export const getTask = (taskId) => {
    const url = `${SERVER_URL}/viewtask?id=${taskId}`;
    return axios.get(url);
}

export const createUser = (user) => {
    const url = `${SERVER_URL}/adduser`;
    return axios.post(url,user);

}

export const updateUser = (user , userId) => {
    const url = `${SERVER_URL}/edituser/${userId}`;
    return axios.put(url,user);
}

export const deleteUser = (userId) => {
    const url = `${SERVER_URL}/deleteuser/${userId}`;
    return axios.delete(url);
}
