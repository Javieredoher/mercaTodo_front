const API_URL='https://jsonplaceholder.typicode.com/users/3';
const API='https://safe-river-82717.herokuapp.com/product';



export const getProducts=async()=>{
    const res=await fetch (API)
    const data=await res.json()
    console.log(data)
    return data
}



export const listCompanies = async() =>{
    return await fetch(API_URL);
};

export const getCompany = async(companyId) =>{
    return await fetch('${API_UR}${companyId}');

};
    


export const registerCompany = async (newCompany) =>{
    return await fetch(API_URL,{
        method:'POST',
        Headers:{
            'Content-Type':'application/json'
        },
        bady:JSON.stringify({
            "name":String(newCompany.name).trim(),
            "foundation":parseInt(newCompany.foundation),
            "webside":String(newCompany.webside).trim(),
        })
    });

};


export const deleteCompany = async (companyId) =>{
    return await fetch('${API_UR}${companyId}',{
        method:'DELETE',
        
    });

};
   