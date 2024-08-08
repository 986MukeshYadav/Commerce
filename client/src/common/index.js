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
    }
}



export default SummaryApi;