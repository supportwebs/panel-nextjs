import axios from "axios"

export const connectToServer = (type= "GET" , url , data = {})=>{
    return new Promise((res,rej)=>{
        if(type==="GET"){
            axios.get('https://supportwebs.ir/admin/'.serverApiAddress_host + url
            ).then(data=>{
                if(data){
                    res(data.data);
                }else{
                    console.log("data" , data);
                    rej("err");
                }
            });
        }else if(type==="POST"){
            const headers = {
                'Content-Type': 'text/plain',
                'Accept': 'application/json',
            };
            axios.post(params.serverApiAddress_host + url, JSON.stringify(data), {headers}).then(data=>{
                if(data){
                    res(data.data);
                }else{
                    rej("error")
                }
            }).catch(error =>{});
        }

    });
}
export const connectToServerSideRender = async(url , data = {})=>{
    const result = await fetch(params.serverApiAddress_host+url);
    return await result.json();
}
export const connectToStatic = async(url , data = {})=>{
    const result = await fetch(params.serverApiAddress_host+url);
    return await result.json();
}

export const connectToServerWithToken = (type= "GET" , url , data = {},token)=>{
    return new Promise((res,rej)=>{
        if(type==="GET"){
            axios.request({
                headers: {
                    'Authorization': 'Bearer '+token,
                },
                method: type,
                url: params.serverApiAddress_host + url
            }).then(data=>{
                if(data){
                    res(data.data);
                }else{
                    console.log("data" , data);
                    rej("err");
                }
            });
        }else if(type==="POST"){
            const headers = {
                'Content-Type': 'text/plain',
                'Accept': 'application/json',
                'Authorization': `Bearer `+token,
            };
            axios.post(params.serverApiAddress_host + url, JSON.stringify(data), {headers}).then(data=>{
                if(data){
                    res(data.data);
                }else{
                    rej("error")
                }
            }).catch(error =>{});
        }
    });
}


