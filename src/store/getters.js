export default {
    // getters相当于仓库内部的计算属性
    switchUsers(state){
        return state.users.map(user =>({
            id:user.id,
            home:user.html_url,
            name:user.login,
            avatar:user.avatar_url
        }))
    }
}