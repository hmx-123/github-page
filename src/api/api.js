import github from "./github"
// 获取github用户    q是请求的关键字
export function getUsers(q){
    return github.get("/search/users",{
        params:{q}
    })
}