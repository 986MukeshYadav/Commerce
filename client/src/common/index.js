const serverDomain = "http://localhost:8080"



const SummaryApi = {
    SignUp:{
        url:`${serverDomain}/api/signup`,
        method :"post"
    },
    SignIn:{
        url:`${serverDomain}/api/signin`,
        method :"post"
    },
    current_user:{
        url:`${serverDomain}/api/user-details`,
        method :"get"
    },
   logout_user:{
    url:`${serverDomain}/api/userLogout`,
    method :"get"
   },
   allUser:{
    url:`${serverDomain}/api/all-user`,
    method:'get',
   
   },
   updateUser:{
    url:`${serverDomain}/api/update-user`,
    method:'post',
   },
   uploadProduct:{
    url:`${serverDomain}/api/upload-product`,
    method:'post',
   },
   allProduct : {
    url:`${serverDomain}/api/get-product`,
    method:'get',
   },
   updateProduct:{
    url:`${serverDomain}/api/update-product`,
    method:'post',
   }
}



export default SummaryApi;